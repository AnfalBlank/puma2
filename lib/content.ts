import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";
import { getDb } from "./db";
import { defaultContent } from "./defaults";
import { slugify } from "./slug";
import type { ContentDoc, Inbox, Submission } from "./types";

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), "data");
const LEGACY_CONTENT_FILE = path.join(DATA_DIR, "content.json");
const LEGACY_INBOX_FILE = path.join(DATA_DIR, "inbox.json");
const CONTENT_KEY = "content";

function deepMerge<T>(base: T, overlay: unknown): T {
  if (overlay === undefined || overlay === null) return base;
  if (Array.isArray(base)) return overlay as T; // arrays are replaced wholesale
  if (typeof base === "object" && typeof overlay === "object") {
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const key of Object.keys(overlay as Record<string, unknown>)) {
      const baseVal = (base as Record<string, unknown>)[key];
      const overVal = (overlay as Record<string, unknown>)[key];
      out[key] =
        baseVal !== undefined && typeof baseVal === "object" && baseVal !== null && typeof overVal === "object" && overVal !== null && !Array.isArray(baseVal)
          ? (deepMerge(baseVal as object, overVal) as unknown)
          : overVal;
    }
    return out as T;
  }
  return overlay as T;
}

function normalize(doc: ContentDoc): ContentDoc {
  // Backfill slugs and bodies for legacy articles.
  const used = new Set<string>();
  const articles = doc.articles.map((a) => {
    let slug = a.slug?.trim() ? slugify(a.slug) : slugify(a.title || a.id);
    if (!slug) slug = `article-${a.id}`;
    while (used.has(slug)) slug = `${slug}-${Math.random().toString(36).slice(2, 5)}`;
    used.add(slug);
    return { ...a, slug, body: a.body ?? "" };
  });
  return { ...doc, articles };
}

// ---------------------------------------------------------------------------
// One-time migration from the legacy JSON files into SQLite.
// ---------------------------------------------------------------------------
let migrated = false;
async function migrateLegacy() {
  if (migrated) return;
  migrated = true;
  const db = getDb();

  // Content
  const hasContent = db.prepare("SELECT 1 FROM kv WHERE key = ?").get(CONTENT_KEY);
  if (!hasContent) {
    try {
      const raw = await fs.readFile(LEGACY_CONTENT_FILE, "utf-8");
      const parsed = JSON.parse(raw);
      const merged = normalize(deepMerge(defaultContent, parsed));
      db.prepare("INSERT OR REPLACE INTO kv (key, value) VALUES (?, ?)").run(
        CONTENT_KEY,
        JSON.stringify(merged),
      );
    } catch {
      // no legacy content file — nothing to migrate
    }
  }

  // Inbox
  const inboxCount = db.prepare("SELECT COUNT(*) AS n FROM submissions").get() as { n: number };
  if (inboxCount.n === 0) {
    try {
      const raw = await fs.readFile(LEGACY_INBOX_FILE, "utf-8");
      const parsed = JSON.parse(raw) as Inbox;
      const insert = db.prepare(
        `INSERT OR IGNORE INTO submissions
         (id, created_at, page, name, email, phone, company, subject, message, read)
         VALUES (@id, @createdAt, @page, @name, @email, @phone, @company, @subject, @message, @read)`,
      );
      const tx = db.transaction((rows: Submission[]) => {
        for (const s of rows) {
          insert.run({
            id: s.id,
            createdAt: s.createdAt,
            page: s.page,
            name: s.name,
            email: s.email,
            phone: s.phone ?? null,
            company: s.company ?? null,
            subject: s.subject ?? null,
            message: s.message,
            read: s.read ? 1 : 0,
          });
        }
      });
      tx(parsed.submissions ?? []);
    } catch {
      // no legacy inbox file — nothing to migrate
    }
  }
}

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------
export async function loadContent(): Promise<ContentDoc> {
  await migrateLegacy();
  const db = getDb();
  const row = db.prepare("SELECT value FROM kv WHERE key = ?").get(CONTENT_KEY) as
    | { value: string }
    | undefined;
  if (!row) return normalize(defaultContent);
  try {
    const parsed = JSON.parse(row.value);
    return normalize(deepMerge(defaultContent, parsed));
  } catch {
    return normalize(defaultContent);
  }
}

export async function saveContent(content: ContentDoc): Promise<void> {
  await migrateLegacy();
  const db = getDb();
  const normalized = normalize(content);
  db.prepare("INSERT OR REPLACE INTO kv (key, value) VALUES (?, ?)").run(
    CONTENT_KEY,
    JSON.stringify(normalized),
  );
}

// ---------------------------------------------------------------------------
// Inbox
// ---------------------------------------------------------------------------
type SubmissionRow = {
  id: string;
  created_at: string;
  page: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  subject: string | null;
  message: string;
  read: number;
};

function rowToSubmission(r: SubmissionRow): Submission {
  return {
    id: r.id,
    createdAt: r.created_at,
    page: r.page,
    name: r.name,
    email: r.email,
    phone: r.phone ?? undefined,
    company: r.company ?? undefined,
    subject: r.subject ?? undefined,
    message: r.message,
    read: !!r.read,
  };
}

export async function loadInbox(): Promise<Inbox> {
  await migrateLegacy();
  const db = getDb();
  const rows = db
    .prepare("SELECT * FROM submissions ORDER BY created_at DESC LIMIT 1000")
    .all() as SubmissionRow[];
  return { submissions: rows.map(rowToSubmission) };
}

export async function appendSubmission(submission: Submission): Promise<void> {
  await migrateLegacy();
  const db = getDb();
  db.prepare(
    `INSERT INTO submissions
     (id, created_at, page, name, email, phone, company, subject, message, read)
     VALUES (@id, @createdAt, @page, @name, @email, @phone, @company, @subject, @message, @read)`,
  ).run({
    id: submission.id,
    createdAt: submission.createdAt,
    page: submission.page,
    name: submission.name,
    email: submission.email,
    phone: submission.phone ?? null,
    company: submission.company ?? null,
    subject: submission.subject ?? null,
    message: submission.message,
    read: submission.read ? 1 : 0,
  });
}

export async function markSubmissionRead(id: string, read: boolean): Promise<void> {
  const db = getDb();
  db.prepare("UPDATE submissions SET read = ? WHERE id = ?").run(read ? 1 : 0, id);
}

export async function deleteSubmission(id: string): Promise<void> {
  const db = getDb();
  db.prepare("DELETE FROM submissions WHERE id = ?").run(id);
}

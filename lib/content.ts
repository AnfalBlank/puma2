import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";
import { defaultContent } from "./defaults";
import { slugify } from "./slug";
import type { ContentDoc, Inbox, Submission } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const CONTENT_FILE = path.join(DATA_DIR, "content.json");
const INBOX_FILE = path.join(DATA_DIR, "inbox.json");

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

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

export async function loadContent(): Promise<ContentDoc> {
  try {
    const raw = await fs.readFile(CONTENT_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return normalize(deepMerge(defaultContent, parsed));
  } catch {
    return normalize(defaultContent);
  }
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

export async function saveContent(content: ContentDoc): Promise<void> {
  await ensureDir();
  const normalized = normalize(content);
  await fs.writeFile(CONTENT_FILE, JSON.stringify(normalized, null, 2), "utf-8");
}

export async function loadInbox(): Promise<Inbox> {
  try {
    const raw = await fs.readFile(INBOX_FILE, "utf-8");
    return JSON.parse(raw) as Inbox;
  } catch {
    return { submissions: [] };
  }
}

export async function saveInbox(inbox: Inbox): Promise<void> {
  await ensureDir();
  await fs.writeFile(INBOX_FILE, JSON.stringify(inbox, null, 2), "utf-8");
}

export async function appendSubmission(submission: Submission): Promise<void> {
  const inbox = await loadInbox();
  inbox.submissions.unshift(submission);
  // Cap at 500 entries to avoid unbounded growth.
  inbox.submissions = inbox.submissions.slice(0, 500);
  await saveInbox(inbox);
}

export async function markSubmissionRead(id: string, read: boolean): Promise<void> {
  const inbox = await loadInbox();
  const item = inbox.submissions.find((s) => s.id === id);
  if (item) {
    item.read = read;
    await saveInbox(inbox);
  }
}

export async function deleteSubmission(id: string): Promise<void> {
  const inbox = await loadInbox();
  inbox.submissions = inbox.submissions.filter((s) => s.id !== id);
  await saveInbox(inbox);
}

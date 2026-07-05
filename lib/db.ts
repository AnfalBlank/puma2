import "server-only";
import path from "node:path";
import fs from "node:fs";
import Database from "better-sqlite3";

// ---------------------------------------------------------------------------
// SQLite connection (singleton). Stored under /data so it persists across
// restarts. On serverless/ephemeral hosts mount a volume at /data.
// ---------------------------------------------------------------------------

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "puma.db");

declare global {
  // eslint-disable-next-line no-var
  var __pumaDb: Database.Database | undefined;
}

function init(): Database.Database {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const db = new Database(DB_FILE);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");

  db.exec(`
    CREATE TABLE IF NOT EXISTS kv (
      key   TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS submissions (
      id         TEXT PRIMARY KEY,
      created_at TEXT NOT NULL,
      page       TEXT NOT NULL,
      name       TEXT NOT NULL,
      email      TEXT NOT NULL,
      phone      TEXT,
      company    TEXT,
      subject    TEXT,
      message    TEXT NOT NULL,
      read       INTEGER NOT NULL DEFAULT 0
    );
    CREATE INDEX IF NOT EXISTS idx_submissions_created ON submissions(created_at DESC);

    CREATE TABLE IF NOT EXISTS page_views (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      path       TEXT NOT NULL,
      referrer   TEXT,
      visitor    TEXT,
      created_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_page_views_created ON page_views(created_at);
    CREATE INDEX IF NOT EXISTS idx_page_views_path ON page_views(path);

    CREATE TABLE IF NOT EXISTS login_attempts (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      ip         TEXT NOT NULL,
      success    INTEGER NOT NULL DEFAULT 0,
      created_at INTEGER NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_login_attempts_ip ON login_attempts(ip, created_at);
  `);

  return db;
}

export function getDb(): Database.Database {
  if (!global.__pumaDb) {
    global.__pumaDb = init();
  }
  return global.__pumaDb;
}

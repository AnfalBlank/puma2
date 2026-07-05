import "server-only";
import { getDb } from "./db";

// Sliding-window login rate limiter backed by SQLite.
// Defaults: max 5 failed attempts per IP within 15 minutes -> lockout.
const WINDOW_MS = 15 * 60 * 1000;
const MAX_FAILED = 5;

export type RateResult = {
  allowed: boolean;
  remaining: number;
  retryAfterSec: number;
};

function cleanup(nowMs: number) {
  const db = getDb();
  db.prepare("DELETE FROM login_attempts WHERE created_at < ?").run(nowMs - WINDOW_MS);
}

export function checkLoginRate(ip: string): RateResult {
  const db = getDb();
  const now = Date.now();
  cleanup(now);
  const row = db
    .prepare(
      "SELECT COUNT(*) AS n, MIN(created_at) AS first FROM login_attempts WHERE ip = ? AND success = 0 AND created_at >= ?",
    )
    .get(ip, now - WINDOW_MS) as { n: number; first: number | null };

  const failed = row.n ?? 0;
  if (failed >= MAX_FAILED) {
    const first = row.first ?? now;
    const retryAfterSec = Math.max(1, Math.ceil((first + WINDOW_MS - now) / 1000));
    return { allowed: false, remaining: 0, retryAfterSec };
  }
  return { allowed: true, remaining: MAX_FAILED - failed, retryAfterSec: 0 };
}

export function recordLoginAttempt(ip: string, success: boolean) {
  const db = getDb();
  db.prepare("INSERT INTO login_attempts (ip, success, created_at) VALUES (?, ?, ?)").run(
    ip,
    success ? 1 : 0,
    Date.now(),
  );
  if (success) {
    // Clear failed attempts on success.
    db.prepare("DELETE FROM login_attempts WHERE ip = ? AND success = 0").run(ip);
  }
}

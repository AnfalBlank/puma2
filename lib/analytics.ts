import "server-only";
import { getDb } from "./db";

export function recordView(opts: {
  path: string;
  referrer?: string | null;
  visitor?: string | null;
}) {
  const db = getDb();
  db.prepare(
    "INSERT INTO page_views (path, referrer, visitor, created_at) VALUES (?, ?, ?, ?)",
  ).run(
    opts.path.slice(0, 512),
    (opts.referrer ?? null)?.slice(0, 512) ?? null,
    (opts.visitor ?? null)?.slice(0, 128) ?? null,
    new Date().toISOString(),
  );
}

export type DashboardStats = {
  totals: {
    views: number;
    visitors: number;
    submissions: number;
    unread: number;
  };
  today: {
    views: number;
    visitors: number;
  };
  last7Days: { date: string; views: number; visitors: number }[];
  topPages: { path: string; views: number }[];
  topReferrers: { referrer: string; views: number }[];
  recentSubmissions: number; // last 7 days
};

function dayKey(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function getDashboardStats(): DashboardStats {
  const db = getDb();
  const now = new Date();
  const todayKey = dayKey(now);
  const sevenAgo = new Date(now.getTime() - 6 * 24 * 60 * 60 * 1000);
  const sevenAgoIso = new Date(sevenAgo.getFullYear(), sevenAgo.getMonth(), sevenAgo.getDate()).toISOString();

  const totalViews = (db.prepare("SELECT COUNT(*) AS n FROM page_views").get() as { n: number }).n;
  const totalVisitors = (
    db.prepare("SELECT COUNT(DISTINCT visitor) AS n FROM page_views WHERE visitor IS NOT NULL").get() as { n: number }
  ).n;
  const totalSubs = (db.prepare("SELECT COUNT(*) AS n FROM submissions").get() as { n: number }).n;
  const unread = (db.prepare("SELECT COUNT(*) AS n FROM submissions WHERE read = 0").get() as { n: number }).n;

  const todayViews = (
    db.prepare("SELECT COUNT(*) AS n FROM page_views WHERE substr(created_at,1,10) = ?").get(todayKey) as { n: number }
  ).n;
  const todayVisitors = (
    db
      .prepare("SELECT COUNT(DISTINCT visitor) AS n FROM page_views WHERE substr(created_at,1,10) = ? AND visitor IS NOT NULL")
      .get(todayKey) as { n: number }
  ).n;

  // Build last 7 day buckets.
  const rows = db
    .prepare(
      "SELECT substr(created_at,1,10) AS d, COUNT(*) AS views, COUNT(DISTINCT visitor) AS visitors FROM page_views WHERE created_at >= ? GROUP BY d",
    )
    .all(sevenAgoIso) as { d: string; views: number; visitors: number }[];
  const map = new Map(rows.map((r) => [r.d, r]));
  const last7Days: DashboardStats["last7Days"] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
    const key = dayKey(d);
    const r = map.get(key);
    last7Days.push({ date: key, views: r?.views ?? 0, visitors: r?.visitors ?? 0 });
  }

  const topPages = db
    .prepare("SELECT path, COUNT(*) AS views FROM page_views GROUP BY path ORDER BY views DESC LIMIT 8")
    .all() as { path: string; views: number }[];

  const topReferrers = db
    .prepare(
      "SELECT referrer, COUNT(*) AS views FROM page_views WHERE referrer IS NOT NULL AND referrer != '' GROUP BY referrer ORDER BY views DESC LIMIT 6",
    )
    .all() as { referrer: string; views: number }[];

  const recentSubmissions = (
    db.prepare("SELECT COUNT(*) AS n FROM submissions WHERE created_at >= ?").get(sevenAgoIso) as { n: number }
  ).n;

  return {
    totals: { views: totalViews, visitors: totalVisitors, submissions: totalSubs, unread },
    today: { views: todayViews, visitors: todayVisitors },
    last7Days,
    topPages,
    topReferrers,
    recentSubmissions,
  };
}

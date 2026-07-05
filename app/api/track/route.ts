import { NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { recordView } from "@/lib/analytics";
import { getClientIp } from "@/lib/ip";

export const runtime = "nodejs";

// Public, unauthenticated endpoint that records a page view.
// Visitor id is a daily-rotating salted hash of IP+UA (no raw PII stored).
export async function POST(req: Request) {
  let body: { path?: string; referrer?: string } = {};
  try {
    body = (await req.json()) as { path?: string; referrer?: string };
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const p = String(body.path ?? "").trim();
  if (!p || !p.startsWith("/") || p.startsWith("/admin")) {
    return NextResponse.json({ ok: true });
  }

  const ip = getClientIp(req);
  const ua = req.headers.get("user-agent") ?? "";
  const day = new Date().toISOString().slice(0, 10);
  const visitor = createHash("sha256").update(`${ip}|${ua}|${day}`).digest("hex").slice(0, 32);

  let referrer = (body.referrer ?? "").trim();
  try {
    if (referrer) {
      const host = new URL(referrer).hostname;
      // ignore self-referrals
      referrer = host;
    }
  } catch {
    referrer = "";
  }

  try {
    recordView({ path: p, referrer: referrer || null, visitor });
  } catch (err) {
    console.error("track failed", err);
  }
  return NextResponse.json({ ok: true });
}

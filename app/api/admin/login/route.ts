import { NextResponse } from "next/server";
import { getAdminPassword, setAuthCookie } from "@/lib/auth";
import { checkLoginRate, recordLoginAttempt } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/ip";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const ip = getClientIp(req);

  const rate = checkLoginRate(ip);
  if (!rate.allowed) {
    return NextResponse.json(
      {
        error: `Terlalu banyak percobaan. Coba lagi dalam ${Math.ceil(
          rate.retryAfterSec / 60,
        )} menit.`,
      },
      { status: 429, headers: { "Retry-After": String(rate.retryAfterSec) } },
    );
  }

  let body: Record<string, unknown> = {};
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const password = String(body.password ?? "");
  if (password !== getAdminPassword()) {
    recordLoginAttempt(ip, false);
    const after = checkLoginRate(ip);
    const suffix =
      after.remaining > 0 ? ` Sisa ${after.remaining} percobaan.` : "";
    return NextResponse.json({ error: `Password salah.${suffix}` }, { status: 401 });
  }

  recordLoginAttempt(ip, true);
  await setAuthCookie();
  return NextResponse.json({ ok: true });
}

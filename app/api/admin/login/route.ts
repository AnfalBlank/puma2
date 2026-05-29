import { NextResponse } from "next/server";
import { getAdminPassword, setAuthCookie } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const password = String(body.password ?? "");
  if (password !== getAdminPassword()) {
    return NextResponse.json({ error: "Password salah" }, { status: 401 });
  }
  await setAuthCookie();
  return NextResponse.json({ ok: true });
}

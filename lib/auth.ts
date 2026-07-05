import "server-only";
import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "puma_admin";
const ONE_DAY = 60 * 60 * 24;

function getSecret(): string {
  return (
    process.env.ADMIN_SECRET ||
    process.env.NEXTAUTH_SECRET ||
    "puma-default-secret-change-me-in-production"
  );
}

export function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || "puma-admin-2026";
}

function sign(payload: string): string {
  return createHmac("sha256", getSecret()).update(payload).digest("hex");
}

export function makeToken(): string {
  const expires = Date.now() + ONE_DAY * 1000 * 7; // 7 day session
  const payload = `${expires}`;
  const sig = sign(payload);
  return `${payload}.${sig}`;
}

export function verifyToken(token: string | undefined): boolean {
  if (!token) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;
  const expectedSig = sign(payload);
  try {
    const a = Buffer.from(sig, "hex");
    const b = Buffer.from(expectedSig, "hex");
    if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
  } catch {
    return false;
  }
  const expires = Number(payload);
  if (!Number.isFinite(expires) || Date.now() > expires) return false;
  return true;
}

export async function isAuthed(): Promise<boolean> {
  const store = await cookies();
  const c = store.get(COOKIE_NAME)?.value;
  return verifyToken(c);
}

export async function setAuthCookie(): Promise<void> {
  const store = await cookies();
  store.set(COOKIE_NAME, makeToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: ONE_DAY * 7,
  });
}

export async function clearAuthCookie(): Promise<void> {
  const store = await cookies();
  store.set(COOKIE_NAME, "", { httpOnly: true, path: "/", maxAge: 0 });
}

export const ADMIN_COOKIE_NAME = COOKIE_NAME;

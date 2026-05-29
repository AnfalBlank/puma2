import { NextResponse } from "next/server";
import { appendSubmission } from "@/lib/content";
import type { Submission } from "@/lib/types";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const company = String(body.company ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const page = String(body.page ?? "contact").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Nama, email, dan pesan wajib diisi." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Format email tidak valid." }, { status: 400 });
  }
  if (message.length > 5000 || name.length > 200) {
    return NextResponse.json({ error: "Input terlalu panjang." }, { status: 400 });
  }

  const submission: Submission = {
    id: `sub_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    page,
    name,
    email,
    phone: phone || undefined,
    company: company || undefined,
    subject: subject || undefined,
    message,
    read: false,
  };

  try {
    await appendSubmission(submission);
  } catch (err) {
    console.error("Failed to append submission", err);
    return NextResponse.json({ error: "Gagal menyimpan pesan." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, id: submission.id }, { status: 201 });
}

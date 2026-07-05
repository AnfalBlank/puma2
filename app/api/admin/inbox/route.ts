import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/auth";
import { loadInbox, deleteSubmission, markSubmissionRead } from "@/lib/content";

export const runtime = "nodejs";

export async function GET() {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const inbox = await loadInbox();
  return NextResponse.json(inbox);
}

export async function PATCH(req: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  let body: { id?: string; read?: boolean } = {};
  try {
    body = (await req.json()) as { id?: string; read?: boolean };
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (!body.id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  await markSubmissionRead(body.id, !!body.read);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  await deleteSubmission(id);
  return NextResponse.json({ ok: true });
}

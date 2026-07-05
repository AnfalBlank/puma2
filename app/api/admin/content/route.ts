import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAuthed } from "@/lib/auth";
import { loadContent, saveContent } from "@/lib/content";
import { defaultContent } from "@/lib/defaults";
import type { ContentDoc } from "@/lib/types";

export const runtime = "nodejs";

export async function GET() {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const content = await loadContent();
  return NextResponse.json({ content });
}

export async function PUT(req: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  let body: { content?: ContentDoc } = {};
  try {
    body = (await req.json()) as { content?: ContentDoc };
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (!body.content) {
    return NextResponse.json({ error: "Missing content" }, { status: 400 });
  }
  await saveContent(body.content);
  // Revalidate every page that consumes content.
  for (const path of ["/", "/about", "/products", "/insight", "/contact"]) {
    revalidatePath(path);
  }
  for (const a of body.content.articles ?? []) {
    if (a.slug) revalidatePath(`/insight/${a.slug}`);
  }
  revalidatePath("/sitemap.xml");
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  await saveContent(defaultContent);
  for (const path of ["/", "/about", "/products", "/insight", "/contact"]) {
    revalidatePath(path);
  }
  return NextResponse.json({ ok: true, content: defaultContent });
}

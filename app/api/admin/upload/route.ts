import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";
import { isAuthed } from "@/lib/auth";
import { slugify } from "@/lib/slug";

export const runtime = "nodejs";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");
const MAX_BYTES = 8 * 1024 * 1024; // 8 MB
const ALLOWED: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/avif": "avif",
  "image/svg+xml": "svg",
};

export async function GET() {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    await fs.mkdir(UPLOAD_DIR, { recursive: true });
    const names = await fs.readdir(UPLOAD_DIR);
    const files = await Promise.all(
      names
        .filter((n) => !n.startsWith("."))
        .map(async (n) => {
          const stat = await fs.stat(path.join(UPLOAD_DIR, n));
          return { url: `/uploads/${n}`, name: n, size: stat.size, mtime: stat.mtimeMs };
        }),
    );
    files.sort((a, b) => b.mtime - a.mtime);
    return NextResponse.json({ files });
  } catch {
    return NextResponse.json({ files: [] });
  }
}

export async function POST(req: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const form = await req.formData().catch(() => null);
  if (!form) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Tidak ada file." }, { status: 400 });
  }
  const ext = ALLOWED[file.type];
  if (!ext) {
    return NextResponse.json(
      { error: "Format tidak didukung (JPG, PNG, WebP, GIF, AVIF, SVG)." },
      { status: 400 },
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "Ukuran maksimal 8 MB." }, { status: 400 });
  }

  const buf = Buffer.from(await file.arrayBuffer());
  await fs.mkdir(UPLOAD_DIR, { recursive: true });

  const base = slugify(file.name.replace(/\.[^.]+$/, "")) || "image";
  const fname = `${base}-${Date.now().toString(36)}.${ext}`;
  await fs.writeFile(path.join(UPLOAD_DIR, fname), buf);

  return NextResponse.json({ url: `/uploads/${fname}`, name: fname }, { status: 201 });
}

export async function DELETE(req: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const url = new URL(req.url);
  const name = url.searchParams.get("name");
  if (!name || name.includes("/") || name.includes("..")) {
    return NextResponse.json({ error: "Nama file tidak valid." }, { status: 400 });
  }
  try {
    await fs.unlink(path.join(UPLOAD_DIR, name));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Gagal menghapus." }, { status: 500 });
  }
}

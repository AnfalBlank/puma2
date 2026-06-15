"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Upload, ImageIcon, X, Trash2, Check, Loader2 } from "lucide-react";

type MediaFile = { url: string; name: string; size: number; mtime: number };

export function ImagePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  async function loadFiles() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/upload");
      if (res.ok) {
        const data = (await res.json()) as { files: MediaFile[] };
        setFiles(data.files);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (open) loadFiles();
  }, [open]);

  async function upload(file: File) {
    setUploading(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload gagal");
      onChange(data.url);
      await loadFiles();
      setOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload gagal");
    } finally {
      setUploading(false);
    }
  }

  async function removeFile(name: string) {
    if (!confirm("Hapus file ini dari server?")) return;
    await fetch(`/api/admin/upload?name=${encodeURIComponent(name)}`, { method: "DELETE" });
    await loadFiles();
  }

  return (
    <div className="space-y-2">
      <div className="flex items-stretch gap-2">
        <input
          type="text"
          value={value}
          placeholder="/uploads/gambar.jpg"
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 bg-zinc-950 border border-white/10 focus:border-brand focus:outline-none text-white px-3 py-2.5 rounded-none placeholder:text-zinc-600 text-sm"
        />
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className="inline-flex items-center gap-2 px-3 py-2.5 border border-white/10 hover:border-brand/50 hover:text-brand text-zinc-300 text-[11px] font-bold uppercase tracking-widest transition-colors disabled:opacity-50"
          title="Upload gambar"
        >
          {uploading ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
        </button>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 px-3 py-2.5 border border-white/10 hover:border-brand/50 hover:text-brand text-zinc-300 text-[11px] font-bold uppercase tracking-widest transition-colors"
          title="Pilih dari galeri"
        >
          <ImageIcon size={14} />
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) upload(f);
            e.target.value = "";
          }}
        />
      </div>

      {value && (
        <div className="relative w-full max-w-[220px] aspect-video border border-white/10 bg-zinc-950 overflow-hidden">
          <Image src={value} alt="preview" fill className="object-cover" sizes="220px" unoptimized />
        </div>
      )}
      {error && <p className="text-[11px] text-red-400 font-mono">{error}</p>}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-white/10 w-full max-w-4xl max-h-[80vh] flex flex-col">
            <header className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <h3 className="text-sm font-black uppercase tracking-widest">Media Library</h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-brand hover:bg-[var(--brand-dark)] text-white text-[11px] font-bold uppercase tracking-widest transition-colors"
                >
                  <Upload size={14} />
                  Upload
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="p-2 border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>
            </header>
            <div className="p-5 overflow-y-auto">
              {loading ? (
                <div className="flex items-center justify-center py-16 text-zinc-500">
                  <Loader2 className="animate-spin" />
                </div>
              ) : files.length === 0 ? (
                <div className="text-zinc-500 text-sm font-mono uppercase tracking-widest text-center py-16 border border-dashed border-white/10">
                  Belum ada gambar · klik Upload
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {files.map((f) => {
                    const selected = f.url === value;
                    return (
                      <div
                        key={f.name}
                        className={`group relative aspect-square border bg-zinc-950 overflow-hidden cursor-pointer ${
                          selected ? "border-brand" : "border-white/10 hover:border-white/30"
                        }`}
                        onClick={() => {
                          onChange(f.url);
                          setOpen(false);
                        }}
                      >
                        <Image src={f.url} alt={f.name} fill className="object-cover" sizes="200px" unoptimized />
                        {selected && (
                          <span className="absolute top-1.5 right-1.5 bg-brand text-white p-1 rounded-full">
                            <Check size={12} />
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile(f.name);
                          }}
                          className="absolute bottom-1.5 right-1.5 p-1.5 bg-black/70 text-zinc-300 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                          title="Hapus"
                        >
                          <Trash2 size={12} />
                        </button>
                        <span className="absolute bottom-0 left-0 right-0 bg-black/70 text-[9px] font-mono text-zinc-400 px-1.5 py-1 truncate">
                          {f.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

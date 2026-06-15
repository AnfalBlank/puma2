"use client";

import { useEffect, useMemo, useState } from "react";
import {
  LogOut,
  Save,
  RotateCcw,
  ExternalLink,
  Trash2,
  Plus,
  Mail,
  Inbox as InboxIcon,
  Settings,
  Boxes,
  Newspaper,
  HelpCircle,
  Sparkles,
  CircleCheck,
  CircleAlert,
  Eye,
  EyeOff,
  ArrowDown,
  ArrowUp,
  LayoutDashboard,
} from "lucide-react";
import Image from "next/image";
import { LOGO } from "@/lib/media";
import { ImagePicker } from "@/components/admin/ImagePicker";
import { DashboardView } from "@/components/admin/DashboardView";
import type { DashboardStats } from "@/lib/analytics";
import type {
  Article,
  ContentDoc,
  FAQGroups,
  FAQItem,
  HeroCopies,
  Inbox,
  Product,
  SiteOverride,
} from "@/lib/types";

type Tab = "dashboard" | "site" | "hero" | "products" | "articles" | "faqs" | "inbox";

const TABS: { key: Tab; label: string; icon: typeof Settings }[] = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "site", label: "Site", icon: Settings },
  { key: "hero", label: "Hero Copy", icon: Sparkles },
  { key: "products", label: "Produk", icon: Boxes },
  { key: "articles", label: "Insight", icon: Newspaper },
  { key: "faqs", label: "FAQ", icon: HelpCircle },
  { key: "inbox", label: "Inbox", icon: InboxIcon },
];

export default function AdminDashboard({
  initialContent,
  initialInbox,
  initialStats,
}: {
  initialContent: ContentDoc;
  initialInbox: Inbox;
  initialStats: DashboardStats;
}) {
  const [tab, setTab] = useState<Tab>("dashboard");
  const [draft, setDraft] = useState<ContentDoc>(initialContent);
  const [saved, setSaved] = useState<ContentDoc>(initialContent);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ type: "ok" | "err"; msg: string } | null>(null);
  const [inbox, setInbox] = useState<Inbox>(initialInbox);

  const dirty = useMemo(
    () => JSON.stringify(draft) !== JSON.stringify(saved),
    [draft, saved],
  );

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(id);
  }, [toast]);

  // Warn before unloading with unsaved changes
  useEffect(() => {
    function handler(e: BeforeUnloadEvent) {
      if (dirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    }
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [dirty]);

  async function save() {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: draft }),
      });
      if (!res.ok) throw new Error("Gagal menyimpan");
      setSaved(draft);
      setToast({ type: "ok", msg: "Tersimpan & landing page diperbarui." });
    } catch (err) {
      setToast({
        type: "err",
        msg: err instanceof Error ? err.message : "Gagal menyimpan",
      });
    } finally {
      setSaving(false);
    }
  }

  async function resetDefaults() {
    if (!confirm("Reset semua ke default? Data inbox tidak akan terhapus.")) return;
    const res = await fetch("/api/admin/content", { method: "DELETE" });
    if (res.ok) {
      const data = (await res.json()) as { content: ContentDoc };
      setDraft(data.content);
      setSaved(data.content);
      setToast({ type: "ok", msg: "Konten direset ke default." });
    } else {
      setToast({ type: "err", msg: "Gagal reset." });
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  async function refreshInbox() {
    const res = await fetch("/api/admin/inbox");
    if (res.ok) setInbox(await res.json());
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <Image src={LOGO} alt="PUMA" width={676} height={240} className="h-7 w-auto" />
            <div className="hidden sm:block leading-tight min-w-0">
              <p className="text-sm font-black uppercase tracking-tight truncate">
                PUMA <span className="text-brand">Admin</span>
              </p>
              <p className="text-[9px] font-mono uppercase tracking-[0.25em] text-zinc-500">
                Landing Page Console
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`hidden md:inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 border ${
                dirty
                  ? "text-amber-400 border-amber-500/40 bg-amber-500/10"
                  : "text-emerald-400 border-emerald-500/40 bg-emerald-500/10"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  dirty ? "bg-amber-400 animate-pulse" : "bg-emerald-400"
                }`}
              />
              {dirty ? "Unsaved" : "Synced"}
            </span>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 border border-white/10 hover:border-brand/50 hover:text-brand text-zinc-300 text-[11px] font-bold uppercase tracking-widest transition-colors"
            >
              <ExternalLink size={14} />
              Lihat Site
            </a>
            <button
              type="button"
              onClick={resetDefaults}
              className="inline-flex items-center gap-2 px-3 py-2 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors"
              title="Reset ke default"
            >
              <RotateCcw size={14} />
              <span className="hidden sm:inline">Reset</span>
            </button>
            <button
              type="button"
              onClick={save}
              disabled={!dirty || saving}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand hover:bg-[var(--brand-dark)] disabled:opacity-50 disabled:cursor-not-allowed text-white text-[11px] font-bold uppercase tracking-widest transition-colors"
            >
              <Save size={14} />
              {saving ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center gap-2 px-3 py-2 border border-white/10 hover:border-red-500/40 hover:text-red-400 text-zinc-400 text-[11px] font-bold uppercase tracking-widest transition-colors"
              title="Logout"
            >
              <LogOut size={14} />
            </button>
          </div>
        </div>
        {/* Tabs */}
        <nav className="max-w-[1400px] mx-auto px-3 md:px-6 flex items-center gap-1 overflow-x-auto">
          {TABS.map((t) => {
            const active = tab === t.key;
            const Icon = t.icon;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-3 text-[11px] font-black uppercase tracking-widest border-b-2 transition-colors ${
                  active
                    ? "border-brand text-white"
                    : "border-transparent text-zinc-500 hover:text-white"
                }`}
              >
                <Icon size={14} />
                {t.label}
                {t.key === "inbox" && inbox.submissions.some((s) => !s.read) && (
                  <span className="bg-brand text-white text-[9px] font-mono px-1.5 py-0.5 rounded-full">
                    {inbox.submissions.filter((s) => !s.read).length}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 py-8">
        {tab === "dashboard" && <DashboardView initial={initialStats} />}
        {tab === "site" && <SiteEditor value={draft.site} onChange={(v) => setDraft({ ...draft, site: v })} />}
        {tab === "hero" && <HeroEditor value={draft.hero} onChange={(v) => setDraft({ ...draft, hero: v })} />}
        {tab === "products" && (
          <ProductsEditor
            value={draft.products}
            onChange={(v) => setDraft({ ...draft, products: v })}
          />
        )}
        {tab === "articles" && (
          <ArticlesEditor
            value={draft.articles}
            onChange={(v) => setDraft({ ...draft, articles: v })}
          />
        )}
        {tab === "faqs" && (
          <FaqsEditor value={draft.faqs} onChange={(v) => setDraft({ ...draft, faqs: v })} />
        )}
        {tab === "inbox" && (
          <InboxView inbox={inbox} setInbox={setInbox} refresh={refreshInbox} />
        )}
      </main>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50">
          <div
            className={`flex items-center gap-3 px-5 py-4 border shadow-2xl ${
              toast.type === "ok"
                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                : "border-red-500/40 bg-red-500/10 text-red-300"
            }`}
          >
            {toast.type === "ok" ? (
              <CircleCheck size={18} />
            ) : (
              <CircleAlert size={18} />
            )}
            <span className="text-xs font-mono uppercase tracking-widest">{toast.msg}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ---------- shared input components ----------

function FieldRow({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1.5">
        {label}
      </span>
      {children}
      {hint && (
        <span className="block mt-1.5 text-[10px] text-zinc-600 font-mono">{hint}</span>
      )}
    </label>
  );
}

function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-zinc-950 border border-white/10 focus:border-brand focus:outline-none text-white px-3 py-2.5 rounded-none placeholder:text-zinc-600 text-sm"
    />
  );
}

function TextArea({
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      rows={rows}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-zinc-950 border border-white/10 focus:border-brand focus:outline-none text-white px-3 py-2.5 rounded-none placeholder:text-zinc-600 text-sm font-sans resize-vertical"
    />
  );
}

function Card({
  title,
  description,
  children,
  toolbar,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  toolbar?: React.ReactNode;
}) {
  return (
    <section className="industrial-border bg-zinc-900/60 mb-6 last:mb-0">
      <header className="flex items-start justify-between gap-4 px-6 py-5 border-b border-white/5">
        <div>
          <h2 className="text-base md:text-lg font-black uppercase tracking-tight">{title}</h2>
          {description && (
            <p className="text-zinc-500 text-xs mt-1 max-w-2xl leading-relaxed">{description}</p>
          )}
        </div>
        {toolbar}
      </header>
      <div className="px-6 py-6">{children}</div>
    </section>
  );
}

// ---------- Site editor ----------

function SiteEditor({
  value,
  onChange,
}: {
  value: SiteOverride;
  onChange: (v: SiteOverride) => void;
}) {
  function set<K extends keyof SiteOverride>(key: K, v: SiteOverride[K]) {
    onChange({ ...value, [key]: v });
  }
  return (
    <Card
      title="Informasi Kontak Site"
      description="Diterapkan di Navbar, Footer, halaman Kontak, JSON-LD, dan WhatsApp launcher."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FieldRow label="Telepon (Display)">
          <TextInput
            value={value.phoneDisplay ?? ""}
            onChange={(v) => set("phoneDisplay", v)}
            placeholder="(0264) 8330330"
          />
        </FieldRow>
        <FieldRow label="Telepon (tel: href)" hint="Format E.164 tanpa simbol — contoh: tel:+622648330330">
          <TextInput
            value={value.phoneHref ?? ""}
            onChange={(v) => set("phoneHref", v)}
            placeholder="tel:+622648330330"
          />
        </FieldRow>
        <FieldRow label="Email">
          <TextInput
            value={value.email ?? ""}
            onChange={(v) => set("email", v)}
            placeholder="marketing@primausahamitraabadi.com"
            type="email"
          />
        </FieldRow>
        <FieldRow label="WhatsApp (Display)">
          <TextInput
            value={value.whatsappDisplay ?? ""}
            onChange={(v) => set("whatsappDisplay", v)}
            placeholder="+62 857-5463-7579"
          />
        </FieldRow>
        <FieldRow label="WhatsApp (digits)" hint="Hanya angka. Contoh: 6285754637579">
          <TextInput
            value={value.whatsappDigits ?? ""}
            onChange={(v) => set("whatsappDigits", v)}
            placeholder="6285754637579"
          />
        </FieldRow>
        <FieldRow label="Alamat lengkap" hint="Ditampilkan di footer dan halaman kontak">
          <TextArea
            value={value.address ?? ""}
            onChange={(v) => set("address", v)}
            rows={2}
          />
        </FieldRow>
      </div>
    </Card>
  );
}

// ---------- Hero editor ----------

function HeroEditor({
  value,
  onChange,
}: {
  value: HeroCopies;
  onChange: (v: HeroCopies) => void;
}) {
  const pages: { key: keyof HeroCopies; label: string; description: string }[] = [
    { key: "home", label: "Beranda", description: "Hero utama landing page." },
    { key: "about", label: "Tentang", description: "Header halaman /about." },
    { key: "products", label: "Produk", description: "Header halaman /products." },
    { key: "insight", label: "Insight", description: "Header halaman /insight." },
    { key: "contact", label: "Kontak", description: "Header halaman /contact." },
  ];
  return (
    <>
      {pages.map((p) => {
        const v = value[p.key];
        return (
          <Card key={p.key} title={`Hero · ${p.label}`} description={p.description}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <FieldRow label="Eyebrow (opsional)" hint="Teks kecil di atas headline">
                <TextInput
                  value={v.eyebrow ?? ""}
                  onChange={(t) =>
                    onChange({ ...value, [p.key]: { ...v, eyebrow: t || undefined } })
                  }
                />
              </FieldRow>
              <FieldRow label="Title">
                <TextInput
                  value={v.title}
                  onChange={(t) => onChange({ ...value, [p.key]: { ...v, title: t } })}
                />
              </FieldRow>
              <FieldRow label="Highlight (orange)">
                <TextInput
                  value={v.highlight ?? ""}
                  onChange={(t) =>
                    onChange({ ...value, [p.key]: { ...v, highlight: t || undefined } })
                  }
                />
              </FieldRow>
              <FieldRow label="Intro paragraf">
                <TextArea
                  value={v.intro}
                  onChange={(t) => onChange({ ...value, [p.key]: { ...v, intro: t } })}
                  rows={3}
                />
              </FieldRow>
            </div>
          </Card>
        );
      })}
    </>
  );
}

// ---------- Products editor ----------

const ICON_OPTIONS: Product["iconKey"][] = [
  "Truck",
  "Layers",
  "Container",
  "FlaskConical",
  "HardHat",
  "Box",
  "Fuel",
];

function ProductsEditor({
  value,
  onChange,
}: {
  value: Product[];
  onChange: (v: Product[]) => void;
}) {
  function update(idx: number, p: Product) {
    const next = [...value];
    next[idx] = p;
    onChange(next);
  }
  function remove(idx: number) {
    if (!confirm("Hapus produk ini?")) return;
    onChange(value.filter((_, i) => i !== idx));
  }
  function move(idx: number, dir: -1 | 1) {
    const j = idx + dir;
    if (j < 0 || j >= value.length) return;
    const next = [...value];
    [next[idx], next[j]] = [next[j], next[idx]];
    onChange(next);
  }
  function add() {
    const newItem: Product = {
      id: String(value.length + 1).padStart(2, "0"),
      title: "Produk Baru",
      subTitle: "Sub-title",
      tag: "Tag",
      description: "Deskripsi produk...",
      iconKey: "Truck",
      spec: "Spec highlight",
      image: value[0]?.image ?? "/PHOTO-2026-04-14-17-39-46.jpg",
      features: ["Feature 1", "Feature 2"],
    };
    onChange([...value, newItem]);
  }

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <p className="text-zinc-400 text-sm">
          {value.length} produk terdaftar. Diurutkan sesuai posisi di landing page.
        </p>
        <button
          type="button"
          onClick={add}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand hover:bg-[var(--brand-dark)] text-white text-[11px] font-bold uppercase tracking-widest transition-colors"
        >
          <Plus size={14} />
          Tambah Produk
        </button>
      </div>
      {value.map((p, idx) => (
        <Card
          key={`${p.id}-${idx}`}
          title={`/${p.id} · ${p.title}`}
          description={p.tag}
          toolbar={
            <div className="flex items-center gap-1">
              <button
                type="button"
                title="Pindah ke atas"
                onClick={() => move(idx, -1)}
                disabled={idx === 0}
                className="p-2 border border-white/10 hover:border-white/30 disabled:opacity-30 text-zinc-400 hover:text-white"
              >
                <ArrowUp size={14} />
              </button>
              <button
                type="button"
                title="Pindah ke bawah"
                onClick={() => move(idx, 1)}
                disabled={idx === value.length - 1}
                className="p-2 border border-white/10 hover:border-white/30 disabled:opacity-30 text-zinc-400 hover:text-white"
              >
                <ArrowDown size={14} />
              </button>
              <button
                type="button"
                onClick={() => remove(idx)}
                className="p-2 border border-white/10 hover:border-red-500/40 hover:text-red-400 text-zinc-400"
                title="Hapus"
              >
                <Trash2 size={14} />
              </button>
            </div>
          }
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <FieldRow label="ID (urutan)">
              <TextInput value={p.id} onChange={(v) => update(idx, { ...p, id: v })} />
            </FieldRow>
            <FieldRow label="Icon">
              <select
                value={p.iconKey}
                onChange={(e) =>
                  update(idx, { ...p, iconKey: e.target.value as Product["iconKey"] })
                }
                className="w-full bg-zinc-950 border border-white/10 focus:border-brand focus:outline-none text-white px-3 py-2.5 rounded-none text-sm"
              >
                {ICON_OPTIONS.map((k) => (
                  <option key={k} value={k}>
                    {k}
                  </option>
                ))}
              </select>
            </FieldRow>
            <FieldRow label="Title">
              <TextInput value={p.title} onChange={(v) => update(idx, { ...p, title: v })} />
            </FieldRow>
            <FieldRow label="Sub-title">
              <TextInput value={p.subTitle} onChange={(v) => update(idx, { ...p, subTitle: v })} />
            </FieldRow>
            <FieldRow label="Tag (chip kecil)">
              <TextInput value={p.tag} onChange={(v) => update(idx, { ...p, tag: v })} />
            </FieldRow>
            <FieldRow label="Spec highlight">
              <TextInput value={p.spec} onChange={(v) => update(idx, { ...p, spec: v })} />
            </FieldRow>
            <FieldRow
              label="Gambar produk"
              hint="Upload baru atau pilih dari galeri. Bisa juga isi path manual."
            >
              <ImagePicker value={p.image} onChange={(v) => update(idx, { ...p, image: v })} />
            </FieldRow>
            <FieldRow label="Deskripsi">
              <TextArea
                value={p.description}
                onChange={(v) => update(idx, { ...p, description: v })}
                rows={3}
              />
            </FieldRow>
            <FieldRow label="Features (satu per baris)" hint="Maks 6 baris">
              <TextArea
                value={p.features.join("\n")}
                onChange={(v) =>
                  update(idx, {
                    ...p,
                    features: v
                      .split("\n")
                      .map((s) => s.trim())
                      .filter(Boolean)
                      .slice(0, 6),
                  })
                }
                rows={4}
              />
            </FieldRow>
          </div>
        </Card>
      ))}
    </>
  );
}

// ---------- Articles editor ----------

function ArticlesEditor({
  value,
  onChange,
}: {
  value: Article[];
  onChange: (v: Article[]) => void;
}) {
  function update(idx: number, a: Article) {
    const next = [...value];
    next[idx] = a;
    onChange(next);
  }
  function remove(idx: number) {
    if (!confirm("Hapus artikel ini?")) return;
    onChange(value.filter((_, i) => i !== idx));
  }
  function move(idx: number, dir: -1 | 1) {
    const j = idx + dir;
    if (j < 0 || j >= value.length) return;
    const next = [...value];
    [next[idx], next[j]] = [next[j], next[idx]];
    onChange(next);
  }
  function add() {
    const a: Article = {
      id: `${Date.now()}`,
      slug: "",
      title: "Judul artikel baru",
      category: "Engineering",
      excerpt: "Ringkasan singkat artikel...",
      author: "Tim PUMA",
      date: new Date().toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      image: value[0]?.image ?? "/PHOTO-2026-04-14-17-39-46.jpg",
      body: "",
    };
    onChange([a, ...value]);
  }

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <p className="text-zinc-400 text-sm">
          {value.length} artikel · ditampilkan di section Insight beranda dan halaman /insight.
        </p>
        <button
          type="button"
          onClick={add}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand hover:bg-[var(--brand-dark)] text-white text-[11px] font-bold uppercase tracking-widest transition-colors"
        >
          <Plus size={14} />
          Tambah Artikel
        </button>
      </div>
      {value.map((a, idx) => (
        <Card
          key={`${a.id}-${idx}`}
          title={a.title || "Untitled"}
          description={`${a.category} · ${a.date}`}
          toolbar={
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => move(idx, -1)}
                disabled={idx === 0}
                className="p-2 border border-white/10 hover:border-white/30 disabled:opacity-30 text-zinc-400 hover:text-white"
              >
                <ArrowUp size={14} />
              </button>
              <button
                type="button"
                onClick={() => move(idx, 1)}
                disabled={idx === value.length - 1}
                className="p-2 border border-white/10 hover:border-white/30 disabled:opacity-30 text-zinc-400 hover:text-white"
              >
                <ArrowDown size={14} />
              </button>
              <button
                type="button"
                onClick={() => remove(idx)}
                className="p-2 border border-white/10 hover:border-red-500/40 hover:text-red-400 text-zinc-400"
                title="Hapus"
              >
                <Trash2 size={14} />
              </button>
            </div>
          }
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <FieldRow label="Title">
              <TextInput value={a.title} onChange={(v) => update(idx, { ...a, title: v })} />
            </FieldRow>
            <FieldRow
              label="Slug URL"
              hint="Format URL — kosongkan untuk otomatis dari title saat disimpan"
            >
              <TextInput
                value={a.slug ?? ""}
                onChange={(v) => update(idx, { ...a, slug: v })}
                placeholder="contoh: tren-karoseri-2024"
              />
            </FieldRow>
            <FieldRow label="Category">
              <TextInput value={a.category} onChange={(v) => update(idx, { ...a, category: v })} />
            </FieldRow>
            <FieldRow label="Author">
              <TextInput value={a.author} onChange={(v) => update(idx, { ...a, author: v })} />
            </FieldRow>
            <FieldRow label="Tanggal">
              <TextInput value={a.date} onChange={(v) => update(idx, { ...a, date: v })} />
            </FieldRow>
            <FieldRow
              label="Gambar artikel"
              hint="Upload baru atau pilih dari galeri. Bisa juga isi path manual."
            >
              <ImagePicker value={a.image} onChange={(v) => update(idx, { ...a, image: v })} />
            </FieldRow>
            <FieldRow label="Excerpt">
              <TextArea
                value={a.excerpt}
                onChange={(v) => update(idx, { ...a, excerpt: v })}
                rows={3}
              />
            </FieldRow>
            <div className="lg:col-span-2">
              <FieldRow
                label="Isi Artikel (Markdown ringan)"
                hint='Pakai "## " untuk subjudul, "### " untuk sub-subjudul, dan "- " untuk bullet list. Paragraf dipisah baris kosong.'
              >
                <TextArea
                  value={a.body ?? ""}
                  onChange={(v) => update(idx, { ...a, body: v })}
                  rows={14}
                />
              </FieldRow>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}

// ---------- FAQs editor ----------

function FaqsEditor({
  value,
  onChange,
}: {
  value: FAQGroups;
  onChange: (v: FAQGroups) => void;
}) {
  const groups: { key: keyof FAQGroups; label: string; description: string }[] = [
    { key: "home", label: "Beranda", description: "FAQ di section bawah landing page." },
    { key: "about", label: "Tentang", description: "FAQ di halaman /about." },
    { key: "products", label: "Produk", description: "FAQ di halaman /products." },
    { key: "insight", label: "Insight", description: "FAQ di halaman /insight." },
    { key: "contact", label: "Kontak", description: "FAQ di halaman /contact." },
  ];

  function setGroup(key: keyof FAQGroups, items: FAQItem[]) {
    onChange({ ...value, [key]: items });
  }

  return (
    <>
      {groups.map((g) => (
        <Card
          key={g.key}
          title={`FAQ · ${g.label}`}
          description={g.description}
          toolbar={
            <button
              type="button"
              onClick={() => setGroup(g.key, [...value[g.key], { q: "Pertanyaan baru", a: "Jawaban..." }])}
              className="inline-flex items-center gap-2 px-3 py-2 bg-brand hover:bg-[var(--brand-dark)] text-white text-[11px] font-bold uppercase tracking-widest transition-colors"
            >
              <Plus size={14} />
              Tambah Item
            </button>
          }
        >
          <ol className="space-y-4">
            {value[g.key].map((item, idx) => (
              <li key={idx} className="bg-zinc-950 border border-white/10 p-4 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    Item {idx + 1}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => {
                        if (idx === 0) return;
                        const next = [...value[g.key]];
                        [next[idx - 1], next[idx]] = [next[idx], next[idx - 1]];
                        setGroup(g.key, next);
                      }}
                      disabled={idx === 0}
                      className="p-1.5 border border-white/10 hover:border-white/30 disabled:opacity-30 text-zinc-400"
                    >
                      <ArrowUp size={12} />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const arr = value[g.key];
                        if (idx === arr.length - 1) return;
                        const next = [...arr];
                        [next[idx], next[idx + 1]] = [next[idx + 1], next[idx]];
                        setGroup(g.key, next);
                      }}
                      disabled={idx === value[g.key].length - 1}
                      className="p-1.5 border border-white/10 hover:border-white/30 disabled:opacity-30 text-zinc-400"
                    >
                      <ArrowDown size={12} />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setGroup(
                          g.key,
                          value[g.key].filter((_, i) => i !== idx),
                        )
                      }
                      className="p-1.5 border border-white/10 hover:border-red-500/40 text-zinc-400 hover:text-red-400"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
                <FieldRow label="Pertanyaan">
                  <TextInput
                    value={item.q}
                    onChange={(v) => {
                      const next = [...value[g.key]];
                      next[idx] = { ...item, q: v };
                      setGroup(g.key, next);
                    }}
                  />
                </FieldRow>
                <FieldRow label="Jawaban">
                  <TextArea
                    value={item.a}
                    onChange={(v) => {
                      const next = [...value[g.key]];
                      next[idx] = { ...item, a: v };
                      setGroup(g.key, next);
                    }}
                    rows={3}
                  />
                </FieldRow>
              </li>
            ))}
            {value[g.key].length === 0 && (
              <li className="text-zinc-500 text-sm font-mono uppercase tracking-widest text-center py-6 border border-dashed border-white/10">
                Belum ada item · klik "Tambah Item"
              </li>
            )}
          </ol>
        </Card>
      ))}
    </>
  );
}

// ---------- Inbox view ----------

function InboxView({
  inbox,
  setInbox,
  refresh,
}: {
  inbox: Inbox;
  setInbox: (i: Inbox) => void;
  refresh: () => void;
}) {
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const list = inbox.submissions.filter((s) => (filter === "unread" ? !s.read : true));

  async function toggleRead(id: string, read: boolean) {
    await fetch("/api/admin/inbox", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, read }),
    });
    setInbox({
      submissions: inbox.submissions.map((s) => (s.id === id ? { ...s, read } : s)),
    });
  }

  async function remove(id: string) {
    if (!confirm("Hapus pesan ini?")) return;
    await fetch(`/api/admin/inbox?id=${encodeURIComponent(id)}`, { method: "DELETE" });
    setInbox({ submissions: inbox.submissions.filter((s) => s.id !== id) });
  }

  return (
    <Card
      title={`Inbox · ${inbox.submissions.length} pesan`}
      description="Pesan masuk dari form kontak landing page."
      toolbar={
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-3 py-2 text-[11px] font-bold uppercase tracking-widest border transition-colors ${
              filter === "all"
                ? "border-brand text-white bg-brand/10"
                : "border-white/10 text-zinc-400 hover:text-white"
            }`}
          >
            Semua
          </button>
          <button
            type="button"
            onClick={() => setFilter("unread")}
            className={`px-3 py-2 text-[11px] font-bold uppercase tracking-widest border transition-colors ${
              filter === "unread"
                ? "border-brand text-white bg-brand/10"
                : "border-white/10 text-zinc-400 hover:text-white"
            }`}
          >
            Belum Dibaca
          </button>
          <button
            type="button"
            onClick={refresh}
            className="px-3 py-2 text-[11px] font-bold uppercase tracking-widest border border-white/10 text-zinc-400 hover:text-white transition-colors"
          >
            Refresh
          </button>
        </div>
      }
    >
      {list.length === 0 ? (
        <div className="text-zinc-500 text-sm font-mono uppercase tracking-widest text-center py-12 border border-dashed border-white/10">
          Tidak ada pesan
        </div>
      ) : (
        <ul className="space-y-3">
          {list.map((s) => (
            <li
              key={s.id}
              className={`border p-4 md:p-5 transition-colors ${
                s.read
                  ? "border-white/5 bg-zinc-950"
                  : "border-brand/40 bg-brand/5"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {!s.read && (
                      <span className="text-[9px] font-mono uppercase tracking-widest bg-brand text-white px-2 py-0.5">
                        New
                      </span>
                    )}
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                      {new Date(s.createdAt).toLocaleString("id-ID")}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">
                      · {s.page}
                    </span>
                  </div>
                  <h3 className="text-white font-black text-base md:text-lg">{s.name}</h3>
                  <div className="text-zinc-400 text-xs mt-1 break-words">
                    <a className="hover:text-brand" href={`mailto:${s.email}`}>
                      {s.email}
                    </a>
                    {s.phone && <> · {s.phone}</>}
                    {s.company && <> · {s.company}</>}
                  </div>
                  {s.subject && (
                    <p className="text-zinc-300 font-mono text-xs mt-2 uppercase tracking-widest">
                      Re: {s.subject}
                    </p>
                  )}
                  <p className="text-zinc-300 text-sm mt-3 leading-relaxed whitespace-pre-wrap">
                    {s.message}
                  </p>
                </div>
                <div className="flex flex-col gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => toggleRead(s.id, !s.read)}
                    className="p-2 border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white"
                    title={s.read ? "Tandai belum dibaca" : "Tandai dibaca"}
                  >
                    {s.read ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                  <a
                    href={`mailto:${s.email}?subject=${encodeURIComponent(`Re: ${s.subject || "Pesan PUMA"}`)}`}
                    className="p-2 border border-white/10 hover:border-brand/50 text-zinc-400 hover:text-brand"
                    title="Balas via email"
                  >
                    <Mail size={14} />
                  </a>
                  <button
                    type="button"
                    onClick={() => remove(s.id)}
                    className="p-2 border border-white/10 hover:border-red-500/40 text-zinc-400 hover:text-red-400"
                    title="Hapus"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Markdown } from "@/components/Markdown";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronRight,
  Share2,
  Tag,
  User,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SITE, waLink } from "@/lib/site";
import { useSiteOverride } from "@/components/ContentProvider";
import type { Article } from "@/lib/types";

export default function ArticleClient({
  article,
  related,
}: {
  article: Article;
  related: Article[];
}) {
  const overrides = useSiteOverride();
  const waDigits = overrides.whatsappDigits ?? SITE.whatsapp.digits;
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      const url = typeof window !== "undefined" ? window.location.href : "";
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — silent */
    }
  }

  const waMsg = `Halo PUMA, saya tertarik dengan artikel "${article.title}" dan ingin diskusi lebih lanjut.`;
  const waHref = `https://wa.me/${waDigits}?text=${encodeURIComponent(waMsg)}`;

  return (
    <main className="bg-zinc-950 text-white selection:bg-white selection:text-zinc-950 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 md:pt-36 pb-12 md:pb-16 bg-zinc-900/40 border-b border-white/5 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(234,122,28,0.18), transparent 60%)" }}
        />
        <div className="container px-6 mx-auto relative">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-3 text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-6"
          >
            <Link href="/" className="hover:text-brand transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/insight" className="hover:text-brand transition-colors">
              Insight
            </Link>
            <ChevronRight size={12} />
            <span className="text-white truncate max-w-[40ch]">{article.title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-5">
            <span className="inline-flex items-center gap-2 bg-brand text-white px-3 py-1.5 font-black">
              <Tag size={12} />
              {article.category}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar size={12} className="text-brand" />
              {article.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <User size={12} className="text-brand" />
              {article.author}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95] max-w-4xl"
          >
            {article.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 max-w-3xl mt-6 text-base md:text-lg leading-relaxed"
          >
            {article.excerpt}
          </motion.p>
        </div>
      </section>

      {/* Featured image */}
      {article.image && (
        <section className="-mt-8 md:-mt-12 px-6 relative z-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="industrial-border bg-zinc-900 aspect-[16/9] relative overflow-hidden"
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Body */}
      <section className="py-16 md:py-20" aria-label="Isi artikel">
        <div className="container px-6 mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16">
          <article className="lg:col-span-8 lg:col-start-2">
            {article.body ? (
              <Markdown source={article.body} />
            ) : (
              <p className="text-zinc-400 italic text-lg leading-relaxed">
                Konten artikel sedang disiapkan. Silakan kembali lagi.
              </p>
            )}

            {/* Share row */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/insight"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-brand text-xs font-black uppercase tracking-widest transition-colors group"
              >
                <ArrowLeft
                  size={14}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                Kembali ke Insight
              </Link>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mr-1">
                  Share
                </span>
                <button
                  type="button"
                  onClick={copyLink}
                  className="inline-flex items-center gap-2 px-3 py-2 border border-white/10 hover:border-brand/40 hover:text-brand text-zinc-400 text-[11px] font-bold uppercase tracking-widest transition-colors"
                >
                  <Share2 size={12} />
                  {copied ? "Tersalin!" : "Salin link"}
                </button>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 border border-white/10 hover:border-brand/40 hover:text-brand text-zinc-400 text-[11px] font-bold uppercase tracking-widest transition-colors"
                >
                  <MessageCircle size={12} />
                  WhatsApp
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 border-y border-white/5 bg-zinc-900/30">
        <div className="container px-6 mx-auto">
          <div className="industrial-border bg-zinc-900 p-8 md:p-12 relative overflow-hidden">
            <span aria-hidden="true" className="absolute top-0 left-0 w-16 h-1 bg-brand" />
            <div
              aria-hidden="true"
              className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(234,122,28,0.25), transparent 70%)" }}
            />
            <div className="relative grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <span className="text-brand font-mono text-[10px] uppercase tracking-widest block mb-3">
                  Diskusi Lanjut
                </span>
                <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight">
                  Tertarik penerapannya untuk proyek Anda?
                </h2>
                <p className="text-zinc-400 mt-4 text-sm md:text-base leading-relaxed max-w-xl">
                  Tim engineer PUMA siap mereview spesifikasi dan kebutuhan
                  operasional Anda — dari seleksi material, layout tangki, hingga
                  timeline produksi.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-brand hover:bg-[var(--brand-dark)] text-white text-xs font-black uppercase tracking-widest transition-colors shadow-[0_8px_30px_-12px_rgba(234,122,28,0.6)]"
                >
                  <MessageCircle size={14} />
                  Diskusi via WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 border border-white/20 hover:border-brand hover:text-brand text-white text-xs font-black uppercase tracking-widest transition-colors"
                >
                  Form penawaran
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 md:py-20" aria-label="Artikel terkait">
          <div className="container px-6 mx-auto">
            <div className="flex items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-brand font-mono text-xs uppercase tracking-[0.4em] block mb-3">
                  Artikel Lainnya
                </span>
                <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter">
                  Insight Lainnya
                </h2>
              </div>
              <Link
                href="/insight"
                className="text-brand font-bold uppercase tracking-widest text-xs md:text-sm border-b-2 border-brand/40 hover:border-brand transition-all pb-1"
              >
                Lihat semua →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {related.map((post) => (
                <Link
                  key={post.id}
                  href={`/insight/${post.slug}`}
                  className="group flex flex-col bg-zinc-900 border border-white/5 hover:border-brand/40 transition-colors"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                    <span className="absolute top-3 left-3 bg-brand text-white text-[9px] font-black uppercase tracking-widest px-2 py-1">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-base md:text-lg font-black text-white uppercase tracking-tight mb-2 group-hover:text-brand transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      <span>{post.date}</span>
                      <ArrowRight size={14} className="text-brand group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

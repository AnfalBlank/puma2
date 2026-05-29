"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageFAQ } from "@/components/PageFAQ";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { InsightHeroAnim } from "@/components/animations/InsightHeroAnim";
import { useContent } from "@/components/ContentProvider";

export default function InsightClient() {
  const { articles: blogPosts, hero, faqs } = useContent();
  const h = hero.insight;
  const featured = blogPosts[0];

  return (
    <main className="bg-zinc-950 text-white selection:bg-white selection:text-zinc-950 overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="pt-32 md:pt-36 pb-16 md:pb-20 bg-zinc-900/40 border-b border-white/5 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(234,122,28,0.18), transparent 60%)" }}
        />
        <div className="container px-6 mx-auto relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4">
              <a href="/" className="hover:text-brand transition-colors">Home</a>
              <ChevronRight size={12} />
              <span className="text-white">Insight</span>
            </nav>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              {h.title} {h.highlight && <><br /><span className="text-brand">{h.highlight}</span></>}
            </h1>
            <p className="text-zinc-400 max-w-xl mt-6 text-base md:text-lg leading-relaxed">
              {h.intro}
            </p>
          </div>
          <div className="lg:col-span-6">
            <InsightHeroAnim />
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20 md:py-24 border-b border-white/5" aria-label="Artikel unggulan">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <Link
              href={`/insight/${featured.slug}`}
              className="flex-1 w-full aspect-[4/3] bg-zinc-900 overflow-hidden industrial-border relative group/feat"
            >
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover/feat:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 to-transparent" />
            </Link>
            <div className="flex-1 space-y-6">
              <span className="inline-block px-4 py-1.5 bg-brand text-white text-[10px] font-black uppercase tracking-widest">
                Featured Insight
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.95] hover:text-brand transition-colors">
                <Link href={`/insight/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-6 text-zinc-500 text-[11px] font-mono uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <Calendar size={14} className="text-brand" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-2">
                  <User size={14} className="text-brand" />
                  {featured.author}
                </span>
              </div>
              <div className="pt-4">
                <Link
                  href={`/insight/${featured.slug}`}
                  className="text-brand font-black uppercase tracking-[0.25em] inline-flex items-center gap-3 hover:gap-4 transition-all group text-sm border-b border-brand/40 hover:border-brand pb-1"
                >
                  Read Full Story
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 md:py-24" aria-label="Daftar artikel">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {blogPosts.slice(1).map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/insight/${post.slug}`} className="flex flex-col gap-6">
                  <div className="aspect-[4/3] bg-zinc-900 overflow-hidden industrial-border relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="space-y-3">
                    <span className="text-brand font-mono text-[10px] uppercase tracking-widest block">
                      {post.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight group-hover:text-brand transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{post.excerpt}</p>
                    <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      <span>{post.date}</span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform text-brand"
                      />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <PageFAQ
        eyebrow="FAQ · Insight & Konten"
        title="Tentang Insight"
        highlight="Engineering Notes Kami."
        intro="Cara kami menyusun konten teknis, frekuensi update, dan bagaimana request topik atau studi kasus tertentu untuk komunitas industri."
        items={faqs.insight}
        ctaWAMessage="Halo PUMA, saya ingin request topik / studi kasus untuk dibahas di Insight."
        ctaPrimaryLabel="Request Topik"
        jsonLdId="ld-faq-insight"
      />

      <Footer />
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useContent } from "./ContentProvider";

export function InsightSection() {
  const { articles } = useContent();
  return (
    <section
      className="py-20 md:py-28 bg-zinc-950 border-y border-white/5"
      aria-labelledby="insights-heading"
    >
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-16">
          <div className="max-w-xl">
            <span className="text-brand font-mono text-xs uppercase tracking-[0.4em] block mb-4">
              Insight · Industri
            </span>
            <h2
              id="insights-heading"
              className="text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter"
            >
              Berita & <span className="text-brand">Engineering Notes.</span>
            </h2>
          </div>
          <Link
            href="/insight"
            className="text-brand font-bold uppercase tracking-widest text-xs md:text-sm border-b-2 border-brand/40 hover:border-brand transition-all pb-1"
          >
            Lihat semua artikel →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-zinc-900 border border-white/5 hover:border-brand/40 transition-colors"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                <span className="absolute top-4 left-4 bg-brand text-white text-[10px] font-black uppercase tracking-widest px-3 py-1">
                  {article.category}
                </span>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-5 mb-5 text-zinc-500 text-[10px] font-mono uppercase tracking-widest">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-brand" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User size={12} className="text-brand" />
                    {article.author}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-brand transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{article.excerpt}</p>

                <div className="mt-auto pt-5 border-t border-white/5">
                  <Link
                    href={`/insight/${article.slug}`}
                    className="flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all"
                  >
                    Baca selengkapnya
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

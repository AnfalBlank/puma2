"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    title: "Inovasi Tangki Underground Storage Standar UL 1746",
    excerpt: "Bagaimana teknologi double wall tank mengubah standar keamanan SPBU modern di Indonesia.",
    category: "Engineering",
    date: "24 Okt 2024",
    author: "Tim Ahli",
    image: "https://images.unsplash.com/photo-1738162837389-3b02d6dd507b?q=80&w=600",
  },
  {
    title: "Pemilihan Material Steel Grade Tinggi untuk Karoseri Heavy Duty",
    excerpt: "Analisis kekuatan tarik material untuk armada pertambangan di medan ekstrem.",
    category: "Manufacturing",
    date: "15 Nov 2024",
    author: "Tim Fabrikasi",
    image: "https://images.unsplash.com/photo-1764115424769-ebdd2683d5a8?q=80&w=600",
  },
  {
    title: "Standardisasi Keamanan Transportasi BBM Pertamina",
    excerpt: "Langkah-langkah krusial dalam fabrikasi tangki mobil tangki BBM untuk mencegah kebocoran.",
    category: "Safety",
    date: "02 Des 2024",
    author: "Tim Safety",
    image: "https://images.unsplash.com/photo-1738162837408-5fbf53f0b97a?q=80&w=600",
  },
];

export function InsightSection() {
  return (
    <section className="py-24 bg-zinc-950 border-y border-white/5">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="max-w-xl">
             <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em] block mb-4">
              Insights // Articles
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
              Berita & <span className="text-zinc-600">Industri.</span>
            </h2>
          </div>
          <Link href="#" className="text-white font-bold uppercase tracking-widest text-sm border-b-2 border-white/10 hover:border-white transition-all pb-2">
            Lihat Semua Artikel
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-zinc-900 border border-white/5"
            >
              {/* Article Image */}
              <div className="relative h-64 w-full overflow-hidden">
                 <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${article.image}')` }}
                 />
                 <div className="absolute top-4 left-4 bg-white text-zinc-950 text-[10px] font-black uppercase tracking-widest px-3 py-1">
                   {article.category}
                 </div>
              </div>

              {/* Article Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-6 mb-6 text-zinc-500 text-[10px] font-mono uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Calendar size={12} />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={12} />
                    {article.author}
                  </div>
                </div>

                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-zinc-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                  {article.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5">
                  <Link href="#" className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    Baca Selengkapnya
                    <ArrowRight size={14} className="text-zinc-500" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

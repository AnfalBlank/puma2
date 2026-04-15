"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, ChevronRight, Share2 } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Tren Teknologi Karoseri 2024: Inovasi Material High-Tensile Steel",
    category: "Engineering Insights",
    excerpt: "Bagaimana penggunaan High-Tensile Steel merevolusi daya tahan dan efisiensi berat bodi kendaraan berat di industri pertambangan.",
    author: "PUMA Manufacturing",
    date: "12 Okt 2024",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Standar Keamanan UL 1746: Mengapa Penting untuk Tangki Pendam?",
    category: "Safety Standards",
    excerpt: "Memahami regulasi keamanan penyimpanan bahan bakar bawah tanah dan bagaimana PUMA mengimplementasikannya secara presisi.",
    author: "Safety Specialist",
    date: "05 Okt 2024",
    image: "https://images.unsplash.com/photo-1595186061386-88094776101c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Optimasi Logistik dengan Sistem Wing Box Hidrolik Presisi",
    category: "Logistics Optimization",
    excerpt: "Studi kasus efisiensi waktu bongkar muat logistik menggunakan sistem wing box generasi terbaru dari PUMA Engineering.",
    author: "Logistics Expert",
    date: "28 Sep 2024",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function InsightPage() {
  return (
    <main className="bg-zinc-950 text-white selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-20 bg-zinc-900/50 border-b border-white/5">
        <div className="container px-6 mx-auto">
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <ChevronRight size={12} />
            <span className="text-white">Insight</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]">
            Knowledge & <br />
            <span className="text-primary">Industry News</span>
          </h1>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="py-24 border-b border-white/5">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 w-full aspect-[16/9] lg:aspect-[4/3] bg-zinc-900 overflow-hidden industrial-border p-2">
               <img 
                  src={blogPosts[0].image} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-60 hover:opacity-100" 
                  alt="Featured"
               />
            </div>
            <div className="flex-1 space-y-8">
               <span className="px-4 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-none inline-block mb-4">Featured Insight</span>
               <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none hover:text-primary transition-colors">
                  {blogPosts[0].title}
               </h2>
               <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                  {blogPosts[0].excerpt}
               </p>
               <div className="flex items-center gap-6 text-zinc-500 text-xs font-mono uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Calendar size={14} className="text-primary" /> {blogPosts[0].date}</span>
                  <span className="flex items-center gap-2"><User size={14} className="text-primary" /> {blogPosts[0].author}</span>
               </div>
               <div className="pt-8">
                  <button className="text-primary font-black uppercase tracking-[0.3em] flex items-center gap-4 hover:gap-8 transition-all group">
                     Read Full Story
                     <ArrowRight size={20} className="group-hover:translate-x-4 transition-transform" />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {blogPosts.slice(1).map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group flex flex-col gap-8"
              >
                <div className="aspect-[4/3] bg-zinc-900 overflow-hidden relative industrial-border p-2">
                   <img 
                      src={post.image} 
                      className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" 
                      alt={post.title}
                   />
                   <div className="absolute top-4 right-4 p-3 bg-zinc-950/80 backdrop-blur-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Share2 size={16} className="text-white hover:text-primary transition-colors cursor-pointer" />
                   </div>
                </div>
                <div className="space-y-4">
                  <span className="text-primary font-mono text-[10px] uppercase tracking-widest block">{post.category}</span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-primary transition-colors leading-none">
                    {post.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                     <span>{post.date}</span>
                     <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform text-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination summary */}
      <section className="py-24 border-t border-white/5">
        <div className="container px-6 mx-auto flex justify-center gap-4">
           {[1, 2, 3].map((i) => (
             <button key={i} className={`w-12 h-12 flex items-center justify-center font-black transition-all rounded-none border ${i === 1 ? "bg-primary text-white border-primary" : "text-zinc-500 border-white/5 hover:border-primary hover:text-white"}`}>
               0{i}
             </button>
           ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

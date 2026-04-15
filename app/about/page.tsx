"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Target, Award, Users, ChevronRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-zinc-950 text-white selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Breadcrumb Header */}
      <section className="pt-40 pb-20 bg-zinc-900/50 border-b border-white/5">
        <div className="container px-6 mx-auto">
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <ChevronRight size={12} />
            <span className="text-white">Tentang Kami</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]">
            Mengenal <br />
            <span className="text-primary">PUMA Engineering</span>
          </h1>
        </div>
      </section>

      {/* History & Vision */}
      <section className="py-32 relative overflow-hidden">
        <div className="container px-6 mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-mono text-xs uppercase tracking-[0.4em] block mb-8">Profil Perusahaan</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-12 leading-none">
              Inovasi Tanpa <br /> Henti Sejak Awal.
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-medium">
              <p>
                PT. PRIMA USAHA MITRA ABADI (PUMA) adalah perusahaan yang bergerak di bidang karoseri dan rekayasa teknik (engineering) yang berkomitmen untuk memberikan solusi transportasi dan industri terbaik di Indonesia.
              </p>
              <p>
                Sebagai bagian dari UJB Group, kami membawa warisan keunggulan operasional dan standar kualitas yang ketat dalam setiap produk yang kami hasilkan, mulai dari tangki pendam hingga unit modular Pertashop.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="p-8 bg-zinc-900 border border-white/5 rounded-none">
                <span className="block text-4xl font-black text-white mb-2 tracking-tighter">15+</span>
                <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">Tahun Pengalaman</span>
              </div>
              <div className="p-8 bg-zinc-900 border border-white/5 rounded-none">
                <span className="block text-4xl font-black text-primary mb-2 tracking-tighter">1000+</span>
                <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">Unit Terdistribusi</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-zinc-900 industrial-border p-4">
              <div className="h-full w-full bg-zinc-800 relative overflow-hidden">
                 <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                    alt="Factory Floor"
                    className="h-full w-full object-cover opacity-60 mix-blend-luminosity grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                 <div className="absolute bottom-12 left-12 right-12">
                    <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">Core Values</span>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Presisi & Integritas</h3>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-32 bg-zinc-900/30">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-px bg-white/5">
            <div className="p-16 bg-zinc-950">
              <Target className="text-primary mb-8" size={48} />
              <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-8">Visi Kami</h3>
              <p className="text-zinc-400 text-xl leading-relaxed">
                Menjadi perusahaan terdepan dalam industri karoseri dan pabrikasi untuk oil & gas di Indonesia. Serta berkomitmen menyediakan solusi yang aman, sesuai standar, dan efisien.
              </p>
            </div>
            <div className="p-16 bg-zinc-950">
              <Award className="text-primary mb-8" size={48} />
              <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-8">Misi Kami</h3>
              <ul className="space-y-6 text-zinc-400 text-lg">
                <li className="flex gap-4">
                  <span className="text-primary font-black">01.</span>
                  <span>Menguasai pasar industri karoseri dan pabrikasi untuk oil & gas di Indonesia.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-black">02.</span>
                  <span>Memiliki budaya dan bisnis kerja yang beretika dan professional.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-black">03.</span>
                  <span>Senantiasa melakukan pengembangan sumber daya manusia dan teknologi yang berkelanjutan.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-black">04.</span>
                  <span>Menerapkan Sistem Manajemen Mutu (ISO 9001:2015) & K3 (ISO 45001:2018).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Relocation Plan 2026 */}
      <section className="py-32 bg-primary">
        <div className="container px-6 mx-auto grid lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
              <span className="text-zinc-950 font-mono text-xs uppercase tracking-[0.4em] block font-black">PENGEMBANGAN KAPASITAS</span>
              <h2 className="text-4xl md:text-7xl font-black text-zinc-950 uppercase tracking-tighter leading-none">
                We Are Moving <br /> In 2026
              </h2>
              <p className="text-zinc-950 font-medium text-lg max-w-xl leading-relaxed">
                 Seiring dengan perkembangan yang pesat, PT. Prima Usaha Mitra Abadi akan melaksanakan relokasi ke area pabrik yang lebih luas untuk memperbesar kapasitas produksi guna memenuhi kebutuhan pelanggan yang semakin meningkat.
              </p>
           </div>
           <div className="bg-white p-12 lg:p-16">
              <h3 className="text-2xl font-black text-zinc-950 uppercase mb-8 border-b-2 border-zinc-200 pb-4">Fasilitas Baru Cikopo</h3>
              <ul className="space-y-6">
                 <li className="flex flex-col">
                    <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Lokasi Strategis</span>
                    <span className="text-zinc-950 font-black text-lg">Jl. Raya Cikopo No.15, Kab. Purwakarta (12,130 m²)</span>
                 </li>
                 <li className="flex flex-col">
                    <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Kapasitas Produksi</span>
                    <span className="text-zinc-950 font-black text-lg">3x Lipat dari Workshop Saat Ini (3 Gedung Produksi)</span>
                 </li>
                 <li className="flex flex-col">
                    <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Aksesibilitas</span>
                    <span className="text-zinc-950 font-black text-lg">Dekat Pintu Tol Cikampek & Kawasan Industri</span>
                 </li>
              </ul>
           </div>
        </div>
      </section>

      {/* Leadership / Team Summary */}
      <section className="py-32">
        <div className="container px-6 mx-auto text-center">
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em] block mb-8">Our Team</span>
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-16">
            Dibalik <span className="text-primary">Presisi</span> Kami.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group flex flex-col items-center">
                <div className="aspect-square w-full bg-zinc-900 border border-white/5 mb-6 overflow-hidden relative">
                   <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                   <img src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop`} className="w-full h-full object-cover grayscale" />
                </div>
                <h4 className="text-white font-black uppercase tracking-tighter text-lg">Expert Engineer {i}</h4>
                <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mt-1">Lead Manufacturing</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

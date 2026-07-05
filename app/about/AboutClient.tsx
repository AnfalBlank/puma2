"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageFAQ } from "@/components/PageFAQ";
import { motion } from "framer-motion";
import { Target, Award, ChevronRight, Building2, MapPin, Factory } from "lucide-react";
import Image from "next/image";
import { PHOTOS } from "@/lib/media";
import { AboutHeroAnim } from "@/components/animations/AboutHeroAnim";
import { useContent } from "@/components/ContentProvider";

export default function AboutClient() {
  const { hero, faqs } = useContent();
  const h = hero.about;
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
              <span className="text-white">Tentang Kami</span>
            </nav>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              {h.title} {h.highlight && <><br /><span className="text-brand">{h.highlight}</span></>}
            </h1>
            <p className="text-zinc-400 max-w-xl mt-6 text-base md:text-lg leading-relaxed">
              {h.intro}
            </p>
          </div>
          <div className="lg:col-span-6">
            <AboutHeroAnim />
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="py-20 md:py-28 relative overflow-hidden" aria-labelledby="profile-heading">
        <div className="container px-6 mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-brand font-mono text-xs uppercase tracking-[0.4em] block mb-6">
              Profil Perusahaan
            </span>
            <h2
              id="profile-heading"
              className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight"
            >
              Inovasi Tanpa Henti <br />
              <span className="text-brand">Sejak 2001.</span>
            </h2>
            <div className="space-y-5 text-zinc-400 text-base md:text-lg leading-relaxed">
              <p>
                PT. Prima Usaha Mitra Abadi (PUMA) bergerak di bidang karoseri dan rekayasa teknik
                untuk sektor oil &amp; gas, niaga, dan pertambangan di Indonesia. Sebagai bagian
                dari UJB Group, kami membawa standar mutu yang ketat di setiap unit yang kami
                produksi.
              </p>
              <p>
                Lini produksi kami mencakup Mobil Tangki BBM Pertamina, UGT / Tangki Pendam UL
                1746, AST Modular, Tangki Kimia, support unit pertambangan, hingga karoseri niaga
                Wingbox, Semi Trailer, dan Losbak.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="p-6 bg-zinc-900 border border-white/5 border-l-2 border-l-brand">
                <span className="block text-3xl md:text-4xl font-black text-white mb-1 tracking-tighter">
                  20+
                </span>
                <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">
                  Tahun Pengalaman
                </span>
              </div>
              <div className="p-6 bg-zinc-900 border border-white/5 border-l-2 border-l-brand">
                <span className="block text-3xl md:text-4xl font-black text-brand mb-1 tracking-tighter">
                  800+
                </span>
                <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">
                  Pertashop Terdistribusi
                </span>
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/5] industrial-border overflow-hidden">
              <Image
                src={PHOTOS.workshopWide}
                alt="Workshop PUMA di Karawang"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-brand font-mono text-[11px] uppercase tracking-widest block mb-2">
                  Core Values
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-3">
                  Presisi & Integritas
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed max-w-xs">
                  Workshop produksi di Karawang — tempat seluruh karoseri dan tangki PUMA
                  difabrikasi dengan QC bertahap.
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-1 gap-3">
              <ValueItem
                icon={Building2}
                title="Pengalaman Industri"
                desc="Dipercaya 60+ mitra nasional, termasuk perusahaan tambang, distributor BBM, dan operator pertambangan."
              />
              <ValueItem
                icon={Award}
                title="Sertifikasi Global"
                desc="ISO 9001:2015, ISO 45001:2018, sertifikasi UL 1746, dan vendor resmi Pertamina."
              />
              <ValueItem
                icon={Factory}
                title="Kapasitas Produksi"
                desc="Workshop di Karawang dengan rencana relokasi ke Cikopo (12.130 m²) untuk kapasitas 3× lipat di 2026."
              />
            </ul>
          </motion.aside>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-zinc-900/30" aria-labelledby="vm-heading">
        <h2 id="vm-heading" className="sr-only">
          Visi dan Misi
        </h2>
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-px bg-white/5">
            <div className="p-10 md:p-14 bg-zinc-950">
              <Target className="text-brand mb-6" size={40} />
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">
                Visi Kami
              </h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Menjadi perusahaan terdepan dalam industri karoseri dan pabrikasi untuk oil &amp;
                gas di Indonesia, dengan komitmen menyediakan solusi yang aman, sesuai standar,
                dan efisien.
              </p>
            </div>
            <div className="p-10 md:p-14 bg-zinc-950">
              <Award className="text-brand mb-6" size={40} />
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">
                Misi Kami
              </h3>
              <ol className="space-y-4 text-zinc-400 text-base md:text-lg">
                {[
                  "Menguasai pasar industri karoseri dan pabrikasi untuk oil & gas di Indonesia.",
                  "Memiliki budaya dan bisnis kerja yang beretika dan profesional.",
                  "Pengembangan SDM dan teknologi yang berkelanjutan.",
                  "Menerapkan ISO 9001:2015 (Mutu) dan ISO 45001:2018 (K3).",
                ].map((mission, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-brand font-black w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <span>{mission}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Relocation */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--brand-dark), var(--brand))" }}
        aria-labelledby="relocation-heading"
      >
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />
        <div className="container px-6 mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
          <div className="space-y-6">
            <span className="text-white/80 font-mono text-xs uppercase tracking-[0.4em] block font-black">
              Pengembangan Kapasitas
            </span>
            <h2
              id="relocation-heading"
              className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.95]"
            >
              We Are Moving <br /> In 2026.
            </h2>
            <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
              PUMA akan relokasi ke fasilitas pabrik baru yang lebih luas untuk memperbesar
              kapasitas produksi dan memenuhi kebutuhan mitra yang terus meningkat.
            </p>
          </div>
          <div className="bg-white p-8 md:p-12 border border-white shadow-2xl">
            <h3 className="text-xl md:text-2xl font-black text-zinc-950 uppercase mb-6 border-b-2 border-brand pb-4">
              Fasilitas Baru Cikopo
            </h3>
            <ul className="space-y-5">
              <FactItem
                icon={MapPin}
                label="Lokasi Strategis"
                value="Jl. Raya Cikopo No. 15, Purwakarta · 12.130 m²"
              />
              <FactItem
                icon={Factory}
                label="Kapasitas Produksi"
                value="3× lipat dari workshop saat ini · 3 gedung produksi"
              />
              <FactItem
                icon={Building2}
                label="Aksesibilitas"
                value="Dekat Pintu Tol Cikampek & Kawasan Industri"
              />
            </ul>
          </div>
        </div>
      </section>

      <PageFAQ
        eyebrow="FAQ · Tentang PUMA"
        title="Pertanyaan tentang"
        highlight="Profil & Operasi Kami."
        intro="Profil singkat, sertifikasi, kapasitas produksi, dan rencana pengembangan PT. Prima Usaha Mitra Abadi sebagai vendor resmi Pertamina."
        items={faqs.about}
        ctaWAMessage="Halo PUMA, saya ingin tahu lebih lanjut tentang profil dan kapasitas produksi perusahaan."
        ctaPrimaryLabel="Tanya Tim Kami"
        jsonLdId="ld-faq-about"
      />

      <Footer />
    </main>
  );
}

function ValueItem({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <li className="flex gap-4 p-4 bg-zinc-900 border border-white/5 hover:border-brand/40 transition-colors">
      <span className="p-2.5 bg-zinc-800 border border-white/10 h-fit shrink-0">
        <Icon size={18} className="text-brand" />
      </span>
      <div>
        <h4 className="text-white font-black uppercase tracking-tight text-base mb-1">{title}</h4>
        <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </li>
  );
}

function FactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <li className="flex gap-3">
      <Icon size={16} className="text-brand mt-1 shrink-0" />
      <div>
        <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest block">
          {label}
        </span>
        <span className="text-zinc-950 font-black text-base leading-snug">{value}</span>
      </div>
    </li>
  );
}

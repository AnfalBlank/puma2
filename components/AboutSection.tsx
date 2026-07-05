"use client";

import { motion } from "framer-motion";
import { Shield, Target, Award, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Sertifikasi Industri",
    description:
      "Bersertifikasi ISO 9001:2015 (Sistem Manajemen Mutu), ISO 45001:2018 (K3), UL 1746 untuk underground tank, dan terdaftar sebagai vendor resmi Pertamina.",
    icon: Award,
  },
  {
    title: "Tim Engineering Berpengalaman",
    description:
      "Tenaga ahli dengan pengalaman 20+ tahun dalam perancangan dan konstruksi karoseri logistik berat, fabrikasi tangki BBM, dan support unit pertambangan.",
    icon: Target,
  },
  {
    title: "Quality Control Berlapis",
    description:
      "Proses QC bertahap dengan material tervalidasi memastikan tiap unit karoseri memiliki durabilitas maksimal di medan ekstrem dan lingkungan korosif.",
    icon: Shield,
  },
];

const checkpoints = [
  "Tim Profesional & Kompeten",
  "Material High-Tensile Steel",
  "Standar Industri Global",
  "Solusi Custom & Reliable",
];

export function AboutSection() {
  return (
    <section
      className="py-20 md:py-28 bg-zinc-950 relative border-y border-white/5 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="text-brand font-mono text-xs uppercase tracking-[0.4em] block">
                Tentang Kami · PT. Prima Usaha Mitra Abadi
              </span>
              <h2
                id="about-heading"
                className="text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter"
              >
                Karoseri & Engineering <br />
                <span className="text-brand">untuk Industri Energi</span> <br />
                dan Pertambangan.
              </h2>
            </div>

            <div className="space-y-5 text-zinc-400 text-base lg:text-lg leading-relaxed">
              <p>
                Berdiri sejak 2001 di Karawang, PT. Prima Usaha Mitra Abadi (PUMA) berfokus pada
                fabrikasi tangki dan karoseri kendaraan khusus untuk sektor oil &amp; gas, niaga,
                dan pertambangan di Indonesia.
              </p>
              <p>
                Kami memproduksi Mobil Tangki BBM Pertamina, UGT / Tangki Pendam UL 1746, AST
                Modular, Tangki Kimia, support unit pertambangan (Fuel Truck, Lube Truck, Water
                Truck, Dump Truck), serta karoseri niaga Wingbox, Semi Trailer, dan Losbak — semua
                dengan standar mutu internasional.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checkpoints.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-brand shrink-0" />
                  <span className="text-white font-bold text-xs uppercase tracking-wide">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right */}
          <div className="grid grid-cols-1 gap-5">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="industrial-border p-6 md:p-8 bg-zinc-900 group hover:bg-zinc-900/60 transition-all duration-500 relative overflow-hidden"
              >
                <span
                  className="absolute left-0 top-0 bottom-0 w-1 bg-brand scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"
                  aria-hidden="true"
                />
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="p-3 bg-zinc-800 group-hover:bg-brand/10 group-hover:border-brand/40 border border-white/5 transition-colors shrink-0">
                    <feature.icon
                      size={28}
                      className="text-zinc-300 group-hover:text-brand transition-colors"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

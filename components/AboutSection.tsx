"use client";

import { motion } from "framer-motion";
import { Shield, Target, Award, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Sertifikasi Industri",
    description: "Memiliki sertifikasi ISO 9001:2015, ISO 45001:2018, dan UL 1746 untuk tangki penyimpanan bawah tanah.",
    icon: Award,
  },
  {
    title: "Engineering Expert",
    description: "Tenaga ahli engineering berpengalaman lebih dari 20 tahun dalam perancangan dan konstruksi logistik berat.",
    icon: Target,
  },
  {
    title: "Quality Control",
    description: "Proses QC berlapis untuk memastikan setiap unit karoseri memiliki durabilitas maksimal di medan ekstrem.",
    icon: Shield,
  },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-zinc-950 relative border-y border-white/5">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em] block">
                Kata Pengantar // PT. Prima Usaha Mitra Abadi
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
                Kualitas & Inovasi <br />
                <span className="text-zinc-600">Terbaik di Bidang</span> <br />
                Karoseri & Engineering.
              </h2>
            </div>

            <div className="space-y-6 text-zinc-400 text-base lg:text-lg leading-relaxed">
              <p>
                Dengan rasa syukur dan bangga, kami persembahkan Company Profile ini sebagai wujud komitmen dan dedikasi kami dalam menyediakan layanan serta produk berkualitas terbaik di bidang karoseri dan engineering. 
              </p>
              <p>
                PT. Prima Usaha Mitra Abadi berdiri dengan semangat untuk memenuhi kebutuhan pelanggan dan menjadi mitra yang andal dalam mendukung kemajuan bisnis mereka. Kami senantiasa mempersembahkan solusi yang dapat diandalkan dan sesuai standar industri.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Tim Profesional & Kompeten",
                "Teknologi Terkini",
                "Standar Industri Global",
                "Solusi Dapat Diandalkan",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-zinc-500" />
                  <span className="text-white font-bold text-[10px] lg:text-xs uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Stats & Details */}
          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="industrial-border p-8 bg-zinc-900 group hover:bg-white hover:border-white transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                  <div className="p-4 bg-zinc-800 group-hover:bg-zinc-100 border border-white/5 transition-colors">
                    <feature.icon size={32} className="text-zinc-400 group-hover:text-zinc-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-zinc-950 uppercase mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-500 group-hover:text-zinc-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute right-0 top-0 w-1/4 h-full bg-zinc-900/50 -skew-x-12 transform origin-top translate-x-1/2 -z-10" />
    </section>
  );
}

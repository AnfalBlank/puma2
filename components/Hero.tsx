"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Truck } from "lucide-react";
import Link from "next/link";
import { HeroBlueprint } from "./HeroBlueprint";
import { useContent } from "./ContentProvider";

const productKeywords = [
  "Mobil Tangki BBM Pertamina",
  "UGT Tangki Pendam UL 1746",
  "AST Modular Tank",
  "Tangki Kimia",
  "Fuel · Lube · Water · Dump Truck",
  "Wingbox · Semi Trailer · Losbak",
];

export function Hero() {
  const { hero } = useContent();
  const h = hero.home;
  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden flex items-center bg-zinc-950 pt-32 lg:pt-28 pb-20"
      aria-labelledby="hero-heading"
    >
      {/* Background — blueprint grid + brand glow */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-blueprint opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-transparent to-zinc-950" />
        {/* Brand orange glows */}
        <div
          className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(234,122,28,0.20), transparent 60%)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(234,122,28,0.10), transparent 60%)" }}
        />
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(234,122,28,0.5), transparent)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Copy column */}
        <div className="lg:col-span-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
          >
            <span className="h-px w-8 bg-brand" />
            <span className="text-zinc-300 font-mono text-[10px] lg:text-xs tracking-[0.3em] uppercase">
              {h.eyebrow ?? "Strive For Excellence · Member of UJB Group"}
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black text-white tracking-tighter leading-[0.95] uppercase"
          >
            {h.title}
            {h.highlight && (
              <>
                <br />
                <span className="text-brand">{h.highlight}</span>
              </>
            )}
            <br />
            Standar Pertamina.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 lg:mt-8 text-base lg:text-lg text-zinc-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            {h.intro}
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start"
            aria-label="Lini produk utama"
          >
            {productKeywords.map((kw) => (
              <li
                key={kw}
                className="px-3 py-1.5 border border-white/10 bg-white/[0.03] text-zinc-200 text-[11px] font-mono uppercase tracking-wider hover:border-brand/60 hover:text-white transition-colors"
              >
                {kw}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 justify-center lg:justify-start"
          >
            <Link
              href="#contact"
              className="w-full sm:w-auto bg-brand hover:bg-[var(--brand-dark)] text-white px-8 py-5 text-sm md:text-base uppercase font-black tracking-widest inline-flex items-center justify-center gap-3 group transition-all shadow-[0_8px_30px_-12px_rgba(234,122,28,0.6)]"
            >
              Minta Penawaran
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/products"
              className="w-full sm:w-auto border border-white/20 hover:border-white text-white px-8 py-5 text-sm md:text-base uppercase font-black tracking-widest inline-flex items-center justify-center gap-3 transition-colors"
            >
              Lihat Produk
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0"
          >
            <CertItem label="Sertifikasi" value="ISO 9001:2015" />
            <CertItem label="K3 Certified" value="ISO 45001:2018" />
            <CertItem label="Underground Tank" value="UL 1746" />
          </motion.dl>
        </div>

        {/* Visual column — blueprint truck animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 w-full"
          aria-label="Skema teknis mobil tangki BBM"
        >
          <HeroBlueprint />

          {/* Stat row beneath blueprint */}
          <div className="mt-4 grid grid-cols-3 gap-px bg-white/10 border border-white/10">
            <Stat icon={Truck} label="Pertashop" value="800+" />
            <Stat icon={Award} label="Tahun" value="20+" />
            <Stat icon={ShieldCheck} label="Vendor" value="Pertamina" />
          </div>
        </motion.div>
      </div>

      {/* Bottom border line */}
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(234,122,28,0.4), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}

function CertItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-brand pl-3">
      <dt className="text-zinc-500 text-[9px] font-mono uppercase tracking-widest mb-1">
        {label}
      </dt>
      <dd className="text-white font-bold text-xs sm:text-sm tracking-tight">{value}</dd>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-zinc-950 px-4 py-4 flex items-center gap-3">
      <Icon size={18} className="text-brand shrink-0" />
      <div className="min-w-0">
        <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest leading-tight">
          {label}
        </div>
        <div className="text-white font-black text-sm tracking-tight truncate">{value}</div>
      </div>
    </div>
  );
}

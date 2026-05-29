"use client";

import { motion } from "framer-motion";
import { Truck, Layers, Container, FlaskConical, HardHat, Box, Fuel } from "lucide-react";

const lines = [
  { icon: Truck, label: "Mobil Tangki BBM" },
  { icon: Layers, label: "UGT UL 1746" },
  { icon: Container, label: "AST Modular" },
  { icon: FlaskConical, label: "Tangki Kimia" },
  { icon: HardHat, label: "Mining Support" },
  { icon: Box, label: "Wingbox · Trailer" },
  { icon: Fuel, label: "Pertashop" },
];

/**
 * Products-page hero animation:
 * Conveyor / production line that cycles through 7 product icons with
 * QC stations and an orange progress meter.
 */
export function ProductsHeroAnim() {
  return (
    <div className="relative w-full aspect-[16/10] industrial-border bg-[rgba(10,10,11,0.6)] backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-strong opacity-90" aria-hidden="true" />

      {/* Top label */}
      <div className="absolute top-0 left-0 right-0 px-4 py-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 z-20">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          PRODUCTION LINE · 7 LINI PRODUK
        </span>
        <span className="hidden sm:inline">QC PASS</span>
      </div>

      {/* Conveyor track */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-12 sm:mx-16">
        <div className="relative">
          <div className="h-1 bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-brand to-transparent"
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>
          {/* Belt rivets */}
          <div className="absolute inset-y-0 left-0 right-0 flex">
            {Array.from({ length: 28 }).map((_, i) => (
              <span
                key={i}
                className="flex-1 border-r border-white/10 last:border-r-0 h-full"
              />
            ))}
          </div>
        </div>

        {/* Item track */}
        <div className="absolute inset-x-0 -top-9 sm:-top-12">
          <motion.div
            className="flex gap-12 sm:gap-16"
            animate={{ x: [0, "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            {[...lines, ...lines].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center min-w-[90px] sm:min-w-[110px]"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-zinc-900 border border-white/15 flex items-center justify-center group">
                  <item.icon size={20} className="text-brand" />
                </div>
                <span className="mt-2 text-[8px] sm:text-[9px] font-mono text-zinc-400 uppercase tracking-widest text-center whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* QC station markers below belt */}
        <div className="absolute -bottom-9 sm:-bottom-10 inset-x-0 grid grid-cols-3 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest">
          {["Material QC", "Welding QC", "Final FAT"].map((q, i) => (
            <div key={q} className="flex flex-col items-center text-zinc-500">
              <span className="w-px h-3 bg-brand/60" />
              <span className="mt-1 text-zinc-300">{q}</span>
              <motion.span
                className="text-brand mt-0.5 font-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0.4, 1] }}
                transition={{ duration: 4, delay: i * 0.4, repeat: Infinity }}
              >
                ● PASS
              </motion.span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom progress */}
      <div className="absolute bottom-3 left-3 right-3 grid grid-cols-12 gap-3 z-20">
        <div className="col-span-7 sm:col-span-8 flex items-center gap-3">
          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 shrink-0">
            Output
          </span>
          <div className="relative flex-1 h-1.5 bg-white/5 border border-white/10 overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-brand"
              initial={{ width: 0 }}
              animate={{ width: "92%" }}
              transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
            />
          </div>
        </div>
        <div className="col-span-5 sm:col-span-4 flex items-center justify-end gap-2 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest">
          <span className="text-brand font-bold">92%</span>
          <span className="text-zinc-500">QC PASS RATE</span>
        </div>
      </div>

      <CornerTicks />
    </div>
  );
}

function CornerTicks() {
  return (
    <>
      <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-brand" />
      <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-brand" />
      <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-brand" />
      <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-brand" />
    </>
  );
}

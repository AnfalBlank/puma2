"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Cpu, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-zinc-950 pt-20 lg:pt-0">
      {/* Animated Engineering Background */}
      <div className="absolute inset-0 z-0 opacity-10 lg:opacity-20 overflow-hidden pointer-events-none">
        {/* Large Gear 1 */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 lg:-top-20 lg:-left-20 text-zinc-800"
        >
          <Settings size={600} strokeWidth={0.5} />
        </motion.div>

        {/* Medium Gear 2 */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -right-60 lg:-right-40 text-zinc-700"
        >
          <Settings size={400} strokeWidth={0.5} />
        </motion.div>

        {/* Moving Technical Lines */}
        <svg className="absolute inset-0 w-full h-full text-zinc-800/30">
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Moving Technical Data Stream */}
        <div className="absolute right-4 lg:right-10 top-1/4 hidden sm:flex flex-col gap-4 text-[8px] lg:text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
            >
              SYS_PROC_772{i} // LOAD_BAL_V{i} // 0xAF{i}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 py-12 lg:py-0 text-center lg:text-left grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
          >
            <div className="h-[2px] w-8 lg:w-12 bg-zinc-500" />
            <span className="text-zinc-500 font-mono text-[10px] lg:text-xs tracking-[0.3em] uppercase">
              STRIVE FOR EXCELLENCE // MEMBER OF UJB GROUP
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase"
          >
            PT. Prima Usaha<br />
            <span className="text-zinc-500">Mitra Abadi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="mt-6 lg:mt-8 text-base lg:text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
          >
            Kami berkomitmen memberikan kontribusi nyata dalam mendukung pertumbuhan dan perkembangan usaha mitra kami dengan rekayasa teknis dan solusi karoseri berkualitas tinggi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="mt-8 lg:mt-12 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white hover:bg-zinc-200 text-zinc-950 rounded-none px-8 lg:px-10 py-6 lg:py-8 text-base lg:text-lg uppercase font-black tracking-widest group transition-all"
            >
              Hubungi Sales
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <div className="flex items-center gap-4 lg:gap-6">
              <div className="flex flex-col">
                <span className="text-zinc-500 text-[8px] lg:text-[10px] font-mono uppercase tracking-widest leading-none mb-1">Global Standards</span>
                <span className="text-white font-bold text-xs lg:text-sm">ISO 9001:2015</span>
              </div>
              <div className="h-6 lg:h-8 w-[1px] bg-zinc-800" />
              <div className="flex flex-col">
                <span className="text-zinc-500 text-[8px] lg:text-[10px] font-mono uppercase tracking-widest leading-none mb-1">Safety Compliance</span>
                <span className="text-white font-bold text-xs lg:text-sm">UL 1746 Certified</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="hidden lg:block relative"
        >
          <div className="relative aspect-square w-full max-w-md mx-auto industrial-border p-8 bg-zinc-900/50 backdrop-blur-xl">
             <div className="absolute inset-0 bg-grid-zinc opacity-20" />
             <div className="relative z-10 h-full w-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="p-4 bg-zinc-800 border border-white/10">
                    <Cpu className="text-zinc-400" size={32} />
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Tech Spec</span>
                    <span className="block text-white font-bold">FAB_V4.0</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-1 w-full bg-zinc-800 relative overflow-hidden">
                    <motion.div 
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-white" 
                    />
                  </div>
                  <p className="text-xs text-zinc-500 font-mono leading-tight">
                    INTEGRATED SYSTEM DIAGNOSTICS: RUNNING...<br />
                    STRENGTH ANALYTICS: OPTIMAL<br />
                    PRECISION TOLERANCE: 0.001MM
                  </p>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10">
                  <ShieldCheck className="text-zinc-400" size={24} />
                  <div>
                    <span className="block text-[10px] font-mono text-zinc-500 uppercase">Durability Check</span>
                    <span className="block text-white text-sm font-bold uppercase tracking-tighter leading-none mt-1">Guaranteed Quality</span>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Technical Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  );
}


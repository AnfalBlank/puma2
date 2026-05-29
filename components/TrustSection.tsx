"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Shield, Award, CheckCircle, Cpu } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const totalFrames = 90;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(value * eased);
      if (frame >= totalFrames) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(next);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

type TrustItem = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  stat: string;
  label: string;
  numeric?: { value: number; suffix?: string };
};

const trustItems: TrustItem[] = [
  {
    icon: Shield,
    stat: "Vendor Resmi",
    label: "Pertamina & BUMN",
  },
  {
    icon: Award,
    stat: "ISO Certified",
    label: "9001:2015 & 45001:2018",
  },
  {
    icon: CheckCircle,
    stat: "UL 1746",
    label: "Underground Tank Double Wall",
  },
  {
    icon: Cpu,
    stat: "Pertashop",
    label: "Unit Terdistribusi",
    numeric: { value: 800, suffix: "+" },
  },
];

const clients = [
  "ALDIKA PUTERA MITRA UTAMA",
  "AIR KAPUAS KALBAR",
  "ALMIRA DISTRIBUSI & GAS",
  "SADIKUN NIAGAMAS RAYA",
  "GAYA MAKMUR MOBIL",
  "SURYAMAS CIPTA PERKASA",
  "LEMATANG MANDIRI GROUP",
  "RODAMAS MAKMUR MOTOR",
];

export function TrustSection() {
  return (
    <section
      className="bg-zinc-950 border-b border-white/5 py-16 relative overflow-hidden"
      aria-label="Sertifikasi dan kepercayaan mitra"
    >
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-zinc-950 p-8 md:p-10 flex flex-col items-center text-center group hover:bg-zinc-900 transition-colors relative"
            >
              <span
                className="absolute top-0 left-0 right-0 h-px bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                aria-hidden="true"
              />
              <item.icon
                size={28}
                className="text-zinc-500 mb-5 group-hover:text-brand transition-colors"
              />
              <div className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">
                {item.numeric ? (
                  <span className="text-brand">
                    <Counter value={item.numeric.value} suffix={item.numeric.suffix} />
                  </span>
                ) : (
                  item.stat
                )}
              </div>
              <span className="mt-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-relaxed group-hover:text-zinc-400 transition-colors">
                {item.numeric ? `${item.stat} · ${item.label}` : item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Client list */}
        <div className="mt-16 pt-12 border-t border-white/5">
          <h2 className="text-center text-zinc-500 font-mono text-[11px] uppercase tracking-[0.3em] mb-10">
            Dipercaya Mitra Nasional
          </h2>
          <ul className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {clients.map((client) => (
              <li
                key={client}
                className="px-5 py-3 bg-white/[0.02] border border-white/10 text-zinc-400 font-bold uppercase tracking-tight hover:text-white hover:border-brand/50 hover:bg-brand/5 transition-all text-[11px] lg:text-xs"
              >
                {client}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 bg-grid-zinc opacity-[0.04] pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}

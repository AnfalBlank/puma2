"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Shield, Award, CheckCircle, Package, Cpu } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let frame = 0;
      const duration = 2; // seconds
      const totalFrames = Math.round(duration * 60);
      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(value * progress);
        
        if (frame === totalFrames) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(currentCount);
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const trustItems = [
  {
    icon: Shield,
    label: "Vendor Resmi",
    subLabel: "Pertamina & BUMN",
  },
  {
    icon: Award,
    label: "ISO Certified",
    subLabel: "9001:2015 & 45001",
  },
  {
    icon: CheckCircle,
    label: "UL 1746",
    subLabel: "Double Wall Tank",
  },
  {
    icon: Cpu,
    label: "Precision Unit",
    value: 800,
    suffix: "+",
    subLabel: "Pertashop Delivered",
  },
];

export function TrustSection() {
  return (
    <section className="bg-zinc-950 border-b border-white/5 py-12 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-950 p-10 flex flex-col items-center text-center group hover:bg-zinc-900 transition-colors"
            >
              <item.icon size={28} className="text-zinc-600 mb-6 group-hover:text-white transition-colors" />
              
              <div className="flex flex-col gap-1">
                <div className="text-2xl font-black text-white uppercase tracking-tighter">
                  {item.value ? (
                    <Counter value={item.value} suffix={item.suffix} />
                  ) : item.label}
                </div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest group-hover:text-zinc-400 transition-colors leading-relaxed">
                  {item.value ? item.subLabel : item.subLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client List */}
        <div className="mt-16 pt-16 border-t border-white/5">
           <h4 className="text-center text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] mb-12">Dipercaya Oleh Mitra Nasional</h4>
           
           <div className="flex flex-wrap justify-center gap-4 lg:gap-6 opacity-60 hover:opacity-100 transition-opacity duration-700">
              {["ALDIKA PUTERA MITRA UTAMA PT", "AIR KAPUAS KALBAR PT", "ALMIRA DISTRIBUSI & GAS PT", "SADIKUN NIAGAMAS RAYA PT", "GAYA MAKMUR MOBIL PT", "SURYAMAS CIPTA PERKASA PT"].map((client, i) => (
                 <div key={i} className="px-6 py-4 bg-zinc-900/50 border border-white/5 text-zinc-400 font-bold uppercase tracking-tighter hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all cursor-default text-xs lg:text-sm">
                    {client}
                 </div>
              ))}
           </div>
        </div>
      </div>

      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-zinc opacity-5 pointer-events-none" />
    </section>
  );
}


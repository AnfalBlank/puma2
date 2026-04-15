"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Truck, Box, Layers, Hammer } from "lucide-react";

const products = [
  {
    id: "01",
    title: "Tangki Pendam",
    description: "Tangki penyimpanan bawah tanah berkualitas tinggi dengan perlindungan korosi maksimal.",
    icon: Layers,
    specs: "Underground Storage Tank",
  },
  {
    id: "02",
    title: "Dump Truck",
    description: "Konstruksi bodi dump truck yang kokoh untuk kebutuhan angkutan berat di berbagai medan.",
    icon: Truck,
    specs: "Heavy Duty Body",
  },
  {
    id: "03",
    title: "Wing Box",
    description: "Solusi bodi wing box untuk efisiensi bongkar muat logistik dan distribusi barang.",
    icon: Box,
    specs: "Logistics Optimization",
  },
  {
    id: "04",
    title: "Tangki BBM Pertamina",
    description: "Pembuatan tangki transportasi BBM yang sesuai dengan standar keamanan Pertamina.",
    icon: Truck,
    specs: "Pertamina Safety Standard",
  },
  {
    id: "05",
    title: "Pertashop",
    description: "Unit pengisian BBM modular (Pertashop) untuk jangkauan energi hingga pelosok negeri.",
    icon: Hammer,
    specs: "Modular Fuel Station",
  },
];

export function ProductsSection() {
  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em] block mb-4">
              Catalog // Capabilities
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
              Solusi <br />
              <span className="text-zinc-600">Manufaktur</span> Berkelas.
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-lg font-medium leading-relaxed">
            Menghadirkan produk berkualitas tinggi yang telah teruji ketangguhannya di berbagai sektor industri vital di Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-zinc-950 p-10 lg:p-12 overflow-hidden flex flex-col justify-between h-[380px] lg:h-[450px]"
            >
              {/* Animated Background Overlay */}
              <div className="absolute inset-0 bg-zinc-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10 lg:mb-12">
                   <div className="text-zinc-500 font-mono text-xl lg:text-2xl group-hover:text-white transition-colors">{product.id}</div>
                   <div className="p-3 lg:p-4 bg-zinc-900 border border-white/5 group-hover:bg-zinc-800 group-hover:border-white/20 transition-all duration-300">
                      <product.icon size={28} className="text-zinc-500 group-hover:text-white" />
                   </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter mb-4 group-hover:translate-x-4 transition-transform duration-300">
                  {product.title}
                </h3>
                <p className="text-zinc-500 text-xs lg:text-sm max-w-sm mb-8 group-hover:text-zinc-300 transition-colors duration-300">
                  {product.description}
                </p>
              </div>

              <div className="relative z-10 flex justify-between items-end border-t border-zinc-900 pt-8 group-hover:border-zinc-800">
                <div className="space-y-1">
                  <span className="block text-[8px] lg:text-[10px] font-mono text-zinc-600 uppercase tracking-widest group-hover:text-zinc-400">Technical Spec</span>
                  <span className="block text-zinc-400 font-bold text-xs lg:text-sm uppercase group-hover:text-white leading-none">{product.specs}</span>
                </div>
                <div className="p-3 bg-zinc-900 text-zinc-600 border border-white/5 group-hover:bg-white group-hover:text-zinc-950 group-hover:border-white transition-all duration-300">
                  <ArrowUpRight size={20} className="lg:w-6 lg:h-6" />
                </div>
              </div>

              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 p-4 text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity">
                <Settings className="w-32 h-32 lg:w-48 lg:h-48 animate-spin-slow" style={{ animationDuration: '20s' }} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-zinc opacity-5 pointer-events-none -z-10" />
    </section>
  );
}

function Settings({ className, style }: { className?: string, style?: any }) {
  return (
    <svg 
      className={className} 
      style={style}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" strokeWidth="1" 
      strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 0-2-2h-.44a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 0-2 2v.44a2 2 0 0 0 2 2 2 2 0 0 0 2 2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 0-2 2h.44a2 2 0 0 0 2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 0 2-2v-.44a2 2 0 0 0-2-2 2 2 0 0 0-2-2 2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 0 2-2h-.44a2 2 0 0 0-2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 0-2-2z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

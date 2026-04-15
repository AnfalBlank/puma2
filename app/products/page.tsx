"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Truck, Box, Layers, Hammer, Settings, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const productsDetail = [
  {
    id: "01",
    title: "Tangki Pendam",
    subTitle: "Underground Storage Tank",
    description: "Tangki penyimpanan bawah tanah berkualitas tinggi dengan perlindungan korosi maksimal (Double Wall). Diproduksi sesuai standar internasional (UL 1746) untuk industri SPBU dan kilang minyak.",
    icon: Layers,
    features: ["Double Wall Technology", "Anti-Corrosion Coating", "Leak Detection Sensor", "ISO Certification"],
    image: "https://images.unsplash.com/photo-1595186061386-88094776101c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Dump Truck",
    subTitle: "Heavy Duty Body Construction",
    description: "Konstruksi bodi dump truck yang kokoh untuk kebutuhan angkutan berat di berbagai medan pertambangan dan infrastruktur. Menggunakan material High-Tensile Steel untuk daya tahan maksimal.",
    icon: Truck,
    features: ["Hardox/High-Tensile Steel", "Reinforced Chassis", "Heavy-Duty Hydraulic System", "Custom Payload Design"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Wing Box",
    subTitle: "Logistics Optimization Solution",
    description: "Solusi bodi wing box untuk efisiensi bongkar muat logistik dan distribusi barang. Sistem hidrolik yang presisi memudahkan akses dari kedua sisi kendaraan.",
    icon: Box,
    features: ["Precision Hydraulic System", "Lightweight Aluminum Body", "Weatherproof Sealing", "Efficient Loading Access"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Tangki BBM Pertamina",
    subTitle: "Pertamina Safety Standard Transport",
    description: "Pembuatan tangki transportasi BBM yang sesuai dengan standar keamanan Pertamina. Menjamin distribusi bahan bakar yang aman, efisien, dan andal ke seluruh wilayah Indonesia.",
    icon: Truck,
    features: ["Pertamina Spec Compliance", "Static Grounding System", "Vapor Recovery System", "High-Safety Valves"],
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "Pertashop Unit",
    subTitle: "Modular Fuel Station",
    description: "Unit pengisian BBM modular (Pertashop) untuk jangkauan energi hingga pelosok negeri. Desain kompak, aman, dan mudah dipasang di berbagai lokasi strategis.",
    icon: Hammer,
    features: ["Compact Modular Design", "Standard Pertamina Safety", "Quick Installation", "Full Equipment Integration"],
    image: "https://images.unsplash.com/photo-1621905252507-b35222028781?q=80&w=2069&auto=format&fit=crop",
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-zinc-950 text-white selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-20 bg-zinc-900/50 border-b border-white/5">
        <div className="container px-6 mx-auto">
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <ChevronRight size={12} />
            <span className="text-white">Products</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]">
            Engineering <br />
            <span className="text-primary">Mastery Catalog</span>
          </h1>
        </div>
      </section>

      {/* List Detail */}
      <section className="py-24">
        <div className="container px-6 mx-auto">
          {productsDetail.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-16 py-32 border-b border-white/5 last:border-none ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Product Image */}
              <div className="flex-1 w-full relative">
                <div className="aspect-[16/10] bg-zinc-900 industrial-border p-3 overflow-hidden">
                  <div className="h-full w-full bg-zinc-800 relative">
                     <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 transition-all duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/20 flex items-center justify-center p-8 backdrop-blur-xl border border-primary/20 z-10 hidden lg:flex">
                  <product.icon size={64} className="text-primary" />
                </div>
              </div>

              {/* Product Content */}
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4 mb-2">
                   <span className="text-primary font-black text-4xl tracking-tighter">/ {product.id}</span>
                   <div className="h-[2px] flex-1 bg-white/5" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                    {product.title}
                  </h2>
                  <h3 className="text-primary font-mono text-sm uppercase tracking-widest">{product.subTitle}</h3>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-2 gap-y-4">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 bg-primary" />
                       <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <button className="px-12 py-5 bg-white hover:bg-primary text-zinc-950 hover:text-white text-sm font-black uppercase tracking-widest transition-all rounded-none group flex items-center gap-4">
                    Get Details & Specs
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Extra Services */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="container px-6 mx-auto">
           <div className="mb-16 text-center lg:text-left">
              <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">Layanan Jasa Tambahan</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                Engineering <br /> <span className="text-zinc-500">& Fabrication Services</span>
              </h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                 { title: "CNC Laser Cutting", desc: "Berbagai bentuk custom untuk gerbang, pagar & dekorasi." },
                 { title: "Pengecatan & Reparasi", desc: "Painting and repair services for commercial vehicles." },
                 { title: "Rekondisi Karoseri", desc: "Perbaikan unit kendaraan berat lama menjadi baru." },
                 { title: "Modifikasi Tangki", desc: "Penambahan kapasitas dan modifikasi custom tangki." },
                 { title: "Powder Coating", desc: "Finishing awet dan tahan lama anti karat." },
                 { title: "Bending & Roll Plate", desc: "Jasa roll plate dengan ketebalan maksimal hingga 10 mm." },
                 { title: "Pembuatan Aksesories", desc: "Sparkboard, Perisai Kolong, Bumper Belakang, dll." },
              ].map((service, i) => (
                 <div key={i} className="p-8 bg-zinc-900 border border-white/5 hover:border-primary/50 transition-colors group">
                    <div className="w-12 h-12 bg-zinc-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                       <Hammer className="text-zinc-500 group-hover:text-primary transition-colors" size={20} />
                    </div>
                    <h3 className="text-lg font-black text-white uppercase tracking-tighter mb-2">{service.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{service.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA section summary */}
      <section className="py-32 bg-zinc-900/50 border-t border-white/5">
        <div className="container px-6 mx-auto flex flex-col items-center text-center">
          <Settings className="text-primary w-24 h-24 mb-12 animate-spin-slow" strokeWidth={1} />
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-12 max-w-4xl">
            Butuh Spesifikasi <br />
            <span className="text-zinc-500">Kustom Untuk Kendaraan</span> Anda?
          </h2>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white py-10 px-16 text-xl font-black rounded-none border-none tracking-[0.2em]">
            DISKUSI DENGAN ENGINEER KAMI
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

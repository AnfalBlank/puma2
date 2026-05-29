"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageFAQ } from "@/components/PageFAQ";
import { motion } from "framer-motion";
import {
  Truck,
  Box,
  Layers,
  Container,
  HardHat,
  FlaskConical,
  Fuel,
  ChevronRight,
  ArrowRight,
  Hammer,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProductsHeroAnim } from "@/components/animations/ProductsHeroAnim";
import { useContent } from "@/components/ContentProvider";
import { ICON_MAP } from "@/components/icons";

type Service = { title: string; desc: string };

const services: Service[] = [
  { title: "CNC Laser Cutting", desc: "Custom shapes untuk gerbang, pagar, dan dekorasi industri." },
  { title: "Pengecatan & Reparasi", desc: "Painting and repair services untuk kendaraan komersial." },
  { title: "Rekondisi Karoseri", desc: "Perbaikan unit kendaraan berat lama menjadi kondisi baru." },
  { title: "Modifikasi Tangki", desc: "Penambahan kapasitas dan modifikasi custom tangki." },
  { title: "Powder Coating", desc: "Finishing tahan lama dan anti karat." },
  { title: "Bending & Roll Plate", desc: "Roll plate hingga ketebalan 10 mm." },
  { title: "Aksesoris Kendaraan", desc: "Sparkboard, perisai kolong, bumper belakang, dll." },
  { title: "Engineering Custom", desc: "Desain rekayasa sesuai spesifikasi industri Anda." },
];

export default function ProductsClient() {
  const { products, hero, faqs } = useContent();
  const h = hero.products;

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
              <span className="text-white">Produk</span>
            </nav>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              {h.title} {h.highlight && <><br /><span className="text-brand">{h.highlight}</span></>}
            </h1>
            <p className="text-zinc-400 max-w-xl mt-6 text-base md:text-lg leading-relaxed">
              {h.intro}
            </p>
          </div>
          <div className="lg:col-span-6">
            <ProductsHeroAnim />
          </div>
        </div>
      </section>

      {/* List Detail */}
      <section className="py-20 md:py-24" aria-label="Detail produk">
        <div className="container px-6 mx-auto">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16 py-16 md:py-24 border-b border-white/5 last:border-none ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Visual */}
              <div className="flex-1 w-full">
                <div className="industrial-border bg-zinc-900/80 aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent" />
                  <div className="absolute top-0 left-0 p-5 text-brand font-mono text-[11px] uppercase tracking-widest mix-blend-difference">
                    /{product.id}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between z-10 gap-3">
                    <span className="text-white font-black uppercase tracking-tight text-sm leading-tight max-w-[60%] drop-shadow">
                      {product.title}
                    </span>
                    <span className="text-[10px] font-mono text-white/80 uppercase tracking-widest text-right">
                      {product.subTitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center space-y-6 lg:space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-brand font-black text-3xl md:text-4xl tracking-tighter">
                    /{product.id}
                  </span>
                  <span className="h-px flex-1 bg-brand/30" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.95]">
                    {product.title}
                  </h2>
                  <p className="text-brand font-mono text-xs md:text-sm uppercase tracking-widest">
                    {product.subTitle}
                  </p>
                </div>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
                  {product.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 max-w-lg">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-brand shrink-0" aria-hidden="true" />
                      <span className="text-zinc-300 text-xs font-mono uppercase tracking-widest">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-brand hover:bg-[var(--brand-dark)] text-white text-xs md:text-sm font-black uppercase tracking-widest transition-colors group shadow-[0_8px_30px_-12px_rgba(234,122,28,0.5)]"
                  >
                    Diskusi Spesifikasi
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-24 bg-zinc-950 border-t border-white/5" aria-labelledby="services-heading">
        <div className="container px-6 mx-auto">
          <div className="mb-12 md:mb-16 text-center lg:text-left">
            <span className="text-brand font-mono text-xs uppercase tracking-widest mb-4 block">
              Layanan Tambahan
            </span>
            <h2
              id="services-heading"
              className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight"
            >
              Engineering <br />
              <span className="text-brand">& Fabrication Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="p-6 md:p-7 bg-zinc-900 border border-white/5 hover:border-brand/40 transition-colors group relative overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-full h-px bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                />
                <div className="w-10 h-10 bg-zinc-950 border border-white/5 flex items-center justify-center mb-5 group-hover:border-brand/40 group-hover:bg-brand/10 transition-colors">
                  <Hammer
                    className="text-zinc-400 group-hover:text-brand transition-colors"
                    size={18}
                  />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-zinc-900/50 border-t border-white/5">
        <div className="container px-6 mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 max-w-3xl leading-[0.95]">
            Butuh Spesifikasi <br />
            <span className="text-brand">Custom Untuk Unit</span> Anda?
          </h2>
          <Link
            href="/contact"
            className="bg-brand hover:bg-[var(--brand-dark)] text-white py-5 px-10 md:px-12 text-base md:text-lg font-black tracking-[0.2em] uppercase inline-flex items-center gap-3 group transition-colors shadow-[0_12px_40px_-12px_rgba(234,122,28,0.55)]"
          >
            Diskusi dengan Engineer
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <PageFAQ
        eyebrow="FAQ · Produk & Spesifikasi"
        title="Tanya Spesifikasi"
        highlight="Tangki & Karoseri."
        intro="Pertanyaan teknis seputar Mobil Tangki BBM Pertamina, UGT UL 1746, AST Modular, Tangki Kimia, support mining, dan karoseri niaga."
        items={faqs.products}
        ctaWAMessage="Halo PUMA, saya ingin penawaran spesifikasi produk (mohon kirim brosur dan price list)."
        ctaPrimaryLabel="Minta Penawaran"
        jsonLdId="ld-faq-products"
      />

      <Footer />
    </main>
  );
}

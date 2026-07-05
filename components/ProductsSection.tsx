"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContent } from "./ContentProvider";
import { ICON_MAP } from "./icons";

export function ProductsSection() {
  const { products } = useContent();

  return (
    <section
      className="py-20 md:py-28 bg-zinc-950 relative overflow-hidden"
      aria-labelledby="products-heading"
    >
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-14 md:mb-20">
          <div className="max-w-2xl">
            <span className="text-brand font-mono text-xs uppercase tracking-[0.4em] block mb-4">
              Katalog · Lini Produk
            </span>
            <h2
              id="products-heading"
              className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] uppercase tracking-tighter"
            >
              Solusi Karoseri <br />
              <span className="text-brand">& Fabrikasi Tangki</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-base md:text-lg leading-relaxed">
            Lini produk lengkap untuk Pertamina, sektor pertambangan, kimia, dan logistik niaga
            nasional — dengan standar mutu industri global.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {products.map((product, index) => {
            const Icon = ICON_MAP[product.iconKey] ?? ICON_MAP.Truck;
            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-zinc-950 overflow-hidden flex flex-col min-h-[420px]"
              >
                {/* Photo */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 p-5 flex items-center justify-between">
                    <span className="text-white font-mono text-xs uppercase tracking-widest drop-shadow">
                      /{product.id}
                    </span>
                    <span className="p-2.5 bg-zinc-950/70 backdrop-blur border border-white/15 group-hover:bg-brand group-hover:border-brand transition-colors">
                      <Icon size={18} className="text-white" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex-1 flex flex-col p-6 lg:p-8">
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-px bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                  />
                  <span className="block text-[10px] font-mono text-brand uppercase tracking-widest mb-3">
                    {product.tag}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-black text-white uppercase tracking-tighter mb-3 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{product.description}</p>

                  <div className="mt-auto pt-6 flex justify-between items-end border-t border-white/5 group-hover:border-brand/30 transition-colors">
                    <div className="space-y-1 min-w-0">
                      <span className="block text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                        Highlight
                      </span>
                      <span className="block text-zinc-300 font-bold text-xs uppercase truncate">
                        {product.spec}
                      </span>
                    </div>
                    <Link
                      href="/products"
                      aria-label={`Lihat detail ${product.title}`}
                      className="p-2.5 bg-zinc-900 text-zinc-400 border border-white/10 group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all duration-300"
                    >
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 border border-brand text-brand hover:bg-brand hover:text-white px-8 py-4 text-xs md:text-sm uppercase font-black tracking-widest transition-colors"
          >
            Lihat Katalog Lengkap
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div
        className="absolute inset-0 bg-grid-zinc opacity-[0.04] pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}

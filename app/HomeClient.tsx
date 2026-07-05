"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductsSection } from "@/components/ProductsSection";
import { InsightSection } from "@/components/InsightSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export default function HomeClient() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="relative bg-zinc-950 text-white selection:bg-white selection:text-zinc-950 font-sans overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand z-[100] origin-left"
        style={{ scaleX }}
        aria-hidden="true"
      />

      <Navbar />

      <section id="home" aria-label="Beranda">
        <Hero />
      </section>

      <TrustSection />

      <section id="about" aria-label="Tentang PUMA">
        <AboutSection />
      </section>

      <section id="products" aria-label="Produk Karoseri & Tangki">
        <ProductsSection />
      </section>

      <section id="insights" aria-label="Insight Industri">
        <InsightSection />
      </section>

      <section id="faq" aria-label="Pertanyaan Umum">
        <FAQSection />
      </section>

      <section id="contact" aria-label="Hubungi PUMA">
        <ContactSection />
      </section>

      {/* CTA */}
      <section
        className="py-24 md:py-32 bg-white relative overflow-hidden"
        aria-label="Mulai Proyek Anda"
      >
        <div className="container px-6 mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <span className="text-brand font-mono text-xs uppercase tracking-[0.4em] block mb-6">
              Siap Berkolaborasi?
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-zinc-950 tracking-tighter uppercase mb-10 leading-[0.95]">
              Mulai Proyek <br />
              <span className="text-brand">Karoseri & Tangki</span> Anda.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              <a
                href="#contact"
                className="w-full sm:w-auto px-12 py-6 bg-brand hover:bg-[var(--brand-dark)] text-white text-base md:text-lg font-black uppercase tracking-widest transition-colors inline-flex items-center justify-center gap-3 shadow-[0_12px_40px_-12px_rgba(234,122,28,0.55)]"
              >
                Minta Penawaran
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex flex-col text-center sm:text-left text-zinc-500 font-mono uppercase tracking-widest text-[10px]">
                <span>Hotline Sales</span>
                <a
                  href={SITE.phone.href}
                  className="text-zinc-950 font-black text-lg tracking-tight normal-case hover:text-brand transition-colors"
                >
                  {SITE.phone.display}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative dotted bg + brand accent */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-1 bg-brand"
        />
      </section>

      <Footer />
    </main>
  );
}

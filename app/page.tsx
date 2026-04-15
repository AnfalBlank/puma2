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

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative bg-zinc-950 text-white selection:bg-white selection:text-zinc-950 font-sans overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-white z-[100] origin-left" 
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <div id="home">
        <Hero />
      </div>

      <TrustSection />

      <div id="about">
        <AboutSection />
      </div>

      <div id="products">
        <ProductsSection />
      </div>

      <div id="insights">
        <InsightSection />
      </div>

      <div id="faq">
        <FAQSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      {/* CTA Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container px-6 mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em] block mb-8">Ready to Collaborate?</span>
            <h2 className="text-5xl md:text-8xl font-black text-zinc-950 tracking-tighter uppercase mb-12 leading-[0.9]">
              Start Your <br />
              <span className="text-zinc-400">Project</span> Today.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button className="w-full sm:w-auto px-16 py-8 bg-zinc-950 hover:bg-zinc-800 text-white text-xl font-black uppercase tracking-widest transition-all">
                Minta Penawaran
              </button>
              <div className="flex flex-col text-left text-zinc-400 font-mono uppercase tracking-widest text-xs">
                <span>Fast Response // Hotline</span>
                <span className="text-zinc-950 font-black text-lg">+62 21 1234 5678</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Background for CTA */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </section>

      {/* Footer */}
      <Footer />

      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
    </main>
  );
}

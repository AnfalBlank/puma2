"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { waLink } from "@/lib/site";
import { useContent } from "./ContentProvider";

export function FAQSection() {
  const { faqs } = useContent();
  const items = faqs.home;

  return (
    <section
      className="py-20 md:py-28 bg-zinc-950 relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="container px-6 mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <span className="text-brand font-mono text-xs uppercase tracking-[0.4em] block mb-4">
            Support · FAQ
          </span>
          <h2
            id="faq-heading"
            className="text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter mb-6"
          >
            Pertanyaan <br />
            <span className="text-brand">Sering Diajukan.</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium max-w-md">
            Jawaban cepat seputar fabrikasi, sertifikasi, dan layanan purna jual untuk mendukung
            operasional Anda.
          </p>

          <div className="mt-10 p-6 md:p-8 bg-zinc-900 border border-white/5 space-y-3 relative">
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 w-12 h-1 bg-brand"
            />
            <span className="text-brand font-mono text-[10px] uppercase tracking-widest block">
              Butuh bantuan teknis?
            </span>
            <p className="text-white font-bold text-sm uppercase">
              Tim engineer kami siap konsultasi spesifikasi dan kebutuhan kustom.
            </p>
            <Link
              href={waLink("Halo PUMA, saya ingin konsultasi spesifikasi tangki / karoseri.")}
              target="_blank"
              className="inline-block text-brand border-b border-brand/40 hover:border-brand transition-all pb-1 text-sm font-bold uppercase tracking-widest mt-2"
            >
              Hubungi Tim Sales
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {items.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-white/5 bg-zinc-900 px-5 lg:px-7 transition-all hover:bg-zinc-800/80 hover:border-brand/30 last:border-b data-[state=open]:border-brand/40"
                >
                  <AccordionTrigger className="text-white hover:no-underline hover:text-brand font-black uppercase text-left tracking-tight text-base md:text-lg py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 leading-relaxed text-sm md:text-base pb-6 border-t border-brand/20 pt-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>

      <div
        className="absolute inset-0 bg-grid-zinc opacity-[0.04] pointer-events-none -z-10"
        aria-hidden="true"
      />
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE, waLink } from "@/lib/site";

export type FAQItem = {
  q: string;
  a: string;
};

type PageFAQProps = {
  /** small uppercase eyebrow above the title */
  eyebrow?: string;
  /** main heading (first line) */
  title: string;
  /** highlight word/phrase shown in brand color on the next line */
  highlight?: string;
  /** short paragraph beneath the title */
  intro: string;
  /** the list of questions/answers */
  items: FAQItem[];
  /** WhatsApp pre-filled message for the CTA button */
  ctaWAMessage?: string;
  /** label of the primary CTA button */
  ctaPrimaryLabel?: string;
  /** id for JSON-LD script (must be unique per page) */
  jsonLdId?: string;
};

export function PageFAQ({
  eyebrow = "Support · FAQ",
  title,
  highlight,
  intro,
  items,
  ctaWAMessage = "Halo PUMA, saya ingin konsultasi spesifikasi proyek.",
  ctaPrimaryLabel = "Diskusi via WhatsApp",
  jsonLdId = "ld-faq",
}: PageFAQProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section
      className="py-20 md:py-28 bg-zinc-950 relative overflow-hidden border-t border-white/5"
      aria-labelledby={`${jsonLdId}-heading`}
    >
      <Script
        id={jsonLdId}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container px-6 mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left column — copy + CTA card */}
        <div className="lg:col-span-5">
          <span className="text-brand font-mono text-xs uppercase tracking-[0.4em] block mb-4">
            {eyebrow}
          </span>
          <h2
            id={`${jsonLdId}-heading`}
            className="text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter mb-6"
          >
            {title}
            {highlight && (
              <>
                <br />
                <span className="text-brand">{highlight}</span>
              </>
            )}
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium max-w-md">
            {intro}
          </p>

          {/* Strong CTA card */}
          <div className="mt-10 p-6 md:p-8 bg-zinc-900 border border-white/10 relative overflow-hidden">
            <span aria-hidden="true" className="absolute top-0 left-0 w-12 h-1 bg-brand" />
            <div
              aria-hidden="true"
              className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(234,122,28,0.25), transparent 70%)" }}
            />

            <span className="text-brand font-mono text-[10px] uppercase tracking-widest block">
              Belum menemukan jawabannya?
            </span>
            <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-tight mt-2 leading-snug">
              Bicara langsung dengan engineer kami.
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mt-3">
              Konsultasi gratis untuk spesifikasi tangki, kapasitas, dan timeline produksi.
              Respons cepat di jam kerja.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={waLink(ctaWAMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-brand hover:bg-[var(--brand-dark)] text-white text-xs font-black uppercase tracking-widest transition-colors shadow-[0_8px_30px_-12px_rgba(234,122,28,0.6)]"
              >
                <MessageCircle size={16} />
                {ctaPrimaryLabel}
              </a>
              <a
                href={SITE.phone.href}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 border border-white/20 hover:border-brand hover:text-brand text-white text-xs font-black uppercase tracking-widest transition-colors"
              >
                <Phone size={16} />
                Telepon Sales
              </a>
            </div>

            <div className="mt-6 pt-5 border-t border-white/5 grid grid-cols-2 gap-4 text-[10px] font-mono uppercase tracking-widest">
              <div>
                <span className="text-zinc-500 block">Telp</span>
                <span className="text-white tracking-tight normal-case">
                  {SITE.phone.display}
                </span>
              </div>
              <div>
                <span className="text-zinc-500 block">WhatsApp</span>
                <span className="text-white tracking-tight normal-case">
                  {SITE.whatsapp.display}
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-brand text-xs font-black uppercase tracking-widest border-b border-brand/40 hover:border-brand pb-1 transition-all"
            >
              Form penawaran lengkap
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Right column — accordion */}
        <div className="lg:col-span-7">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {items.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
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

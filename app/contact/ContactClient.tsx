"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageFAQ } from "@/components/PageFAQ";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare, ChevronRight, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE, waLink } from "@/lib/site";
import { ContactHeroAnim } from "@/components/animations/ContactHeroAnim";
import { useContent } from "@/components/ContentProvider";
import { useState } from "react";

export default function ContactClient() {
  const { hero, faqs, site } = useContent();
  const h = hero.contact;

  // Effective contact info derived from admin overrides + defaults.
  const phoneDisplay = site.phoneDisplay ?? SITE.phone.display;
  const phoneHref = site.phoneHref ?? SITE.phone.href;
  const email = site.email ?? SITE.email.display;
  const waDigits = site.whatsappDigits ?? SITE.whatsapp.digits;
  const waDisplay = site.whatsappDisplay ?? SITE.whatsapp.display;
  const address = site.address ?? SITE.address.full;

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
              <span className="text-white">Kontak</span>
            </nav>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              {h.title} {h.highlight && <><br /><span className="text-brand">{h.highlight}</span></>}
            </h1>
            <p className="text-zinc-400 max-w-xl mt-6 text-base md:text-lg leading-relaxed">
              {h.intro}
            </p>
          </div>
          <div className="lg:col-span-6">
            <ContactHeroAnim />
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24 relative overflow-hidden" aria-labelledby="contact-heading">
        <div className="container px-6 mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="max-w-md">
              <span className="text-brand font-mono text-xs uppercase tracking-[0.4em] block mb-6">
                Informasi Kontak
              </span>
              <h2
                id="contact-heading"
                className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.95]"
              >
                Mari Diskusikan <br /> Proyek Anda.
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Hubungi kami via telepon, WhatsApp, email, atau langsung kunjungi workshop di
                Karawang.
              </p>
            </div>

            <div className="space-y-8">
              <ContactItem
                icon={MapPin}
                title="Alamat Workshop"
                content={address}
              />
              <ContactItem
                icon={Phone}
                title="Telepon"
                content={phoneDisplay}
                subContent="Senin–Sabtu · 08.00–17.00 WIB"
                href={phoneHref}
              />
              <ContactItem
                icon={Mail}
                title="Email Inquiry"
                content={email}
                subContent="Response time < 24 jam"
                href={`mailto:${email}`}
              />
              <ContactItem
                icon={Instagram}
                title="Instagram"
                content={SITE.social.instagramHandle}
                subContent="Industry insight & portfolio"
                href={SITE.social.instagram}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${waDigits}?text=${encodeURIComponent("Halo PUMA, saya ingin konsultasi proyek tangki / karoseri.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand hover:bg-[var(--brand-dark)] text-white py-5 px-8 font-black uppercase text-xs tracking-widest inline-flex items-center justify-center gap-3 transition-colors shadow-[0_8px_30px_-12px_rgba(234,122,28,0.6)]"
              >
                Direct WhatsApp
                <MessageSquare size={16} />
              </a>
              <a
                href={phoneHref}
                className="border border-white/20 hover:border-brand hover:text-brand text-white py-5 px-8 font-black uppercase text-xs tracking-widest inline-flex items-center justify-center gap-3 transition-colors"
              >
                Telepon Sales
                <Phone size={16} />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <ContactForm waDigits={waDigits} waDisplay={waDisplay} />
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 md:pb-28" aria-label="Peta lokasi">
        <div className="container px-6 mx-auto">
          <div className="industrial-border p-2 bg-zinc-900">
            <iframe
              src="https://www.google.com/maps?q=Jl.%20Raya%20By%20Pass%20Jomin%20No.%2088%20Karawang&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, filter: "grayscale(0.5) invert(0.92) contrast(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi PT. Prima Usaha Mitra Abadi di Karawang"
              className="block w-full"
            />
          </div>
        </div>
      </section>

      <PageFAQ
        eyebrow="FAQ · Kontak & Layanan"
        title="Cara Cepat"
        highlight="Menghubungi Kami."
        intro="Channel komunikasi terbaik, waktu respons, info yang perlu disiapkan, dan alur dari penawaran hingga unit jadi."
        items={faqs.contact}
        ctaWAMessage="Halo PUMA, saya ingin konsultasi proyek dan butuh respons cepat."
        ctaPrimaryLabel="Chat WhatsApp"
        jsonLdId="ld-faq-contact"
      />

      <Footer />
    </main>
  );
}

function Field({
  label,
  name,
  children,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={name} className="block space-y-2">
      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactForm({ waDigits, waDisplay }: { waDigits: string; waDisplay: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      page: "contact",
      name: String(fd.get("full-name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      company: String(fd.get("company") || ""),
      subject: String(fd.get("subject") || ""),
      message: String(fd.get("message") || ""),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send");
      }
      setStatus("ok");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("err");
      setErrorMsg(err instanceof Error ? err.message : "Terjadi kesalahan");
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="bg-zinc-900 industrial-border p-8 md:p-10 lg:p-12 relative space-y-6"
      onSubmit={handleSubmit}
      aria-label="Form kontak"
    >
      <div className="absolute inset-0 bg-grid-zinc opacity-10 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">
            Kirim Pesan
          </h3>
          <p className="text-zinc-500 text-[11px] uppercase tracking-widest font-mono">
            Lengkapi form di bawah ini
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Nama Lengkap" name="full-name">
            <Input
              required
              name="full-name"
              placeholder="John Doe"
              className="bg-zinc-950 border-white/10 text-white placeholder:text-zinc-600 h-12 rounded-none focus-visible:ring-white"
            />
          </Field>
          <Field label="Email" name="email">
            <Input
              required
              type="email"
              name="email"
              placeholder="john@example.com"
              className="bg-zinc-950 border-white/10 text-white placeholder:text-zinc-600 h-12 rounded-none focus-visible:ring-white"
            />
          </Field>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Perusahaan" name="company">
            <Input
              name="company"
              placeholder="PT. Energi Maju"
              className="bg-zinc-950 border-white/10 text-white placeholder:text-zinc-600 h-12 rounded-none focus-visible:ring-white"
            />
          </Field>
          <Field label="Telepon" name="phone">
            <Input
              name="phone"
              placeholder="+62 812 ..."
              className="bg-zinc-950 border-white/10 text-white placeholder:text-zinc-600 h-12 rounded-none focus-visible:ring-white"
            />
          </Field>
        </div>
        <Field label="Subject" name="subject">
          <Input
            name="subject"
            placeholder="Mobil Tangki BBM 16 KL / UGT UL 1746 / Fuel Truck Mining"
            className="bg-zinc-950 border-white/10 text-white placeholder:text-zinc-600 h-12 rounded-none focus-visible:ring-white"
          />
        </Field>
        <Field label="Pesan" name="message">
          <Textarea
            required
            name="message"
            placeholder="Ceritakan kebutuhan dan spesifikasi proyek Anda..."
            className="bg-zinc-950 border-white/10 text-white placeholder:text-zinc-600 min-h-[140px] rounded-none focus-visible:ring-white"
          />
        </Field>

        {status === "ok" && (
          <div className="border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-xs font-mono uppercase tracking-widest px-4 py-3">
            ✓ Pesan terkirim. Tim sales akan menghubungi Anda secepatnya.
          </div>
        )}
        {status === "err" && (
          <div className="border border-red-500/40 bg-red-500/10 text-red-300 text-xs font-mono uppercase tracking-widest px-4 py-3">
            ✗ {errorMsg || "Gagal mengirim pesan"}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-brand hover:bg-[var(--brand-dark)] disabled:opacity-60 disabled:cursor-not-allowed text-white py-5 font-black uppercase tracking-[0.25em] flex items-center justify-center gap-3 group transition-colors shadow-[0_8px_30px_-12px_rgba(234,122,28,0.6)]"
        >
          {status === "sending" ? "Mengirim..." : "Kirim Sekarang"}
          <Send size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        </button>

        <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest text-center">
          Atau hubungi WhatsApp {waDisplay} ·{" "}
          <a
            className="text-brand hover:underline"
            href={`https://wa.me/${waDigits}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            kirim langsung
          </a>
        </p>
      </div>
    </motion.form>
  );
}

function ContactItem({
  icon: Icon,
  title,
  content,
  subContent,
  href,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  content: string;
  subContent?: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="p-3 bg-zinc-900 border border-white/5 group-hover:border-brand/40 transition-colors h-fit shrink-0">
        <Icon size={22} className="text-brand" />
      </span>
      <div className="space-y-1 min-w-0">
        <h3 className="text-white font-black uppercase tracking-tight text-base md:text-lg group-hover:text-brand transition-colors">
          {title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed break-words">{content}</p>
        {subContent && (
          <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
            {subContent}
          </p>
        )}
      </div>
    </>
  );

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex gap-5 group"
    >
      {inner}
    </a>
  ) : (
    <div className="flex gap-5 group">{inner}</div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/site";

export function ContactSection() {
  return (
    <section
      className="py-20 md:py-28 bg-zinc-950 relative border-t border-white/5"
      aria-labelledby="contact-heading"
    >
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left */}
          <div className="space-y-12">
            <div className="max-w-xl">
              <span className="text-brand font-mono text-xs uppercase tracking-[0.4em] block mb-4">
                Connect · Contact
              </span>
              <h2
                id="contact-heading"
                className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] uppercase tracking-tighter"
              >
                Minta <br />
                <span className="text-brand">Penawaran</span> Proyek.
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mt-6 max-w-lg">
                Konsultasikan kebutuhan fabrikasi tangki dan karoseri Anda dengan tim ahli kami.
                Solusi engineering presisi untuk Pertamina, pertambangan, kimia, dan logistik
                niaga.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <ContactItem
                icon={MapPin}
                label="Lokasi Workshop"
                content={SITE.address.full}
              />
              <ContactItem
                icon={Phone}
                label="Telepon"
                content={SITE.phone.display}
                subContent={`WA ${SITE.whatsapp.display}`}
                href={SITE.phone.href}
              />
              <ContactItem
                icon={Mail}
                label="Email Marketing"
                content={SITE.email.display}
                subContent="primausahamitraabadi.com"
                href={SITE.email.href}
              />
              <ContactItem
                icon={Instagram}
                label="Instagram"
                content={SITE.social.instagramHandle}
                subContent="Industry insight & portfolio"
                href={SITE.social.instagram}
              />
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-zinc-900 border border-white/5 relative space-y-6"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Form kontak penawaran"
          >
            <span className="absolute top-0 left-0 w-full h-1 bg-brand" aria-hidden="true" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Nama Lengkap" name="nama">
                <Input
                  required
                  name="nama"
                  placeholder="John Doe"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 h-12 rounded-none focus-visible:ring-white"
                />
              </Field>
              <Field label="Nama Perusahaan" name="company">
                <Input
                  name="company"
                  placeholder="PT. Energi Maju"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 h-12 rounded-none focus-visible:ring-white"
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Email Bisnis" name="email">
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 h-12 rounded-none focus-visible:ring-white"
                />
              </Field>
              <Field label="Nomor Telepon" name="phone">
                <Input
                  name="phone"
                  placeholder="+62 812 ..."
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 h-12 rounded-none focus-visible:ring-white"
                />
              </Field>
            </div>

            <Field label="Detail Kebutuhan" name="message">
              <Textarea
                required
                name="message"
                placeholder="Mis. Mobil Tangki BBM 16 KL, UGT UL 1746 dual compartment, Fuel Truck untuk site tambang ..."
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 min-h-[140px] rounded-none focus-visible:ring-white"
              />
            </Field>

            <Button
              type="submit"
              className="w-full bg-brand hover:bg-[var(--brand-dark)] text-white rounded-none h-14 text-base font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_8px_30px_-12px_rgba(234,122,28,0.6)]"
            >
              Kirim Permintaan
              <Send size={18} />
            </Button>

            <p className="text-[10px] font-mono text-zinc-500 text-center uppercase tracking-widest">
              Kerahasiaan data perusahaan Anda terjamin.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
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

function ContactItem({
  icon: Icon,
  label,
  content,
  subContent,
  href,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  content: string;
  subContent?: string;
  href?: string;
}) {
  const inner = (
    <>
      <div className="flex items-center gap-4">
        <div className="p-3 bg-zinc-900 border border-white/5 group-hover:border-brand/40 transition-colors">
          <Icon size={18} className="text-brand" />
        </div>
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
          {label}
        </span>
      </div>
      <div className="space-y-1">
        <p className="text-white font-bold tracking-tight text-base md:text-lg leading-snug break-words group-hover:text-brand transition-colors">
          {content}
        </p>
        {subContent && <p className="text-zinc-500 text-sm">{subContent}</p>}
      </div>
    </>
  );

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex flex-col gap-3 group"
    >
      {inner}
    </a>
  ) : (
    <div className="flex flex-col gap-3">{inner}</div>
  );
}

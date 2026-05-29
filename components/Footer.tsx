"use client";

import { Phone, Mail, MapPin, Instagram, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { LOGO } from "@/lib/media";

export function Footer() {
  return (
    <footer
      className="bg-zinc-950 border-t border-white/5 pt-20 pb-10 relative overflow-hidden"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container px-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        {/* Company */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-3 group" aria-label="Beranda PUMA">
            <Image
              src={LOGO}
              alt="Logo PT. Prima Usaha Mitra Abadi"
              width={676}
              height={240}
              className="w-auto h-10 md:h-12 object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="text-base font-black text-white tracking-tighter uppercase">
                Prima Usaha <span className="text-brand">Mitra Abadi</span>
              </span>
              <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-[0.2em] mt-1">
                Member of UJB Group
              </span>
            </span>
          </Link>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Vendor resmi Pertamina untuk Mobil Tangki BBM, UGT UL 1746, AST Modular, Tangki Kimia,
            dan support unit pertambangan. Karoseri niaga Wingbox, Semi Trailer, dan Losbak.
          </p>
          <div className="flex items-center gap-3">
            <SocialIcon icon={Instagram} href={SITE.social.instagram} label="Instagram" />
            <SocialIcon icon={Linkedin} href="#" label="LinkedIn" />
            <SocialIcon icon={MessageCircle} href={SITE.whatsapp.href} label="WhatsApp" />
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Navigasi" className="flex flex-col gap-6">
          <h3 className="text-white font-black uppercase tracking-widest text-sm border-l-4 border-brand pl-3">
            Navigasi
          </h3>
          <ul className="flex flex-col gap-3 text-zinc-400 text-sm font-semibold uppercase tracking-wide">
            <li><FooterLink href="/">Beranda</FooterLink></li>
            <li><FooterLink href="/about">Tentang Kami</FooterLink></li>
            <li><FooterLink href="/products">Produk Unggulan</FooterLink></li>
            <li><FooterLink href="/insight">Insight Industri</FooterLink></li>
            <li><FooterLink href="/contact">Kontak</FooterLink></li>
          </ul>
        </nav>

        {/* Products — aligned with client SEO brief */}
        <nav aria-label="Produk" className="flex flex-col gap-6">
          <h3 className="text-white font-black uppercase tracking-widest text-sm border-l-4 border-brand pl-3">
            Produk & Layanan
          </h3>
          <ul className="flex flex-col gap-3 text-zinc-400 text-sm font-semibold uppercase tracking-wide">
            <li><FooterLink href="/products">Mobil Tangki BBM Pertamina</FooterLink></li>
            <li><FooterLink href="/products">UGT / Tangki Pendam UL 1746</FooterLink></li>
            <li><FooterLink href="/products">AST / Modular Tank Storage</FooterLink></li>
            <li><FooterLink href="/products">Tangki Kimia</FooterLink></li>
            <li><FooterLink href="/products">Support Mining (Fuel · Lube · Water · Dump)</FooterLink></li>
            <li><FooterLink href="/products">Wingbox · Semi Trailer · Losbak</FooterLink></li>
          </ul>
        </nav>

        {/* Contact */}
        <address className="flex flex-col gap-6 not-italic">
          <h3 className="text-white font-black uppercase tracking-widest text-sm border-l-4 border-brand pl-3">
            Hubungi Kami
          </h3>
          <ul className="flex flex-col gap-5 text-zinc-300 text-sm">
            <li className="flex gap-4">
              <span className="p-2.5 bg-zinc-900 border border-white/5 h-fit">
                <MapPin className="w-4 h-4 text-brand" />
              </span>
              <span className="leading-relaxed">
                {SITE.address.full}
              </span>
            </li>
            <li className="flex gap-4 items-center">
              <span className="p-2.5 bg-zinc-900 border border-white/5">
                <Phone className="w-4 h-4 text-brand" />
              </span>
              <a href={SITE.phone.href} className="hover:text-brand transition-colors">
                {SITE.phone.display}
              </a>
            </li>
            <li className="flex gap-4 items-center">
              <span className="p-2.5 bg-zinc-900 border border-white/5">
                <MessageCircle className="w-4 h-4 text-brand" />
              </span>
              <a
                href={SITE.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
              >
                {SITE.whatsapp.display} (WhatsApp)
              </a>
            </li>
            <li className="flex gap-4 items-center">
              <span className="p-2.5 bg-zinc-900 border border-white/5">
                <Mail className="w-4 h-4 text-brand" />
              </span>
              <a
                href={SITE.email.href}
                className="hover:text-brand transition-colors break-all"
              >
                {SITE.email.display}
              </a>
            </li>
          </ul>
        </address>
      </div>

      <div className="container px-6 mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} PT. Prima Usaha Mitra Abadi · Member of UJB Group
        </p>
        <div className="flex gap-6 text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  icon: Icon,
  href,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="p-2.5 bg-zinc-900 border border-white/5 text-zinc-400 hover:bg-brand hover:text-white hover:border-brand transition-all duration-300"
      aria-label={label}
    >
      <Icon className="w-4 h-4" />
    </Link>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="hover:text-brand hover:translate-x-1 transition-all duration-300 inline-block"
    >
      {children}
    </Link>
  );
}

"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Company Info */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="transition-transform group-hover:scale-105 flex-shrink-0">
              <Image src="/logo.jpeg" alt="Logo PUMA" width={240} height={80} className="w-auto h-12 md:h-16 object-contain invert mix-blend-screen grayscale contrast-200 brightness-150" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-primary tracking-tighter uppercase leading-none">
                PRIMA USAHA <span className="text-white">MITRA ABADI</span>
              </span>
              <span className="text-[7px] font-mono text-zinc-600 uppercase tracking-[0.2em] mt-1">
                MEMBER OF UJB GROUP
              </span>
            </div>
          </Link>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Berkomitmen dalam menyediakan layanan serta produk berkualitas terbaik di bidang karoseri dan engineering dengan semangat inovasi di setiap produk yang kami hasilkan.
          </p>
          <div className="flex items-center gap-4">
            <SocialIcon icon={Instagram} href="https://instagram.com/puma_engineering" />
            <SocialIcon icon={Linkedin} href="#" />
            <SocialIcon icon={Twitter} href="#" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-8">
          <h3 className="text-white font-black uppercase tracking-widest text-sm border-l-4 border-white pl-4">
            Navigasi Cepat
          </h3>
          <ul className="flex flex-col gap-4 text-zinc-500 text-sm font-semibold uppercase tracking-wide">
            <li><FooterLink href="/">Beranda</FooterLink></li>
            <li><FooterLink href="/about">Tentang Kami</FooterLink></li>
            <li><FooterLink href="/products">Produk Unggulan</FooterLink></li>
            <li><FooterLink href="/insight">Insights / Berita</FooterLink></li>
            <li><FooterLink href="/contact">Kontak</FooterLink></li>
          </ul>
        </div>

        {/* Products */}
        <div className="flex flex-col gap-8">
          <h3 className="text-white font-black uppercase tracking-widest text-sm border-l-4 border-white pl-4">
            Produk & Layanan
          </h3>
          <ul className="flex flex-col gap-4 text-zinc-500 text-sm font-semibold uppercase tracking-wide">
            <li><FooterLink href="/products">Tangki (BBM, Air, Kimia)</FooterLink></li>
            <li><FooterLink href="/products">Dump Truck</FooterLink></li>
            <li><FooterLink href="/products">Wing Box & Box Alumunium</FooterLink></li>
            <li><FooterLink href="/products">Pertashop & Mobil Tangki</FooterLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-8">
          <h3 className="text-white font-black uppercase tracking-widest text-sm border-l-4 border-white pl-4">
            Hubungi Kami
          </h3>
          <ul className="flex flex-col gap-6 text-zinc-400 text-sm font-medium">
            <li className="flex gap-4">
              <div className="p-3 bg-zinc-900 border border-white/5 rounded-none h-fit">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="leading-relaxed">
                Jalan Raya By Pass Jomin No. 88, RT 001/002, Kel. Jomin, <br />
                Karawang - Indonesia
              </span>
            </li>
            <li className="flex gap-4 items-center">
              <div className="p-3 bg-zinc-900 border border-white/5 rounded-none">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span>(0264) 8830330 / 8330150</span>
            </li>
            <li className="flex gap-4 items-center">
              <div className="p-3 bg-zinc-900 border border-white/5 rounded-none">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span>+62 811-8344-888 (WhatsApp)</span>
            </li>
            <li className="flex gap-4 items-center">
              <div className="p-3 bg-zinc-900 border border-white/5 rounded-none">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span>marketing@primausahamitraabadi.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container px-6 mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">
          © 2024 PT. PRIMA USAHA MITRA ABADI. Member of UJB Group.
        </p>
        <div className="flex gap-8 text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon, href }: { icon: any, href: string }) {
  return (
    <Link 
      href={href} 
      className="p-3 bg-zinc-900 border border-white/5 text-zinc-400 hover:bg-white hover:text-zinc-950 transition-all duration-300 rounded-none group"
    >
      <Icon className="w-5 h-5" />
    </Link>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="hover:text-white hover:translate-x-2 transition-all duration-300 block"
    >
      {children}
    </Link>
  );
}


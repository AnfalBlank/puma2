"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { LOGO } from "@/lib/media";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Tentang" },
  { href: "/products", label: "Produk" },
  { href: "/insight", label: "Insight" },
  { href: "/contact", label: "Kontak" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/90 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container px-6 mx-auto flex items-center justify-between gap-6" aria-label="Navigasi utama">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group min-w-0" aria-label="Beranda PUMA">
          <Image
            src={LOGO}
            alt="Logo PT. Prima Usaha Mitra Abadi"
            width={676}
            height={240}
            priority
            className="w-auto h-9 md:h-11 object-contain transition-transform group-hover:scale-105"
          />
          <span className="hidden sm:flex flex-col leading-none min-w-0">
            <span className="text-base lg:text-lg font-black text-white tracking-tighter uppercase truncate">
              Prima Usaha <span className="text-brand">Mitra Abadi</span>
            </span>
            <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-[0.2em] mt-1">
              Member of UJB Group
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={SITE.phone.href}
            className="flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
          >
            <Phone size={14} className="text-zinc-500" />
            <span className="font-bold tracking-tight">{SITE.phone.display}</span>
          </a>
          <Link
            href="/contact"
            className="bg-brand hover:bg-[var(--brand-dark)] text-white uppercase font-black text-[11px] tracking-widest px-6 py-3 transition-colors"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Buka menu navigasi"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 bg-zinc-950 z-[60] flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
        >
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className="text-sm font-black uppercase tracking-widest text-white">Menu</span>
            <button
              type="button"
              className="text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Tutup menu"
            >
              <X size={28} />
            </button>
          </div>
          <ul className="flex-1 flex flex-col items-start justify-center gap-6 px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  onClick={() => setIsMobileMenuOpen(false)}
                  href={link.href}
                  className="text-3xl font-black text-white uppercase tracking-tighter hover:text-zinc-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-6 border-t border-white/10 space-y-3">
            <a
              href={SITE.phone.href}
              className="flex items-center gap-2 text-sm text-zinc-400"
            >
              <Phone size={16} className="text-zinc-500" />
              <span className="font-bold">{SITE.phone.display}</span>
            </a>
            <Link
              onClick={() => setIsMobileMenuOpen(false)}
              href="/contact"
              className="block w-full text-center bg-brand hover:bg-[var(--brand-dark)] text-white py-4 font-black uppercase text-base tracking-widest transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[11px] font-black text-zinc-300 uppercase tracking-[0.2em] hover:text-white transition-colors relative group py-2"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-zinc-950/90 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="container px-6 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <motion.div 
            className="transition-transform group-hover:scale-105 flex-shrink-0"
          >
            <Image src="/logo.jpeg" alt="Logo PUMA" width={240} height={80} className="w-auto h-12 md:h-16 object-contain invert mix-blend-screen grayscale contrast-200 brightness-150" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-primary tracking-tighter uppercase leading-none">
              PRIMA USAHA <span className="text-white">MITRA ABADI</span>
            </span>
            <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-[0.2em] leading-none mt-1">
              MEMBER OF UJB GROUP
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/insight">Insights</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex flex-col text-right mr-4 text-[10px] text-zinc-500 font-mono uppercase tracking-widest leading-relaxed">
            <span className="flex items-center gap-1 justify-end text-white">
              <Phone size={12} className="text-zinc-600" /> (0264) 8830330
            </span>
            <span className="flex items-center gap-1 justify-end">
              <Mail size={12} className="text-zinc-600" /> marketing@primausahamitraabadi.com
            </span>
          </div>
          <Button className="bg-white hover:bg-zinc-200 text-zinc-950 rounded-none uppercase font-black text-xs tracking-widest px-8 py-6 transition-all">
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:hidden fixed inset-0 top-0 left-0 h-screen w-full bg-zinc-950 z-[60] p-12 flex flex-col items-center justify-center gap-12"
        >
           <button 
            className="absolute top-8 right-8 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={40} />
          </button>

          <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className="text-4xl font-black text-white uppercase tracking-tighter">Home</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/about" className="text-4xl font-black text-white uppercase tracking-tighter">About</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/products" className="text-4xl font-black text-white uppercase tracking-tighter">Products</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/insight" className="text-4xl font-black text-white uppercase tracking-tighter">Insights</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/contact" className="text-4xl font-black text-white uppercase tracking-tighter">Contact</Link>
          
          <Button className="w-full bg-white text-zinc-950 rounded-none py-8 font-black uppercase text-lg tracking-widest">Get Quote</Button>
        </motion.div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] hover:text-white transition-colors relative group py-2"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

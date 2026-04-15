"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <main className="bg-zinc-950 text-white selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-20 bg-zinc-900/50 border-b border-white/5">
        <div className="container px-6 mx-auto">
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <ChevronRight size={12} />
            <span className="text-white">Contact</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]">
            Connect With <br />
            <span className="text-primary">Our Expert Engineers</span>
          </h1>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-6 mx-auto grid lg:grid-cols-2 gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="max-w-md">
               <span className="text-primary font-mono text-xs uppercase tracking-[0.4em] block mb-8">Informasi Kontak</span>
               <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-12 leading-none">
                  Mari Diskusikan <br /> Proyek Anda.
               </h2>
               <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                  Tim engineer kami siap memberikan solusi terbaik yang sesuai dengan spesifikasi dan kebutuhan operasional bisnis Anda.
               </p>
            </div>

            <div className="space-y-12">
               <ContactItem 
                  icon={MapPin} 
                  title="Alamat Kantor & Pabrik" 
                  content="Jalan Raya By Pass Jomin No. 88, RT 001/002, Kel. Jomin, Karawang - Indonesia" 
               />
               <ContactItem 
                  icon={Phone} 
                  title="Layanan Telepon" 
                  content="(0264) 8830330 / 8830150" 
                  subContent="Hotline: +62 811-8344-888 (WA Available)"
               />
               <ContactItem 
                  icon={Mail} 
                  title="Email Inquiry" 
                  content="marketing@primausahamitraabadi.com" 
                  subContent="Response Time: < 24 Hours"
               />
            </div>

            <div className="flex gap-4">
               <Button className="bg-primary hover:bg-primary/90 text-white rounded-none py-8 px-12 font-black uppercase tracking-widest border-none">
                  Direct WhatsApp
                  <MessageSquare size={16} className="ml-4" />
               </Button>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-900 industrial-border p-12 lg:p-20 relative"
          >
            <div className="absolute inset-0 bg-grid-zinc opacity-10 pointer-events-none" />
            <div className="relative z-10 space-y-10">
               <div className="space-y-4">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Kirim Pesan</h3>
                  <p className="text-zinc-500 text-sm uppercase tracking-widest font-mono">Fill out the form below</p>
               </div>
               
               <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-3">
                        <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Full Name</label>
                        <Input className="bg-zinc-950 border-white/10 text-white p-6 rounded-none focus:border-primary transition-colors" placeholder="John Doe" />
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Email Address</label>
                        <Input className="bg-zinc-950 border-white/10 text-white p-6 rounded-none focus:border-primary transition-colors" placeholder="john@example.com" />
                     </div>
                  </div>
                  <div className="space-y-3">
                     <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Subject Inquiry</label>
                     <Input className="bg-zinc-950 border-white/10 text-white p-6 rounded-none focus:border-primary transition-colors" placeholder="Dump Truck Project / Fuel Tank Specification" />
                  </div>
                  <div className="space-y-3">
                     <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Message</label>
                     <Textarea className="bg-zinc-950 border-white/10 text-white p-6 rounded-none h-40 focus:border-primary transition-colors" placeholder="Tell us more about your requirements..." />
                  </div>
                  <button className="w-full bg-primary hover:bg-primary/90 text-white py-8 font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 group transition-all">
                     SEND MESSAGE NOW
                     <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </button>
               </form>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Map Summary placeholder */}
      <section className="py-24 container px-6 mx-auto">
         <div className="aspect-[21/9] bg-zinc-900 border border-white/5 relative overflow-hidden industrial-border p-2">
            <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
               <span className="text-zinc-600 font-mono text-xs uppercase tracking-widest">Interactive Map Placeholder // Karawang, Indonesia</span>
               {/* Actual map iframe would go here if needed, but for MVP this placeholder is cleaner */}
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

function ContactItem({ icon: Icon, title, content, subContent }: { icon: any, title: string, content: string, subContent?: string }) {
  return (
    <div className="flex gap-8 group">
      <div className="p-4 bg-zinc-900 border border-white/5 group-hover:border-primary/50 transition-colors h-fit">
        <Icon size={32} className="text-zinc-500 group-hover:text-primary transition-colors" />
      </div>
      <div className="space-y-2">
        <h4 className="text-white font-black uppercase tracking-tighter text-xl">{title}</h4>
        <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">{content}</p>
        {subContent && <p className="text-primary font-mono text-[10px] uppercase tracking-widest">{subContent}</p>}
      </div>
    </div>
  );
}

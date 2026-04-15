"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Side: Contact Info */}
          <div className="space-y-16">
            <div className="max-w-xl">
               <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em] block mb-4">
                Connect // Contact
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
                Minta <br />
                <span className="text-zinc-600">Penawaran</span> Proyek.
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed font-medium mt-8">
                Konsultasikan kebutuhan fabrikasi dan karoseri Anda dengan tim ahli kami hari ini. Dapatkan solusi engineering presisi untuk industri Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
               <ContactItem 
                 icon={MapPin}
                 label="Lokasi Workshop"
                 content="Jl. Raya By Pass Jomin No. 88, Karawang, Jawa Barat"
               />
               <ContactItem 
                 icon={Phone}
                 label="Telepon & WhatsApp"
                 content="(0264) 8830330"
                 subContent="+62 811-8344-888 (WA)"
               />
               <ContactItem 
                 icon={Mail}
                 label="Email Marketing"
                 content="marketing@primausahamitraabadi.com"
                 subContent="www.primausahamitraabadi.com"
               />
               <ContactItem 
                 icon={Globe}
                 label="Instagram Engineering"
                 content="@puma_engineering"
                 subContent="Official Industry Insight"
               />
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-12 bg-zinc-900 border border-white/5 relative"
          >
             <div className="absolute top-0 left-0 w-full h-1 bg-white" />
             <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <div className="space-y-4">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Nama Lengkap</label>
                      <Input placeholder="John Doe" className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-600 h-14 rounded-none focus-visible:ring-white" />
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Nama Perusahaan</label>
                      <Input placeholder="PT. Energi Maju" className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-600 h-14 rounded-none focus-visible:ring-white" />
                   </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <div className="space-y-4">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Email Bisnis</label>
                      <Input type="email" placeholder="john@company.com" className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-600 h-14 rounded-none focus-visible:ring-white" />
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Nomor Telepon</label>
                      <Input placeholder="+62 812..." className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-600 h-14 rounded-none focus-visible:ring-white" />
                   </div>
                </div>

                <div className="space-y-4">
                   <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Detail Kebutuhan / Pesan</label>
                   <Textarea placeholder="Jelaskan kebutuhan fabrikasi atau spesifikasi karoseri Anda..." className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-600 min-h-[150px] rounded-none focus-visible:ring-white" />
                </div>

                <Button className="w-full bg-white hover:bg-zinc-200 text-zinc-950 rounded-none h-16 text-lg font-black uppercase tracking-widest flex items-center justify-center gap-4 transition-all">
                  Kirim Permintaan
                  <Send size={20} />
                </Button>
                
                <p className="text-[10px] font-mono text-zinc-500 text-center uppercase tracking-widest">
                  Kami menjamin kerahasiaan data perusahaan Anda.
                </p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, content, subContent }: { icon: any, label: string, content: string, subContent?: string }) {
  return (
    <div className="flex flex-col gap-4">
       <div className="flex items-center gap-4">
          <div className="p-3 bg-zinc-900 border border-white/5">
             <Icon size={20} className="text-zinc-500" />
          </div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{label}</span>
       </div>
       <div className="space-y-1">
          <p className="text-white font-bold uppercase tracking-tighter text-lg leading-tight">{content}</p>
          {subContent && <p className="text-zinc-600 text-sm font-medium">{subContent}</p>}
       </div>
    </div>
  );
}

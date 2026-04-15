"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apa saja jenis karoseri yang diproduksi?",
    answer: "Kami memproduksi berbagai jenis karoseri mulai dari Dump Truck, Cargo, Wing Box, hingga tangki khusus untuk transportasi BBM, kimia, dan air dengan material baja maupun aluminium.",
  },
  {
    question: "Apakah produk tangki memiliki sertifikasi resmi?",
    answer: "Ya, seluruh produk tangki kami, terutama untuk sektor migas, memiliki sertifikasi ISO 9001:2015, sertifikat tera Metrologi, dan mengikuti standar teknis UL 1746 untuk tangki penyimpanan bawah tanah.",
  },
  {
    question: "Berapa lama waktu pengerjaan untuk satu unit tangki?",
    answer: "Waktu pengerjaan bervariasi tergantung pada spesifikasi dan kapasitas, namun rata-rata berkisar antara 30 hingga 45 hari kerja sejak desain disetujui.",
  },
  {
    question: "Apakah tersedia layanan perbaikan dan pemeliharaan?",
    answer: "Tentu, kami menyediakan layanan purna jual yang mencakup pemeliharaan rutin, perbaikan struktur, hingga sertifikasi ulang untuk tangki yang telah habis masa berlakunya.",
  },
  {
    question: "Dapatkah melakukan kustomisasi desain sesuai kebutuhan?",
    answer: "Kami memiliki tim engineering internal yang siap melakukan perancangan desain kustom sesuai dengan kebutuhan operasional spesifik industri Anda.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container px-6 mx-auto grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
           <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em] block mb-4">
              Support // FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter mb-8">
              Pertanyaan <br />
              <span className="text-zinc-600">Sering Diajukan.</span>
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed font-medium max-w-sm">
              Temukan jawaban cepat mengenai proses fabrikasi, sertifikasi, dan layanan purna jual kami untuk mendukung kelancaran operasional Anda.
            </p>
            
            <div className="mt-12 p-8 bg-zinc-900 border border-white/5 space-y-4">
              <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest block">Butuh bantuan lain?</span>
              <p className="text-white font-bold text-sm uppercase">Tim support kami tersedia 24/7 untuk konsultasi teknis Anda.</p>
              <button className="text-white border-b border-white/20 hover:border-white transition-all pb-1 text-sm font-bold uppercase tracking-widest">Hubungi Support</button>
            </div>
        </div>

        <div className="lg:col-span-7">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border border-white/5 bg-zinc-900 px-6 lg:px-8 transition-all hover:bg-zinc-800">
                  <AccordionTrigger className="text-white hover:no-underline font-black uppercase text-left tracking-tighter text-lg py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-500 leading-relaxed text-base pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-zinc opacity-5 pointer-events-none -z-10" />
    </section>
  );
}

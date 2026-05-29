import type { Metadata } from "next";
import Script from "next/script";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title:
    "Karoseri Mobil Tangki BBM Pertamina, Tangki Pendam UL 1746 & AST Modular | PUMA",
  description:
    "PT. Prima Usaha Mitra Abadi (PUMA) — vendor resmi Pertamina untuk Mobil Tangki BBM, UGT / Tangki Pendam UL 1746, AST (Above Ground Storage Tank) Modular, Tangki Kimia, support mining (Fuel Truck, Lube Truck, Water Truck, Dump Truck), serta karoseri niaga Wingbox, Semi Trailer, dan Losbak.",
  alternates: { canonical: "/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa saja jenis karoseri dan tangki yang diproduksi PUMA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mobil Tangki BBM Pertamina, UGT / Tangki Pendam UL 1746, AST (Above Ground Storage Tank) Modular, Tangki Kimia, support mining (Fuel Truck, Lube Truck, Water Truck, Dump Truck), serta karoseri niaga Wingbox, Semi Trailer, dan Losbak.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah produk tangki memiliki sertifikasi resmi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seluruh produk tangki kami memiliki ISO 9001:2015, ISO 45001:2018, dan UGT mengikuti standar UL 1746 untuk underground storage tank, serta tervalidasi sebagai vendor resmi Pertamina.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama waktu pengerjaan satu unit tangki?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waktu pengerjaan rata-rata 30 sampai 45 hari kerja sejak desain disetujui, tergantung spesifikasi dan kapasitas.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah tersedia layanan perbaikan dan modifikasi karoseri?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kami menyediakan rekondisi karoseri, modifikasi kapasitas tangki, powder coating, bending dan roll plate hingga 10 mm, serta pembuatan aksesoris seperti sparkboard, perisai kolong, dan bumper belakang.",
      },
    },
    {
      "@type": "Question",
      name: "Dapatkah melakukan kustomisasi desain sesuai kebutuhan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tim engineering internal kami siap merancang desain kustom sesuai kebutuhan operasional spesifik industri Anda.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="ld-faq-home"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeClient />
    </>
  );
}

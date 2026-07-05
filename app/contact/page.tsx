import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Kontak PUMA — Konsultasi Karoseri, Tangki BBM Pertamina & Mining Support",
  description:
    "Hubungi PT. Prima Usaha Mitra Abadi di Karawang. Telp (0264) 8330330, WhatsApp +62 857-5463-7579, email marketing@primausahamitraabadi.com. Konsultasi tangki BBM Pertamina, UGT UL 1746, AST Modular, dan support unit pertambangan.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Kontak PUMA — Karoseri & Tangki Karawang",
    description:
      "Hubungi tim sales PUMA di Karawang untuk konsultasi proyek karoseri dan fabrikasi tangki BBM Pertamina, UGT UL 1746, AST, dan unit support pertambangan.",
    url: "/contact",
  },
};

export default function Page() {
  return <ContactClient />;
}

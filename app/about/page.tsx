import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Tentang PUMA — Karoseri & Engineering Vendor Resmi Pertamina",
  description:
    "Profil PT. Prima Usaha Mitra Abadi (PUMA), member of UJB Group: vendor resmi Pertamina sejak 2001 untuk Mobil Tangki BBM, Tangki Pendam UL 1746, AST Modular, Tangki Kimia, dan support unit pertambangan. Bersertifikasi ISO 9001:2015 dan ISO 45001:2018.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Tentang PUMA — Karoseri & Engineering Vendor Resmi Pertamina",
    description:
      "Profil PT. Prima Usaha Mitra Abadi: 20+ tahun fabrikasi tangki dan karoseri, bersertifikasi ISO 9001, ISO 45001, dan UL 1746 untuk underground tank.",
    url: "/about",
  },
};

export default function Page() {
  return <AboutClient />;
}

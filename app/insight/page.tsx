import type { Metadata } from "next";
import InsightClient from "./InsightClient";

export const metadata: Metadata = {
  title: "Insight Industri — Tangki BBM, UGT UL 1746, Karoseri & Fabrikasi",
  description:
    "Artikel teknis dan tren industri seputar Mobil Tangki BBM Pertamina, UGT / Tangki Pendam UL 1746, AST Modular, Tangki Kimia, dan support unit pertambangan oleh tim engineering PUMA.",
  alternates: { canonical: "/insight" },
  openGraph: {
    title: "Insight Industri PUMA",
    description:
      "Tren teknologi karoseri, standar UL 1746, optimasi logistik wingbox, dan praktik fabrikasi tangki BBM Pertamina.",
    url: "/insight",
  },
};

export default function Page() {
  return <InsightClient />;
}

import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ContentProvider } from "@/components/ContentProvider";
import { PageViewTracker } from "@/components/PageViewTracker";
import { loadContent } from "@/lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const siteUrl = "https://www.primausahamitraabadi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "PT. Prima Usaha Mitra Abadi (PUMA) | Karoseri Mobil Tangki BBM Pertamina, Tangki Pendam UL 1746 & AST",
    template: "%s | PT. Prima Usaha Mitra Abadi (PUMA)",
  },
  description:
    "PT. Prima Usaha Mitra Abadi (PUMA) — vendor resmi Pertamina untuk fabrikasi Mobil Tangki BBM, UGT / Tangki Pendam UL 1746, AST (Above Ground Storage Tank) Modular, Tangki Kimia, dan support unit pertambangan: Fuel Truck, Lube Truck, Water Truck, Dump Truck. Karoseri niaga Wingbox, Semi Trailer, dan Losbak. Member of UJB Group, Karawang.",
  applicationName: "PUMA Engineering",
  keywords: [
    "mobil tangki BBM Pertamina",
    "tangki BBM Pertamina",
    "UGT tangki pendam",
    "tangki pendam UL 1746",
    "underground storage tank UL 1746",
    "AST above ground storage tank",
    "modular tank storage",
    "support mining fuel truck",
    "lube truck",
    "water truck",
    "dump truck pertambangan",
    "wingbox",
    "semi trailer",
    "losbak",
    "tangki kimia",
    "karoseri Karawang",
    "fabrikasi tangki",
    "PT Prima Usaha Mitra Abadi",
    "PUMA Engineering",
    "vendor resmi Pertamina",
    "Pertashop fabrikator",
  ],
  authors: [{ name: "PT. Prima Usaha Mitra Abadi" }],
  creator: "PT. Prima Usaha Mitra Abadi",
  publisher: "PT. Prima Usaha Mitra Abadi",
  category: "Manufacturing",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "PT. Prima Usaha Mitra Abadi (PUMA)",
    title:
      "PT. Prima Usaha Mitra Abadi (PUMA) | Mobil Tangki BBM Pertamina, Tangki Pendam UL 1746, AST Modular, Support Mining",
    description:
      "Vendor resmi Pertamina untuk fabrikasi Mobil Tangki BBM, Tangki Pendam UL 1746, AST Modular, Tangki Kimia, Fuel Truck, Lube Truck, Water Truck, Dump Truck, Wingbox, Semi Trailer, dan Losbak.",
    images: [
      {
        url: "/pumalogo.png",
        width: 1200,
        height: 630,
        alt: "PT. Prima Usaha Mitra Abadi (PUMA) — Karoseri & Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "PT. Prima Usaha Mitra Abadi (PUMA) | Mobil Tangki BBM Pertamina & Tangki Pendam UL 1746",
    description:
      "Fabrikator karoseri & tangki: Mobil Tangki BBM Pertamina, UGT UL 1746, AST Modular, Tangki Kimia, Support Mining, Wingbox, Semi Trailer, Losbak.",
    images: ["/pumalogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = await loadContent();
  return (
    <html lang="id" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <ContentProvider value={content}>
          <JsonLd />
          {children}
          <FloatingWhatsApp />
          <PageViewTracker />
        </ContentProvider>
      </body>
    </html>
  );
}

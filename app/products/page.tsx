import type { Metadata } from "next";
import Script from "next/script";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title:
    "Produk: Mobil Tangki BBM Pertamina, UGT UL 1746, AST Modular, Tangki Kimia, Wingbox & Mining Support",
  description:
    "Katalog lengkap PUMA: Mobil Tangki BBM Pertamina, UGT / Tangki Pendam UL 1746, AST (Above Ground Storage Tank) / Modular Tank Storage, Tangki Kimia, support mining (Fuel Truck, Lube Truck, Water Truck, Dump Truck), Wingbox, Semi Trailer, dan Losbak.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Katalog Produk PUMA — Tangki BBM Pertamina, UGT UL 1746, AST Modular, Mining Support",
    description:
      "Mobil Tangki BBM Pertamina, Tangki Pendam UL 1746, AST Modular, Tangki Kimia, Fuel/Lube/Water/Dump Truck untuk pertambangan, Wingbox, Semi Trailer, Losbak.",
    url: "/products",
  },
};

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Katalog Produk PT. Prima Usaha Mitra Abadi (PUMA)",
  description:
    "Lini produk karoseri dan fabrikasi tangki PUMA untuk Pertamina, pertambangan, kimia, dan logistik niaga.",
  url: "https://puma-engineering.id/products",
  itemListElement: [
    {
      name: "Mobil Tangki BBM Pertamina",
      description:
        "Karoseri Mobil Tangki BBM sesuai spesifikasi resmi Pertamina, bersertifikasi dan tervalidasi sebagai vendor resmi.",
      image: "https://puma-engineering.id/PHOTO-2026-04-14-17-39-46.jpg",
    },
    {
      name: "UGT / Tangki Pendam UL 1746",
      description:
        "Underground Gasoline Tank (UGT) standar UL 1746 untuk penyimpanan bahan bakar di bawah tanah, cocok untuk SPBU dan Pertashop.",
      image: "https://puma-engineering.id/PHOTO-2026-04-14-17-39-59.jpg",
    },
    {
      name: "AST (Above Ground Storage Tank) Modular",
      description:
        "Above Ground Storage Tank modular untuk penyimpanan BBM dan bahan kimia di atas permukaan tanah, mudah dipindah dan diperluas.",
      image: "https://puma-engineering.id/PHOTO-2026-04-14-17-40-16.jpg",
    },
    {
      name: "Tangki Kimia",
      description:
        "Tangki khusus penyimpanan dan transportasi bahan kimia industri, dirancang dengan material tahan korosi.",
      image: "https://puma-engineering.id/PHOTO-2026-04-14-17-40-28.jpg",
    },
    {
      name: "Support Mining (Fuel Truck, Lube Truck, Water Truck, Dump Truck)",
      description:
        "Unit kendaraan support pertambangan: Fuel Truck, Lube Truck, Water Truck, dan Dump Truck untuk operasional tambang.",
      image: "https://puma-engineering.id/PHOTO-2026-04-14-17-41-00.jpg",
    },
    {
      name: "Karoseri Niaga (Wingbox, Semi Trailer, Losbak)",
      description:
        "Karoseri niaga untuk angkutan logistik: Wingbox, Semi Trailer, dan Losbak dengan standar kualitas industri.",
      image: "https://puma-engineering.id/PHOTO-2026-04-14-17-41-19.jpg",
    },
  ].map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      description: p.description,
      image: p.image,
      brand: {
        "@type": "Brand",
        name: "PT. Prima Usaha Mitra Abadi (PUMA)",
      },
      manufacturer: {
        "@type": "Organization",
        name: "PT. Prima Usaha Mitra Abadi",
        url: "https://puma-engineering.id",
      },
      offers: {
        "@type": "Offer",
        url: "https://puma-engineering.id/products",
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "IDR",
        },
        seller: {
          "@type": "Organization",
          name: "PT. Prima Usaha Mitra Abadi (PUMA)",
        },
      },
    },
  })),
};

export default function Page() {
  return (
    <>
      <Script
        id="ld-products"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <ProductsClient />
    </>
  );
}

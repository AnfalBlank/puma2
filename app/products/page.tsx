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
  itemListElement: [
    "Mobil Tangki BBM Pertamina",
    "UGT / Tangki Pendam UL 1746",
    "AST (Above Ground Storage Tank) / Modular Tank Storage",
    "Tangki Kimia",
    "Support Mining — Fuel Truck",
    "Support Mining — Lube Truck",
    "Support Mining — Water Truck",
    "Support Mining — Dump Truck",
    "Wingbox",
    "Semi Trailer",
    "Losbak",
  ].map((name, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: { "@type": "Product", name },
  })),
};

export default function Page() {
  return (
    <>
      <Script
        id="ld-products"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <ProductsClient />
    </>
  );
}

import Script from "next/script";
import { SITE } from "@/lib/site";

const siteUrl = SITE.url;

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: SITE.name,
  alternateName: ["PUMA", "PUMA Engineering", "Prima Usaha Mitra Abadi"],
  legalName: SITE.name,
  url: siteUrl,
  logo: `${siteUrl}/pumalogo.png`,
  image: `${siteUrl}/pumalogo.png`,
  foundingDate: "2001-01-29",
  description:
    "Vendor resmi Pertamina dan member of UJB Group. Fabrikator Mobil Tangki BBM Pertamina, UGT / Tangki Pendam UL 1746, AST Modular, Tangki Kimia, support unit pertambangan (Fuel Truck, Lube Truck, Water Truck, Dump Truck), serta karoseri niaga Wingbox, Semi Trailer, dan Losbak.",
  parentOrganization: {
    "@type": "Organization",
    name: "UJB Group",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: SITE.phone.intl,
      email: SITE.email.display,
      areaServed: "ID",
      availableLanguage: ["id", "en"],
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: `+${SITE.whatsapp.digits}`,
      areaServed: "ID",
      availableLanguage: ["id", "en"],
    },
  ],
  sameAs: [SITE.social.instagram],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: `${SITE.name} (${SITE.short})`,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "id-ID",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: SITE.name,
  image: `${siteUrl}/pumalogo.png`,
  url: siteUrl,
  telephone: SITE.phone.intl,
  email: SITE.email.display,
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Raya By Pass Jomin No. 88, Kel. Jomin Barat",
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: "41374",
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  areaServed: { "@type": "Country", name: "Indonesia" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Produk & Layanan PUMA",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Mobil Tangki BBM Pertamina" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "UGT / Tangki Pendam UL 1746" } },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "AST (Above Ground Storage Tank) / Modular Tank Storage" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Support Mining (Fuel Truck, Lube Truck, Water Truck, Dump Truck)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Karoseri Niaga (Wingbox, Semi Trailer, Losbak)" },
      },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Tangki Kimia" } },
    ],
  },
};

export function JsonLd() {
  return (
    <>
      <Script
        id="ld-organization"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <Script
        id="ld-website"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <Script
        id="ld-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}

// Single source of truth for company contact info & site constants.
// Update here, propagates everywhere.

export const SITE = {
  url: "https://www.primausahamitraabadi.com",
  name: "PT. Prima Usaha Mitra Abadi",
  short: "PUMA",
  group: "Member of UJB Group",
  address: {
    street: "Jl. Raya By Pass Jomin No. 88, RT 001/002, Kel. Jomin",
    city: "Karawang",
    region: "Jawa Barat",
    country: "ID",
    full: "Jl. Raya By Pass Jomin No. 88, RT 001/002, Kel. Jomin, Karawang — Jawa Barat",
  },
  phone: {
    display: "(0264) 8330330",
    href: "tel:+622648330330",
    intl: "+62-264-8330330",
  },
  email: {
    display: "marketing@primausahamitraabadi.com",
    href: "mailto:marketing@primausahamitraabadi.com",
  },
  whatsapp: {
    display: "+62 857-5463-7579",
    digits: "6285754637579",
    href: "https://wa.me/6285754637579",
  },
  social: {
    instagram: "https://instagram.com/puma_engineering",
    instagramHandle: "@puma_engineering",
    linkedin: "#",
  },
  geo: {
    lat: -6.43633,
    lng: 107.47944,
  },
} as const;

export function waLink(message: string): string {
  return `${SITE.whatsapp.href}?text=${encodeURIComponent(message)}`;
}

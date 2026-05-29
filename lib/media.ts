// Real-photo manifest sourced from /public.
// Update mapping here if you want to swap which photo represents which product.

export const PHOTOS = {
  workshopWide: "/PHOTO-2026-04-14-17-39-46.jpg",
  workshopFloor: "/PHOTO-2026-04-14-17-39-59.jpg",
  fabricationLine: "/PHOTO-2026-04-14-17-40-16.jpg",
  niagaWingbox: "/PHOTO-2026-04-14-17-40-28.jpg",
  factoryHall: "/PHOTO-2026-04-14-17-40-50.jpg",
  tankBBMWarm: "/PHOTO-2026-04-14-17-41-00.jpg",
  detailLandscape1: "/PHOTO-2026-04-14-17-41-09.jpg",
  detailLandscape2: "/PHOTO-2026-04-14-17-41-19.jpg",
  ugtTank: "/PHOTO-2026-04-14-17-41-31.jpg",
  chemicalTank: "/PHOTO-2026-04-14-17-41-43.jpg",
  astModular: "/PHOTO-2026-04-14-17-41-54.jpg",
  miningSupport: "/PHOTO-2026-04-14-17-42-04.jpg",
} as const;

// Product lines → real photos
export const PRODUCT_PHOTOS: Record<string, string> = {
  "Mobil Tangki BBM Pertamina": PHOTOS.tankBBMWarm,
  "UGT / Tangki Pendam UL 1746": PHOTOS.ugtTank,
  "AST / Modular Tank Storage": PHOTOS.astModular,
  "Tangki Kimia": PHOTOS.chemicalTank,
  "Support Mining": PHOTOS.miningSupport,
  "Karoseri Niaga": PHOTOS.niagaWingbox,
  "Pertashop Unit": PHOTOS.workshopWide,
};

// Insight cards
export const INSIGHT_PHOTOS = [
  PHOTOS.detailLandscape1,
  PHOTOS.detailLandscape2,
  PHOTOS.factoryHall,
];

export const LOGO = "/pumalogo.png";

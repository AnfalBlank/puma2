import "server-only";
import { SITE as SITE_DEFAULT } from "./site";
import { loadContent } from "./content";

export type EffectiveSite = typeof SITE_DEFAULT;

export async function getEffectiveSite(): Promise<EffectiveSite> {
  const content = await loadContent();
  const o = content.site;
  return {
    ...SITE_DEFAULT,
    phone: {
      ...SITE_DEFAULT.phone,
      display: o.phoneDisplay ?? SITE_DEFAULT.phone.display,
      href: o.phoneHref ?? SITE_DEFAULT.phone.href,
    },
    email: o.email
      ? {
          display: o.email,
          href: `mailto:${o.email}`,
        }
      : SITE_DEFAULT.email,
    whatsapp: {
      ...SITE_DEFAULT.whatsapp,
      display: o.whatsappDisplay ?? SITE_DEFAULT.whatsapp.display,
      digits: o.whatsappDigits ?? SITE_DEFAULT.whatsapp.digits,
      href: o.whatsappDigits
        ? `https://wa.me/${o.whatsappDigits}`
        : SITE_DEFAULT.whatsapp.href,
    },
    address: o.address
      ? { ...SITE_DEFAULT.address, full: o.address }
      : SITE_DEFAULT.address,
  };
}

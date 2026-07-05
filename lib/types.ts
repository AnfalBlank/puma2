// Shared content types (edited via the admin panel).

export type SiteOverride = {
  phoneDisplay?: string;
  phoneHref?: string;
  email?: string;
  whatsappDisplay?: string;
  whatsappDigits?: string;
  address?: string;
};

export type Product = {
  id: string;
  title: string;
  tag: string;
  description: string;
  spec: string;
  image: string;
  iconKey:
    | "Truck"
    | "Box"
    | "Layers"
    | "Container"
    | "HardHat"
    | "FlaskConical"
    | "Fuel";
  features: string[];
  subTitle: string;
};

export type FAQItem = {
  q: string;
  a: string;
};

export type FAQGroups = {
  home: FAQItem[];
  about: FAQItem[];
  products: FAQItem[];
  insight: FAQItem[];
  contact: FAQItem[];
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  body: string;
};

export type HeroCopy = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  intro: string;
};

export type HeroCopies = {
  home: HeroCopy;
  about: HeroCopy;
  products: HeroCopy;
  insight: HeroCopy;
  contact: HeroCopy;
};

export type ContentDoc = {
  site: SiteOverride;
  hero: HeroCopies;
  products: Product[];
  faqs: FAQGroups;
  articles: Article[];
};

export type Submission = {
  id: string;
  createdAt: string;
  page: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  read: boolean;
};

export type Inbox = {
  submissions: Submission[];
};

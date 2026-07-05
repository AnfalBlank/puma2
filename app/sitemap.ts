import type { MetadataRoute } from "next";
import { loadContent } from "@/lib/content";

const siteUrl = "https://www.primausahamitraabadi.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const content = await loadContent();
  const articles: MetadataRoute.Sitemap = content.articles.map((a) => ({
    url: `${siteUrl}/insight/${a.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.5,
  }));
  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/products`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/insight`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...articles,
    {
      url: `${siteUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}

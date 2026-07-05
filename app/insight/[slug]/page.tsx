import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { loadContent } from "@/lib/content";
import ArticleClient from "./ArticleClient";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const content = await loadContent();
  return content.articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = await loadContent();
  const article = content.articles.find((a) => a.slug === slug);
  if (!article) return { title: "Insight tidak ditemukan" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insight/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `/insight/${article.slug}`,
      images: article.image ? [{ url: article.image }] : undefined,
      publishedTime: article.date,
      authors: [article.author],
      tags: [article.category],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: article.image ? [article.image] : undefined,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const content = await loadContent();
  const article = content.articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = content.articles.filter((a) => a.slug !== slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    author: { "@type": "Organization", name: article.author },
    publisher: {
      "@type": "Organization",
      name: "PT. Prima Usaha Mitra Abadi",
      logo: { "@type": "ImageObject", url: "/pumalogo.png" },
    },
    datePublished: article.date,
    articleSection: article.category,
  };

  return (
    <>
      <Script
        id={`ld-article-${article.slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <ArticleClient article={article} related={related} />
    </>
  );
}

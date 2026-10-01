import type { Metadata } from "next";
import { SITE, absoluteUrl } from "@/lib/site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  noindex?: boolean;
};

/** Builds consistent per-page metadata (title, canonical, Open Graph, Twitter). */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  image = SITE.ogImage,
  noindex = false,
}: PageSeo): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: "en_IN",
      title,
      description,
      url: absoluteUrl(path),
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noindex ? { index: false, follow: false } : undefined,
  };
}

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

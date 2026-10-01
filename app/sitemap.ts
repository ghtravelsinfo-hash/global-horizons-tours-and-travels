import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { landingPages } from "@/lib/landing-pages";

type Entry = {
  path: string;
  priority: number;
  freq: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
};

const corePages: Entry[] = [
  { path: "/", priority: 1, freq: "weekly" },
  { path: "/tour-packages", priority: 0.9, freq: "weekly" },
  { path: "/tours", priority: 0.8, freq: "monthly" },
  { path: "/transport", priority: 0.9, freq: "monthly" },
  { path: "/destinations", priority: 0.8, freq: "monthly" },
  { path: "/services", priority: 0.8, freq: "monthly" },
  { path: "/request-quote", priority: 0.8, freq: "monthly" },
  { path: "/transport-request-quote", priority: 0.8, freq: "monthly" },
  { path: "/enquiry", priority: 0.7, freq: "monthly" },
  { path: "/contact", priority: 0.8, freq: "yearly" },
  { path: "/about", priority: 0.6, freq: "yearly" },
  { path: "/gallery", priority: 0.5, freq: "monthly" },
  { path: "/faq", priority: 0.6, freq: "monthly" },
  { path: "/privacy-policy", priority: 0.2, freq: "yearly" },
  { path: "/terms-and-conditions", priority: 0.2, freq: "yearly" },
  { path: "/booking-policy", priority: 0.2, freq: "yearly" },
  { path: "/cancellation-refund-policy", priority: 0.2, freq: "yearly" },
  { path: "/payment-policy", priority: 0.2, freq: "yearly" },
  { path: "/cookie-policy", priority: 0.2, freq: "yearly" },
  { path: "/disclaimer", priority: 0.2, freq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...corePages.map(({ path, priority, freq }) => ({
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      lastModified: now,
      changeFrequency: freq,
      priority,
    })),
    ...landingPages.map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}

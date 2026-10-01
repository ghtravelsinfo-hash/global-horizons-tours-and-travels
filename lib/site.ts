/**
 * Single source of truth for business details used by SEO metadata,
 * structured data (JSON-LD), sitemap and analytics.
 * Update here once and every page picks it up.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.globalhorizonstravels.in"
).replace(/\/$/, "");

export const SITE = {
  name: "Global Horizons Tours & Travels",
  shortName: "Global Horizons",
  tagline: "Tour Packages, Private Taxi & Heritage Travel from Chhatrapati Sambhajinagar (Aurangabad)",
  description:
    "Global Horizons Tours & Travels in Chhatrapati Sambhajinagar (Aurangabad) offers Ajanta & Ellora tours, Shirdi and Jyotirlinga pilgrimage packages, airport transfers and private taxi services across Maharashtra and India.",
  phone: "+91 77700 69004",
  phoneHref: "+917770069004",
  whatsapp: "917770069004",
  email: "ghtravelsinfo@gmail.com",
  address: {
    street: "Collector Office Road, Ganesh Colony",
    locality: "Chhatrapati Sambhajinagar (Aurangabad)",
    region: "Maharashtra",
    country: "IN",
  },
  socials: [
    "https://www.facebook.com/share/19RzbooduD/",
    "https://www.instagram.com/global_horizons_tours",
  ],
  // Optional: paste the Google Business Profile / Maps URL here once created
  googleBusinessUrl: process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL || "https://www.google.com/maps/place/Global+Horizons+Tours+%26+Travels/@19.8952399,75.3417461,17z/data=!4m6!3m5!1s0x3bdba374bb326abd:0x5f2b5c4379249b21!8m2!3d19.8952399!4d75.3417461",
  // Default social-share image. Client should upload public/og-image.jpg (1200x630)
  ogImage: "/og-image.jpg",
} as const;

export const ANALYTICS = {
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  bingVerification: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

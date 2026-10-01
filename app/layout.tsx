import type { Metadata, Viewport } from "next";
import "./globals.css";
import FloatingActions from "@/components/FloatingActions";
import CookieConsent from "@/components/CookieConsent";
import AnnouncementBar from "@/components/AnnouncementBar";
import Analytics from "@/components/seo/Analytics";
import ClickTracker from "@/components/seo/ClickTracker";
import JsonLd from "@/components/seo/JsonLd";
import { ANALYTICS, SITE, SITE_URL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} | Tour Packages & Taxi Service in Chhatrapati Sambhajinagar (Aurangabad)`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "tour operator in Aurangabad",
    "travel agency Chhatrapati Sambhajinagar",
    "Ajanta Ellora tour package",
    "Aurangabad to Shirdi taxi",
    "Aurangabad taxi service",
    "Grishneshwar Jyotirlinga tour",
    "Maharashtra tour packages",
    "airport transfer Aurangabad",
    "private cab Chhatrapati Sambhajinagar",
    "heritage tours India",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_IN",
    url: SITE_URL,
    title: `${SITE.name} | Tour Packages & Taxi Service in Chhatrapati Sambhajinagar`,
    description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: ANALYTICS.googleVerification || undefined,
    other: ANALYTICS.bingVerification
      ? { "msvalidate.01": ANALYTICS.bingVerification }
      : undefined,
  },
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e4655",
};

const businessLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${SITE_URL}/#business`,
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE_URL,
  logo: absoluteUrl("/logo.png"),
  image: absoluteUrl(SITE.ogImage),
  description: SITE.description,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "₹₹",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.8952399,
    longitude: 75.3417461,
  },
  hasMap: SITE.googleBusinessUrl || undefined,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: "Chhatrapati Sambhajinagar",
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  areaServed: [
    { "@type": "City", name: "Chhatrapati Sambhajinagar" },
    { "@type": "City", name: "Aurangabad" },
    { "@type": "State", name: "Maharashtra" },
    { "@type": "Country", name: "India" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
  ],
  sameAs: [...SITE.socials, ...(SITE.googleBusinessUrl ? [SITE.googleBusinessUrl] : [])],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE.name,
  publisher: { "@id": `${SITE_URL}/#business` },
  inLanguage: "en-IN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <JsonLd data={businessLd} />
        <JsonLd data={websiteLd} />
        <AnnouncementBar />
        {children}
        <FloatingActions />
        <CookieConsent />
        <Analytics />
        <ClickTracker />
      </body>
    </html>
  );
}

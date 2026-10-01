import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryStats from "@/components/gallery/GalleryStats";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Photo Gallery – Our Tours, Destinations & Fleet",
  description: "Browse photos from Global Horizons tours, destinations and vehicles across Maharashtra and India.",
  path: "/gallery",
  keywords: ["Aurangabad tour photos", "Ajanta Ellora gallery"],
});

export default function GalleryPage() {
  return (
    <main>
       <Navbar /> 
      <GalleryHero />

      <GalleryStats />

      <GalleryGrid />

      <GalleryCTA />
        <Footer />
    </main>
  );
}
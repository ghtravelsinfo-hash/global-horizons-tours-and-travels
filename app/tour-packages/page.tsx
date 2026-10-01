import ToursHero from "@/components/tours/ToursHero";
import TourCategories from "@/components/tours/TourCategories";
import TourPackagesGrid from "@/components/tours/TourPackagesGrid";
import WhyTravelWithUs from "@/components/tours/WhyTravelWithUs";
import TourCTA from "@/components/tours/TourCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { packages } from "@/components/tours/TourPackagesGrid";
import { absoluteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Tour Packages from Aurangabad – Ajanta Ellora, Shirdi, Kerala, Goa & More",
  description: "Browse holiday, spiritual, heritage and family tour packages from Chhatrapati Sambhajinagar including Ajanta and Ellora, Shirdi, Jyotirlinga circuits, Kerala and Goa.",
  path: "/tour-packages",
  keywords: ["tour packages from Aurangabad", "Maharashtra tour packages", "Shirdi tour package", "Kerala tour package"],
});

export default function ToursPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Tour packages from Chhatrapati Sambhajinagar",
          itemListElement: packages.map((pkg, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "TouristTrip",
              name: pkg.title,
              touristType: pkg.travelers,
              url: absoluteUrl("/tour-packages"),
              image: pkg.image.startsWith("http") ? pkg.image : absoluteUrl(pkg.image),
            },
          })),
        }}
      />
      <Navbar /> 
      <ToursHero />

      <TourCategories />

      <TourPackagesGrid />

      <WhyTravelWithUs />

      <TourCTA />
       <Footer />
    </main>
  );
}
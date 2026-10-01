import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import JourneyProcess from "@/components/services/JourneyProcess";
import ServiceExperience from "@/components/services/ServiceExperience";
import ServicesCTA from "@/components/services/ServicesCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Services – Tours, Pilgrimages, Taxi & Travel Planning",
  description: "From curated holidays and pilgrimage tours to airport transfers and group transport, explore the travel services offered by Global Horizons Tours & Travels.",
  path: "/services",
  keywords: ["travel services Aurangabad", "tour and taxi services Maharashtra"],
});

export default function ServicesPage() {
  return (
    <main>
            <Navbar />
      <ServicesHero />

      <ServicesGrid />

      {/* NEW PREMIUM JOURNEY PROCESS */}
      <JourneyProcess />

      <ServiceExperience />

      <ServicesCTA />
      <Footer/>
    </main>
  );
}
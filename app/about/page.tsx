import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import WhatWeDo from "@/components/about/WhatWeDo";
import OurApproach from "@/components/about/OurApproach";
import LocalPartner from "@/components/about/LocalPartner";
import PlanJourney from "@/components/about/PlanJourney";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us – Local Travel Experts in Chhatrapati Sambhajinagar",
  description: "Meet Global Horizons Tours & Travels, a Chhatrapati Sambhajinagar (Aurangabad) based travel company crafting tours, pilgrimages and private transport across Maharashtra and India.",
  path: "/about",
  keywords: ["about Global Horizons Tours", "travel company Aurangabad", "local travel experts Maharashtra"],
});

export default function AboutPage() {
  return (
    
    <main className="bg-[#faf9f5]">
        <Navbar/>
      <AboutHero />
      <OurStory />
      <OurValues />
      <WhatWeDo />
      <OurApproach />
      <LocalPartner />
      <PlanJourney />
      <Footer/>
    </main>
  );
}
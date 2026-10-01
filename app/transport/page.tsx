import Navbar from "@/components/Navbar";
import TransportHero from "@/components/Transport/TransportHero";
import TransportServices from "@/components/Transport/TransportServices";
import Fleet from "@/components/Transport/Fleet";
import Footer from "@/components/Footer";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Private Taxi, Cabs & Tempo Travellers in Aurangabad",
  description: "Book airport transfers, outstation cabs and group transport in Chhatrapati Sambhajinagar. Sedans, SUVs and tempo travellers with professional drivers.",
  path: "/transport",
  keywords: ["taxi service Aurangabad", "tempo traveller on rent Aurangabad", "outstation cab"],
});

export default function TransportPage() {
  return (
    <>
      <Navbar />

      <main>
        <TransportHero />
        <TransportServices />
        <Fleet />
      </main>

      <Footer />
    </>
  );
}
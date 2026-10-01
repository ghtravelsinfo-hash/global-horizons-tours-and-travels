import TransportQuoteHero from "@/components/transport-quote/TransportQuoteHero";
import TransportQuoteForm from "@/components/transport-quote/TransportQuoteForm";
import WhyChooseTransport from "@/components/transport-quote/WhyChooseTransport";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Request a Taxi or Transport Quote",
  description: "Get a quick quote for airport transfers, outstation taxis and group transport from Chhatrapati Sambhajinagar.",
  path: "/transport-request-quote",
  keywords: ["taxi quote Aurangabad", "cab booking quote"],
});

export default function TransportRequestQuotePage() {
  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <TransportQuoteHero />

      <section className="relative pb-20 pt-12 sm:pb-24 sm:pt-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_380px] lg:items-start lg:px-8 xl:gap-14">
          <TransportQuoteForm />

          <aside className="lg:sticky lg:top-28">
            <WhyChooseTransport />
          </aside>
        </div>
      </section>
    </main>
  );
}
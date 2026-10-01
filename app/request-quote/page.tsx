import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import QuoteHero from "@/components/request-quote/QuoteHero";
import QuoteForm from "@/components/request-quote/QuoteForm";
import WhyChooseUs from "@/components/request-quote/WhyChooseUs";
import QuoteContactInfo from "@/components/request-quote/QuoteContactInfo";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Request a Free Tour Quote",
  description: "Share your destination, dates and number of travellers to receive a personalised tour quotation from Global Horizons Tours & Travels.",
  path: "/request-quote",
  keywords: ["tour quote Aurangabad", "free travel quote"],
});

export default function RequestQuotePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#faf9f5]">
        <QuoteHero />

        <section className="relative py-20 sm:py-24 lg:py-28">
          {/* Background Decoration */}
          <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full border border-[#d9a737]/10" />

          <div className="pointer-events-none absolute -right-52 bottom-10 h-[500px] w-[500px] rounded-full bg-[#14596a]/[0.025] blur-3xl" />

          <div className="relative mx-auto grid w-full max-w-[1500px] gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:gap-16 lg:px-16 xl:px-24">

            {/* Left Information */}
            <div className="lg:col-span-4">
              <QuoteContactInfo />
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-8">
              <QuoteForm />
            </div>

          </div>
        </section>

        <WhyChooseUs />
      </main>

      <Footer />
    </>
  );
}
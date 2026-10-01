import FAQHero from "@/components/faq/FAQHero";
import FAQCategories from "@/components/faq/FAQCategories";
import FAQList from "@/components/faq/FAQList";
import FAQCTA from "@/components/faq/FAQCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { faqs } from "@/lib/faqs";

export const metadata = buildMetadata({
  title: "FAQs – Tour Packages, Taxi Booking & Travel Help",
  description: "Answers to common questions about tour packages, quotes, bookings, private taxi services and travel assistance from Global Horizons Tours & Travels.",
  path: "/faq",
  keywords: ["tour booking FAQ", "taxi booking questions Aurangabad"],
});

export default function FAQPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
       <Navbar /> 
      <FAQHero />

      <FAQCategories />

      <FAQList />

      <FAQCTA />
      <Footer />
    </main>
  );
}
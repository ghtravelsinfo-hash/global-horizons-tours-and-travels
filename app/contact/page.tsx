import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ContactCTA from "@/components/contact/ContactCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us – Call, WhatsApp or Visit Our Aurangabad Office",
  description: "Contact Global Horizons Tours & Travels on +91 77700 69004 or WhatsApp. Visit us at Collector Office Road, Ganesh Colony, Chhatrapati Sambhajinagar.",
  path: "/contact",
  keywords: ["contact travel agent Aurangabad", "Global Horizons Tours phone number"],
});

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#fcfbf8]">
       <Navbar />     
      <ContactHero />

      <ContactInfoCards />

      <ContactForm />

      <ContactMap />

      <ContactCTA />
       <Footer />
    </main>
  );
}
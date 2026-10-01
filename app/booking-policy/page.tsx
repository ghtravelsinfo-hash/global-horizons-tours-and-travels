import LegalPageLayout from "@/components/LegalPageLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Booking Policy",
  description: "Read how bookings, confirmations and itinerary changes work with Global Horizons Tours & Travels.",
  path: "/booking-policy",
});

export default function BookingPolicyPage() {
  const sections = [
    {
      title: "Booking Process",
      content: [
        "Customers may submit a booking enquiry through our website, contact forms, telephone, WhatsApp, email or other official communication channels.",
        "Our team will review your requirements and provide service availability, pricing and relevant booking details.",
      ],
    },

    {
      title: "Quotation and Pricing",
      content: [
        "A quotation is generally prepared based on the travel details, dates, passenger requirements, destinations and services requested.",
        "Prices may change before confirmation due to availability, seasonal demand, supplier pricing, route changes or other operational factors.",
      ],
    },

    {
      title: "Booking Confirmation",
      points: [
        "A booking is confirmed only after confirmation from our team.",
        "Required booking information must be provided accurately.",
        "Applicable advance or full payment must be completed where required.",
        "Confirmation may be subject to service availability.",
        "Customers should carefully review confirmed booking details.",
      ],
    },

    {
      title: "Travel Information",
      content: [
        "Customers are responsible for providing correct travel dates, pickup locations, destinations, passenger details and contact information.",
        "Incorrect or incomplete information may affect service delivery and may result in additional charges.",
      ],
    },

    {
      title: "Pickup and Reporting Time",
      content: [
        "Customers should be ready at the agreed pickup location at the scheduled time.",
        "For airport and railway transfers, sufficient time should be allowed for traffic, check-in, security procedures and other travel requirements.",
      ],
    },

    {
      title: "Vehicle Allocation",
      content: [
        "Vehicle allocation will be based on availability, passenger requirements and operational considerations.",
        "In certain situations, an equivalent or suitable alternative vehicle may be provided if the originally planned vehicle becomes unavailable.",
      ],
    },

    {
      title: "Special Requests",
      content: [
        "Special requirements such as additional luggage, child requirements, accessibility needs or specific vehicle preferences should be communicated in advance.",
        "We will make reasonable efforts to accommodate requests but cannot guarantee all special requirements unless specifically confirmed.",
      ],
    },

    {
      title: "Customer Conduct",
      points: [
        "Passengers must behave respectfully toward drivers and service staff.",
        "Illegal activities are strictly prohibited during the use of our services.",
        "Damage caused to vehicles or property by passengers may result in additional charges.",
        "Passengers must follow reasonable safety instructions provided by drivers or service personnel.",
      ],
    },
  ];

  return (
    <LegalPageLayout
      eyebrow="Booking Information"
      title="Booking Policy"
      description="Everything you need to know about making, confirming and managing your travel and transportation bookings."
      sections={sections}
    />
  );
}
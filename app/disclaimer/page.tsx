import LegalPageLayout from "@/components/LegalPageLayout";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Disclaimer",
  description: "Important disclaimers about travel information and services provided by Global Horizons Tours & Travels.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  const sections = [
    {
      title: "General Information",
      content: [
        "The information provided on the Global Horizon Tours & Travels website is intended for general informational purposes.",
        "While we make reasonable efforts to ensure that website content is accurate and current, we do not guarantee that all information will always be complete, accurate or immediately updated.",
      ],
    },

    {
      title: "Travel Information",
      content: [
        "Travel conditions, routes, availability, weather, local regulations and service schedules may change without notice.",
        "Customers are encouraged to verify important travel requirements before their journey.",
      ],
    },

    {
      title: "Third-Party Services",
      content: [
        "Some travel arrangements may involve hotels, transportation providers, activity operators or other third-party service providers.",
        "Global Horizon Tours & Travels may facilitate arrangements but certain services remain subject to the terms, conditions and operational policies of the respective providers.",
      ],
    },

    {
      title: "Website Availability",
      content: [
        "We aim to maintain uninterrupted access to our website, but technical issues, maintenance or circumstances beyond our control may occasionally affect availability.",
        "We do not guarantee uninterrupted or error-free website operation at all times.",
      ],
    },

    {
      title: "External Links",
      content: [
        "Our website may provide links to external websites for convenience or additional information.",
        "Global Horizon Tours & Travels does not control external websites and is not responsible for their content, policies or practices.",
      ],
    },

    {
      title: "Limitation of Responsibility",
      content: [
        "To the extent permitted by applicable law, Global Horizon Tours & Travels will not be responsible for indirect losses arising solely from reliance on general website information.",
        "Customers should contact our team directly for current pricing, availability and booking confirmation.",
      ],
    },

    {
      title: "Changes to Website Content",
      content: [
        "We reserve the right to update, modify or remove website content, service descriptions and other information without prior notice.",
      ],
    },
  ];

  return (
    <LegalPageLayout
      eyebrow="Important Notice"
      title="Disclaimer"
      description="Important information regarding website content, travel information and the limitations of information provided by our platform."
      sections={sections}
    />
  );
}
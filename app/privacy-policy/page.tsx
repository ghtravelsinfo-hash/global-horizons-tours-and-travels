import LegalPageLayout from "@/components/LegalPageLayout";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Global Horizons Tours & Travels collects, uses and protects your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Introduction",
      content: [
        "Global Horizon Tours & Travels respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store and protect information when you visit our website, contact our team or use our travel and transportation services.",
        "By accessing our website or providing your information to us, you agree to the practices described in this Privacy Policy.",
      ],
    },

    {
      title: "Information We Collect",
      content: [
        "Depending on the services you request, we may collect personal and travel-related information necessary to communicate with you and provide our services effectively.",
      ],
      points: [
        "Full name and contact details, including phone number and email address.",
        "Travel dates, destinations, pickup and drop locations and itinerary requirements.",
        "Passenger information required for transportation or travel arrangements.",
        "Booking preferences, special requests and service requirements.",
        "Communication records when you contact us through forms, WhatsApp, email or telephone.",
        "Technical information such as browser type, device information and website usage data where applicable.",
      ],
    },

    {
      title: "How We Use Your Information",
      content: [
        "The information collected by Global Horizon Tours & Travels is used primarily to provide requested travel, transportation and customer support services.",
      ],
      points: [
        "To respond to enquiries and provide quotations.",
        "To process and manage bookings.",
        "To arrange transportation and travel-related services.",
        "To communicate booking confirmations and important service updates.",
        "To provide customer support before, during and after your journey.",
        "To improve our website, services and customer experience.",
        "To comply with applicable legal and regulatory requirements.",
      ],
    },

    {
      title: "Sharing of Information",
      content: [
        "We do not sell your personal information. However, certain information may need to be shared with trusted service providers when necessary to arrange and deliver the services you request.",
      ],
      points: [
        "Transportation providers and drivers.",
        "Hotels or accommodation providers where applicable.",
        "Travel partners or service providers involved in your booking.",
        "Government or regulatory authorities where legally required.",
        "Technology and payment service providers used to operate our services.",
      ],
    },

    {
      title: "Data Security",
      content: [
        "We take reasonable administrative and technical measures to protect your personal information from unauthorized access, misuse, loss or disclosure.",
        "While we make every reasonable effort to protect information, no method of internet transmission or electronic storage can be guaranteed to be completely secure.",
      ],
    },

    {
      title: "Cookies and Website Technologies",
      content: [
        "Our website may use cookies and similar technologies to improve functionality, understand website usage and provide a better browsing experience.",
        "You may control certain cookie settings through your browser. Disabling cookies may affect some features or functionality of the website.",
      ],
    },

    {
      title: "Third-Party Links",
      content: [
        "Our website may contain links to third-party websites or platforms. Global Horizon Tours & Travels is not responsible for the privacy practices, content or security of external websites.",
        "We recommend reviewing the privacy policy of any third-party website before providing personal information.",
      ],
    },

    {
      title: "Your Privacy Choices",
      content: [
        "You may contact us to request information about the personal data we hold about you, subject to applicable legal requirements.",
        "You may also request correction of inaccurate information or ask questions regarding how your information is handled.",
      ],
    },

    {
      title: "Changes to This Privacy Policy",
      content: [
        "We may update this Privacy Policy from time to time to reflect changes in our services, website practices or legal requirements.",
        "The latest version will always be published on this page with an updated revision date.",
      ],
    },

    {
      title: "Contact Us",
      content: [
        "If you have questions or concerns regarding this Privacy Policy or the handling of your personal information, please contact Global Horizon Tours & Travels.",
        "Email: ghtravelsinfo@gmail.com | Phone: +91 77700 69004",
      ],
    },
  ];

  return (
    <LegalPageLayout
      eyebrow="Legal Information"
      title="Privacy Policy"
      description="Understanding how Global Horizon Tours & Travels collects, uses and protects your personal information."
      sections={sections}
    />
  );
}
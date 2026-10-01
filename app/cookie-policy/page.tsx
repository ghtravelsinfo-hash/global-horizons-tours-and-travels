import LegalHero from "@/components/legal/LegalHero";
import LegalContent from "@/components/legal/LegalContent";
import LegalNavigation from "@/components/legal/LegalNavigation";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description: "How Global Horizons Tours & Travels uses cookies and how you can manage your preferences.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  const sections = [
    {
      title: "What Are Cookies?",
      content: [
        "Cookies are small text files stored on your device when you visit a website. They can help websites function properly and improve the browsing experience.",
      ],
    },
    {
      title: "How We Use Cookies",
      points: [
        "To improve website functionality",
        "To understand how visitors interact with our website",
        "To improve user experience",
        "To maintain certain website preferences where applicable",
      ],
    },
    {
      title: "Third-Party Cookies",
      content: [
        "Some third-party services integrated with our website may use their own cookies or similar technologies according to their respective policies.",
      ],
    },
    {
      title: "Managing Cookies",
      content: [
        "Most web browsers allow users to manage or disable cookies through browser settings. Disabling certain cookies may affect some website functionality.",
      ],
    },
    {
      title: "Policy Updates",
      content: [
        "We may update this Cookie Policy when necessary. Any changes will be published on this page.",
      ],
    },
  ];

  return (
    <>
      <LegalHero
        eyebrow="Website Preferences"
        title="Cookie Policy"
        description="Learn how cookies and similar technologies may be used to improve your browsing experience."
      />

      <main className="bg-[#f7f5f1] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-5 sm:px-8 lg:grid-cols-[280px_1fr] lg:px-12">
          <LegalNavigation />

          <LegalContent sections={sections} />
        </div>
      </main>
    </>
  );
}
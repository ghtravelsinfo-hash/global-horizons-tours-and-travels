import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Plan Your Journey – Travel Enquiry",
  description: "Tell us your destination, dates and preferences and Global Horizons Tours & Travels will design a personalised travel plan for you.",
  path: "/enquiry",
  keywords: ["travel enquiry Aurangabad", "customised tour planning"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

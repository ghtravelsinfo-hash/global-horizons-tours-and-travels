import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Destinations – Ajanta, Ellora, Shirdi & Beyond",
  description: "Explore destinations around Chhatrapati Sambhajinagar and across India: Ajanta and Ellora Caves, Shirdi, Grishneshwar, Daulatabad Fort and more with Global Horizons.",
  path: "/destinations",
  keywords: ["Aurangabad tourist places", "Maharashtra destinations", "Ajanta Ellora Shirdi tour"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

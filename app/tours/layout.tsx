import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Tours & Experiences – Family, Weekend, Group & Pilgrimage Trips",
  description: "Family holidays, weekend getaways, group tours, pilgrimages and fully customised journeys planned by Global Horizons Tours & Travels.",
  path: "/tours",
  keywords: ["family tour packages", "weekend getaways Maharashtra", "group tours India"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

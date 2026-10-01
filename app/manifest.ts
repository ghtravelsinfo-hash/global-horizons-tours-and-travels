import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f5",
    theme_color: "#0e4655",
    icons: [{ src: "/logo.png", sizes: "any", type: "image/png" }],
  };
}

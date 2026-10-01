"use client";

import { useEffect } from "react";
import { trackLead } from "@/lib/analytics";

/** Tracks every tel:, mailto: and wa.me link click site-wide with one listener. */
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest?.("a");
      const href = link?.getAttribute("href") || "";
      if (href.startsWith("tel:")) trackLead("phone_click", { href });
      else if (href.startsWith("mailto:")) trackLead("email_click", { href });
      else if (href.includes("wa.me/")) trackLead("whatsapp_click");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

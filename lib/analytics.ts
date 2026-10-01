/**
 * Lead / conversion tracking helpers. Safe no-ops until GA4 / Meta Pixel
 * are loaded (which only happens after cookie consent + env IDs).
 */

type LeadSource =
  | "contact_form"
  | "travel_quote"
  | "transport_quote"
  | "enquiry_form"
  | "whatsapp_click"
  | "phone_click"
  | "email_click";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackLead(source: LeadSource, details: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  try {
    // GA4 recommended event for leads
    window.gtag?.("event", "generate_lead", { lead_source: source, ...details });
    // Meta Pixel standard events
    window.fbq?.("track", source === "phone_click" || source === "whatsapp_click" ? "Contact" : "Lead", {
      content_name: source,
    });
  } catch {
    /* never block the user flow because of tracking */
  }
}

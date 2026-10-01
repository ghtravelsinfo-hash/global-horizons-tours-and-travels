# Global Horizons – SEO & Lead Generation Setup Guide

This file lists what the client must supply and the one-time setup steps.
Nothing below needs code changes except where stated.

## 1. Environment variables (set in Vercel / hosting → Settings → Environment Variables)

| Variable | What to put | Required |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | The live domain, e.g. `https://www.yourdomain.com` (no trailing slash) | **Yes** – canonical URLs, sitemap and social previews depend on it |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`) | Yes |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta (Facebook) Pixel ID – only if they run Facebook/Instagram ads | Optional |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Token from Google Search Console "HTML tag" method (the `content` value only) | Yes |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Token from Bing Webmaster Tools | Optional |
| `NEXT_PUBLIC_GOOGLE_BUSINESS_URL` | Public link to their Google Business Profile | Recommended |

Redeploy after saving the variables.

## 2. Files the client must upload (into the `public/` folder)

| File | Where | Spec |
|---|---|---|
| `og-image.jpg` | `public/og-image.jpg` | 1200 × 630 px, under 300 KB. Shown when the site is shared on WhatsApp/Facebook. A temporary one is already provided – replace with a branded image (logo + best photo + tagline). |
| `logo.png` | `public/logo.png` | Square, at least 512 × 512 px, transparent or white background. Also used as the browser icon (copy it to `app/icon.png` and `app/apple-icon.png`). |
| Real tour/destination photos | `public/packages/`, `public/destinations/`, `public/gallery/`, `public/tours/` | Their own photos (not stock). Compress to under 300 KB each, name files descriptively, e.g. `ellora-kailasa-temple.jpg`. Many existing hero images are only 512 px wide and look soft on large screens – replace with 1600 px+ wide photos. |
| Customer photos / review screenshots | `public/gallery/` | With the customer's permission. |

## 3. Accounts the client must create / give access to

1. **Google Business Profile** (most important for local leads) – business.google.com. Category: *Travel agency* (add *Taxi service*, *Tour operator*). Use the same name, address and phone as the website footer. Ask happy customers for Google reviews.
2. **Google Search Console** – add the domain, verify using the variable above, then submit `https://<domain>/sitemap.xml`.
3. **Google Analytics 4** – create a property and copy the `G-` ID. Mark the `generate_lead` event as a *Key event* (conversion).
4. **Bing Webmaster Tools** (optional) – import from Search Console.
5. **Meta Business / Pixel** (only if running ads).
6. Add the website link to their Instagram and Facebook bios, and to WhatsApp Business profile.

## 4. What is tracked automatically

- `generate_lead` (GA4) / `Lead` (Meta) when any of the 4 forms is submitted: Contact, Request Quote, Transport Quote, Enquiry.
- Clicks on any phone number, email and WhatsApp link site-wide.
- Analytics only loads after the visitor accepts the cookie banner (analytics → GA4, marketing → Meta Pixel).

## 5. Important notes for the client

- **Leads currently arrive only if the visitor presses "Send" in WhatsApp.** The forms open WhatsApp with a pre-filled message. If the visitor closes WhatsApp without sending, the lead is lost. Recommended next step: add an email/database fallback so every form submission is stored (a one-day task).
- Two WhatsApp/phone numbers are used on the site (+91 77700 69004 calls, +91 77700 69004 form WhatsApp, +91 77700 69004 footer). Confirm which are correct; use one consistent primary number everywhere (also in Google Business Profile).
- Business name appears in several variants ("Global Horizon", "Global Horizons", "Global Tours & Travels"). Choose one exact name and use it everywhere, including Google Business Profile.
- Add real opening hours and the exact Google Maps pin location (needed for local ranking).
- Prices: pages say "request a quote". Adding "starting from ₹X" on packages generally increases enquiries.
- Add real customer reviews (with permission) and a Google reviews link.

## 6. Ongoing marketing (monthly)

- Post 2–3 times a week on Instagram/Facebook; always link to a landing page.
- Add 1–2 new landing pages/blog posts a month (edit `lib/landing-pages.ts`; pages, sitemap and structured data are generated automatically).
- Ask every returning customer for a Google review.
- Check Search Console monthly: which searches bring impressions, which pages need improvement.

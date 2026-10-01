"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { ANALYTICS } from "@/lib/site";

const CONSENT_KEY = "global-horizon-cookie-consent";

type Consent = { analytics: boolean; marketing: boolean };

function readConsent(): Consent {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return { analytics: false, marketing: false };
    const { preferences } = JSON.parse(raw);
    return {
      analytics: !!preferences?.analytics,
      marketing: !!preferences?.marketing,
    };
  } catch {
    return { analytics: false, marketing: false };
  }
}

/**
 * Loads Google Analytics 4 / Meta Pixel only after the visitor consents
 * through the existing cookie banner. IDs come from env variables, so
 * nothing loads until the client supplies them.
 */
export default function Analytics() {
  const [consent, setConsent] = useState<Consent>({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const sync = () => setConsent(readConsent());
    sync();
    window.addEventListener("gh-consent-change", sync);
    return () => window.removeEventListener("gh-consent-change", sync);
  }, []);

  return (
    <>
      {ANALYTICS.gaId && consent.analytics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS.gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${ANALYTICS.gaId}');`}
          </Script>
        </>
      )}

      {ANALYTICS.metaPixelId && consent.marketing && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${ANALYTICS.metaPixelId}');fbq('track','PageView');`}
        </Script>
      )}
    </>
  );
}

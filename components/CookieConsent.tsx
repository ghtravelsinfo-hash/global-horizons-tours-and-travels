"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Cookie,
  Check,
  X,
  Settings2,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_CONSENT_KEY = "global-horizon-cookie-consent";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);

    if (!savedConsent) {
      const timer = window.setTimeout(() => {
        setIsVisible(true);
      }, 800);

      return () => window.clearTimeout(timer);
    }
  }, []);

  const saveConsent = (newPreferences: CookiePreferences) => {
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({
        preferences: newPreferences,
        timestamp: new Date().toISOString(),
      })
    );

    window.dispatchEvent(new Event("gh-consent-change"));

    setPreferences(newPreferences);
    setIsVisible(false);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectOptional = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[9998] bg-[#082f38]/30 backdrop-blur-[2px]" />

      {/* Cookie Modal */}
      <div className="fixed inset-x-4 bottom-4 z-[9999] mx-auto w-auto max-w-[680px] sm:bottom-6">
        <div className="relative overflow-hidden rounded-[28px] border border-[#e7ae3c]/30 bg-[#0e4655] shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
          
          {/* Gold Top Line */}
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#e7ae3c] to-transparent" />

          {/* Decorative Circle */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border border-[#e7ae3c]/10" />

          <div className="relative p-5 sm:p-7">
            {/* ===============================
                NORMAL COOKIE VIEW
            =============================== */}

            {!showPreferences ? (
              <>
                {/* Header */}

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#e7ae3c]/30 bg-[#e7ae3c]/10 text-[#e7ae3c]">
                    <Cookie size={22} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck
                        size={14}
                        className="text-[#e7ae3c]"
                      />

                      <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#e7ae3c]">
                        Your Privacy Matters
                      </span>
                    </div>

                    <h3 className="mt-2 font-serif text-[24px] font-bold text-white sm:text-[28px]">
                      We Value Your Privacy
                    </h3>
                  </div>
                </div>

                {/* Description */}

                <p className="mt-5 text-[13px] leading-6 text-[#b8cbd0] sm:text-[14px]">
                  We use cookies to improve your browsing experience,
                  understand website usage and provide a more personalized
                  experience. You can accept all cookies or manage your
                  preferences.
                </p>

                <p className="mt-3 text-[12px] text-[#8eabb2]">
                  Learn more in our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-[#e7ae3c] underline underline-offset-4 transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>

                {/* Actions */}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  
                  <button
                    onClick={acceptAll}
                    className="group relative inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-[#e7ae3c] px-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0e4655] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(231,174,60,0.25)]"
                  >
                    <Check size={16} />

                    <span>Accept All</span>
                  </button>

                  <button
                    onClick={rejectOptional}
                    className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full border border-white/[0.15] px-5 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#e7ae3c]/60 hover:bg-white/[0.05]"
                  >
                    <X size={16} />

                    Reject Optional
                  </button>

                  <button
                    onClick={() => setShowPreferences(true)}
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[#e7ae3c] transition-colors hover:text-white"
                  >
                    <Settings2 size={16} />

                    Settings
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* ===============================
                    PREFERENCES VIEW
                =============================== */}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Settings2
                        size={15}
                        className="text-[#e7ae3c]"
                      />

                      <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#e7ae3c]">
                        Cookie Preferences
                      </span>
                    </div>

                    <h3 className="mt-2 font-serif text-[24px] font-bold text-white">
                      Manage Your Preferences
                    </h3>
                  </div>

                  <button
                    onClick={() => setShowPreferences(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] text-[#b8cbd0] transition hover:border-[#e7ae3c]/50 hover:text-white"
                    aria-label="Close preferences"
                  >
                    <ChevronDown size={18} />
                  </button>
                </div>

                <div className="mt-6 space-y-3">
                  
                  {/* Necessary */}

                  <PreferenceRow
                    title="Necessary Cookies"
                    description="Required for essential website functionality and security."
                    enabled={true}
                    locked
                    onChange={() => {}}
                  />

                  {/* Analytics */}

                  <PreferenceRow
                    title="Analytics Cookies"
                    description="Help us understand how visitors use and interact with our website."
                    enabled={preferences.analytics}
                    onChange={(value) =>
                      setPreferences((prev) => ({
                        ...prev,
                        analytics: value,
                      }))
                    }
                  />

                  {/* Marketing */}

                  <PreferenceRow
                    title="Marketing Cookies"
                    description="Help us provide more relevant promotions and personalized content."
                    enabled={preferences.marketing}
                    onChange={(value) =>
                      setPreferences((prev) => ({
                        ...prev,
                        marketing: value,
                      }))
                    }
                  />
                </div>

                {/* Preference Actions */}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={savePreferences}
                    className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full bg-[#e7ae3c] px-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0e4655] transition-all hover:-translate-y-0.5"
                  >
                    <Check size={16} />

                    Save Preferences
                  </button>

                  <button
                    onClick={acceptAll}
                    className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-white/[0.15] px-5 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-all hover:border-[#e7ae3c]/60 hover:bg-white/[0.05]"
                  >
                    Accept All
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}


/* =====================================================
   PREFERENCE ROW
===================================================== */

function PreferenceRow({
  title,
  description,
  enabled,
  locked = false,
  onChange,
}: {
  title: string;
  description: string;
  enabled: boolean;
  locked?: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
      
      <div>
        <h4 className="text-[13px] font-semibold text-white">
          {title}
        </h4>

        <p className="mt-1 text-[11px] leading-5 text-[#8eabb2]">
          {description}
        </p>
      </div>

      <button
        type="button"
        disabled={locked}
        onClick={() => !locked && onChange(!enabled)}
        className={`relative h-7 w-12 shrink-0 rounded-full transition-all duration-300 ${
          enabled
            ? "bg-[#e7ae3c]"
            : "bg-white/[0.12]"
        } ${locked ? "cursor-not-allowed opacity-80" : "cursor-pointer"}`}
        aria-label={`Toggle ${title}`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all duration-300 ${
            enabled
              ? "left-6"
              : "left-1"
          }`}
        />
      </button>
    </div>
  );
}
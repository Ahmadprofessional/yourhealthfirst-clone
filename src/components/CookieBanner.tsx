"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const STORAGE_KEY = "yhf_cookie_consent_v1";

export default function CookieBanner() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: CookiePreferences = JSON.parse(stored);
        setAnalyticsEnabled(parsed.analytics);
        setMarketingEnabled(parsed.marketing);
        applyGtagConsent(parsed.analytics, parsed.marketing);
      } else {
        const timer = setTimeout(() => setIsOpen(true), 600);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsOpen(true);
    }
  }, []);

  // Listen for custom event from Footer "Cookie Settings" button
  useEffect(() => {
    const handleOpenSettings = () => {
      setShowPreferences(true);
      setIsOpen(true);
    };

    window.addEventListener("openCookieSettings", handleOpenSettings);
    return () => window.removeEventListener("openCookieSettings", handleOpenSettings);
  }, []);

  function applyGtagConsent(analytics: boolean, marketing: boolean) {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: analytics ? "granted" : "denied",
        ad_storage: marketing ? "granted" : "denied",
        ad_user_data: marketing ? "granted" : "denied",
        ad_personalization: marketing ? "granted" : "denied",
      });
    }
  }

  function savePreferences(analytics: boolean, marketing: boolean) {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics,
      marketing,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // ignore
    }
    applyGtagConsent(analytics, marketing);
    setAnalyticsEnabled(analytics);
    setMarketingEnabled(marketing);
    setIsOpen(false);
    setShowPreferences(false);
  }

  function handleAcceptAll() {
    savePreferences(true, true);
  }

  function handleRejectAll() {
    savePreferences(false, false);
  }

  function handleSaveCustom() {
    savePreferences(analyticsEnabled, marketingEnabled);
  }

  if (!isOpen) return null;

  return (
    <>
      {/* Floating rounded luxury banner (Dark warm obsidian/charcoal - zero green) */}
      {!showPreferences && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent banner"
          className="fixed bottom-0 inset-x-0 sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2 z-[9999] w-full sm:w-[calc(100%-2rem)] sm:max-w-4xl rounded-t-2xl sm:rounded-full border-t sm:border border-[#c98a3e]/40 bg-[#181512]/98 px-4 py-3.5 sm:px-7 sm:py-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] sm:pb-4 text-cream shadow-[0_-8px_30px_rgba(0,0,0,0.5)] sm:shadow-[0_12px_40px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-all duration-300 animate-fadeIn"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-sm">
            {/* Left: Message with amber indicator */}
            <div className="flex items-center gap-2.5 sm:gap-3 text-center sm:text-left">
              <span className="hidden sm:inline-block h-2.5 w-2.5 rounded-full bg-[#c98a3e] shrink-0 shadow-[0_0_8px_#c98a3e]" />
              <p className="text-[12px] sm:text-[14px] leading-snug sm:leading-relaxed text-cream/95 font-normal">
                We use cookies to improve your clinical experience. By continuing you agree to our{" "}
                <Link
                  href={`/${locale}/cookie-policy`}
                  className="font-semibold text-[#e3bb7b] underline underline-offset-2 hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>{" "}
                &amp;{" "}
                <Link
                  href={`/${locale}/privacy-policy`}
                  className="font-semibold text-[#e3bb7b] underline underline-offset-2 hover:text-white transition-colors"
                >
                  Privacy Notice
                </Link>
                .
              </p>
            </div>

            {/* Right: Actions */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-end gap-2 sm:gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="order-3 sm:order-1 text-[11px] sm:text-[13px] text-cream/75 hover:text-white underline underline-offset-2 transition-colors cursor-pointer px-2 py-1"
              >
                Preferences
              </button>
              <button
                type="button"
                onClick={handleRejectAll}
                className="order-1 sm:order-2 flex-1 sm:flex-initial rounded-full border border-[#c98a3e] px-3 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-[13px] font-semibold text-[#e3bb7b] hover:bg-[#c98a3e]/15 transition-all text-center cursor-pointer shadow-sm whitespace-nowrap"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="order-2 sm:order-3 flex-1 sm:flex-initial rounded-full bg-[#c98a3e] px-3.5 sm:px-6 py-1.5 sm:py-2 text-[11px] sm:text-[13px] font-bold text-[#181512] hover:bg-[#d89b4f] shadow-md transition-all text-center cursor-pointer whitespace-nowrap"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={handleRejectAll}
                aria-label="Dismiss cookie notice"
                className="order-4 text-cream/50 hover:text-white text-lg sm:text-xl leading-none p-1 transition-colors cursor-pointer ml-1"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal (Centered dialog in dark warm luxury charcoal/black) */}
      {showPreferences && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Manage cookie settings"
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
        >
          <div className="w-full max-w-lg rounded-2xl border border-[#c98a3e]/40 bg-[#181512] p-6 sm:p-7 text-cream shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#c98a3e] shadow-[0_0_8px_#c98a3e]" />
                <h3 className="text-base font-bold uppercase tracking-wider text-cream">
                  Customise Cookie Preferences
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="text-cream/60 hover:text-cream text-2xl leading-none p-1 transition-colors cursor-pointer"
                aria-label="Close preferences"
              >
                ×
              </button>
            </div>

            {/* Category Cards */}
            <div className="mt-5 space-y-3.5 max-h-[55vh] overflow-y-auto pr-1">
              {/* Necessary */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-cream">Strictly Necessary</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-cream/15 text-[#e3bb7b]">
                      Always Active
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-cream/75 leading-relaxed">
                    Required for site security, language routing, and core clinical booking accessibility.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  aria-label="Strictly Necessary Cookies"
                  className="mt-0.5 h-4 w-4 rounded accent-[#c98a3e] opacity-75 cursor-not-allowed"
                />
              </div>

              {/* Analytics */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start justify-between gap-3">
                <div>
                  <span className="font-semibold text-sm text-cream">Analytics &amp; Performance</span>
                  <p className="mt-1.5 text-xs text-cream/75 leading-relaxed">
                    Aggregated, anonymous data to understand treatment visits and improve our patient clinical experience.
                  </p>
                </div>
                <input
                  type="checkbox"
                  id="analytics-toggle"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  aria-label="Enable Analytics Cookies"
                  className="mt-0.5 h-5 w-5 rounded accent-[#c98a3e] cursor-pointer"
                />
              </div>

              {/* Marketing */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start justify-between gap-3">
                <div>
                  <span className="font-semibold text-sm text-cream">Marketing &amp; Personalisation</span>
                  <p className="mt-1.5 text-xs text-cream/75 leading-relaxed">
                    Helps us evaluate clinic educational campaigns and treatment announcements.
                  </p>
                </div>
                <input
                  type="checkbox"
                  id="marketing-toggle"
                  checked={marketingEnabled}
                  onChange={(e) => setMarketingEnabled(e.target.checked)}
                  aria-label="Enable Marketing Cookies"
                  className="mt-0.5 h-5 w-5 rounded accent-[#c98a3e] cursor-pointer"
                />
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 flex items-center justify-end gap-2.5 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={handleRejectAll}
                className="px-4 py-2 rounded-full border border-cream/30 text-xs sm:text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer"
              >
                Reject All
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="px-4 sm:px-5 py-2 rounded-full border border-[#c98a3e] text-xs sm:text-sm font-semibold text-[#e3bb7b] hover:bg-[#c98a3e]/15 transition-colors cursor-pointer"
              >
                Save My Choices
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-5 sm:px-6 py-2 rounded-full bg-[#c98a3e] text-xs sm:text-sm font-bold text-[#181512] hover:bg-[#d89b4f] transition-colors cursor-pointer"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

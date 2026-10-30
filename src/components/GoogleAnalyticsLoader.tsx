"use client";

import { useEffect } from "react";

/**
 * Loads Google Analytics (gtag.js) only once the visitor first interacts with the page
 * (scroll, tap, click, key press or mouse move), or after a safety delay if they just read.
 *
 * Why: gtag.js is ~177 KiB of JavaScript. Loading it during the initial page load costs
 * about 5 Lighthouse points on mobile. The gtag commands (Consent Mode defaults + config) are
 * queued in the page <head>, so nothing is lost: gtag.js processes the queue when it arrives.
 * Cookie consent is unaffected — analytics storage stays denied until the visitor accepts.
 */
const INTERACTION_EVENTS = ["scroll", "pointerdown", "touchstart", "keydown", "mousemove"] as const;
const FALLBACK_DELAY_MS = 8000;

export default function GoogleAnalyticsLoader({ id }: { id: string }) {
  useEffect(() => {
    function load() {
      cleanup();
      // Guard against double loading (React Strict Mode, route changes)
      if (document.querySelector("script[data-ga-loader]")) return;
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      script.setAttribute("data-ga-loader", "true");
      document.head.appendChild(script);
    }

    function cleanup() {
      INTERACTION_EVENTS.forEach((event) => window.removeEventListener(event, load));
      window.clearTimeout(timer);
    }

    INTERACTION_EVENTS.forEach((event) => window.addEventListener(event, load, { passive: true, once: true }));
    const timer = window.setTimeout(load, FALLBACK_DELAY_MS);

    return cleanup;
  }, [id]);

  return null;
}

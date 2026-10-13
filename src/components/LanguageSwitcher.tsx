"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useState, useRef, useEffect } from "react";

// High-resolution inline SVG flags for 100% reliable rendering across all platforms (Windows, Mac, iOS, Android)
function FlagUK({ className = "h-3.5 w-5 shrink-0 rounded-[2px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 30" aria-hidden="true">
      <clipPath id="uk-clip-ls">
        <path d="M0 0v30h60V0z" />
      </clipPath>
      <clipPath id="uk-diag-ls">
        <path d="M30 15h30v15zm0 15h-30v-15zm-30-15h-30v-15zm30-15h30v15z" />
      </clipPath>
      <g clipPath="url(#uk-clip-ls)">
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#ffffff" strokeWidth="6" />
        <path d="M0 0l60 30m0-30L0 30" clipPath="url(#uk-diag-ls)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0v30M0 15h60" stroke="#ffffff" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

function FlagRU({ className = "h-3.5 w-5 shrink-0 rounded-[2px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 36" aria-hidden="true">
      <rect width="60" height="12" fill="#ffffff" />
      <rect y="12" width="60" height="12" fill="#0039a6" />
      <rect y="24" width="60" height="12" fill="#d52b1e" />
    </svg>
  );
}

function FlagAE({ className = "h-3.5 w-5 shrink-0 rounded-[2px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 36" aria-hidden="true">
      <rect width="60" height="12" fill="#00732f" />
      <rect y="12" width="60" height="12" fill="#ffffff" />
      <rect y="24" width="60" height="12" fill="#000000" />
      <rect width="18" height="36" fill="#f00000" />
    </svg>
  );
}

function FlagES({ className = "h-3.5 w-5 shrink-0 rounded-[2px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 36" aria-hidden="true">
      <rect width="60" height="9" fill="#c60b1e" />
      <rect y="9" width="60" height="18" fill="#ffc400" />
      <rect y="27" width="60" height="9" fill="#c60b1e" />
    </svg>
  );
}

function FlagFR({ className = "h-3.5 w-5 shrink-0 rounded-[2px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 36" aria-hidden="true">
      <rect width="20" height="36" fill="#002654" />
      <rect x="20" width="20" height="36" fill="#ffffff" />
      <rect x="40" width="20" height="36" fill="#ce1126" />
    </svg>
  );
}

const localesConfig = [
  { code: "en", name: "English", nativeName: "English", Flag: FlagUK },
  { code: "ru", name: "Russian", nativeName: "Русский", Flag: FlagRU },
  { code: "ar", name: "Arabic", nativeName: "العربية", Flag: FlagAE },
  { code: "es", name: "Spanish", nativeName: "Español", Flag: FlagES },
  { code: "fr", name: "French", nativeName: "Français", Flag: FlagFR },
] as const;

function clearStaleTranslateCookies() {
  if (typeof document === "undefined") return;
  const host = window.location.hostname;
  document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  if (host) {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${host};`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${host};`;
  }
}

export default function LanguageSwitcher({ align = "right" }: { align?: "left" | "right" }) {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Clear any stale machine translation cookie on mount
  useEffect(() => {
    clearStaleTranslateCookies();
  }, []);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = localesConfig.find((l) => l.code === locale) ?? localesConfig[0];
  const CurrentFlag = current.Flag;

  function switchLocale(nextLocale: "en" | "ar" | "es" | "fr" | "ru") {
    setOpen(false);
    clearStaleTranslateCookies();
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div ref={ref} className="relative z-[60] inline-block text-left notranslate" translate="no">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("language")}
        aria-expanded={open}
        className="flex items-center gap-2 rounded-[6px] border border-tan/30 bg-black/85 px-2.5 py-1.5 font-nav text-[13px] font-medium text-tan shadow-sm backdrop-blur-md transition-all hover:border-tan/70 hover:bg-black hover:text-white cursor-pointer select-none"
      >
        <CurrentFlag className="h-3.5 w-5 shrink-0 rounded-[2px] shadow-sm ring-1 ring-white/10" />
        <span className="font-semibold tracking-wider uppercase text-tan">{current.code}</span>
        <svg
          className={`h-3 w-3 text-tan/70 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Luxury Dropdown */}
      <div
        className={`absolute ${align === "left" ? "left-0" : "right-0"} top-[calc(100%+8px)] z-[100] min-w-[195px] overflow-hidden rounded-[8px] border border-tan/30 bg-[#0c0c0c] shadow-2xl transition-all duration-200 notranslate ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        translate="no"
      >
        {/* Gold top accent line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-tan to-transparent" />

        <div className="px-3.5 pt-2 pb-1 text-[10px] font-semibold tracking-widest text-tan/60 uppercase">
          {t("language")}
        </div>

        <div className="py-1">
          {localesConfig.map((item) => {
            const ItemFlag = item.Flag;
            const isSelected = item.code === locale;

            return (
              <button
                key={item.code}
                type="button"
                onClick={() => switchLocale(item.code)}
                className={`flex w-full items-center gap-3 px-3.5 py-2 text-left font-nav text-[13px] font-medium transition-colors ${
                  isSelected
                    ? "bg-tan/15 text-tan"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                <ItemFlag className="h-3.5 w-5 shrink-0 rounded-[2px] shadow-sm ring-1 ring-white/10" />
                <span className="flex-1 font-medium">{item.nativeName}</span>
                <span className="text-[11px] font-semibold tracking-wider text-white/40 uppercase">
                  {item.code}
                </span>
                {isSelected && (
                  <svg
                    className="ml-1 h-3.5 w-3.5 text-tan shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

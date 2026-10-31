"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import {
  ChevronDownIcon,
  InstagramIcon,
  FacebookIcon,
  XTwitterIcon,
} from "@/components/icons";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/yourhealthfirst_clinic_/?hl=en",
    Icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Yourhealthfirstsofia",
    Icon: FacebookIcon,
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/YHFHarleyStreet",
    Icon: XTwitterIcon,
  },
];

/* ── Menu structure (hrefs only — labels come from translations) ── */
const dropdownStructure = [
  {
    categoryKey: "phlebotomy",
    items: [{ labelKey: "phlebotomy", href: "/treatments/phlebotomy" }],
  },
  {
    categoryKey: "faceAntiAging",
    items: [
      { labelKey: "antiWrinkles", href: "/treatments/anti-wrinkles" },
      { labelKey: "dermalFillers", href: "/treatments/dermal-fillers" },
    ],
  },
  {
    categoryKey: "biostimulators",
    items: [
      { labelKey: "sunekos", href: "/treatments/sunekos" },
      { labelKey: "profhilo", href: "/treatments/profhilo" },
      { labelKey: "polynucleotides", href: "/treatments/polynucleotides" },
      { labelKey: "sculptra", href: "/treatments/sculptra" },
      { labelKey: "prpFaceBody", href: "/treatments/prp-face-body" },
    ],
  },
  {
    categoryKey: "hairRestoration",
    items: [
      { labelKey: "prpHairLoss", href: "/treatments/prp-hair-loss" },
      { labelKey: "exosomeTherapy", href: "/treatments/exosome" },
    ],
  },
  {
    categoryKey: "bodyContouring",
    items: [
      { labelKey: "cryolipolysis", href: "/treatments/cryolipolysis" },
      { labelKey: "emsculptNeo", href: "/treatments/emsculpt-neo" },
      { labelKey: "aqualyx", href: "/treatments/aqualyx" },
    ],
  },
  {
    categoryKey: "weightLoss",
    items: [{ labelKey: "mounjaro", href: "/treatments/mounjaro" }],
  },
  {
    categoryKey: "skinHealth",
    items: [
      { labelKey: "microneedling", href: "/treatments/microneedling" },
      { labelKey: "mesotherapy", href: "/treatments/mesotherapy" },
      { labelKey: "chemicalPeels", href: "/treatments/photo-aging" },
      { labelKey: "sclerotherapy", href: "/treatments/sclerotherapy" },
      { labelKey: "cryoPen", href: "/treatments/cryopen" },
      { labelKey: "vitaminB12", href: "/treatments/vitamin-b12" },
    ],
  },
  {
    categoryKey: "longevity",
    items: [{ labelKey: "longevityProgramme", href: "/longevity" }],
  },
];

const navStructure = [
  { labelKey: "home", href: "/" },
  { labelKey: "aboutMe", href: "/about-us" },
  { labelKey: "treatments", href: "/treatments", hasDropdown: true },
  { labelKey: "homeSkincare", href: "/home-skincare" },
  { labelKey: "priceList", href: "/price-list" },
  { labelKey: "gallery", href: "/gallery" },
  { labelKey: "blogs", href: "/blogs" },
  { labelKey: "press", href: "/press" },
  { labelKey: "contactUs", href: "/contact-us" },
];

import { getSanityAttribute } from "@/sanity/lib/dataAttribute";
import { urlFor } from "@/sanity/lib/image";

export default function Header({ sanitySettings }: { sanitySettings?: any }) {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileTreatmentsOpen, setIsMobileTreatmentsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const headerLocation = sanitySettings?.headerLocation || "Harley Street • London";
  const headerAddress = sanitySettings?.headerAddress || "2 Wimpole Street, W1G 0EB";
  const headerPhone = sanitySettings?.headerPhone || "0207 225 3582";
  const locale = useLocale();
  const isEn = locale === "en";
  const headerCtaText = (isEn && sanitySettings?.headerCtaText) || t("bookConsultation");
  const logoUrl = sanitySettings?.logoImage ? urlFor(sanitySettings.logoImage).url() : "/images/logo.png";

  const openDropdown = () => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setIsDropdownOpen(false), 120);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50" dir="ltr">
      {/* ── Tier 1: Top Utility Bar ── */}
      <div className="relative z-[100] w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
        <div className="mx-auto flex h-[36px] max-w-[1400px] items-center justify-between px-4 sm:px-6 text-[11px] xl:text-[12px] tracking-wide text-white/80">
          {/* Left: Harley Street Address & Telephone */}
          <div className="flex items-center gap-2.5 sm:gap-3 text-white/75">
            <span
              data-sanity={getSanityAttribute("siteSettings", "siteSettings", "headerLocation")}
              className="flex items-center gap-1.5 font-medium tracking-wider text-tan uppercase text-[10.5px] sm:text-[11px] cursor-pointer"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-tan" />
              {headerLocation}
            </span>
            <span className="hidden md:inline text-white/25">|</span>
            <span
              data-sanity={getSanityAttribute("siteSettings", "siteSettings", "headerAddress")}
              className="hidden md:inline text-white/60 cursor-pointer"
            >
              {headerAddress}
            </span>
            <span className="hidden lg:inline text-white/25">|</span>
            <a
              href="tel:02072253582"
              data-sanity={getSanityAttribute("siteSettings", "siteSettings", "headerPhone")}
              className="hidden lg:inline text-white/75 hover:text-tan transition-colors font-medium cursor-pointer"
            >
              {headerPhone}
            </a>
          </div>

          {/* Right: Social Links + Language Switcher */}
          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            <div className="hidden sm:flex items-center gap-1 sm:gap-1.5">
              <span className="hidden sm:inline text-[10px] uppercase font-semibold text-white/45 tracking-wider mr-1">
                Follow:
              </span>
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-[24px] w-[24px] sm:h-[26px] sm:w-[26px] items-center justify-center rounded-full border border-tan/30 bg-white/5 text-tan transition-all duration-200 hover:scale-110 hover:border-tan hover:bg-tan hover:text-forest"
                >
                  <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </a>
              ))}
            </div>

            <span className="hidden sm:block h-3.5 w-[1px] bg-white/20 mx-0.5" />

            <div className="shrink-0 flex items-center">
              <LanguageSwitcher align="right" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Tier 2: Main Navigation Bar ── */}
      <div className="relative z-20 w-full px-4 sm:px-6">
        <div className="mx-auto flex h-[75px] max-w-[1400px] items-center justify-between">
          {/* Logo — left */}
          <Link href="/" className="relative z-10 block shrink-0">
            <Image
              src={logoUrl}
              alt="Your Health First Clinic"
              width={488}
              height={328}
              priority
              sizes="(min-width: 1280px) 130px, (min-width: 640px) 115px, 100px"
              data-sanity={getSanityAttribute("siteSettings", "siteSettings", "logoImage")}
              className="h-auto w-[100px] sm:w-[115px] xl:w-[130px] object-contain"
              unoptimized={logoUrl.startsWith("http")}
            />
          </Link>

          {/* Desktop Nav — Centered with ample space */}
          <nav className="relative z-20 hidden lg:block shrink-0">
            <ul className="flex h-[40px] items-center rounded-[5px] border-[0.8px] border-white/33 bg-black/80 backdrop-blur-sm px-1.5 xl:px-2">
              {navStructure.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.hasDropdown && pathname.startsWith("/treatments"));

                if (link.hasDropdown) {
                  return (
                    <li
                      key={link.labelKey}
                      className="h-[36px]"
                      onMouseEnter={openDropdown}
                      onMouseLeave={closeDropdown}
                    >
                      <button
                        type="button"
                        className={`flex h-[40px] items-center gap-0.5 xl:gap-1 px-2 xl:px-2.5 2xl:px-3 font-nav text-[11.5px] xl:text-[12.5px] 2xl:text-[13px] leading-tight font-medium tracking-tight uppercase whitespace-nowrap transition-colors hover:text-white ${
                          isActive ? "text-white" : "text-tan"
                        }`}
                      >
                        {t(link.labelKey)}
                        <ChevronDownIcon
                          className={`h-3 w-3 transition-transform duration-200 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mega-dropdown panel — centered under nav */}
                      <div
                        onMouseEnter={openDropdown}
                        onMouseLeave={closeDropdown}
                        className={`absolute left-1/2 top-[calc(100%+6px)] -translate-x-1/2 w-[860px] max-w-[calc(100vw-40px)] rounded-[8px] border-[0.8px] border-tan/30 bg-[#0c0c0c] shadow-2xl transition-all duration-200 z-30 ${
                          isDropdownOpen
                            ? "pointer-events-auto translate-y-0 opacity-100"
                            : "pointer-events-none -translate-y-2 opacity-0"
                        }`}
                      >
                        {/* Gold top accent line */}
                        <div className="h-[2px] w-full rounded-t-[8px] bg-gradient-to-r from-transparent via-tan to-transparent" />

                        <div className="grid grid-cols-4 gap-8 p-8">
                          {dropdownStructure.map((group) => (
                            <div key={group.categoryKey}>
                              <p className="mb-4 border-b border-tan/30 pb-3 font-display text-[13px] font-medium tracking-[2px] text-tan uppercase">
                                {t(`categories.${group.categoryKey}`)}
                              </p>
                              <ul className="flex flex-col gap-[10px]">
                                {group.items.map((item) => (
                                  <li key={item.href}>
                                    <Link
                                      href={item.href}
                                      className="block font-nav text-[15px] font-medium leading-[1.4] text-white/75 tracking-[-0.3px] transition-colors duration-150 hover:text-tan"
                                    >
                                      {t(`items.${item.labelKey}`)}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Footer strip — view all link */}
                        <div className="border-t border-white/10 px-8 py-4">
                          <Link
                            href="/treatments"
                            className="font-nav text-[14px] font-medium tracking-[1px] text-tan/70 uppercase transition-colors hover:text-tan"
                          >
                            {t("viewAllTreatments")}
                          </Link>
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={link.href} className="h-[36px]">
                    <Link
                      href={link.href}
                      className={`flex h-[40px] items-center px-2 xl:px-2.5 2xl:px-3 font-nav text-[11.5px] xl:text-[12.5px] 2xl:text-[13px] leading-tight font-medium tracking-tight uppercase whitespace-nowrap transition-colors hover:text-white ${
                        isActive ? "text-white" : "text-tan"
                      }`}
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right side: CTA button (Desktop) + Hamburger (Mobile) */}
          <div className="relative z-10 flex items-center gap-3 shrink-0">
            <Link
              href="/#book"
              data-sanity={getSanityAttribute("siteSettings", "siteSettings", "headerCtaText")}
              className="hidden shrink-0 items-center justify-center rounded-[6px] bg-tan px-4 xl:px-5 py-2 xl:py-2.5 font-nav text-[12px] xl:text-[13px] font-semibold tracking-[-0.2px] text-forest whitespace-nowrap transition-all duration-200 hover:bg-white hover:text-black lg:inline-flex min-w-[130px] xl:min-w-[150px] text-center shadow-md"
            >
              {headerCtaText}
            </Link>

            <button
              type="button"
              aria-label={t("openMenu")}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-tan/40 bg-black/70 text-tan shadow-sm backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-tan hover:bg-tan hover:text-forest lg:hidden"
            >
              <span className="sr-only">{t("openMenu")}</span>
              <svg width="20" height="14" viewBox="0 0 22 16" fill="none" aria-hidden="true">
                <rect width="22" height="2" rx="1" fill="currentColor" />
                <rect y="7" width="22" height="2" rx="1" fill="currentColor" />
                <rect y="14" width="22" height="2" rx="1" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile off-canvas panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 z-50 h-full w-full overflow-y-auto bg-cream transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6">
          {/* Mobile language switcher */}
          <LanguageSwitcher align="left" />

          <button
            type="button"
            aria-label={t("closeMenu")}
            onClick={() => setIsMenuOpen(false)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-forest/20 bg-forest/5 text-forest transition-all hover:bg-forest hover:text-white"
          >
            <span className="sr-only">{t("closeMenu")}</span>
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Mobile Booking CTA button */}
        <div className="px-6 pb-2">
          <Link
            href="/#book"
            onClick={() => setIsMenuOpen(false)}
            className="flex w-full items-center justify-center rounded-[8px] bg-tan py-3 px-6 font-nav text-[13px] font-semibold tracking-[0.5px] text-forest shadow-sm transition-all hover:bg-forest hover:text-white text-center uppercase"
          >
            {headerCtaText}
          </Link>
        </div>

        {/* Social links row in mobile drawer */}
        <div className="flex items-center justify-center gap-4 px-6 pb-4 pt-1 border-b border-black/10">
          <span className="font-nav text-[12px] font-semibold uppercase tracking-wider text-forest/70">
            Follow Us:
          </span>
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-forest/10 text-forest transition-colors hover:bg-rust hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <nav className="flex flex-col px-8 pb-12 pt-4">
          <ul className="flex flex-col gap-0 divide-y divide-black/10">
            {navStructure.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.hasDropdown && pathname.startsWith("/treatments"));

              if (link.hasDropdown) {
                return (
                  <li key={link.labelKey}>
                    <button
                      type="button"
                      onClick={() => setIsMobileTreatmentsOpen((v) => !v)}
                      className="flex w-full items-center justify-between py-5 font-nav text-[18px] font-semibold tracking-[-0.7px] uppercase text-forest"
                    >
                      <span className={isActive ? "text-rust" : ""}>
                        {t(link.labelKey)}
                      </span>
                      <ChevronDownIcon
                        className={`h-4 w-4 text-rust transition-transform duration-200 ${
                          isMobileTreatmentsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile accordion */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isMobileTreatmentsOpen ? "max-h-[1600px]" : "max-h-0"
                      }`}
                    >
                      <div className="flex flex-col gap-6 pb-6 pl-2">
                        {/* Primary direct link to All Treatments catalog page */}
                        <div className="pt-2">
                          <Link
                            href="/treatments"
                            onClick={() => setIsMenuOpen(false)}
                            className="inline-flex items-center justify-between w-full rounded-[8px] bg-[#7a6248]/10 border border-[#7a6248]/25 px-4 py-3 font-nav text-[14px] font-semibold tracking-[-0.2px] text-[#7a6248] uppercase transition-all hover:bg-[#7a6248] hover:text-white shadow-sm"
                          >
                            <span>{t("viewAllTreatments")}</span>
                          </Link>
                        </div>

                        {dropdownStructure.map((group) => (
                          <div key={group.categoryKey}>
                            <p className="mb-2 font-display text-[10px] font-medium tracking-[2px] text-rust uppercase">
                              {t(`categories.${group.categoryKey}`)}
                            </p>
                            <ul className="flex flex-col gap-2">
                              {group.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="font-nav text-[15px] font-medium text-forest/80 tracking-[-0.3px] transition-colors hover:text-rust"
                                  >
                                    {t(`items.${item.labelKey}`)}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        {/* Bottom link to All Treatments */}
                        <div className="pt-2 border-t border-black/10">
                          <Link
                            href="/treatments"
                            onClick={() => setIsMenuOpen(false)}
                            className="inline-flex items-center justify-center w-full rounded-[8px] bg-tan/20 border border-tan/40 py-2.5 px-4 font-nav text-[13px] font-semibold text-forest uppercase tracking-wider transition-colors hover:bg-forest hover:text-white"
                          >
                            {t("viewAllTreatments")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-5 font-nav text-[18px] font-semibold tracking-[-0.7px] uppercase ${
                      isActive ? "text-rust" : "text-forest"
                    }`}
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

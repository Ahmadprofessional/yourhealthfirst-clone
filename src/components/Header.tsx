"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ChevronDownIcon } from "@/components/icons";
import LanguageSwitcher from "@/components/LanguageSwitcher";

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

export default function Header() {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileTreatmentsOpen, setIsMobileTreatmentsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    <header className="absolute top-0 left-0 right-0 z-50 px-5" dir="ltr">
      <div className="mx-auto flex h-[111px] max-w-[1400px] items-center">
        {/* Logo — top-left corner */}
        <Link href="/" className="relative z-10 block shrink-0 mr-1 xl:mr-2">
          <Image
            src="/images/logo.png"
            alt="Your Health First Clinic"
            width={488}
            height={328}
            priority
            className="h-auto w-[105px] xl:w-[130px] 2xl:w-[145px] object-contain"
          />
        </Link>

        {/* Left flexible spacer — equal to right spacer for perfect symmetrical centering */}
        <div className="flex-1 min-w-[20px] xl:min-w-[36px]" />

        {/* Desktop nav — centered between Logo and Right Controls with guaranteed clearance */}
        <nav className="relative z-20 hidden lg:block shrink-0">
          <ul className="flex h-[38px] items-center rounded-[5px] border-[0.8px] border-white/33 bg-black/80 backdrop-blur-sm px-1 xl:px-1.5">
            {navStructure.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.hasDropdown && pathname.startsWith("/treatments"));

              if (link.hasDropdown) {
                return (
                  <li
                    key={link.labelKey}
                    className="h-[35px]"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <button
                      type="button"
                      className={`flex h-[38px] items-center gap-0.5 xl:gap-1 px-1.5 xl:px-2 2xl:px-2.5 font-nav text-[11px] xl:text-[12px] 2xl:text-[13px] leading-tight font-medium tracking-tight uppercase whitespace-nowrap transition-colors hover:text-white ${
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
                <li key={link.href} className="h-[35px]">
                  <Link
                    href={link.href}
                    className={`flex h-[38px] items-center px-1.5 xl:px-2 2xl:px-2.5 font-nav text-[11px] xl:text-[12px] 2xl:text-[13px] leading-tight font-medium tracking-tight uppercase whitespace-nowrap transition-colors hover:text-white ${
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

        {/* Right flexible spacer — equal to left spacer for perfect symmetrical centering */}
        <div className="flex-1 min-w-[20px] xl:min-w-[36px]" />

        {/* Right side controls: Language switcher + CTA button (Desktop) + Hamburger (Mobile) */}
        <div className="relative z-50 flex items-center gap-2 xl:gap-3 shrink-0">
          <div className="shrink-0 flex items-center">
            <LanguageSwitcher align="right" />
          </div>

          <Link
            href="/#book"
            className="hidden shrink-0 items-center justify-center rounded-[6px] bg-tan px-3 xl:px-4 py-2 xl:py-2.5 font-nav text-[11.5px] xl:text-[12.5px] font-semibold tracking-[-0.2px] text-forest whitespace-nowrap transition-opacity hover:opacity-90 lg:inline-flex min-w-[120px] xl:min-w-[145px] text-center"
          >
            {t("bookConsultation")}
          </Link>

          <button
            type="button"
            aria-label={t("openMenu")}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
            className="flex h-12 w-12 shrink-0 items-center justify-center bg-rust text-white lg:hidden"
          >
            <span className="sr-only">{t("openMenu")}</span>
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
              <rect width="22" height="2" fill="currentColor" />
              <rect y="7" width="22" height="2" fill="currentColor" />
              <rect y="14" width="22" height="2" fill="currentColor" />
            </svg>
          </button>
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
            className="flex h-12 w-12 shrink-0 items-center justify-center bg-rust text-white"
          >
            <span className="sr-only">{t("closeMenu")}</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="2" />
              <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
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
                        isMobileTreatmentsOpen ? "max-h-[1000px]" : "max-h-0"
                      }`}
                    >
                      <div className="flex flex-col gap-6 pb-6 pl-2">
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

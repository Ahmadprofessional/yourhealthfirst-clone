"use client";

import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { contact } from "@/data/site";
import {
  FacebookIcon,
  XTwitterIcon,
  InstagramIcon,
  PhoneIcon,
  MobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@/components/icons";
import { getSanityAttribute } from "@/sanity/lib/dataAttribute";

// ── 1. AS SEEN ON & AWARDS (100% Genuine Sofia Recognitions) ──
const seenOnLogos = [
  {
    src: "/images/logos/ghp-awards-2020.png",
    alt: "Global Healthcare & Pharmaceutical Awards — Best Cosmetic & Medical Treatments Clinic London",
    title: "GHP Healthcare & Pharmaceutical Awards (Winner 2020)",
    width: 240,
    height: 70,
    maxH: "h-[54px] md:h-[62px]",
  },
  {
    src: "/images/logos/queen-jubilee-award.png",
    alt: "The Queen's Platinum Jubilee Award 2022 — Parliamentary Society of Arts",
    title: "The Queen's Platinum Jubilee Award 2022",
    width: 140,
    height: 75,
    maxH: "h-[58px] md:h-[68px]",
  },
  {
    src: "/images/logos/women-in-excellence.jpg",
    alt: "Women of Excellence Award — House of Lords, UK Parliament",
    title: "Women of Excellence Award (House of Lords, UK Parliament)",
    width: 140,
    height: 75,
    maxH: "h-[58px] md:h-[68px]",
  },
];

// ── 2. MEMBER OF & ACCREDITATIONS (100% Genuine Medical Registrations) ──
const memberOfLogos = [
  {
    src: "/images/logos/bas-sclerotherapy.png",
    alt: "British Association of Sclerotherapists — Accredited Member",
    title: "British Association of Sclerotherapists (BAS)",
    width: 180,
    height: 70,
    maxH: "h-[48px] md:h-[56px]",
  },
  {
    src: "/images/logos/national-phlebotomist-register.png",
    alt: "National Phlebotomist Register — Certified Practitioner",
    title: "National Phlebotomist Register (NPR)",
    width: 220,
    height: 70,
    maxH: "h-[48px] md:h-[56px]",
  },
  {
    src: "/images/logos/cpd-member-certification.webp",
    alt: "The CPD Certification Service — Accredited Member",
    title: "The CPD Certification Service (Accredited Member)",
    width: 140,
    height: 75,
    maxH: "h-[54px] md:h-[64px]",
  },
  {
    src: "/images/logos/cpd-healthcare-blue.png",
    alt: "CPD Healthcare Approved CPD Certification",
    title: "CPD Healthcare Approved CPD (cpdhealthcare.co.uk)",
    width: 140,
    height: 75,
    maxH: "h-[54px] md:h-[64px]",
  },
  {
    src: "/images/logos/city-of-westminster.png",
    alt: "City of Westminster Training Certification Service",
    title: "City of Westminster Certification Service",
    width: 160,
    height: 70,
    maxH: "h-[48px] md:h-[56px]",
  },
  {
    src: "/images/logos/somuk-mesotherapy.webp",
    alt: "Society of Mesotherapy UK (SoMUK) — Certified Member",
    title: "Society of Mesotherapy UK (SoMUK)",
    width: 120,
    height: 75,
    maxH: "h-[56px] md:h-[66px]",
  },
  {
    src: "/images/logos/wigmore-medical.png",
    alt: "Wigmore Medical — Clinical & Training Partner",
    title: "Wigmore Medical Clinical Partner",
    width: 170,
    height: 65,
    maxH: "h-[44px] md:h-[52px]",
  },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/Yourhealthfirstsofia",
    Icon: FacebookIcon,
  },
  {
    label: "X-Twitter",
    href: "https://twitter.com/YHFHarleyStreet",
    Icon: XTwitterIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yourhealthfirst_clinic_/?hl=en",
    Icon: InstagramIcon,
  },
];

export default function Footer({ sanitySettings }: { sanitySettings?: any }) {
  const t = useTranslations("Footer");
  const tHeader = useTranslations("Header");
  const tServices = useTranslations("ServiceList");
  const locale = useLocale();
  const isEn = locale === "en";

  const ctaHeading = (isEn && sanitySettings?.footerCtaHeading) || t("ctaHeading");
  const ctaSubtitle = (isEn && sanitySettings?.footerCtaSubtitle) || t("ctaSubtitle");
  const ctaDescription = (isEn && sanitySettings?.footerCtaDescription) || t("ctaDescription");
  const copyrightText =
    (isEn && sanitySettings?.copyrightText) ||
    `© ${new Date().getFullYear()} YourHealthFirst Clinic. All rights reserved. 2 Wimpole Street, 2nd Floor, London W1G 0EB.`;
  const clinicName = (isEn && sanitySettings?.clinicName) || t("clinicName");
  const callNowText = (isEn && sanitySettings?.callNowText) || t("callNow");
  const emailNowText = (isEn && sanitySettings?.emailNowText) || t("emailNow");
  const phone1 = sanitySettings?.contactPhone1 || contact.phone1;
  const phone2 = sanitySettings?.contactPhone2 || contact.phone2;
  const email = sanitySettings?.contactEmail || contact.email;
  const address = sanitySettings?.contactAddress || contact.address;

  const quickLinks = [
    { label: t("home"), href: "/" as const },
    { label: t("about"), href: "/about-us" as const },
    { label: t("services"), href: "/treatments" as const },
    { label: tHeader("gallery"), href: "/gallery" as const },
    { label: tHeader("priceList"), href: "/price-list" as const },
    { label: tHeader("blogs"), href: "/blogs" as const },
    { label: t("contact"), href: "/contact-us" as const },
  ];

  const popularTreatments = [
    { label: tServices("anti-wrinkles.title"), href: "/treatments/anti-wrinkles" as const },
    { label: tServices("dermal-fillers.title"), href: "/treatments/dermal-fillers" as const },
    { label: tServices("cryolipolysis.title"), href: "/treatments/cryolipolysis" as const },
    { label: tServices("prp-hair-loss.title"), href: "/treatments/prp-hair-loss" as const },
    { label: tServices("profhilo.title"), href: "/treatments/profhilo" as const },
    { label: tServices("mounjaro.title"), href: "/treatments/mounjaro" as const },
    { label: tServices("phlebotomy.title"), href: "/treatments/phlebotomy" as const },
  ];

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1. AS SEEN ON & RECOGNITION (Luxury White Bar)
          ───────────────────────────────────────────────────────────── */}
      <section
        aria-label="Recognition and Press Features"
        className="w-full border-t border-black/8 bg-white px-5 py-12 lg:py-14"
      >
        <div className="mx-auto max-w-[1400px]">
          {/* Centered Serif Script Header with Divider */}
          <div className="relative mb-8 flex items-center justify-center">
            <div className="w-full border-t border-black/10" />
            <span className="absolute bg-white px-6 font-serif text-[22px] italic tracking-[0.5px] text-[#7a6248] md:text-[25px]">
              {t("asSeenOn")}
            </span>
          </div>

          {/* Logos with Full-Color Luxury Cards & Smooth Floating Hover */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 pt-2">
            {seenOnLogos.map((logo) => (
              <div
                key={logo.src}
                title={logo.title}
                className="group relative flex items-center justify-center rounded-2xl border border-[#7a6248]/15 bg-[#fbf9f5] px-4 py-3 sm:px-7 sm:py-4 max-w-full shadow-[0_2px_12px_-2px_rgba(122,98,72,0.06)] transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.05] hover:border-[#b49b7d] hover:shadow-[0_16px_36px_-6px_rgba(180,155,125,0.28)]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={`${logo.maxH} max-w-full w-auto object-contain transition-transform duration-500 group-hover:scale-105`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. MEMBER OF (Warm Luxury Ivory/Sand Bar)
          ───────────────────────────────────────────────────────────── */}
      <section
        aria-label="Professional Accreditations and Memberships"
        className="w-full border-t border-[#7a6248]/15 bg-[#f7f4ee] px-5 py-12 lg:py-14"
      >
        <div className="mx-auto max-w-[1400px]">
          {/* Centered Serif Script Header with Divider */}
          <div className="relative mb-8 flex items-center justify-center">
            <div className="w-full border-t border-[#7a6248]/20" />
            <span className="absolute bg-[#f7f4ee] px-6 font-serif text-[22px] italic tracking-[0.5px] text-[#7a6248] md:text-[25px]">
              {t("memberOf")}
            </span>
          </div>

          {/* Logos with Full-Color Luxury Cards & Smooth Floating Hover */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 md:gap-7 lg:gap-8 pt-2">
            {memberOfLogos.map((logo) => (
              <div
                key={logo.src}
                title={logo.title}
                className="group relative flex items-center justify-center rounded-2xl border border-[#7a6248]/15 bg-white px-4 py-2.5 sm:px-6 sm:py-3.5 max-w-full shadow-[0_2px_10px_-2px_rgba(122,98,72,0.06)] transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.05] hover:border-[#b49b7d]/60 hover:shadow-[0_16px_36px_-6px_rgba(180,155,125,0.28)]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={`${logo.maxH} max-w-full w-auto object-contain transition-transform duration-500 group-hover:scale-105`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. MAIN LUXURY FOOTER (Expansive, Prestigious, Responsive)
          ───────────────────────────────────────────────────────────── */}
      <footer className="w-full bg-[#7a6248] text-white px-5 pt-16 pb-8 border-t border-[#b49b7d]/30">
        <div className="mx-auto max-w-[1400px]">
          {/* Top Brand Banner */}
          <div className="flex flex-col items-center text-center pb-12 border-b border-white/15 gap-4">
            <h2
              data-sanity={getSanityAttribute("siteSettings", "siteSettings", "clinicName")}
              className="font-subheading text-[32px] md:text-[42px] lg:text-[48px] font-bold tracking-[-1px] text-cream uppercase"
            >
              {clinicName}
            </h2>
            <p className="max-w-[700px] text-[14px] md:text-[15px] tracking-[1.5px] uppercase text-white/90 font-nav font-medium">
              {t("tagline")}
            </p>

            {/* Social Media Interactive Badges */}
            <div className="flex items-center gap-3 pt-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-cream transition-all duration-300 hover:scale-110 hover:border-tan hover:bg-tan hover:text-[#7a6248]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* 4 Spacious, Responsive Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 py-14">
            {/* Col 1: Heritage & Consultation CTA */}
            <div className="flex flex-col gap-5">
              <h3
                data-sanity={getSanityAttribute("siteSettings", "siteSettings", "footerCtaHeading")}
                className="font-serif text-[22px] leading-[28px] font-bold text-white tracking-[-0.5px] uppercase"
              >
                {ctaHeading}
              </h3>
              <div className="text-[14px] leading-[23px] text-white/90 space-y-2">
                <p data-sanity={getSanityAttribute("siteSettings", "siteSettings", "footerCtaSubtitle")}>
                  {ctaSubtitle}
                </p>
                <p data-sanity={getSanityAttribute("siteSettings", "siteSettings", "footerCtaDescription")}>
                  {ctaDescription}
                </p>
              </div>

              {/* Consultation Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${phone1.replace(/\s+/g, "")}`}
                  data-sanity={getSanityAttribute("siteSettings", "siteSettings", "callNowText")}
                  className="inline-flex items-center justify-center rounded-[8px] bg-rust px-5 py-3 text-[14px] font-bold text-white tracking-[-0.2px] transition-all hover:opacity-90 shadow-sm"
                >
                  {callNowText}
                </a>
                <a
                  href={`mailto:${email}`}
                  data-sanity={getSanityAttribute("siteSettings", "siteSettings", "emailNowText")}
                  className="inline-flex items-center justify-center rounded-[8px] bg-cream px-5 py-3 text-[14px] font-bold text-forest tracking-[-0.2px] transition-all hover:bg-white shadow-sm"
                >
                  {emailNowText}
                </a>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-[20px] font-bold text-white uppercase tracking-[-0.5px]">
                {t("quickLink")}
              </h3>
              <ul className="flex flex-col gap-2.5 text-[14px] leading-[22px] text-white/90">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block transition-transform duration-200 hover:translate-x-1 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Signature Treatments */}
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-[20px] font-bold text-white uppercase tracking-[-0.5px]">
                {t("signatureTreatments")}
              </h3>
              <ul className="flex flex-col gap-2.5 text-[14px] leading-[22px] text-white/90">
                {popularTreatments.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-block transition-transform duration-200 hover:translate-x-1 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Harley Street Location & Hours */}
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-[20px] font-bold text-white uppercase tracking-[-0.5px]">
                {t("contact")}
              </h3>
              <ul className="flex flex-col gap-3.5 text-[14px] leading-[22px] text-white/90">
                <li className="flex items-start gap-3">
                  <MapPinIcon className="h-5 w-5 shrink-0 text-tan mt-0.5" />
                  <span
                    data-sanity={getSanityAttribute("siteSettings", "siteSettings", "contactAddress")}
                    className="cursor-pointer hover:text-white"
                  >
                    {address}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 shrink-0 text-tan" />
                  <a
                    href={`tel:${phone1.replace(/\s+/g, "")}`}
                    data-sanity={getSanityAttribute("siteSettings", "siteSettings", "contactPhone1")}
                    className="hover:underline hover:text-white"
                  >
                    {phone1}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MobileIcon className="h-5 w-5 shrink-0 text-tan" />
                  <a
                    href={`tel:${phone2.replace(/\s+/g, "")}`}
                    data-sanity={getSanityAttribute("siteSettings", "siteSettings", "contactPhone2")}
                    className="hover:underline hover:text-white"
                  >
                    {phone2}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <EnvelopeIcon className="h-5 w-5 shrink-0 text-tan" />
                  <a
                    href={`mailto:${email}`}
                    data-sanity={getSanityAttribute("siteSettings", "siteSettings", "contactEmail")}
                    className="hover:underline hover:text-white"
                  >
                    {email}
                  </a>
                </li>
                <li className="pt-2 text-xs text-white/90 border-t border-white/10">
                  <p className="font-semibold text-cream">{t("openingHours")}</p>
                  <p>{t("monFri")}</p>
                  <p>{t("saturday")}</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Legal, Standards & Compliance Bar */}
          <div className="border-t border-white/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/90">
            <p
              data-sanity={getSanityAttribute("siteSettings", "siteSettings", "copyrightText")}
              className="text-center md:text-left"
            >
              {copyrightText}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <Link
                href="/privacy-policy"
                className="hover:text-cream transition-colors underline-offset-4 hover:underline"
              >
                {t("privacyPolicy")}
              </Link>
              <Link
                href="/cookie-policy"
                className="hover:text-cream transition-colors underline-offset-4 hover:underline"
              >
                {t("cookiePolicy")}
              </Link>
              <Link
                href="/terms"
                className="hover:text-cream transition-colors underline-offset-4 hover:underline"
              >
                {t("termsConditions")}
              </Link>
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new CustomEvent("openCookieSettings"));
                  }
                }}
                className="text-[#fbeccd] hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                {t("cookieSettings")}
              </button>
            </div>
          </div>

          {/* Medical Standards Disclaimer */}
          <div className="mt-4 text-center text-[11px] text-white/90">
            {t("medicalStandards")}
          </div>
        </div>
      </footer>
    </>
  );
}

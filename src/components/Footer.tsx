"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
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

// ── 1. AS SEEN ON & AWARDS (100% Genuine Dr. Sofia Recognitions) ──
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

  const ctaHeading = sanitySettings?.footerCtaHeading || t("ctaHeading");
  const ctaSubtitle = sanitySettings?.footerCtaSubtitle || t("ctaSubtitle");
  const ctaDescription = sanitySettings?.footerCtaDescription || t("ctaDescription");
  const copyrightText =
    sanitySettings?.copyrightText ||
    `© ${new Date().getFullYear()} YourHealthFirst Clinic. All rights reserved. 2 Wimpole Street, 2nd Floor, London W1G 0EB.`;
  const clinicName = sanitySettings?.clinicName || t("clinicName");
  const callNowText = sanitySettings?.callNowText || t("callNow");
  const emailNowText = sanitySettings?.emailNowText || t("emailNow");
  const phone1 = sanitySettings?.contactPhone1 || contact.phone1;
  const phone2 = sanitySettings?.contactPhone2 || contact.phone2;
  const email = sanitySettings?.contactEmail || contact.email;
  const address = sanitySettings?.contactAddress || contact.address;

  const quickLinks = [
    { label: t("home"), href: "/" as const },
    { label: t("about"), href: "/about-us" as const },
    { label: t("services"), href: "/treatments" as const },
    { label: "Before & After Gallery", href: "/gallery" as const },
    { label: "Treatment Price List", href: "/price-list" as const },
    { label: "Clinical Insights & Blog", href: "/blog" as const },
    { label: t("contact"), href: "/contact-us" as const },
  ];

  const popularTreatments = [
    { label: "Anti-Wrinkle Injections", href: "/treatments/anti-wrinkles" as const },
    { label: "Dermal Fillers", href: "/treatments/dermal-fillers" as const },
    { label: "Cryolipolysis (Fat Freezing)", href: "/treatments/cryolipolysis" as const },
    { label: "PRP Hair Loss & Restoration", href: "/treatments/prp-hair-loss" as const },
    { label: "Profhilo Skin Remodelling", href: "/treatments/profhilo" as const },
    { label: "Mounjaro Weight Management", href: "/treatments/mounjaro" as const },
    { label: "Private Phlebotomy", href: "/phlebotomy" as const },
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
              As seen on &amp; Recognition
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
          2. MEMBER OF (Warm Luxury Ivory/Sand Bar — Matching rozinaali.com)
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
              Member of
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
              Harley Street Aesthetic Medicine &amp; Longevity Clinic · 2 Wimpole Street, London
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
                Signature Treatments
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
                  <p className="font-semibold text-cream">Opening Hours:</p>
                  <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                  <p>Saturday: By Appointment Only</p>
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
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy"
                className="hover:text-cream transition-colors underline-offset-4 hover:underline"
              >
                Cookie Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-cream transition-colors underline-offset-4 hover:underline"
              >
                Terms &amp; Conditions
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
                Cookie Settings
              </button>
            </div>
          </div>

          {/* Medical Standards Disclaimer */}
          <div className="mt-4 text-center text-[11px] text-white/90">
            GMC Registered Medical Practitioners · CQC Regulated Clinic Standards · Fully Insured Clinical Practice
          </div>
        </div>
      </footer>
    </>
  );
}

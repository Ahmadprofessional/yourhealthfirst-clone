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

const accreditationLogos = [
  { src: "/images/logos/training2-1.jpg", alt: "Wigmore Medical & British Association of Sclerotherapists" },
  { src: "/images/logos/bgilogo.png", alt: "BGi UK Insurance Risk Management" },
  { src: "/images/logos/logocpd.jpg", alt: "CPD Accredited" },
  { src: "/images/logos/westminterlogo.png", alt: "City of Westminster Training Certification Service" },
  { src: "/images/logos/cpdlogo.png", alt: "CPD Member" },
  { src: "/images/logos/womenexcwawardthumbnail.jpg", alt: "Women Excellence Award" },
  { src: "/images/logos/wawlogo.jpg", alt: "WAW Hall of Fame" },
  { src: "/images/logos/seal.jpg", alt: "SoMUK" },
  { src: "/images/logos/National-Phlebotomist-Register-Logo-1-1024x431.png", alt: "National Phlebotomist Register" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/Yourhealthfirstsofia",
    Icon: FacebookIcon,
  },
  {
    label: "X-twitter",
    href: "https://twitter.com/YHFHarleyStreet",
    Icon: XTwitterIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yourhealthfirst_clinic_/?hl=en",
    Icon: InstagramIcon,
  },
];

import { getSanityAttribute } from "@/sanity/lib/dataAttribute";
import { urlFor } from "@/sanity/lib/image";

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
    { label: t("contact"), href: "/contact-us" as const },
  ];

  const displayedLogos = sanitySettings?.accreditationLogos?.length > 0
    ? sanitySettings.accreditationLogos.map((item: any, i: number) => ({
        src: item.image ? urlFor(item.image).url() : accreditationLogos[i % accreditationLogos.length]?.src,
        alt: item.alt || "Accreditation Logo",
        key: `sanity-${i}`,
      }))
    : accreditationLogos.map((item) => ({ ...item, key: item.src }));

  return (
    <>
      {/* Accreditation logos bar */}
      <div
        className="w-full border-t border-gray-100 bg-white px-5 py-10"
        data-sanity={getSanityAttribute("siteSettings", "siteSettings", "accreditationLogos")}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-10">
            {displayedLogos.map((logo: any) => (
              <Image
                key={logo.key || logo.src}
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                className="h-[80px] w-auto max-w-[160px] object-contain"
                unoptimized={typeof logo.src === "string" && logo.src.startsWith("http")}
              />
            ))}
          </div>
        </div>
      </div>

      <footer className="w-full bg-brown-gold px-5">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-[50px] py-[100px]">
        {/* Brand + socials */}
        <div className="flex flex-col gap-2">
          <h2
            data-sanity={getSanityAttribute("siteSettings", "siteSettings", "clinicName")}
            className="text-center font-subheading text-[34px] leading-[38px] font-medium tracking-[-1.8px] text-cream uppercase lg:text-[50px] lg:leading-[55px]"
          >
            {clinicName}
          </h2>
          <div className="flex justify-center gap-[10px]">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-[10%] bg-cream text-body-text transition-opacity hover:opacity-80"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Columns */}
        <div className="flex flex-col gap-6 pt-[30px] lg:flex-row">
          {/* CTA */}
          <div className="flex flex-col gap-6 lg:flex-1 lg:min-w-0 xl:w-[716px] xl:flex-none">
            <h2
              data-sanity={getSanityAttribute("siteSettings", "siteSettings", "footerCtaHeading")}
              className="max-w-[573px] font-subheading text-[25px] leading-[30px] font-bold tracking-[-1px] text-white uppercase"
            >
              {ctaHeading}
            </h2>

            <div className="max-w-[394px] text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] text-white">
              <p
                data-sanity={getSanityAttribute("siteSettings", "siteSettings", "footerCtaSubtitle")}
              >
                {ctaSubtitle}
              </p>
              <p
                data-sanity={getSanityAttribute("siteSettings", "siteSettings", "footerCtaDescription")}
              >
                {ctaDescription}
              </p>
            </div>

            <div className="relative flex w-fit items-center">
              <a
                href={`tel:${phone1.replace(/\s+/g, "")}`}
                data-sanity={getSanityAttribute("siteSettings", "siteSettings", "callNowText")}
                className="flex h-14 w-[179px] items-center justify-center rounded-l-[7px] bg-rust p-[15px] text-[16px] font-bold tracking-[-0.2px] text-white"
              >
                {callNowText}
              </a>
              <span className="absolute left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-[#fafaf8] text-[14px] font-medium text-forest uppercase">
                {t("or")}
              </span>
              <a
                href={`mailto:${email}`}
                data-sanity={getSanityAttribute("siteSettings", "siteSettings", "emailNowText")}
                className="flex h-14 w-[179px] items-center justify-center rounded-r-[7px] bg-cream p-[15px] text-[16px] font-bold tracking-[-0.2px] text-rust"
              >
                {emailNowText}
              </a>
            </div>
          </div>

          {/* Quick links + contact */}
          <div className="flex flex-col gap-6 sm:flex-row lg:w-[480px] xl:w-[645px] lg:shrink-0 justify-between">
            <div className="flex flex-col gap-6 sm:flex-1 min-w-0">
              <h2 className="font-serif text-[25px] leading-[30px] tracking-[-1px] text-white uppercase">
                {t("quickLink")}
              </h2>
              <ul className="flex flex-col gap-[9px]">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] text-cream transition-opacity hover:opacity-80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6 sm:flex-1 min-w-0">
              <h2 className="font-serif text-[25px] leading-[30px] tracking-[-1px] text-white uppercase">
                {t("contact")}
              </h2>
              <ul className="flex flex-col gap-[9px] text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] text-cream">
                <li className="flex items-center">
                  <PhoneIcon className="h-[14px] w-[14px] shrink-0" />
                  <a
                    href={`tel:${phone1.replace(/\s+/g, "")}`}
                    data-sanity={getSanityAttribute("siteSettings", "siteSettings", "contactPhone1")}
                    className="pl-[5px] cursor-pointer hover:underline"
                  >
                    {phone1}
                  </a>
                </li>
                <li className="flex items-center">
                  <MobileIcon className="h-[14px] w-[14px] shrink-0" />
                  <a
                    href={`tel:${phone2.replace(/\s+/g, "")}`}
                    data-sanity={getSanityAttribute("siteSettings", "siteSettings", "contactPhone2")}
                    className="pl-[5px] cursor-pointer hover:underline"
                  >
                    {phone2}
                  </a>
                </li>
                <li className="flex items-center">
                  <EnvelopeIcon className="h-[14px] w-[14px] shrink-0" />
                  <a
                    href={`mailto:${email}`}
                    data-sanity={getSanityAttribute("siteSettings", "siteSettings", "contactEmail")}
                    className="pl-[5px] cursor-pointer hover:underline"
                  >
                    {email}
                  </a>
                </li>
                <li className="flex items-center">
                  <MapPinIcon className="h-[14px] w-[14px] shrink-0" />
                  <span
                    data-sanity={getSanityAttribute("siteSettings", "siteSettings", "contactAddress")}
                    className="pl-[5px] cursor-pointer"
                  >
                    {address}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Compliance Bar */}
        <div className="border-t border-white/15 pt-8 pb-2 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-cream/75">
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
              className="text-[#e3bb7b] hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

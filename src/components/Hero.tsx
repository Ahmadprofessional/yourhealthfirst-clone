"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import {
  SmileIcon,
  DnaIcon,
  MapleLeafIcon,
  HandshakeIcon,
  MapPinIcon,
} from "@/components/icons";
import { getSanityAttribute } from "@/sanity/lib/dataAttribute";
import { urlFor } from "@/sanity/lib/image";

const GOLD = "#c9a84c";

const trustIcons = [SmileIcon, DnaIcon, MapleLeafIcon, HandshakeIcon];
const trustKeys = ["expertCare", "advanceTreatment", "naturalResults", "trustedConfidential"] as const;

const avatars = [
  "/images/about/collage-1.jpg",
  "/images/about/collage-3.jpg",
  "/images/about/collage-2.jpg",
  "/images/about/collage-4.jpg",
];

export default function Hero({ sanityData }: { sanityData?: any }) {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const isEn = locale === "en";

  const heroTitle = isEn ? sanityData?.heroTitle : null;
  const heroSubtitle = (isEn && sanityData?.heroSubtitle) || t("subtitle");
  const heroBadge = (isEn && sanityData?.heroBadge) || t("harleyStreet");
  const heroCtaText = (isEn && sanityData?.heroCtaText) || t("discoverMore");

  // Doctor Hero Image (Sanity uploaded image or fallback to local photo)
  const heroImageSrc = sanityData?.heroImage?.asset
    ? urlFor(sanityData.heroImage).width(1920).quality(90).url()
    : "/images/hero-desk.jpg";
  const heroImageAlt =
    sanityData?.heroImage?.alt ||
    "Sofia Bouzian — YourHealthFirst Clinic, Harley Street London";

  return (
    <section className="relative flex w-full flex-col overflow-hidden md:block md:min-h-[700px] lg:min-h-[740px] xl:h-[793px]">
      {/* Photo: stacked below the text on mobile, full-bleed behind it on tablet/desktop */}
      <div
        data-sanity={getSanityAttribute("homePage", "homePage", "heroImage")}
        className="relative order-2 h-[380px] w-full sm:h-[480px] md:absolute md:inset-0 md:h-full cursor-pointer"
      >
        <Image
          src={heroImageSrc}
          alt={heroImageAlt}
          fill
          priority
          fetchPriority="high"
          quality={92}
          sizes="(min-width: 768px) 2048px, 100vw"
          className="object-cover object-[68%_center] md:object-right"
          unoptimized={heroImageSrc.startsWith("http")}
        />
        {/* Dark brown fade over the left side so the text sits on it */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, #4a3826 0%, #1e1a14 18%, rgba(38,30,20,0.95) 32%, rgba(58,46,26,0.75) 45%, rgba(58,46,26,0.3) 55%, rgba(58,46,26,0) 65%)",
          }}
        />
      </div>

      {/* Text column */}
      <div className="relative z-10 order-1 flex w-full flex-col gap-2.5 sm:gap-3 bg-[linear-gradient(90deg,#4a3826_0%,#8f7355_50%,#4a3826_100%)] px-5 pt-[130px] pb-12 sm:px-8 sm:pt-[140px] sm:pb-16 md:absolute md:inset-y-0 md:left-0 md:right-auto rtl:md:left-0 rtl:md:right-auto md:w-[480px] lg:w-[580px] xl:w-[680px] md:bg-none md:pt-[125px] lg:pt-[135px] xl:pt-[150px] md:pb-6 lg:pb-8 xl:pb-0 md:px-8 lg:px-12 xl:px-[120px] md:justify-center">
        <div className="flex flex-col gap-4">
          {heroTitle ? (
            <h1
              data-sanity={getSanityAttribute("homePage", "homePage", "heroTitle")}
              className="font-display text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] lg:text-[48px] lg:leading-[50px] font-medium text-white uppercase"
            >
              {heroTitle}
            </h1>
          ) : (
            <h1 className="flex flex-col">
              <span className="font-display text-[34px] leading-[36px] sm:text-[42px] sm:leading-[44px] lg:text-[48px] lg:leading-[48px] xl:text-[52px] xl:leading-[52px] font-medium text-white uppercase">
                {t("awardWinning")}
              </span>
              <span
                className="-mt-2 sm:-mt-3 font-display text-[42px] leading-[44px] sm:text-[52px] sm:leading-[54px] lg:text-[58px] lg:leading-[60px] xl:text-[64px] xl:leading-[64px] font-medium uppercase"
                style={{ color: GOLD }}
              >
                {t("clinic")}
              </span>
            </h1>
          )}

          <div className="flex h-6 items-center py-[2px]">
            <span className="flex w-[80%] items-center">
              <span className="h-px flex-1" style={{ backgroundColor: GOLD }} />
              <MapleLeafIcon className="mx-[10px] h-5 w-5 shrink-0" style={{ color: GOLD }} />
              <span className="h-px flex-1" style={{ backgroundColor: GOLD }} />
            </span>
          </div>

          <h2
            data-sanity={getSanityAttribute("homePage", "homePage", "heroSubtitle")}
            className="font-display text-[16px] leading-[22px] sm:text-[19px] sm:leading-[25px] lg:text-[22px] lg:leading-[28px] xl:text-[24px] font-medium text-white/85 uppercase whitespace-pre-line"
          >
            {heroSubtitle}
          </h2>
        </div>

        <div className="flex flex-col gap-[14px] pt-2">
          <div className="flex gap-[11px]">
            <MapPinIcon className="h-[28px] w-[28px] shrink-0" style={{ color: GOLD }} />
            <div>
              <h3
                data-sanity={getSanityAttribute("homePage", "homePage", "heroBadge")}
                className="font-display text-[18px] font-medium tracking-[0.5px] uppercase"
                style={{ color: GOLD }}
              >
                {heroBadge}
              </h3>
              <p
                data-sanity={getSanityAttribute("homePage", "homePage", "heroSince")}
                className="text-[14px] leading-[22px] text-white/75"
              >
                {(isEn && sanityData?.heroSince) || t("since")}
              </p>
            </div>
          </div>

          <div>
            <a
              href="/about-us"
              data-sanity={getSanityAttribute("homePage", "homePage", "heroCtaText")}
              className="inline-flex items-center gap-2.5 sm:gap-3 rounded-[8px] border-[2px] border-[#c9a84c] px-5 py-2.5 sm:px-7 sm:py-3.5 font-display text-[13.5px] sm:text-[15px] font-semibold tracking-[1px] text-[#c9a84c] uppercase transition-all duration-200 hover:bg-[#c9a84c] hover:text-[#4a3826] cursor-pointer"
            >
              {heroCtaText}
              <svg className="h-4 w-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-y-2 sm:grid-cols-4 sm:gap-0 max-w-[480px]">
            {trustKeys.map((key, index) => {
              const Icon = trustIcons[index];
              return (
                <div
                  key={key}
                  className="flex flex-col items-center px-1.5 sm:px-2 text-center border-r last:border-r-0 rtl:border-r-0 rtl:border-l rtl:last:border-l-0"
                  style={{ borderColor: `${GOLD}55` }}
                >
                  <div className="h-[32px]">
                    <Icon className="h-[32px] w-[32px]" style={{ color: GOLD }} />
                  </div>
                  <h3
                    className="mt-1 font-subheading text-[10px] sm:text-[10.5px] lg:text-[11px] font-semibold tracking-[0.5px] uppercase"
                    style={{ color: GOLD }}
                  >
                    {t(key)}
                  </h3>
                </div>
              );
            })}
          </div>

          <div
            className="flex w-full max-w-[390px] items-center gap-3 sm:gap-4 rounded-[8px] border px-3 sm:px-4 py-2.5 sm:py-3.5"
            style={{ borderColor: `${GOLD}66` }}
          >
            <div className="flex shrink-0">
              {avatars.map((src, index) => (
                <Image
                  key={src + index}
                  src={src}
                  alt=""
                  width={52}
                  height={52}
                  className={`h-10 w-10 sm:h-[46px] sm:w-[46px] lg:h-[52px] lg:w-[52px] rounded-full object-cover ring-2 ring-[#4a3826] ${
                    index > 0 ? "-ml-[18px] sm:-ml-[24px] rtl:ml-0 rtl:-mr-[18px] rtl:sm:-mr-[24px]" : ""
                  }`}
                />
              ))}
            </div>
            <div>
              <p
                data-sanity={getSanityAttribute("homePage", "homePage", "heroTrustedBy")}
                className="font-display text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-white uppercase leading-[16px] sm:leading-[18px] whitespace-pre-line"
              >
                {(isEn && sanityData?.heroTrustedBy) || t("trustedBy")}
              </p>
              <div className="mt-1 flex gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-3.5 w-3.5" viewBox="0 0 20 20" fill={GOLD}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

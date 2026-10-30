import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TreatmentFaqAccordion from "@/components/TreatmentFaqAccordion";
import { treatmentDetails } from "@/data/treatments";
import { getLocalizedTreatment } from "@/data/localizedTreatments";
import { getTranslations } from "next-intl/server";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SCLEROTHERAPY_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { getSanityAttribute } from "@/sanity/lib/dataAttribute";
import { urlFor } from "@/sanity/lib/image";
import { seoMeta } from "@/data/seoMeta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourhealthfirst.uk";
  const t = await getTranslations({ locale, namespace: "SclerotherapyPage" });
  const seo = locale === "en" ? seoMeta.treatment["sclerotherapy"] : undefined;
  const title = seo?.title ?? t("metaTitle");
  const description = seo?.description ?? t("metaDesc");
  const canonicalUrl = `${baseUrl}/${locale}/treatments/sclerotherapy`;
  const imageUrl = `${baseUrl}/images/treatments/sclerotherapy/sclerotherapy-treatment-room-2.jpg`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "YourHealthFirst Clinic — Harley Street London",
      locale: locale === "en" ? "en_GB" : locale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Sclerotherapy Spider Vein Removal — YourHealthFirst Clinic London",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

const galleryPairs = [
  { before: "/images/treatments/sclerotherapy/before-after/pair3-before.jpg", after: "/images/treatments/sclerotherapy/before-after/pair3-after.jpg" },
  { before: "/images/treatments/sclerotherapy/before-after/pair4-before.jpg", after: "/images/treatments/sclerotherapy/before-after/pair4-after.jpg" },
  { before: "/images/treatments/sclerotherapy/before-after/pair2-before.jpg", after: "/images/treatments/sclerotherapy/before-after/pair2-after.jpg" },
  { before: "/images/treatments/sclerotherapy/before-after/pair1-before.jpg", after: "/images/treatments/sclerotherapy/before-after/pair1-after.jpg" },
];

function Icon({ name, className }: { name: string; className?: string }) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "target":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="0.6" fill="currentColor" />
        </svg>
      );
    case "clock":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      );
    case "heart":
      return (
        <svg className={className} {...common}>
          <path d="M12 20s-7-4.35-9.5-8.5C.8 8 2.5 4.5 6 4.5c2 0 3.5 1.2 6 4 2.5-2.8 4-4 6-4 3.5 0 5.2 3.5 3.5 7C19 15.65 12 20 12 20Z" />
        </svg>
      );
    case "leaf":
      return (
        <svg className={className} {...common}>
          <path d="M20 4C10 4 4 10 4 18c8 0 14-6 14-14Z" />
          <path d="M4 20 11 13" />
        </svg>
      );
    case "walk":
      return (
        <svg className={className} {...common}>
          <circle cx="13" cy="4" r="1.8" />
          <path d="M9 21l2-6 2 2 3 4M8 13l2-4 3 1 2-3M6 21l2-4" />
        </svg>
      );
    case "sock":
      return (
        <svg className={className} {...common}>
          <path d="M9 3v9l-4 4v3a2 2 0 0 0 2 2h4a3 3 0 0 0 3-3v-4l4-1V3H9Z" />
          <path d="M9 8h9" />
        </svg>
      );
    case "moon":
      return (
        <svg className={className} {...common}>
          <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
        </svg>
      );
    case "alert":
      return (
        <svg className={className} {...common}>
          <path d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
      );
    case "calendar":
      return (
        <svg className={className} {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 10h18" />
        </svg>
      );
    case "standing":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="5" r="1.8" />
          <path d="M12 8v6M9 10l3-2 3 2M9 21l3-7 3 7" />
        </svg>
      );
    case "ban":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="m6.5 6.5 11 11" />
        </svg>
      );
    case "check":
      return (
        <svg className={className} {...common}>
          <path d="m5 13 4 4L19 7" />
        </svg>
      );
    case "arrow":
      return (
        <svg className={className} {...common}>
          <path d="M4.5 12h15m0 0-6-6m6 6-6 6" />
        </svg>
      );
    case "sun":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8" />
        </svg>
      );
    case "plane":
      return (
        <svg className={className} {...common}>
          <path d="M10.5 21 12 16l-7-2 1.5-2L14 13l3-7c.4-1 1.8-1 2.2 0 .3.8 0 1.7-.7 2.2l-4.8 3.6 1.5 6.2-2 1.5-2-3.7-1.8 4.2Z" />
        </svg>
      );
    case "info":
      return (
        <svg className={className} {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 11v5.5M12 8v.01" />
        </svg>
      );
    default:
      return null;
  }
}

export default async function SclerotherapyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SclerotherapyPage" });
  const treatment =
    getLocalizedTreatment("sclerotherapy", locale) ||
    treatmentDetails.find((item) => item.slug === "sclerotherapy")!;

  const [sanitySclero, sanitySettings] = await Promise.all([
    sanityFetch<any>({
      query: SCLEROTHERAPY_PAGE_QUERY,
      tags: ["sclerotherapyPage"],
    }),
    sanityFetch<any>({
      query: SITE_SETTINGS_QUERY,
      tags: ["siteSettings"],
    }),
  ]);
  const docId = "sclerotherapyPage";

  const heroTitle = sanitySclero?.heroTitle || treatment.title;
  const heroTagline = sanitySclero?.heroSubtitle || treatment.tagline;

  const introImageSrc = sanitySclero?.introImage ? urlFor(sanitySclero.introImage).url() : "/images/treatments/sclerotherapy/sclerotherapy-treatment-room-2.jpg";
  const spiderVeinsImageSrc = sanitySclero?.spiderVeinsImage ? urlFor(sanitySclero.spiderVeinsImage).url() : "/images/treatments/sclerotherapy/spider-veins-on-legs.jpg";
  const whatIsHeading = sanitySclero?.whatIsHeading || t("whatIsHeading");
  const whatIsP1 = sanitySclero?.whatIsP1 || t("whatIsP1");
  const whatIsP2 = sanitySclero?.whatIsP2 || t("whatIsP2");
  const practitionerImageSrc = sanitySclero?.practitionerImage ? urlFor(sanitySclero.practitionerImage).url() : "/images/treatments/sclerotherapy/sclerotherapy-practitioner.jpg";
  const whatToExpectHeading = sanitySclero?.whatToExpectHeading || t("whatToExpectHeading");
  const whatToExpectP = sanitySclero?.whatToExpectP || t("whatToExpectP");
  const techniquesHeading = sanitySclero?.techniquesHeading || t("techniquesHeading");
  const techniquesP = sanitySclero?.techniquesP || t("techniquesP");
  const techniqueLiquidTitle = sanitySclero?.techniqueLiquidTitle || t("techniqueLiquidTitle");
  const techniqueLiquidDesc = sanitySclero?.techniqueLiquidDesc || t("techniqueLiquidDesc");
  const techniqueFoamTitle = sanitySclero?.techniqueFoamTitle || t("techniqueFoamTitle");
  const techniqueFoamDesc = sanitySclero?.techniqueFoamDesc || t("techniqueFoamDesc");

  const benefitsBadge = sanitySclero?.benefitsBadge || t("benefitsBadge");
  const benefitsHeading = sanitySclero?.benefitsHeading || `${t("whyChoosePrefix")} ${t("whyChooseHighlight")}`;
  const benefitsSubtitle = sanitySclero?.benefitsSubtitle || t("benefitsSubtitle");

  const howWorksHeading = sanitySclero?.howWorksHeading || t("howWorksHeading");
  const howWorksP = sanitySclero?.howWorksP || t("howWorksP");
  const howWorksImageBeforeSrc = sanitySclero?.howWorksImageBefore ? urlFor(sanitySclero.howWorksImageBefore).url() : "/images/treatments/sclerotherapy/before-after/pair3-before.jpg";
  const howWorksImageAfterSrc = sanitySclero?.howWorksImageAfter ? urlFor(sanitySclero.howWorksImageAfter).url() : "/images/treatments/sclerotherapy/before-after/pair3-after.jpg";

  const treatmentProcessImageSrc = sanitySclero?.treatmentProcessImage ? urlFor(sanitySclero.treatmentProcessImage).url() : "/images/treatments/sclerotherapy/treatment.jpg";
  const processBadge = sanitySclero?.processBadge || t("processBadge");
  const processHeading = sanitySclero?.processHeading || t("processHeading");
  const processP1 = sanitySclero?.processP1 || t("processP1");
  const processP2 = sanitySclero?.processP2 || t("processP2");

  const afterTreatmentHeading = sanitySclero?.afterTreatmentHeading || t("afterTreatmentHeading");
  const considerTreatmentImageSrc = sanitySclero?.considerTreatmentImage ? urlFor(sanitySclero.considerTreatmentImage).url() : "/images/treatments/sclerotherapy/intro.jpg";
  const aftercareImageSrc = sanitySclero?.aftercareImage ? urlFor(sanitySclero.aftercareImage).url() : "/images/treatments/sclerotherapy/treatment.jpg";
  const howSclerotherapyWorksInfographicSrc = sanitySclero?.howSclerotherapyWorksInfographic ? urlFor(sanitySclero.howSclerotherapyWorksInfographic).url() : "/images/treatments/sclerotherapy/how-sclerotherapy-works.jpg";

  const tipsBadge = sanitySclero?.tipsBadge || t("tipsBadge");
  const tipsHeading = sanitySclero?.tipsHeading || `${t("tipsHeadingPrefix")} ${t("tipsHeadingHighlight")}`;
  const tipsSubtitle = sanitySclero?.tipsSubtitle || t("tipsSubtitle");

  const pageFaqs = sanitySclero?.faqs?.length ? sanitySclero.faqs : treatment.faqs;

  const displayedGalleryPairs = sanitySclero?.galleryPairs?.length > 0
    ? sanitySclero.galleryPairs.map((p: any) => ({
        before: p.before ? urlFor(p.before).url() : galleryPairs[0].before,
        after: p.after ? urlFor(p.after).url() : galleryPairs[0].after,
      }))
    : galleryPairs;

  const benefitCards = [
    { icon: "target", title: t("benefit1Title"), description: t("benefit1Desc") },
    { icon: "clock", title: t("benefit2Title"), description: t("benefit2Desc") },
    { icon: "heart", title: t("benefit3Title"), description: t("benefit3Desc") },
    { icon: "leaf", title: t("benefit4Title"), description: t("benefit4Desc") },
  ];

  const facts = [
    t("fact1"),
    t("fact2"),
    t("fact3"),
    t("fact4"),
  ];

  const timelineItems = [
    { label: t("timelineImmediately"), text: t("timelineImmediatelyP") },
    { label: t("timelineFirstDays"), text: t("timelineFirstDaysP") },
    { label: t("timelineAfter4Weeks"), text: t("timelineAfter4WeeksP") },
    { label: t("timeline2to6Months"), text: t("timeline2to6MonthsP") },
  ];

  const recommendedIf = [
    t("rec1"),
    t("rec2"),
    t("rec3"),
    t("rec4"),
    t("rec5"),
    t("rec6"),
    t("rec7"),
  ];

  const afterProcedure = [
    { icon: "walk", text: t("after1") },
    { icon: "sock", text: t("after2") },
    { icon: "moon", text: t("after3") },
    { icon: "alert", text: t("after4") },
    { icon: "sun", text: t("after5") },
    { icon: "plane", text: t("after6") },
    { icon: "calendar", text: t("after7") },
    { icon: "info", text: t("after8") },
  ];

  const tips = [
    { icon: "walk", title: t("tip1Title"), description: t("tip1Desc") },
    { icon: "standing", title: t("tip2Title"), description: t("tip2Desc") },
    { icon: "sock", title: t("tip3Title"), description: t("tip3Desc") },
    { icon: "ban", title: t("tip4Title"), description: t("tip4Desc") },
  ];

  return (
    <div className="flex flex-col">
      <Header sanitySettings={sanitySettings} />

      {/* Standard treatment hero */}
      <section className="relative w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] pt-[111px]">
        <div className="mx-auto max-w-[1400px] px-5 py-[80px] lg:py-[100px]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/treatments" className="font-nav text-[13px] tracking-[1px] text-white/40 uppercase transition-colors hover:text-tan">
                {t("breadcrumbTreatments")}
              </Link>
              <span className="text-white/30">/</span>
              <span className="font-nav text-[13px] tracking-[1px] text-tan/70 uppercase">{treatment.category}</span>
            </div>
            <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
              <p className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-tan uppercase">{treatment.category}</p>
            </div>
            <h1
              className="font-display text-[38px] leading-[42px] font-bold tracking-[-1px] text-cream uppercase lg:text-[58px] lg:leading-[64px]"
              data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "heroTitle")}
            >
              {heroTitle}
            </h1>
            <p
              className="max-w-[560px] font-serif text-[20px] leading-[30px] text-white/70 italic"
              data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "heroSubtitle")}
            >
              {heroTagline}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      {/* What is Sclerotherapy? — alternating image / text rows */}
      <section className="w-full px-5">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-12 py-[70px] lg:py-[90px]">
          {/* Row 1 — photo + intro */}
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,430px)_1fr] lg:gap-12">
            <div
              data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "introImage")}
              className="relative mx-auto w-full max-w-[430px] overflow-hidden rounded-[14px] border border-black/8 shadow-md"
              style={{ aspectRatio: "1126/1397" }}
            >
              <Image
                src={introImageSrc}
                alt="Sclerotherapy injection being carried out on a leg with spider veins"
                fill
                sizes="(min-width: 1024px) 430px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <div className="flex flex-col gap-2">
                <span className="h-[3px] w-12 rounded-full bg-tan" />
                <h2
                  data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "whatIsHeading")}
                  className="font-display text-[26px] font-bold leading-[32px] tracking-[-0.5px] text-forest uppercase lg:text-[30px] lg:leading-[36px]"
                >
                  {whatIsHeading}
                </h2>
              </div>
              <p
                data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "whatIsP1")}
                className="text-[16px] leading-[27px] tracking-[-0.2px] text-body-text"
              >
                {whatIsP1}
              </p>
              <p
                data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "whatIsP2")}
                className="text-[16px] leading-[27px] tracking-[-0.2px] text-body-text"
              >
                {whatIsP2}
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {facts.map((fact) => (
                  <div key={fact} className="flex items-center gap-3 rounded-[10px] border border-tan/25 bg-cream px-4 py-3">
                    <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-tan" />
                    <span className="text-[14px] font-medium leading-[20px] text-forest">{fact}</span>
                  </div>
                ))}
              </div>
              <p className="text-[16px] leading-[27px] tracking-[-0.2px] text-body-text">
                {t("journeysNote")}
              </p>
            </div>
          </div>

          {/* Row 2 — what to expect + techniques, photo on the right */}
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_minmax(0,350px)] lg:gap-12">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-4">
                <h3
                  data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "whatToExpectHeading")}
                  className="font-subheading text-[19px] font-semibold leading-[25px] tracking-[-0.6px] text-forest uppercase"
                >
                  {whatToExpectHeading}
                </h3>
                <p
                  data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "whatToExpectP")}
                  className="text-[16px] leading-[27px] tracking-[-0.2px] text-body-text"
                >
                  {whatToExpectP}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3
                  data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "techniquesHeading")}
                  className="font-subheading text-[19px] font-semibold leading-[25px] tracking-[-0.6px] text-forest uppercase"
                >
                  {techniquesHeading}
                </h3>
                <p
                  data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "techniquesP")}
                  className="text-[16px] leading-[27px] tracking-[-0.2px] text-body-text"
                >
                  {techniquesP}
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-[10px] border border-tan/25 bg-cream px-4 py-3">
                    <span className="mt-[7px] h-[7px] w-[7px] shrink-0 rounded-full bg-tan" />
                    <span className="text-[14px] font-medium leading-[21px] text-forest">
                      <strong
                        data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "techniqueLiquidTitle")}
                        className="font-semibold"
                      >
                        {techniqueLiquidTitle}{" "}
                      </strong>
                      <span data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "techniqueLiquidDesc")}>
                        {techniqueLiquidDesc}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-start gap-3 rounded-[10px] border border-tan/25 bg-cream px-4 py-3">
                    <span className="mt-[7px] h-[7px] w-[7px] shrink-0 rounded-full bg-tan" />
                    <span className="text-[14px] font-medium leading-[21px] text-forest">
                      <strong
                        data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "techniqueFoamTitle")}
                        className="font-semibold"
                      >
                        {techniqueFoamTitle}{" "}
                      </strong>
                      <span data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "techniqueFoamDesc")}>
                        {techniqueFoamDesc}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "practitionerImage")}
              className="relative mx-auto w-full max-w-[350px] overflow-hidden rounded-[14px] border border-black/8 shadow-md"
              style={{ aspectRatio: "906/1259" }}
            >
              <Image
                src={practitionerImageSrc}
                alt="Sclerotherapy consultation and injection in the clinic treatment room"
                fill
                sizes="(min-width: 1024px) 350px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4-up benefit cards */}
      <section className="relative w-full overflow-hidden bg-[linear-gradient(135deg,#faf4ea_0%,#f0e0c8_100%)] px-5">
        <div className="pointer-events-none absolute -left-[6%] -top-[15%] h-[420px] w-[420px] rounded-full bg-tan/15 blur-[110px]" />
        <div className="pointer-events-none absolute -right-[8%] bottom-[-25%] h-[420px] w-[420px] rounded-full bg-white/40 blur-[110px]" />
        <svg className="pointer-events-none absolute left-8 top-8 h-20 w-20 text-tan/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
          <path d="M20 4C10 4 4 10 4 18c8 0 14-6 14-14Z" />
          <path d="M4 20 11 13" />
        </svg>

        <div className="relative mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="mx-auto flex max-w-[640px] flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-tan/50" />
              <span
                data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "benefitsBadge")}
                className="font-nav text-[12px] font-semibold tracking-[3px] text-tan uppercase"
              >
                {benefitsBadge}
              </span>
              <span className="h-px w-10 bg-tan/50" />
            </div>
            <h2
              data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "benefitsHeading")}
              className="font-display text-[32px] font-bold leading-[38px] tracking-[-1px] text-forest lg:text-[40px] lg:leading-[46px]"
            >
              {benefitsHeading}
            </h2>
            <p
              data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "benefitsSubtitle")}
              className="text-[15px] leading-[24px] text-body-text"
            >
              {benefitsSubtitle}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefitCards.map((b) => (
              <div key={b.title} className="relative flex flex-col items-center gap-3 overflow-hidden rounded-[16px] border border-tan/20 bg-white/70 p-7 pt-10 text-center shadow-sm backdrop-blur-sm">
                <Icon name={b.icon} className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 text-tan/10" />
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                  <svg className="absolute -top-1.5 -right-1.5 h-[68px] w-[68px] text-tan/50" viewBox="0 0 80 80" fill="none">
                    <path d="M20 8A32 32 0 0 1 72 40" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
                  </svg>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                    <Icon name={b.icon} className="h-6 w-6" />
                  </span>
                </div>
                <h3 className="relative font-subheading text-[14px] font-semibold tracking-[1px] text-forest uppercase">{b.title}</h3>
                <span className="relative h-[2px] w-6 rounded-full bg-tan/50" />
                <p className="relative text-[13px] leading-[20px] text-body-text">{b.description}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Does Sclerotherapy Work? — text + before/after pair */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h2
                  data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "howWorksHeading")}
                  className="font-display text-[28px] font-bold leading-[34px] tracking-[-1px] text-forest lg:text-[32px] lg:leading-[38px]"
                >
                  {howWorksHeading}
                </h2>
                <span className="h-[3px] w-14 rounded-full bg-tan" />
              </div>
              <p
                data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "howWorksP")}
                className="text-[15px] leading-[25px] text-body-text"
              >
                {howWorksP}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div
                data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "howWorksImageBefore")}
                className="relative w-full overflow-hidden rounded-[14px] shadow-sm"
                style={{ aspectRatio: "1/1" }}
              >
                <Image src={howWorksImageBeforeSrc} alt="Leg with visible spider veins before sclerotherapy treatment" fill className="object-cover" />
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-[6px] bg-forest/80 px-3 py-1 text-[11px] font-semibold tracking-[1px] text-cream uppercase">
                  {t("beforeBadge")}
                </span>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tan/20 text-tan">
                <Icon name="arrow" className="h-5 w-5" />
              </span>
              <div
                data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "howWorksImageAfter")}
                className="relative w-full overflow-hidden rounded-[14px] shadow-sm"
                style={{ aspectRatio: "1/1" }}
              >
                <Image src={howWorksImageAfterSrc} alt="Leg with faded spider veins after sclerotherapy treatment" fill className="object-cover" />
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-[6px] bg-tan px-3 py-1 text-[11px] font-semibold tracking-[1px] text-forest uppercase">
                  {t("afterBadge")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Treatment Process — dark band */}
      <section className="relative w-full overflow-hidden bg-[linear-gradient(120deg,#3a2c1a_0%,#241a0f_100%)] px-5">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-tan/8 blur-[100px]" />
        <div className="relative mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div
              data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "treatmentProcessImage")}
              className="relative w-full overflow-hidden rounded-[16px] shadow-lg"
              style={{ aspectRatio: "4/3" }}
            >
              <Image src={treatmentProcessImageSrc} alt="Sclerotherapy injection being administered to the leg" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span
                  data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "processBadge")}
                  className="font-nav text-[12px] font-semibold tracking-[3px] text-tan uppercase"
                >
                  {processBadge}
                </span>
                <span className="h-px w-16 bg-tan/40" />
              </div>
              <h2
                data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "processHeading")}
                className="font-display text-[28px] font-bold leading-[34px] tracking-[-1px] text-cream lg:text-[32px] lg:leading-[38px]"
              >
                {processHeading}
              </h2>
              <p
                data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "processP1")}
                className="text-[15px] leading-[25px] text-white/70"
              >
                {processP1}
              </p>
              <p
                data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "processP2")}
                className="text-[15px] leading-[25px] text-white/70"
              >
                {processP2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* After treatment — recovery timeline */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="flex flex-col gap-2">
            <h2
              data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "afterTreatmentHeading")}
              className="font-display text-[26px] font-bold leading-[32px] tracking-[-1px] text-forest lg:text-[30px] lg:leading-[36px]"
            >
              {afterTreatmentHeading}
            </h2>
            <span className="h-[3px] w-14 rounded-full bg-tan" />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {timelineItems.map((item) => (
              <div key={item.label} className="flex flex-col gap-3 border-t-2 border-tan pt-4">
                <span className="font-nav text-[12px] font-semibold tracking-[2px] text-tan uppercase">{item.label}</span>
                <p className="text-[14px] leading-[22px] text-body-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended if / Recommendations after */}
      <section className="relative w-full overflow-hidden bg-[linear-gradient(135deg,#faf4ea_0%,#f0e0c8_100%)] px-5">
        <div className="pointer-events-none absolute -left-[10%] -top-[20%] h-[500px] w-[500px] rounded-full bg-tan/15 blur-[110px]" />
        <div className="pointer-events-none absolute -right-[10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-white/40 blur-[110px]" />
        <div className="relative mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* When to consider treatment */}
            <div className="relative overflow-hidden rounded-[24px] border border-tan/25 bg-white/70 p-8 shadow-lg backdrop-blur-sm lg:p-10">
              <div className="pointer-events-none absolute inset-y-0 right-0 w-[38%]">
                <Image
                  src={considerTreatmentImageSrc}
                  alt=""
                  fill
                  className="object-cover opacity-90"
                  data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "considerTreatmentImage")}
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#faf4ea_0%,rgba(250,244,234,0.55)_55%,rgba(250,244,234,0)_100%)]" />
              </div>
              <div className="relative flex max-w-[68%] flex-col gap-5 lg:max-w-[62%]">
                <span className="font-nav text-[11px] font-semibold tracking-[2px] text-tan uppercase">{t("whenConsiderBadge")}</span>
                <span className="h-[3px] w-12 rounded-full bg-tan" />
                <h3 className="font-display text-[24px] font-bold leading-[29px] tracking-[-0.5px] text-forest uppercase lg:text-[28px] lg:leading-[33px]">
                  {t("recommendedTitlePrefix")} <span className="text-tan">{t("recommendedTitleHighlight")}</span>
                </h3>
                <ul className="flex flex-col gap-3">
                  {recommendedIf.map((item) => (
                    <li key={item} className="flex items-start gap-3 border-t border-tan/15 pt-3 first:border-t-0 first:pt-0">
                      <span className="mt-[1px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-tan text-white shadow-sm">
                        <Icon name="check" className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-[14px] leading-[21px] text-body-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Aftercare guidelines */}
            <div className="relative overflow-hidden rounded-[24px] border border-tan/25 bg-white/70 p-8 shadow-lg backdrop-blur-sm lg:p-10">
              <div className="pointer-events-none absolute inset-y-0 right-0 w-[34%]">
                <Image
                  src={aftercareImageSrc}
                  alt=""
                  fill
                  className="object-cover opacity-90"
                  data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "aftercareImage")}
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#faf4ea_0%,rgba(250,244,234,0.5)_50%,rgba(250,244,234,0)_100%)]" />
              </div>
              <div className="relative flex max-w-[72%] flex-col gap-5 lg:max-w-[66%]">
                <span className="font-nav text-[11px] font-semibold tracking-[2px] text-tan uppercase">{t("aftercareBadge")}</span>
                <span className="h-[3px] w-12 rounded-full bg-tan" />
                <h3 className="font-display text-[24px] font-bold leading-[29px] tracking-[-0.5px] text-forest uppercase lg:text-[28px] lg:leading-[33px]">
                  {t("aftercareTitlePrefix")} <span className="text-tan">{t("aftercareTitleHighlight")}</span>
                </h3>
                <ul className="flex flex-col gap-3">
                  {afterProcedure.map((item) => (
                    <li key={item.text} className="flex items-start gap-4 border-t border-tan/15 pt-3 first:border-t-0 first:pt-0">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                        <Icon name={item.icon} className="h-5 w-5" />
                      </span>
                      <span className="mt-2 text-[14px] leading-[21px] text-body-text">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Sclerotherapy Works & Helpful Tips — combined process + tips */}
      <section className="relative w-full overflow-hidden bg-[linear-gradient(120deg,#faf4ea_0%,#f0e0c8_100%)] px-5">
        <div className="pointer-events-none absolute -right-[8%] -top-[15%] h-[420px] w-[420px] rounded-full bg-tan/15 blur-[110px]" />
        <div className="pointer-events-none absolute -left-[8%] bottom-[-20%] h-[420px] w-[420px] rounded-full bg-white/40 blur-[110px]" />
        <div className="relative mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="overflow-hidden rounded-[24px] border border-tan/25 bg-white/60 p-8 shadow-lg backdrop-blur-sm lg:p-12">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,660px)_1fr] lg:gap-12">
              {/* Process infographic (heading, intro and the four steps are part of the graphic) */}
              <div
                data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "howSclerotherapyWorksInfographic")}
                className="relative mx-auto w-full max-w-[660px] overflow-hidden rounded-[16px] border border-tan/25 bg-white shadow-md"
                style={{ aspectRatio: "1254/1254" }}
              >
                <Image
                  src={howSclerotherapyWorksInfographicSrc}
                  alt="How sclerotherapy works — assessment, injection, vein closure and gradual absorption"
                  fill
                  sizes="(min-width: 1024px) 660px, 100vw"
                  className="object-contain"
                />
              </div>

              {/* Tips */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span
                      data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "tipsBadge")}
                      className="font-nav text-[11px] font-semibold tracking-[2px] text-tan uppercase"
                    >
                      {tipsBadge}
                    </span>
                    <span className="h-px w-12 bg-tan/40" />
                  </div>
                  <h2
                    data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "tipsHeading")}
                    className="font-display text-[26px] font-bold leading-[31px] tracking-[-0.5px] text-forest lg:text-[30px] lg:leading-[35px]"
                  >
                    {tipsHeading}
                  </h2>
                  <p
                    data-sanity={getSanityAttribute(docId, "sclerotherapyPage", "tipsSubtitle")}
                    className="mt-1 text-[14px] leading-[22px] text-body-text"
                  >
                    {tipsSubtitle}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {tips.map((tip) => (
                    <div key={tip.title} className="flex items-start gap-4 rounded-[14px] border border-tan/20 bg-white/70 p-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tan/15 text-tan">
                        <Icon name={tip.icon} className="h-5 w-5" />
                      </span>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-subheading text-[13px] font-semibold tracking-[0.5px] text-forest uppercase">{tip.title}</h3>
                        <p className="text-[13px] leading-[19px] text-body-text">{tip.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {pageFaqs && pageFaqs.length > 0 && (
        <section className="w-full bg-cream px-5">
          <div className="mx-auto max-w-[900px] py-[80px] lg:py-[100px]">
            <div className="flex items-center gap-4">
              <h2 className="font-display text-[26px] font-bold leading-[32px] text-forest lg:text-[30px] lg:leading-[36px]">
                {t("faqsHeading")}
              </h2>
              <span className="h-px flex-1 bg-black/10" />
            </div>
            <div className="mt-8">
              <TreatmentFaqAccordion items={pageFaqs} docId={docId} />
            </div>
          </div>
        </section>
      )}

      {/* Gallery — before/after pairs */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="flex items-center gap-4">
            <h2 className="font-display text-[26px] font-bold leading-[32px] text-forest lg:text-[30px] lg:leading-[36px]">
              {t("galleryHeading")}
            </h2>
            <span className="h-px flex-1 bg-black/10" />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {displayedGalleryPairs.map((pair: any, i: number) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-1.5">
                  <div
                    data-sanity={getSanityAttribute(docId, "sclerotherapyPage", `galleryPairs[${i}].before`)}
                    className="relative overflow-hidden rounded-[10px]"
                    style={{ aspectRatio: "1/1" }}
                  >
                    <Image src={pair.before} alt={`Sclerotherapy before — result ${i + 1}`} fill className="object-cover" unoptimized={typeof pair.before === "string" && pair.before.startsWith("http")} />
                    <span className="absolute left-1.5 top-1.5 rounded-[4px] bg-forest/80 px-1.5 py-0.5 text-[9px] font-semibold tracking-[0.5px] text-cream uppercase">
                      {t("beforeBadge")}
                    </span>
                  </div>
                  <div
                    data-sanity={getSanityAttribute(docId, "sclerotherapyPage", `galleryPairs[${i}].after`)}
                    className="relative overflow-hidden rounded-[10px]"
                    style={{ aspectRatio: "1/1" }}
                  >
                    <Image src={pair.after} alt={`Sclerotherapy after — result ${i + 1}`} fill className="object-cover" unoptimized={typeof pair.after === "string" && pair.after.startsWith("http")} />
                    <span className="absolute left-1.5 top-1.5 rounded-[4px] bg-tan px-1.5 py-0.5 text-[9px] font-semibold tracking-[0.5px] text-forest uppercase">
                      {t("afterBadge")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/gallery?treatment=sclerotherapy"
              className="inline-flex h-12 items-center justify-center rounded-[8px] bg-[#a8896a] px-7 font-nav text-[14px] font-semibold tracking-[-0.3px] text-cream transition-opacity hover:opacity-90"
            >
              {t("viewGalleryCta")}
            </Link>
          </div>
        </div>
      </section>

      {/* Prices / Opening hours / Appointment */}
      <section className="w-full border-t border-black/8 bg-cream px-5">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 py-[60px] sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h3 className="font-subheading text-[15px] font-semibold tracking-[1px] text-forest uppercase">{t("ourPrices")}</h3>
            <Link href="/price-list" className="text-[14px] text-tan underline-offset-4 hover:underline">
              {t("checkPriceList")}
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-subheading text-[15px] font-semibold tracking-[1px] text-forest uppercase">{t("openingHours")}</h3>
            <p className="text-[14px] leading-[22px] text-body-text">
              {t("openingWeekdays")}<br />
              {t("openingSaturday")}<br />
              {t("openingSunday")}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-subheading text-[15px] font-semibold tracking-[1px] text-forest uppercase">{t("getAppointment")}</h3>
            <p className="text-[14px] leading-[22px] text-body-text">
              {t("byPhone")}<br />
              {t("byEmail")}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-[1400px] pb-10">
          <p className="text-[13px] italic leading-[20px] text-body-text/70">
            {t("costNote")}
          </p>
        </div>
      </section>

      <Footer sanitySettings={sanitySettings} />
    </div>
  );
}

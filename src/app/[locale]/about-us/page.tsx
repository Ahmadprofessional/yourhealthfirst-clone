import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import PhotoSlider, { type SliderPhoto } from "@/components/PhotoSlider";
import { getTranslations } from "next-intl/server";
import { sanityFetch } from "@/sanity/lib/fetch";
import { ABOUT_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { getSanityAttribute } from "@/sanity/lib/dataAttribute";
import { urlFor } from "@/sanity/lib/image";

const trainingPhotos: SliderPhoto[] = [
  { src: "/images/about-us/training/training-01.jpg", alt: "Sofia Bouzian — postgraduate training programme in aesthetic medicine: workshops, anatomy laboratory sessions and hands-on training", width: 1206, height: 1181 },
  { src: "/images/about-us/training/training-02.jpg", alt: "The most advanced aesthetic live congress in Europe", width: 1000, height: 1000 },
  { src: "/images/about-us/training/training-03.jpg", alt: "Sofia Bouzian outside the Institut Universitaire de la Face et du Cou, Nice", width: 1254, height: 1254 },
  { src: "/images/about-us/training/training-04.jpg", alt: "Sofia Bouzian at the Faculté de Médecine, Nice", width: 1035, height: 1519 },
  { src: "/images/about-us/training/training-05.jpg", alt: "Anatomy laboratory training group in surgical gowns", width: 1402, height: 1122 },
  { src: "/images/about-us/training/training-06.jpg", alt: "Anatomy laboratory training group photo", width: 1378, height: 1142 },
  { src: "/images/about-us/training/training-07.jpg", alt: "Sofia Bouzian during hands-on anatomy laboratory training", width: 750, height: 750 },
  { src: "/images/about-us/training/training-08.jpg", alt: "Sofia Bouzian practising advanced aesthetic techniques in the anatomy laboratory", width: 750, height: 750 },
  { src: "/images/about-us/training/training-09.jpg", alt: "Sofia Bouzian performing a hands-on procedure during training", width: 1254, height: 1254 },
  { src: "/images/about-us/training/training-10.jpg", alt: "Sofia Bouzian at an anatomy laboratory session", width: 750, height: 750 },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourhealthfirst.uk";
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  const title = `${t("heading")} | Dr. Sofia Bouzian — YourHealthFirst Clinic`;
  const description = t("subtitle");
  const canonicalUrl = `${baseUrl}/${locale}/about-us`;
  const imageUrl = `${baseUrl}/images/hero-desk.jpg`;

  return {
    title,
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
      type: "profile",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Dr. Sofia Bouzian — Harley Street Aesthetic Medicine Doctor",
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

export default async function AboutMePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  const [sanityAbout, sanitySettings] = await Promise.all([
    sanityFetch<any>({
      query: ABOUT_PAGE_QUERY,
      tags: ["aboutPage"],
    }),
    sanityFetch<any>({
      query: SITE_SETTINGS_QUERY,
      tags: ["siteSettings"],
    }),
  ]);
  const docId = "aboutPage";

  const practitionerName = sanityAbout?.doctorName || t("practitionerName");
  const practitionerRole = sanityAbout?.doctorCredentials || t("practitionerRole");
  const practitionerTagline = sanityAbout?.heroSubtitle || t("practitionerTagline");
  const heroBadge = sanityAbout?.heroBadge || t("heroBadge");
  const heroQuote = sanityAbout?.heroQuote || t("heroQuote");
  const heroQuoteAuthor = sanityAbout?.heroQuoteAuthor || t("quoteAuthor");
  const bioLead = sanityAbout?.doctorBioLead || t("bioP1");
  const rawDoctorBio = (sanityAbout?.doctorBioParagraphs || []).filter((p: string) => typeof p === "string" && p.trim().length > 0);
  const doctorBioParagraphs: string[] = rawDoctorBio.length > 0
    ? rawDoctorBio
    : [t("bioP2"), t("bioP3"), t("bioP4"), t("bioP5")];
  const doctorPhotoSrc = (sanityAbout?.doctorPortrait ? urlFor(sanityAbout.doctorPortrait)?.url() : null) || "/images/about-us-page-image-v3.jpg";
  const recognitionBadge = sanityAbout?.recognitionBadge || t("recognitionBadge");
  const recognitionHeading = sanityAbout?.recognitionHeading || t("recognitionHeading");
  const recognitionPhotoSrc = (sanityAbout?.recognitionImage ? urlFor(sanityAbout.recognitionImage)?.url() : null) || "/images/about us second image.jpeg";
  const rawRecognition = (sanityAbout?.recognitionParagraphs || []).filter((p: string) => typeof p === "string" && p.trim().length > 0);
  const recognitionParagraphs: string[] = rawRecognition.length > 0
    ? rawRecognition
    : [t("recogP1"), t("recogP2"), t("recogP3"), t("recogP4"), t("recogP5"), t("recogP6")];
  const philosophyTitle = sanityAbout?.philosophyTitle || t("philosophyHeading");
  const rawPhilosophy = (sanityAbout?.philosophyParagraphs || []).filter((p: string) => typeof p === "string" && p.trim().length > 0);
  const philosophyDesc = rawPhilosophy[0] || t("philosophyDesc");
  const philosophyBg = sanityAbout?.philosophyBgImage ? urlFor(sanityAbout.philosophyBgImage).url() : "/images/promise-bg.jpg";
  const philosophyAuthor = sanityAbout?.philosophyAuthor || "Sofia Bouzian";
  const ctaTitle = sanityAbout?.ctaHeading || t("ctaReadyTitle");
  const ctaBtnText = sanityAbout?.ctaButtonText || t("bookConsultation");
  const ghpBadgeSmall = sanityAbout?.ghpBadgeSmall || t("ghpBadgeSmall");
  const ghpBadgeTitle = sanityAbout?.ghpBadgeTitle || t("ghpBadgeTitle");
  const ghpBadgeDesc = sanityAbout?.ghpBadgeDesc || t("ghpBadgeDesc");
  const accreditationsBadge = sanityAbout?.accreditationsBadge || t("accreditationsBadge");
  const accreditationsHeading = sanityAbout?.accreditationsHeading || t("accreditationsHeading");

  const displayedTrainingPhotos: SliderPhoto[] = sanityAbout?.trainingPhotos?.length > 0
    ? sanityAbout.trainingPhotos.map((item: any, i: number) => ({
        src: item.image ? urlFor(item.image).url() : trainingPhotos[i % trainingPhotos.length]?.src,
        alt: item.alt || "Training photo",
        width: 1200,
        height: 1000,
      }))
    : trainingPhotos;

  const areasOfExpertise = [
    t("expertArea1"),
    t("expertArea2"),
    t("expertArea3"),
    t("expertArea4"),
    t("expertArea5"),
    t("expertArea6"),
    t("expertArea7"),
  ];

  const expertise = [
    { title: t("expFacialTitle"), desc: t("expFacialDesc") },
    { title: t("expHairTitle"), desc: t("expHairDesc") },
    { title: t("expBodyTitle"), desc: t("expBodyDesc") },
    { title: t("expRegenTitle"), desc: t("expRegenDesc") },
    { title: t("expAntiAgingTitle"), desc: t("expAntiAgingDesc") },
    { title: t("expSkinTitle"), desc: t("expSkinDesc") },
  ];

  const accreditations = [
    t("accred1"),
    t("accred2"),
    t("accred3"),
    t("accred4"),
    t("accred5"),
    t("accred6"),
    t("accred7"),
    t("accred8"),
  ];

  const stats = [
    {
      value: "25+",
      label: t("yearsExp"),
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
    },
    {
      value: "2013",
      label: t("aestheticsSince"),
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
      ),
    },
    {
      value: "10K+",
      label: t("patientsTreated"),
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      ),
    },
    {
      value: "2019",
      label: t("ghpAward"),
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col">
      <Header sanitySettings={sanitySettings} />

      {/* ── HERO — SPLIT LAYOUT ── */}
      <section className="relative flex w-full flex-col overflow-hidden bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] pt-[111px] lg:flex-row lg:items-stretch">
        {/* Left — text */}
        <div className="relative z-10 flex w-full flex-col justify-start gap-6 px-5 py-12 lg:w-[52%] lg:shrink-0 lg:px-[60px] lg:py-[70px] xl:px-[80px]">
          <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] -translate-y-1/4 rounded-full bg-tan/6 blur-[100px]" />

          <div className="relative flex flex-col gap-6">
            <div className="w-fit rounded-full border-[0.8px] border-white/25 px-4 py-2">
              <p
                data-sanity={getSanityAttribute(docId, "aboutPage", "heroBadge")}
                className="font-nav text-[12px] font-semibold tracking-[3px] text-tan uppercase cursor-pointer hover:outline-dashed hover:outline-1 hover:outline-tan/60"
              >
                {heroBadge}
              </p>
            </div>

            <div>
              <h1
                className="font-display text-[48px] leading-[52px] font-bold tracking-[-2px] text-cream uppercase lg:text-[62px] lg:leading-[66px] cursor-pointer hover:outline-dashed hover:outline-2 hover:outline-cream/60"
                data-sanity={getSanityAttribute(docId, "aboutPage", "doctorName")}
              >
                {practitionerName}
              </h1>
              <p
                className="mt-3 font-nav text-[13px] font-semibold tracking-[2px] text-white/60 cursor-pointer hover:outline-dashed hover:outline-1 hover:outline-white/60"
                data-sanity={getSanityAttribute(docId, "aboutPage", "doctorCredentials")}
              >
                {practitionerRole}
              </p>
              <p
                className="mt-2 max-w-[560px] text-[15px] leading-[24px] text-white/50 cursor-pointer hover:outline-dashed hover:outline-1 hover:outline-white/60"
                data-sanity={getSanityAttribute(docId, "aboutPage", "heroSubtitle")}
              >
                {practitionerTagline}
              </p>
            </div>

            <div className="flex max-w-[560px] flex-col gap-4 text-[15px] leading-[25px] text-white/55">
              <p
                data-sanity={getSanityAttribute(docId, "aboutPage", "doctorBioLead")}
                className="cursor-pointer hover:outline-dashed hover:outline-1 hover:outline-white/60"
              >
                {bioLead}
              </p>
              {doctorBioParagraphs.map((para: string, idx: number) => (
                <p
                  key={idx}
                  data-sanity={getSanityAttribute(docId, "aboutPage", `doctorBioParagraphs[${idx}]`)}
                  className="cursor-pointer hover:outline-dashed hover:outline-1 hover:outline-white/60"
                >
                  {para}
                </p>
              ))}
            </div>

            <blockquote className="max-w-[560px] border-l-[3px] border-tan py-1 pl-5 font-serif text-[17px] leading-[27px] text-white/70 italic">
              <span
                data-sanity={getSanityAttribute(docId, "aboutPage", "heroQuote")}
                className="cursor-pointer hover:outline-dashed hover:outline-1 hover:outline-white/60"
              >
                &ldquo;{heroQuote}&rdquo;
              </span>
              <span
                data-sanity={getSanityAttribute(docId, "aboutPage", "heroQuoteAuthor")}
                className="mt-2 block font-nav text-[12px] font-semibold tracking-[1px] text-tan not-italic uppercase cursor-pointer hover:outline-dashed hover:outline-1 hover:outline-tan/60"
              >
                {heroQuoteAuthor}
              </span>
            </blockquote>

            <div>
              <Link
                href="/#book"
                className="inline-flex w-fit items-center gap-2 rounded-[8px] bg-tan px-8 py-4 font-nav text-[14px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90"
              >
                {t("bookConsultation")}
              </Link>
            </div>
          </div>
        </div>

        {/* Right — photo */}
        <div className="relative h-[400px] w-full lg:h-auto lg:min-h-[560px] lg:w-auto lg:flex-1 lg:self-stretch">
          <SafeImage
            src={doctorPhotoSrc}
            alt="Sofia Bouzian — YourHealthFirst Clinic"
            className="h-full w-full object-cover object-[35%_center]"
            data-sanity={getSanityAttribute(docId, "aboutPage", "doctorPortrait")}
          />
        </div>
      </section>

      {/* ── RECOGNITION & EXPERTISE ── */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            {/* Left — image */}
            <div className="relative lg:w-[420px] lg:shrink-0">
              <div
                data-sanity={getSanityAttribute(docId, "aboutPage", "recognitionImage")}
                className="relative overflow-hidden rounded-[14px] cursor-pointer hover:outline-dashed hover:outline-2 hover:outline-forest/60"
                style={{ aspectRatio: "4/5" }}
              >
                <SafeImage
                  src={recognitionPhotoSrc}
                  alt="Sofia Bouzian — YourHealthFirst Clinic"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right — recognition text */}
            <div className="flex flex-col gap-7 lg:flex-1">
              <div>
                <div
                  data-sanity={getSanityAttribute(docId, "aboutPage", "recognitionBadge")}
                  className="w-fit rounded-full border-[0.8px] border-forest/20 px-3 py-2 cursor-pointer hover:outline-dashed hover:outline-1 hover:outline-forest/60"
                >
                  <p className="font-nav text-[12px] font-semibold tracking-[3px] text-forest uppercase">
                    {recognitionBadge}
                  </p>
                </div>
                <h2
                  data-sanity={getSanityAttribute(docId, "aboutPage", "recognitionHeading")}
                  className="mt-4 font-subheading text-[26px] leading-[32px] font-bold tracking-[-1px] text-forest uppercase lg:text-[34px] lg:leading-[40px] cursor-pointer hover:outline-dashed hover:outline-2 hover:outline-forest/60"
                >
                  {recognitionHeading}
                </h2>
              </div>

              <div className="flex flex-col gap-4 text-[16px] leading-[28px] tracking-[-0.2px] text-body-text">
                {recognitionParagraphs.map((para: string, idx: number) => (
                  <p
                    key={idx}
                    data-sanity={getSanityAttribute(docId, "aboutPage", `recognitionParagraphs[${idx}]`)}
                    className="cursor-pointer hover:outline-dashed hover:outline-1 hover:outline-black/30"
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-subheading text-[16px] font-bold tracking-[-0.3px] text-forest uppercase">
                  {t("areasOfExpertiseTitle")}
                </h3>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {areasOfExpertise.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-tan" />
                      <span className="text-[15px] leading-[24px] text-body-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/#book"
                className="inline-flex w-fit items-center gap-2 rounded-[8px] bg-tan px-8 py-4 font-nav text-[14px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90"
              >
                {t("bookConsultation")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] px-5">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2 px-4 py-10 text-center">
                <span className="text-tan">{s.icon}</span>
                <span className="font-display text-[38px] leading-[44px] font-bold text-tan lg:text-[48px]">
                  {s.value}
                </span>
                <span className="font-nav text-[11px] font-semibold tracking-[1.5px] text-white/50 uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAINING & CONGRESS PHOTOS ── */}
      <section className="-mb-[40px] w-full px-5 lg:-mb-[56px]">
        <div className="mx-auto max-w-[1400px] pb-0 pt-[44px] lg:pt-[56px]">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="font-subheading text-[24px] font-medium leading-[30px] tracking-[-1px] text-forest uppercase lg:text-[30px] lg:leading-[36px]">
              {t("trainingHeading")}
            </h2>
            <div className="flex-1 border-t border-black/8" />
          </div>
          <PhotoSlider photos={displayedTrainingPhotos} />
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-3">
              <div className="w-fit rounded-full border-[0.8px] border-forest/20 px-3 py-2">
                <p className="font-nav text-[12px] font-semibold tracking-[3px] text-forest uppercase">
                  {t("specialistTreatmentsBadge")}
                </p>
              </div>
              <h2 className="font-subheading text-[30px] leading-[36px] font-bold tracking-[-1.2px] text-forest uppercase lg:text-[42px] lg:leading-[48px]">
                {t("specialistTreatmentsTitle")}
              </h2>
              <p className="max-w-[480px] text-[15px] leading-[25px] text-body-text">
                {t("specialistTreatmentsDesc")}
              </p>
            </div>
            <Link
              href="/treatments"
              className="inline-flex h-12 shrink-0 items-center gap-2 rounded-[8px] border-[1.5px] border-forest/30 px-6 font-nav text-[13px] font-semibold tracking-[0.5px] text-forest transition-colors hover:border-[#b49b7d] hover:bg-[#b49b7d] hover:text-cream"
            >
              {t("viewAllTreatments")}
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col gap-4 rounded-[12px] border border-black/8 bg-white p-7 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-tan/12">
                    <svg className="h-5 w-5 text-tan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                    </svg>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-forest/15 text-forest/30 transition-colors group-hover:border-tan group-hover:text-tan">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-subheading text-[16px] font-bold leading-[21px] tracking-[-0.5px] text-forest uppercase">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[22px] text-body-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY / QUOTE ── */}
      <section className="relative w-full overflow-hidden px-5">
        <div className="absolute inset-0">
          <SafeImage
            src={philosophyBg}
            alt=""
            className="h-full w-full object-cover object-center cursor-pointer"
            data-sanity={getSanityAttribute(docId, "aboutPage", "philosophyBgImage")}
          />
          <div className="absolute inset-0 bg-[#7a6248]/85" />
        </div>
        <div className="relative mx-auto max-w-[1400px] py-[100px] lg:py-[120px]">
          <div className="flex flex-col gap-6 lg:max-w-[680px]">
            <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
              <p className="font-nav text-[12px] font-semibold tracking-[3px] text-tan uppercase">
                {t("philosophyBadge")}
              </p>
            </div>
            <h2
              className="font-display text-[40px] leading-[46px] font-bold tracking-[-1.5px] text-cream uppercase lg:text-[58px] lg:leading-[64px] cursor-pointer hover:outline-dashed hover:outline-2 hover:outline-cream/60"
              data-sanity={getSanityAttribute(docId, "aboutPage", "philosophyTitle")}
            >
              {philosophyTitle}
            </h2>
            <p
              className="text-[17px] leading-[29px] text-white/65 cursor-pointer hover:outline-dashed hover:outline-1 hover:outline-white/60"
              data-sanity={getSanityAttribute(docId, "aboutPage", "philosophyParagraphs")}
            >
              {philosophyDesc}
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-tan/50" />
              <p
                data-sanity={getSanityAttribute(docId, "aboutPage", "philosophyAuthor")}
                className="font-nav text-[13px] font-semibold tracking-[2px] text-tan uppercase cursor-pointer hover:outline-dashed hover:outline-1 hover:outline-tan/60"
              >
                {philosophyAuthor}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GHP AWARD ── */}
      <section className="relative w-full overflow-hidden bg-[#061a10] px-5">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7ec8cc]/10 blur-[100px]" />
        <div className="relative mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:gap-16 lg:text-left">
            <div className="flex shrink-0 flex-col items-center gap-3">
              <svg viewBox="0 0 120 140" className="h-[120px] w-[104px] drop-shadow-[0_0_30px_rgba(126,200,204,0.5)]" fill="#7ec8cc">
                <path d="M60 6L114 36v68L60 134 6 104V36z" />
                <text x="60" y="84" textAnchor="middle" fontSize="34" fontWeight="900" fill="white" fontFamily="Arial, sans-serif" letterSpacing="-1">ghp</text>
              </svg>
              <div className="flex items-center gap-2">
                <div className="h-px w-8 bg-[#7ec8cc]/40" />
                <span className="font-nav text-[10px] font-semibold tracking-[3px] text-[#7ec8cc] uppercase">2019</span>
                <div className="h-px w-8 bg-[#7ec8cc]/40" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p
                data-sanity={getSanityAttribute(docId, "aboutPage", "ghpBadgeSmall")}
                className="font-nav text-[12px] font-semibold tracking-[3px] text-[#7ec8cc] uppercase cursor-pointer hover:outline-dashed hover:outline-1 hover:outline-[#7ec8cc]/60"
              >
                {ghpBadgeSmall}
              </p>
              <h2
                data-sanity={getSanityAttribute(docId, "aboutPage", "ghpBadgeTitle")}
                className="font-display text-[32px] leading-[38px] font-bold tracking-[-1.5px] text-cream uppercase lg:text-[48px] lg:leading-[54px] cursor-pointer hover:outline-dashed hover:outline-1 hover:outline-cream/60"
              >
                {ghpBadgeTitle}
              </h2>
              <p
                data-sanity={getSanityAttribute(docId, "aboutPage", "ghpBadgeDesc")}
                className="max-w-[460px] text-[15px] leading-[26px] text-white/50 cursor-pointer hover:outline-dashed hover:outline-1 hover:outline-white/60"
              >
                {ghpBadgeDesc}
              </p>
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-tan/40" />
                <p className="font-nav text-[12px] font-semibold tracking-[1.5px] text-tan/70 uppercase">
                  YourHealthFirst Clinic · {t("ghpWinnerLocation")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALIFICATIONS ── */}
      <section className="w-full bg-cream px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="mb-12 flex flex-col items-center gap-4 text-center">
            <div className="w-fit rounded-full border-[0.8px] border-forest/20 px-3 py-2">
              <p
                data-sanity={getSanityAttribute(docId, "aboutPage", "accreditationsBadge")}
                className="font-nav text-[12px] font-semibold tracking-[3px] text-forest uppercase cursor-pointer hover:outline-dashed hover:outline-1 hover:outline-forest/60"
              >
                {accreditationsBadge}
              </p>
            </div>
            <h2
              data-sanity={getSanityAttribute(docId, "aboutPage", "accreditationsHeading")}
              className="font-subheading text-[30px] leading-[36px] font-bold tracking-[-1.2px] text-forest uppercase lg:text-[42px] lg:leading-[48px] cursor-pointer hover:outline-dashed hover:outline-1 hover:outline-forest/60"
            >
              {accreditationsHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {accreditations.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-[12px] border border-black/8 bg-white px-6 py-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tan/12">
                  <svg className="h-5 w-5 text-tan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </div>
                <span className="text-[14px] font-medium leading-[21px] tracking-[-0.2px] text-body-text lg:text-[15px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT THE CLINIC ── */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            {/* Left — text */}
            <div className="flex flex-col gap-6 lg:flex-1">
              <div>
                <div className="w-fit rounded-full border-[0.8px] border-forest/20 px-3 py-2">
                  <p className="font-nav text-[12px] font-semibold tracking-[3px] text-forest uppercase">
                    {t("clinicBadge")}
                  </p>
                </div>
                <h2 className="mt-4 font-subheading text-[28px] leading-[34px] font-bold tracking-[-1.2px] text-forest uppercase lg:text-[38px] lg:leading-[44px]">
                  {t("clinicTitle")}
                </h2>
              </div>
              <div className="flex flex-col gap-4 text-[16px] leading-[28px] tracking-[-0.2px] text-body-text">
                <p>{t("clinicP1")}</p>
                <p>{t("clinicP2")}</p>
                <p>{t("clinicP3")}</p>
              </div>
            </div>

            {/* Right — clinic image + info */}
            <div className="flex flex-col gap-4 lg:w-[400px] lg:shrink-0">
              <div className="relative overflow-hidden rounded-[14px]" style={{ aspectRatio: "4/3" }}>
                <SafeImage
                  src="/images/misc/promise-1.jpeg"
                  alt="YourHealthFirst Clinic interior"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-forest/60 to-transparent p-5">
                  <p className="font-display text-[13px] tracking-[2px] text-white/80 uppercase">
                    YourHealthFirst Clinic
                  </p>
                </div>
              </div>

              {[
                {
                  icon: (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  ),
                  label: t("locationLabel"),
                  value: t("locationValue"),
                },
                {
                  icon: (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  ),
                  label: t("hoursLabel"),
                  value: t("hoursValue"),
                },
                {
                  icon: (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  ),
                  label: t("phoneLabel"),
                  value: t("phoneValue"),
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-[10px] border border-black/8 bg-white px-5 py-4">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-tan/12 text-tan">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-nav text-[10px] font-semibold tracking-[1.5px] text-body-text/40 uppercase">{item.label}</p>
                    <p className="mt-0.5 text-[14px] leading-[20px] text-body-text">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] px-5">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 py-[80px] text-center lg:py-[100px]">
          <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
            <p className="font-nav text-[12px] font-semibold tracking-[3px] text-tan uppercase">
              {t("ctaReadyBadge")}
            </p>
          </div>
          <h2
            className="font-display text-[36px] leading-[42px] font-bold tracking-[-1.5px] text-cream uppercase lg:text-[52px] lg:leading-[58px]"
            data-sanity={getSanityAttribute(docId, "aboutPage", "ctaHeading")}
          >
            {ctaTitle}
          </h2>
          <p className="max-w-[460px] text-[16px] leading-[27px] text-white/60">
            {t("ctaReadyDesc")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#book"
              className="inline-flex h-13 items-center justify-center rounded-[8px] bg-tan px-10 py-4 font-nav text-[14px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90"
              data-sanity={getSanityAttribute(docId, "aboutPage", "ctaButtonText")}
            >
              {ctaBtnText}
            </Link>
            <a
              href="mailto:info@yourhealthfirst.uk"
              className="inline-flex h-13 items-center justify-center rounded-[8px] border-[1.5px] border-tan/40 px-10 py-4 font-nav text-[14px] font-semibold tracking-[-0.3px] text-tan transition-colors hover:border-tan"
            >
              {t("emailUs")}
            </a>
          </div>
        </div>
      </section>

      <Footer sanitySettings={sanitySettings} />
    </div>
  );
}

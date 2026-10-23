import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";
import { sanityFetch } from "@/sanity/lib/fetch";
import { PHOTOBIODYNAMIC_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { getSanityAttribute } from "@/sanity/lib/dataAttribute";
import { urlFor } from "@/sanity/lib/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourhealthfirst.uk";
  const t = await getTranslations({ locale, namespace: "PhotobiodynamicPage" });
  const title = t("metaTitle");
  const description = t("metaDesc");
  const canonicalUrl = `${baseUrl}/${locale}/photobiodynamic-therapy`;
  const imageUrl = `${baseUrl}/images/treatments/photo-aging/skinox-wrinkles.jpg`;

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
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Photobiodynamic Therapy — YourHealthFirst Clinic London",
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

export default async function PhotobiodynamicTherapyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PhotobiodynamicPage" });

  const [sanityPhotobio, sanitySettings] = await Promise.all([
    sanityFetch<any>({
      query: PHOTOBIODYNAMIC_PAGE_QUERY,
      tags: ["photobiodynamicPage"],
    }),
    sanityFetch<any>({
      query: SITE_SETTINGS_QUERY,
      tags: ["siteSettings"],
    }),
  ]);
  const docId = "photobiodynamicPage";

  const heroTitle = sanityPhotobio?.heroTitle || t("heading");
  const heroSubtitle = sanityPhotobio?.heroSubtitle || t("subtitle");
  const introText = sanityPhotobio?.introText || t("whatIsP1");

  const whatIsTitle = sanityPhotobio?.whatIsTitle || t("whatIsTitle");
  const boxTitle = sanityPhotobio?.boxTitle || t("boxTitle");
  const boxDesc = sanityPhotobio?.boxDesc || t("boxDesc");
  const facialMappingImageSrc = sanityPhotobio?.facialMappingImage ? urlFor(sanityPhotobio.facialMappingImage).url() : "/images/treatments/photo-aging/photobiodynamic/fotoage_layer.jpg";

  const treatmentsTitle = sanityPhotobio?.treatmentsTitle || t("treatmentsTitle");
  const rejuvenationImageSrc = sanityPhotobio?.rejuvenationImage ? urlFor(sanityPhotobio.rejuvenationImage).url() : "/images/treatments/photo-aging/skinox-wrinkles.jpg";
  const blemishesImageSrc = sanityPhotobio?.blemishesImage ? urlFor(sanityPhotobio.blemishesImage).url() : "/images/treatments/photo-aging/skinox-blemish.jpg";
  const rednessImageSrc = sanityPhotobio?.rednessImage ? urlFor(sanityPhotobio.rednessImage).url() : "/images/treatments/photo-aging/skinox-redness.jpg";
  const darkSpotsImageSrc = sanityPhotobio?.darkSpotsImage ? urlFor(sanityPhotobio.darkSpotsImage).url() : "/images/treatments/photo-aging/skinox-dark-spots.jpg";

  const combinationImageSrc = sanityPhotobio?.combinationImage ? urlFor(sanityPhotobio.combinationImage).url() : "/images/treatments/photo-aging/photobiodynamic/combination.jpg";
  const oxygenTitle = sanityPhotobio?.oxygenTitle || t("oxygenTitle");
  const oxygenP1 = sanityPhotobio?.oxygenP1 || t("oxygenP1");
  const oxygenBullet1 = sanityPhotobio?.oxygenBullet1 || t("oxygenBullet1");
  const oxygenBullet2 = sanityPhotobio?.oxygenBullet2 || t("oxygenBullet2");

  const treatmentStepsDiagramSrc = sanityPhotobio?.treatmentStepsDiagram ? urlFor(sanityPhotobio.treatmentStepsDiagram).url() : "/images/treatments/photo-aging/photobiodynamic/treatment-steps.png";
  const viewPeelsCta = sanityPhotobio?.viewPeelsCta || t("viewPeelsCta");

  const treatments = [
    { title: t("rejuvenation"), image: rejuvenationImageSrc, field: "rejuvenationImage" },
    { title: t("blemishes"), image: blemishesImageSrc, field: "blemishesImage" },
    { title: t("redness"), image: rednessImageSrc, field: "rednessImage" },
    { title: t("darkSpots"), image: darkSpotsImageSrc, field: "darkSpotsImage" },
  ];

  return (
    <div className="flex flex-col">
      <Header sanitySettings={sanitySettings} />

      {/* Hero */}
      <section className="relative w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] pt-[111px]">
        <div className="mx-auto max-w-[1400px] px-5 py-[80px] lg:py-[100px]">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/treatments/photo-aging"
              className="font-nav text-[13px] tracking-[1px] text-white/40 uppercase transition-colors hover:text-tan"
            >
              {t("breadParent")}
            </Link>
            <span className="text-white/30">/</span>
            <span className="font-nav text-[13px] tracking-[1px] text-tan/70 uppercase">
              {t("breadCurrent")}
            </span>
          </div>
          <div className="mt-4 w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
            <p className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-tan uppercase">
              {t("badge")}
            </p>
          </div>
          <h1
            className="mt-4 font-display text-[38px] leading-[42px] font-bold tracking-[-1px] text-cream uppercase lg:text-[58px] lg:leading-[64px]"
            data-sanity={getSanityAttribute(docId, "photobiodynamicPage", "heroTitle")}
          >
            {heroTitle}
          </h1>
          <p
            className="mt-3 max-w-[600px] font-serif text-[19px] leading-[28px] text-white/70 italic"
            data-sanity={getSanityAttribute(docId, "photobiodynamicPage", "heroSubtitle")}
          >
            {heroSubtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      {/* What is it */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-5">
              <h2
                data-sanity={getSanityAttribute(docId, "photobiodynamicPage", "whatIsTitle")}
                className="font-display text-[28px] font-bold leading-[34px] tracking-[-1px] text-forest lg:text-[32px] lg:leading-[38px]"
              >
                {whatIsTitle}
              </h2>
              <p
                className="text-[16px] leading-[27px] text-body-text"
                data-sanity={getSanityAttribute(docId, "photobiodynamicPage", "introText")}
              >
                {introText}
              </p>
              <div className="rounded-[12px] border border-tan/25 bg-cream p-6">
                <h3
                  data-sanity={getSanityAttribute(docId, "photobiodynamicPage", "boxTitle")}
                  className="font-subheading text-[14px] font-semibold tracking-[1.5px] text-forest uppercase"
                >
                  {boxTitle}
                </h3>
                <p
                  data-sanity={getSanityAttribute(docId, "photobiodynamicPage", "boxDesc")}
                  className="mt-2 text-[14px] leading-[22px] text-body-text"
                >
                  {boxDesc}
                </p>
              </div>
            </div>
            <div
              data-sanity={getSanityAttribute(docId, "photobiodynamicPage", "facialMappingImage")}
              className="relative mx-auto w-full max-w-[440px] overflow-hidden rounded-[16px] shadow-lg"
              style={{ aspectRatio: "1/1" }}
            >
              <Image
                src={facialMappingImageSrc}
                alt="Photobiodynamic therapy facial mapping technology"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="w-full bg-cream px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <h2
            data-sanity={getSanityAttribute(docId, "photobiodynamicPage", "treatmentsTitle")}
            className="text-center font-subheading text-[26px] font-medium leading-[32px] tracking-[-1px] text-forest uppercase lg:text-[32px] lg:leading-[38px]"
          >
            {treatmentsTitle}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((tr) => (
              <div key={tr.title} className="overflow-hidden rounded-[12px] border border-black/8 bg-white shadow-sm">
                <div
                  data-sanity={getSanityAttribute(docId, "photobiodynamicPage", tr.field)}
                  className="relative w-full bg-white"
                  style={{ aspectRatio: "16/10" }}
                >
                  <Image src={tr.image} alt={tr.title} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-contain" />
                </div>
                <p className="py-4 text-center font-subheading text-[14px] font-semibold tracking-[1px] text-forest uppercase">
                  {tr.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oxygen, light and photodynamic agents */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div
              data-sanity={getSanityAttribute(docId, "photobiodynamicPage", "combinationImage")}
              className="relative mx-auto w-full max-w-[480px] overflow-hidden rounded-[16px] border border-black/8 bg-cream p-6"
              style={{ aspectRatio: "576/436" }}
            >
              <Image
                src={combinationImageSrc}
                alt="Skinox products combined with the Fotoage HDD mask"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-5">
              <h2
                data-sanity={getSanityAttribute(docId, "photobiodynamicPage", "oxygenTitle")}
                className="font-display text-[28px] font-bold leading-[34px] tracking-[-1px] text-forest lg:text-[32px] lg:leading-[38px]"
              >
                {oxygenTitle}
              </h2>
              <p
                data-sanity={getSanityAttribute(docId, "photobiodynamicPage", "oxygenP1")}
                className="text-[16px] leading-[27px] text-body-text"
              >
                {oxygenP1}
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-start gap-3">
                  <span className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-tan" />
                  <span
                    data-sanity={getSanityAttribute(docId, "photobiodynamicPage", "oxygenBullet1")}
                    className="text-[15px] leading-[24px] text-body-text"
                  >
                    {oxygenBullet1}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-tan" />
                  <span
                    data-sanity={getSanityAttribute(docId, "photobiodynamicPage", "oxygenBullet2")}
                    className="text-[15px] leading-[24px] text-body-text"
                  >
                    {oxygenBullet2}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment steps diagram */}
      <section className="w-full bg-cream px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div
            data-sanity={getSanityAttribute(docId, "photobiodynamicPage", "treatmentStepsDiagram")}
            className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[12px] border border-black/8 bg-white p-6"
            style={{ aspectRatio: "600/674" }}
          >
            <Image
              src={treatmentStepsDiagramSrc}
              alt="How the HDD light activates photosensitive agents through the layers of the skin"
              fill
              className="object-contain"
            />
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/treatments/photo-aging"
              data-sanity={getSanityAttribute(docId, "photobiodynamicPage", "viewPeelsCta")}
              className="inline-flex h-12 w-fit items-center gap-2 rounded-[8px] bg-tan px-6 font-nav text-[14px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90"
            >
              {viewPeelsCta}
            </Link>
          </div>
        </div>
      </section>

      <Footer sanitySettings={sanitySettings} />
    </div>
  );
}

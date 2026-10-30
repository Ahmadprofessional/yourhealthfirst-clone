import type { Metadata } from "next";
import Header from "@/components/Header";
import PressGrid from "@/components/PressGrid";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";
import { sanityFetch } from "@/sanity/lib/fetch";
import { PRESS_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
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
  const t = await getTranslations({ locale, namespace: "PressPage" });
  const seo = locale === "en" ? seoMeta.press : undefined;
  const title = seo?.title ?? `${t("heading")} | Sofia Bouzian in the Media — YourHealthFirst Clinic`;
  const description = seo?.description ?? t("subtitle");
  const canonicalUrl = `${baseUrl}/${locale}/press`;
  const imageUrl = `${baseUrl}/images/press/press-50.jpg`;

  return {
    title: seo ? { absolute: title } : title,
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
          alt: "Sofia Bouzian — Featured in Press & Global Media",
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

const pressImages = [
  { src: "/images/press/press-50.jpg", alt: "Global Woman Magazine cover — Sofia Bouzian, The Beauty Doctor" },
  { src: "/images/press/press-51.jpg", alt: "Global Woman Magazine copies on display at a launch event" },
  { src: "/images/press/press-52.jpg", alt: "Global Woman Magazine featuring Sofia Bouzian alongside other magazines" },
  { src: "/images/press/press-53.jpg", alt: "Global Woman Magazine, November 2022 — Sofia Bouzian, The Beauty Doctor" },
  { src: "/images/press/press-54.jpg", alt: "YourHealthFirst Clinic of Harley Street — official sponsor of the Women of Excellence Award" },
  { src: "/images/press/press-55.jpg", alt: "Women of Excellence featured publication — House of Lords, Parliament, UK" },
  { src: "/images/press/press-56.jpg", alt: "Sofia Bouzian speaking at Sharm Derma on androgenic alopecia — Europe and Middle East" },
  { src: "/images/press/press-57.jpg", alt: "Sofia Bouzian presenting at Sharm Derma, Fall 2022, Cairo" },
  { src: "/images/press/press-58.jpg", alt: "YourHealthFirst of Harley Street — thank you to all the frontline workers" },
  { src: "/images/press/press-59.jpg", alt: "IMCAS World Congress 2023, Paris — Sofia Bouzian, Aesthetic Practitioner" },
  { src: "/images/press/press-60.jpg", alt: "Sofia Bouzian attending IMCAS World Congress 2023, Paris" },
  { src: "/images/press/press-61.jpg", alt: "AMWC Monaco 2023 — Sofia Bouzian, Aesthetic Practitioner" },
  { src: "/images/press/press-62.jpg", alt: "Healthcare & Pharmaceutical Awards 2019 — Best Non-Invasive Cosmetic & Medical Treatments Clinic, London" },
  { src: "/images/press/press-63.jpg", alt: "GHP Q4 2019 featured publication — A Leader in Non-Surgical Aesthetics" },
  { src: "/images/press/press-64.jpg", alt: "Innovations That Could Make Reverse Aging — A-PRP Cellular Matrix feature" },
  { src: "/images/press/press-65.jpg", alt: "Cannes Film Festival 2018 — YourHealthFirst of Harley Street mobile clinic" },
  { src: "/images/press/press-66.jpeg", alt: "YourHealthFirst of Harley Street — proud sponsor of International Beauty Pageants, Miss Film Festival International" },
  { src: "/images/press/press-67.jpeg", alt: "YourHealthFirst Clinic — official sponsor of the Queen's Platinum Jubilee by the Parliamentary Society of Arts" },
  { src: "/images/press/press-68.jpg", alt: "Sofia Bouzian at Global Woman Club — featured media" },
  { src: "/images/press/press-69.jpeg", alt: "A Perfect Beauty — Sofia Bouzian interviewed about the beauty business on Harley Street" },
  { src: "/images/press/press-70.jpeg", alt: "Cryolipolysis — featured media and clinic coverage, sponsored by YourHealthFirst Clinic of Harley Street" },
  { src: "/images/press/press-71.jpg", alt: "Global Woman featured publication — Sofia Bouzian, The Beauty Doctor" },
  { src: "/images/press/press-72.jpg", alt: "Fat Freezer — featured press coverage of fat-freezing treatment" },
  { src: "/images/press/press-74.jpg", alt: "Featured press — YourHealthFirst fat-freezing introductory offer" },
];

export default async function PressPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";
  const t = await getTranslations({ locale, namespace: "PressPage" });

  const [sanityPress, sanitySettings] = await Promise.all([
    sanityFetch<any>({
      query: PRESS_PAGE_QUERY,
      tags: ["pressPage"],
    }),
    sanityFetch<any>({
      query: SITE_SETTINGS_QUERY,
      tags: ["siteSettings"],
    }),
  ]);
  const docId = "pressPage";

  const heroTitle = (isEn && sanityPress?.heroTitle) || t("heading");
  const heroSubtitle = (isEn && sanityPress?.heroSubtitle) || t("subtitle");
  const badgeText = (isEn && sanityPress?.badgeText) || t("badge");
  const videoCoverageTitle = (isEn && sanityPress?.videoCoverageTitle) || t("videoCoverage");
  const youtubeUrl = sanityPress?.youtubeEmbedUrl || "https://www.youtube.com/embed/lmOWFIN02Gg";
  const pressGalleryTitle = (isEn && sanityPress?.pressGalleryTitle) || t("pressGallery");

  const displayedPressImages = sanityPress?.pressImages?.length > 0
    ? sanityPress.pressImages.map((p: any) => ({
        src: p.image ? urlFor(p.image).url() : pressImages[0].src,
        alt: p.alt || "",
      }))
    : pressImages;

  return (
    <div className="flex flex-col">
      <Header sanitySettings={sanitySettings} />

      {/* Page hero */}
      <section className="relative w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] pt-[111px]">
        <div className="mx-auto max-w-[1400px] px-5 py-[80px] lg:py-[100px]">
          <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
            <p
              data-sanity={getSanityAttribute(docId, "pressPage", "badgeText")}
              className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-tan uppercase"
            >
              {badgeText}
            </p>
          </div>
          <h1
            className="mt-4 font-display text-[42px] leading-[46px] font-bold tracking-[-1px] text-cream uppercase lg:text-[64px] lg:leading-[70px]"
            data-sanity={getSanityAttribute(docId, "pressPage", "heroTitle")}
          >
            {heroTitle}
          </h1>
          <p
            className="mt-3 max-w-[560px] font-nav text-[16px] leading-[26px] text-white/60"
            data-sanity={getSanityAttribute(docId, "pressPage", "heroSubtitle")}
          >
            {heroSubtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      {/* Video coverage */}
      <section className="w-full bg-cream px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="mb-10 flex items-center gap-4">
            <h2
              data-sanity={getSanityAttribute(docId, "pressPage", "videoCoverageTitle")}
              className="font-subheading text-[24px] font-medium leading-[30px] tracking-[-1px] text-forest uppercase lg:text-[30px] lg:leading-[36px]"
            >
              {videoCoverageTitle}
            </h2>
            <div className="flex-1 border-t border-black/8" />
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="relative w-full overflow-hidden rounded-[12px] shadow-sm" style={{ aspectRatio: "16/9" }}>
              <iframe
                src={youtubeUrl}
                title="YourHealthFirst Clinic — press video feature"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex justify-center overflow-hidden rounded-[12px] bg-black shadow-sm">
              <video
                src="/videos/press/press-feature.mp4"
                controls
                playsInline
                className="max-h-[480px] w-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Press masonry grid */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="mb-10 flex items-center gap-4">
            <h2
              data-sanity={getSanityAttribute(docId, "pressPage", "pressGalleryTitle")}
              className="font-subheading text-[24px] font-medium leading-[30px] tracking-[-1px] text-forest uppercase lg:text-[30px] lg:leading-[36px]"
            >
              {pressGalleryTitle}
            </h2>
            <div className="flex-1 border-t border-black/8" />
          </div>
          <PressGrid images={displayedPressImages} />
        </div>
      </section>

      <Footer sanitySettings={sanitySettings} />
    </div>
  );
}

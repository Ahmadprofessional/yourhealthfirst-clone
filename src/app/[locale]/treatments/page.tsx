import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { services } from "@/data/services";
import { getTranslations } from "next-intl/server";
import { sanityFetch } from "@/sanity/lib/fetch";
import { TREATMENTS_OVERVIEW_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { getSanityAttribute } from "@/sanity/lib/dataAttribute";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourhealthfirst.uk";
  const title = "Treatments | YourHealthFirst Clinic — Harley Street, London";
  const description =
    "Explore all 20 aesthetic and medical treatments at YourHealthFirst Clinic — anti-wrinkle, fillers, Profhilo, cryolipolysis, PRP hair loss, Emsculpt Neo and more.";
  const canonicalUrl = `${baseUrl}/${locale}/treatments`;
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
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Treatments at YourHealthFirst Clinic Harley Street",
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

const categories: Array<{ key: string; slugs: string[] }> = [
  {
    key: "phlebotomy",
    slugs: ["phlebotomy"],
  },
  {
    key: "faceAntiAging",
    slugs: ["anti-wrinkles", "dermal-fillers"],
  },
  {
    key: "biostimulators",
    slugs: ["sunekos", "profhilo", "polynucleotides", "sculptra", "prp-ha"],
  },
  {
    key: "hairRestoration",
    slugs: ["prp-hair-loss", "exosome"],
  },
  {
    key: "bodyContouring",
    slugs: ["cryolipolysis", "emsculpt-neo", "aqualyx"],
  },
  {
    key: "weightLoss",
    slugs: ["mounjaro"],
  },
  {
    key: "skinHealth",
    slugs: ["microneedling", "mesotherapy", "photo-aging", "sclerotherapy", "cryopen", "vitamin-b12"],
  },
];

const slugToHref: Record<string, string> = {
  "prp-ha": "/treatments/prp-face-body",
  "photo-aging": "/treatments/photo-aging",
};

const serviceImages: Record<string, string> = {
  "phlebotomy": "/images/treatments/phlebotomy/blood-draw.jpg",
  "anti-wrinkles": "/images/treatments/anti-wrinkles/eye-area-injection.webp",
  "dermal-fillers": "/images/treatments/dermal-fillers/lip-filler.webp",
  "sunekos": "/images/treatments/sunekos/sofia-injecting.jpg",
  "profhilo": "/images/treatments/profhilo/sofia-injecting-lips.jpg",
  "polynucleotides": "/images/treatments/polynucleotides/sofia-injecting.jpg",
  "sculptra": "/images/treatments/sculptra/sofia-product.jpg",
  "prp-ha": "/images/treatments/prp-face-body/prp-injection-face.jpg",
  "prp-hair-loss": "/images/treatments/prp-hair-loss/u225-scalp-treatment-1.jpg",
  "exosome": "/images/treatments/exosome/sofia-facial-exosome-treatment.jpg",
  "cryolipolysis": "/images/treatments/cryolipolysis/treatment-areas-new.jpg",
  "emsculpt-neo": "/images/treatments/emsculpt-neo/hero-abdomen.png",
  "aqualyx": "/images/treatments/aqualyx/aqualyx-product-hero.jpg",
  "mounjaro": "/images/treatments/mounjaro/product-card.jpg",
  "microneedling": "/images/treatments/microneedling/fight-aging.webp",
  "mesotherapy": "/images/treatments/mesotherapy/mesox/aminoacids-box-2.jpg",
  "photo-aging": "/images/treatments/photo-aging/skinox-wrinkles.jpg",
  "sclerotherapy": "/images/treatments/sclerotherapy/sclerotherapy-treatment-room-2.jpg",
  "cryopen": "/images/treatments/cryopen/cryopen-device-v2.jpg",
  "vitamin-b12": "/images/treatments/vitamin-b12/sofia-injecting-arm.jpg",
};

function getHref(slug: string) {
  return slugToHref[slug] ?? `/treatments/${slug}`;
}

export default async function TreatmentsPage({
  params,
}: {
  params?: Promise<{ locale: string }>;
}) {
  const resolvedParams = params ? await params : { locale: "en" };
  const locale = resolvedParams.locale || "en";
  const t = await getTranslations("Treatments");
  const tCat = await getTranslations("Header.categories");
  const tList = await getTranslations("ServiceList");

  const [sanityTreatmentsPage, sanitySettings] = await Promise.all([
    sanityFetch<any>({
      query: TREATMENTS_OVERVIEW_QUERY,
      tags: ["treatmentsOverviewPage"],
    }),
    sanityFetch<any>({
      query: SITE_SETTINGS_QUERY,
      tags: ["siteSettings"],
    }),
  ]);
  const docId = "treatmentsOverviewPage";

  const heroBadge = sanityTreatmentsPage?.heroBadge || t("badge");
  const heroTitle = sanityTreatmentsPage?.heroTitle || t("heading");
  const heroSubtitle = sanityTreatmentsPage?.heroSubtitle || t("description");

  const longevityBadge = sanityTreatmentsPage?.longevityBadge || t("comingSoon");
  const longevityTitle = sanityTreatmentsPage?.longevityTitle || t("longevityTitle");
  const longevityDesc = sanityTreatmentsPage?.longevityDesc || t("longevityDesc");
  const longevityCta = sanityTreatmentsPage?.longevityCta || t("longevityCta");

  const ctaHeading = sanityTreatmentsPage?.ctaHeading || t("ctaHeading");
  const ctaDescription = sanityTreatmentsPage?.ctaDescription || t("ctaDescription");
  const callCta = sanityTreatmentsPage?.callCta || t("callCta");
  const bookCta = sanityTreatmentsPage?.bookCta || t("bookCta");

  return (
    <div className="flex flex-col">
      <Header sanitySettings={sanitySettings} />

      {/* Page hero */}
      <section className="relative w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] pt-[111px]">
        <div className="mx-auto max-w-[1400px] px-5 py-[80px] lg:py-[100px]">
          <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
            <p
              className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-tan uppercase"
              data-sanity={getSanityAttribute(docId, "treatmentsOverviewPage", "heroBadge")}
            >
              {heroBadge}
            </p>
          </div>
          <h1
            className="mt-4 font-display text-[42px] leading-[46px] font-bold tracking-[-1px] text-cream uppercase lg:text-[64px] lg:leading-[70px]"
            data-sanity={getSanityAttribute(docId, "treatmentsOverviewPage", "heroTitle")}
          >
            {heroTitle}
          </h1>
          <p
            className="mt-3 max-w-[560px] font-nav text-[16px] leading-[26px] text-white/60"
            data-sanity={getSanityAttribute(docId, "treatmentsOverviewPage", "heroSubtitle")}
          >
            {heroSubtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      {/* Treatment categories */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="flex flex-col gap-16">
            {categories.map((cat) => {
              const catServices = services.filter((s) => cat.slugs.includes(s.slug));
              const categoryLabel = tCat(cat.key as any);
              return (
                <div key={cat.key} className="flex flex-col gap-8">
                  {/* Category header */}
                  <div className="flex items-center gap-4">
                    <div className="w-fit rounded-full border-[0.8px] border-forest/20 px-3 py-2">
                      <h2 className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-forest uppercase">
                        {categoryLabel}
                      </h2>
                    </div>
                    <div className="flex-1 border-t border-black/8" />
                  </div>

                  {/* Cards grid */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {catServices.map((service) => {
                      const serviceTitle = tList.has(`${service.slug}.title`)
                        ? tList(`${service.slug}.title`)
                        : service.title;
                      const serviceDesc = tList.has(`${service.slug}.description`)
                        ? tList(`${service.slug}.description`)
                        : service.description.map((seg) => seg.text).join("");

                      return (
                        <Link
                          key={service.slug}
                          href={getHref(service.slug)}
                          className="group flex flex-col overflow-hidden rounded-[12px] border border-black/8 bg-white transition-shadow hover:shadow-lg"
                        >
                          {/* Image */}
                          <div className="aspect-[4/3] w-full overflow-hidden bg-cream">
                            <div className="relative h-full w-full">
                              <Image
                                src={serviceImages[service.slug] ?? service.image}
                                alt={serviceTitle}
                                fill
                                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex flex-1 flex-col gap-3 p-5">
                            <h3 className="font-subheading text-[15px] font-semibold leading-[20px] tracking-[-0.5px] text-forest uppercase">
                              {serviceTitle}
                            </h3>
                            <p className="flex-1 text-[14px] leading-[22px] text-body-text line-clamp-3">
                              {serviceDesc}
                            </p>
                            <span className="mt-auto inline-flex items-center gap-1 font-nav text-[13px] font-semibold tracking-[0.5px] text-tan uppercase transition-opacity group-hover:opacity-70">
                              {t("learnMore")}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Longevity — Coming Soon */}
      <section className="w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] px-5">
        <div className="mx-auto max-w-[1400px] py-[60px] lg:py-[80px]">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
              <h2
                className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-tan uppercase"
                data-sanity={getSanityAttribute(docId, "treatmentsOverviewPage", "longevityBadge")}
              >
                {longevityBadge}
              </h2>
            </div>
            <div className="flex-1 border-t border-white/10" />
          </div>
          <Link
            href="/longevity"
            className="group relative flex flex-col gap-6 overflow-hidden rounded-[16px] border border-tan/20 bg-white/5 p-8 transition-colors hover:border-tan/40 lg:flex-row lg:items-center lg:gap-12 lg:p-10"
          >
            {/* Animated pulse */}
            <div className="pointer-events-none absolute top-6 right-6 flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-tan" />
              <span
                className="font-nav text-[11px] font-semibold tracking-[2px] text-tan uppercase"
                data-sanity={getSanityAttribute(docId, "treatmentsOverviewPage", "longevityBadge")}
              >
                {longevityBadge}
              </span>
            </div>
            {/* Icon */}
            <div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-full border border-tan/30 bg-tan/10">
              <svg className="h-10 w-10 text-tan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m-7-9H4m16 0h-1M6.3 6.3l-.7-.7m13.1.7l.7-.7M6.3 17.7l-.7.7m13.1-.7l.7.7M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
              </svg>
            </div>
            <div className="flex flex-col gap-3">
              <h3
                className="font-display text-[28px] leading-[34px] font-bold tracking-[-1px] text-cream uppercase lg:text-[36px] lg:leading-[42px]"
                data-sanity={getSanityAttribute(docId, "treatmentsOverviewPage", "longevityTitle")}
              >
                {longevityTitle}
              </h3>
              <p
                className="max-w-[600px] text-[16px] leading-[27px] text-white/60"
                data-sanity={getSanityAttribute(docId, "treatmentsOverviewPage", "longevityDesc")}
              >
                {longevityDesc}
              </p>
              <span
                className="font-nav text-[13px] font-semibold tracking-[0.5px] text-tan uppercase transition-opacity group-hover:opacity-70"
                data-sanity={getSanityAttribute(docId, "treatmentsOverviewPage", "longevityCta")}
              >
                {longevityCta}
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] px-5">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-6 py-[80px] text-center">
          <h2
            className="font-subheading text-[32px] font-medium leading-[38px] tracking-[-1.5px] text-cream uppercase lg:text-[40px] lg:leading-[46px]"
            data-sanity={getSanityAttribute(docId, "treatmentsOverviewPage", "ctaHeading")}
          >
            {ctaHeading}
          </h2>
          <p
            className="max-w-[480px] text-[16px] leading-[27px] text-white/60"
            data-sanity={getSanityAttribute(docId, "treatmentsOverviewPage", "ctaDescription")}
          >
            {ctaDescription}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:02072253582"
              className="inline-flex h-14 items-center justify-center rounded-[8px] bg-tan px-8 font-nav text-[15px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90"
              data-sanity={getSanityAttribute(docId, "treatmentsOverviewPage", "callCta")}
            >
              {callCta}
            </a>
            <Link
              href="/contact-us"
              className="inline-flex h-14 items-center justify-center rounded-[8px] border-[1.5px] border-tan/40 px-8 font-nav text-[15px] font-semibold tracking-[-0.3px] text-tan transition-colors hover:border-tan"
              data-sanity={getSanityAttribute(docId, "treatmentsOverviewPage", "bookCta")}
            >
              {bookCta}
            </Link>
          </div>
        </div>
      </section>

      <Footer sanitySettings={sanitySettings} />
    </div>
  );
}

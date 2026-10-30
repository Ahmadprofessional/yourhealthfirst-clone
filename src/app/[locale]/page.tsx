import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import PromiseCards from "@/components/PromiseCards";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import FaqAccordion from "@/components/FaqAccordion";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import { sanityFetch } from "@/sanity/lib/fetch";
import { HOME_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { seoMeta } from "@/data/seoMeta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourhealthfirst.uk";
  const seo = locale === "en" ? seoMeta.home : undefined;
  const title = seo?.title ?? "YourHealthFirst Clinic | Harley Street, London — Health & Aesthetics";
  const description = seo?.description ??
    "Award-winning clinic at 2 Wimpole Street, London W1G 0EB. Specialising in aesthetic medicine, anti-wrinkle injections, dermal fillers, hair loss & skin rejuvenation.";
  const canonicalUrl = `${baseUrl}/${locale}`;
  const imageUrl = `${baseUrl}/images/hero-desk.jpg`;

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
      siteName: "YourHealthFirst Clinic",
      locale: locale === "en" ? "en_GB" : locale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Sofia Bouzian — YourHealthFirst Clinic Harley Street London",
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

export default async function Home() {
  const [sanityHome, sanitySettings] = await Promise.all([
    sanityFetch<any>({
      query: HOME_PAGE_QUERY,
      tags: ["homePage"],
    }),
    sanityFetch<any>({
      query: SITE_SETTINGS_QUERY,
      tags: ["siteSettings"],
    }),
  ]);

  return (
    <div className="flex flex-col">
      <Header sanitySettings={sanitySettings} />
      <Hero sanityData={sanityHome} />
      <Testimonials sanityData={sanityHome} />
      <AboutUs sanityData={sanityHome} />
      <PromiseCards sanityData={sanityHome} />
      <Services sanityData={sanityHome} />
      <WhyChooseUs sanityData={sanityHome} />
      <FaqAccordion sanityData={sanityHome} />
      <BookingSection sanityData={sanityHome} />
      <Footer sanitySettings={sanitySettings} />
    </div>
  );
}

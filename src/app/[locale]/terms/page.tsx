import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "TermsPage" });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourhealthfirst.uk";

  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: {
      canonical: `${baseUrl}/${locale}/terms`,
    },
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "TermsPage" });

  const sanitySettings = await sanityFetch<any>({
    query: SITE_SETTINGS_QUERY,
    tags: ["siteSettings"],
  });

  const breadcrumbs = [
    { name: t("home"), item: `/${locale}` },
    { name: t("title"), item: `/${locale}/terms` },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fafaf8]">
      <Header sanitySettings={sanitySettings} />
      <StructuredData type="breadcrumbs" breadcrumbs={breadcrumbs} />

      {/* Page Hero */}
      <section className="relative w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] pt-[111px]">
        <div className="mx-auto max-w-[1400px] px-5 py-[70px] lg:py-[90px]">
          <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-1.5 mb-3">
            <p className="text-[12px] font-semibold tracking-[2.5px] text-tan uppercase">
              {t("badge")}
            </p>
          </div>
          <h1 className="font-display text-[38px] leading-[44px] font-bold tracking-[-1px] text-cream uppercase lg:text-[56px] lg:leading-[62px]">
            {t("title")}
          </h1>
          <p className="mt-3 max-w-[620px] font-nav text-[15px] leading-[25px] text-white/80">
            {t("subtitle")}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      {/* Main Content */}
      <main className="w-full px-5 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 lg:p-16 text-[#2b2b2b]">
          <div className="space-y-10 text-[15px] sm:text-[16px] leading-[1.75] text-[#3d3d3d]">
            
            {/* 1. Service Overview */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                {t("s1Title")}
              </h2>
              <p>{t("s1P1")}</p>
              <p>{t("s1P2")}</p>
            </section>

            {/* 2. Medical Consultations */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                {t("s2Title")}
              </h2>
              <p>{t("s2P1")}</p>
              <p>{t("s2P2")}</p>
            </section>

            {/* 3. Age Restrictions */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                {t("s3Title")}
              </h2>
              <p>{t("s3P1")}</p>
            </section>

            {/* 4. Booking & Cancellation */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                {t("s4Title")}
              </h2>
              <p>{t("s4P1")}</p>
            </section>

            {/* 5. Medical Consent & Outcomes */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                {t("s5Title")}
              </h2>
              <p>{t("s5P1")}</p>
            </section>

            {/* Contact */}
            <div className="pt-6 border-t border-gray-200 text-sm text-gray-600">
              <p className="font-semibold text-forest">YourHealthFirst Clinic</p>
              <p>2nd Floor, 2 Wimpole Street, London W1G 0EB</p>
              <p>Contact: 0207 225 3582 | <a href="mailto:info@yourhealthfirst.uk" className="text-rust underline">info@yourhealthfirst.uk</a></p>
            </div>

          </div>
        </div>
      </main>

      <Footer sanitySettings={sanitySettings} />
    </div>
  );
}

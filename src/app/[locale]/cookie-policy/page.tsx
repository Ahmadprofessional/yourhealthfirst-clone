import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import CookieSettingsTrigger from "@/components/CookieSettingsTrigger";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CookiePolicyPage" });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourhealthfirst.uk";

  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: {
      canonical: `${baseUrl}/${locale}/cookie-policy`,
    },
  };
}

export default async function CookiePolicyPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CookiePolicyPage" });

  const sanitySettings = await sanityFetch<any>({
    query: SITE_SETTINGS_QUERY,
    tags: ["siteSettings"],
  });

  const breadcrumbs = [
    { name: t("home"), item: `/${locale}` },
    { name: t("title"), item: `/${locale}/cookie-policy` },
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
            
            {/* Quick Action Box */}
            <div className="bg-[#fcfaf5] border border-[#c98a3e]/30 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-subheading text-[18px] font-bold text-forest uppercase tracking-wide">
                  {t("changeChoiceTitle")}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {t("changeChoiceDesc")}
                </p>
              </div>
              <CookieSettingsTrigger />
            </div>

            {/* 1. What Are Cookies */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                {t("s1Title")}
              </h2>
              <p>{t("s1P1")}</p>
              <p>{t("s1P2")}</p>
            </section>

            {/* 2. Google Consent Mode v2 */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                {t("s2Title")}
              </h2>
              <p>{t("s2P1")}</p>
              <p>{t("s2P2")}</p>
            </section>

            {/* 3. Categories */}
            <section className="space-y-4">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                {t("s3Title")}
              </h2>
              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-gray-100 bg-[#f9f9f8]">
                  <h3 className="font-bold text-forest text-sm uppercase tracking-wide">
                    {t("s3Necessary")}
                  </h3>
                  <p className="text-xs sm:text-sm mt-1 text-gray-600">
                    {t("s3NecessaryDesc")}
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 bg-[#f9f9f8]">
                  <h3 className="font-bold text-forest text-sm uppercase tracking-wide">
                    {t("s3Analytics")}
                  </h3>
                  <p className="text-xs sm:text-sm mt-1 text-gray-600">
                    {t("s3AnalyticsDesc")}
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 bg-[#f9f9f8]">
                  <h3 className="font-bold text-forest text-sm uppercase tracking-wide">
                    {t("s3Marketing")}
                  </h3>
                  <p className="text-xs sm:text-sm mt-1 text-gray-600">
                    {t("s3MarketingDesc")}
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Managing Cookies */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                {t("s4Title")}
              </h2>
              <p>{t("s4P1")}</p>
              <p>{t("s4P2")}</p>
            </section>

            {/* 5. Contact */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                {t("s5Title")}
              </h2>
              <p>{t("s5Text")}</p>
              <p className="text-sm sm:text-base">
                YourHealthFirst Clinic — 2 Wimpole Street, London W1G 0EB<br />
                Email: <a href="mailto:info@yourhealthfirst.uk" className="text-rust underline">info@yourhealthfirst.uk</a><br />
                Telephone: 0207 225 3582
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer sanitySettings={sanitySettings} />
    </div>
  );
}

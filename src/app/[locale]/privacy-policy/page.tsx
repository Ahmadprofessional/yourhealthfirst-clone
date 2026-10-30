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
  const t = await getTranslations({ locale, namespace: "PrivacyPolicyPage" });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourhealthfirst.uk";

  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: {
      canonical: `${baseUrl}/${locale}/privacy-policy`,
    },
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PrivacyPolicyPage" });

  const sanitySettings = await sanityFetch<any>({
    query: SITE_SETTINGS_QUERY,
    tags: ["siteSettings"],
  });

  const breadcrumbs = [
    { name: t("home"), item: `/${locale}` },
    { name: t("title"), item: `/${locale}/privacy-policy` },
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
            
            {/* 1. Data Controller */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                {t("s1Title")}
              </h2>
              <p>{t("s1P1")}</p>
              <div className="bg-[#fcfaf5] border-l-4 border-[#c98a3e] p-4 rounded-r-lg text-sm sm:text-base">
                <p className="font-semibold text-forest">YourHealthFirst Clinic</p>
                <p>2nd Floor, 2 Wimpole Street, London W1G 0EB, United Kingdom</p>
                <p>{t("s1P2")}</p>
              </div>
              <p>{t("s1P3")}</p>
            </section>

            {/* 2. Personal Data We Collect */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                {t("s2Title")}
              </h2>
              <p>{t("s2P1")}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("s2Item1")}</li>
                <li>{t("s2Item2")}</li>
                <li>{t("s2Item3")}</li>
                <li>{t("s2Item4")}</li>
              </ul>
            </section>

            {/* 3. Lawful Bases */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                {t("s3Title")}
              </h2>
              <p>{t("s3P1")}</p>
            </section>

            {/* 4. Protection & Retention */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                {t("s4Title")}
              </h2>
              <p>{t("s4P1")}</p>
            </section>

            {/* 5. Your Rights */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                {t("s5Title")}
              </h2>
              <p>{t("s5P1")}</p>
            </section>

            {/* Supervisory Authority */}
            <div className="bg-[#f9f9f8] p-4 rounded-lg text-sm text-gray-700">
              <p className="font-semibold text-forest">Information Commissioner&apos;s Office (ICO)</p>
              <p>Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</p>
              <p>Helpline: 0303 123 1113 | Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-rust underline">ico.org.uk</a></p>
            </div>

          </div>
        </div>
      </main>

      <Footer sanitySettings={sanitySettings} />
    </div>
  );
}

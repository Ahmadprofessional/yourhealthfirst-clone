import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PriceListClient from "@/components/PriceListClient";
import { getLocalizedPriceList } from "@/data/localizedPriceList";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PriceList" });
  return {
    title: t("heading"),
    description: t("subtitle"),
  };
}

export default async function PriceListPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PriceList" });
  const categories = getLocalizedPriceList(locale);

  const features = [
    {
      label: t("featureTransparent"),
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
    },
    {
      label: t("featureNoHidden"),
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      ),
    },
    {
      label: t("featureHarleySt"),
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      ),
    },
    {
      label: t("featureRegulated"),
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
        </svg>
      ),
    },
  ];

  const taglines = [t("lookGood"), t("feelConfident"), t("beYourself")];

  return (
    <div className="flex flex-col">
      <Header />

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] pt-[111px]">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-tan/6 blur-[120px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 py-[70px] lg:py-[90px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            {/* Left */}
            <div className="flex flex-col gap-5 lg:max-w-[560px]">
              <div className="w-fit rounded-full border border-white/20 px-4 py-2">
                <p className="font-nav text-[11px] font-semibold tracking-[3px] text-tan uppercase">
                  {t("badge")}
                </p>
              </div>
              <h1 className="font-display text-[52px] leading-[56px] font-bold tracking-[-1.5px] text-cream uppercase lg:text-[72px] lg:leading-[76px]">
                {t("heading")}
              </h1>
              <p className="max-w-[460px] text-[15px] leading-[26px] text-white/60">
                {t("subtitle")}
              </p>
            </div>

            {/* Right — tagline */}
            <div className="hidden flex-col items-end justify-start gap-1 lg:flex">
              {taglines.map((line, i) => (
                <p
                  key={line}
                  className="font-serif text-[22px] leading-[32px] tracking-[-0.5px] text-white/80 italic lg:text-[26px] lg:leading-[36px]"
                  style={{ opacity: 1 - i * 0.15 }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Feature badges strip */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-[1400px] px-5">
            <div className="grid grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-3 px-4 py-5 lg:px-8">
                  <span className="text-tan">{f.icon}</span>
                  <span className="font-nav text-[11px] font-semibold tracking-[1px] text-white/70 uppercase">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE PRICE LIST ── */}
      <PriceListClient
        categories={categories}
        translations={{
          ourTreatments: t("ourTreatments"),
          exploreTitle: t("exploreTitle"),
          selectCategory: t("selectCategory"),
          searchPlaceholder: t("searchPlaceholder"),
        }}
      />

      {/* ── BOOKING / CANCELLATION & REFUND POLICY ── */}
      <section className="w-full bg-cream px-5 py-[80px] lg:py-[100px]">
        <div className="mx-auto max-w-[900px]">
          <div className="w-fit rounded-full border border-forest/20 px-4 py-2">
            <p className="font-nav text-[11px] font-semibold tracking-[3px] text-forest uppercase">
              {t("policyBadge")}
            </p>
          </div>
          <h2 className="mt-4 font-display text-[30px] leading-[36px] font-bold tracking-[-1px] text-forest uppercase lg:text-[38px] lg:leading-[44px]">
            {t("policyHeading")}
          </h2>
          <p className="mt-4 text-[15px] leading-[26px] text-body-text">
            {t("policyIntro")}
          </p>

          <div className="mt-10 flex flex-col gap-8">
            <div>
              <h3 className="font-subheading text-[16px] font-semibold tracking-[1px] text-forest uppercase">
                {t("procedureRefundsTitle")}
              </h3>
              <p className="mt-2 text-[15px] leading-[26px] text-body-text">
                {t("procedureRefundsText")}
              </p>
            </div>

            <div>
              <h3 className="font-subheading text-[16px] font-semibold tracking-[1px] text-forest uppercase">
                {t("complaintsTitle")}
              </h3>
              <p className="mt-2 text-[15px] leading-[26px] text-body-text">
                {t("complaintsText")}
              </p>
            </div>

            <div>
              <h3 className="font-subheading text-[16px] font-semibold tracking-[1px] text-forest uppercase">
                {t("depositsTitle")}
              </h3>
              <p className="mt-2 text-[15px] leading-[26px] text-body-text">
                {t("depositsText")}
              </p>
            </div>

            <div>
              <h3 className="font-subheading text-[16px] font-semibold tracking-[1px] text-forest uppercase">
                {t("cancellationsTitle")}
              </h3>
              <p className="mt-2 text-[15px] leading-[26px] text-body-text">
                {t("cancellationsText")}
              </p>
            </div>

            <div>
              <h3 className="font-subheading text-[16px] font-semibold tracking-[1px] text-forest uppercase">
                {t("lateTitle")}
              </h3>
              <p className="mt-2 text-[15px] leading-[26px] text-body-text">
                {t("lateText")}
              </p>
            </div>

            <div>
              <h3 className="font-subheading text-[16px] font-semibold tracking-[1px] text-forest uppercase">
                {t("paymentTitle")}
              </h3>
              <p className="mt-2 text-[15px] leading-[26px] text-body-text">
                {t("paymentText")}
              </p>
            </div>

            <div>
              <h3 className="font-subheading text-[16px] font-semibold tracking-[1px] text-forest uppercase">
                {t("giftVouchersTitle")}
              </h3>
              <p className="mt-2 text-[15px] leading-[26px] text-body-text">
                {t("giftVouchersText")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative w-full overflow-hidden bg-cream px-5 py-[80px] lg:py-[100px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 text-center">
          <div className="w-fit rounded-full border border-forest/20 px-4 py-2">
            <p className="font-nav text-[11px] font-semibold tracking-[3px] text-forest uppercase">
              {t("ctaBadge")}
            </p>
          </div>
          <h2 className="font-display text-[36px] leading-[42px] font-bold tracking-[-1.5px] text-forest uppercase lg:text-[52px] lg:leading-[58px]">
            {t("ctaHeading")}
          </h2>
          <p className="max-w-[460px] text-[15px] leading-[26px] text-body-text">
            {t("ctaSubtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#book"
              className="inline-flex h-14 items-center gap-2 rounded-[8px] bg-tan px-8 font-nav text-[14px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90"
            >
              {t("bookCta")} →
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex h-14 items-center gap-2 rounded-[8px] border-[1.5px] border-forest/30 px-8 font-nav text-[14px] font-semibold tracking-[-0.3px] text-forest transition-colors hover:border-[#b49b7d] hover:bg-[#b49b7d] hover:text-cream"
            >
              {t("contactCta")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

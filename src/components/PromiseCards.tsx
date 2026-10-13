"use client";

import { useTranslations } from "next-intl";

export default function PromiseCards() {
  const t = useTranslations("PromiseCards");

  return (
    <section className="w-full px-5 pb-[20px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative flex flex-col justify-center gap-6 overflow-hidden rounded-[8px] bg-[#a8896a] bg-[url('/images/promise-bg.jpg')] bg-cover bg-center p-4 lg:h-[450px] lg:flex-row">
          {/* Dark overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black opacity-80"
          />

          {/* Left — Bespoke Treatments */}
          <div className="relative flex flex-col gap-6 lg:w-[261px] lg:shrink-0 lg:pt-[108px]">
            <h2 className="font-subheading text-[30px] leading-[33px] font-medium tracking-[-1.8px] text-cream uppercase">
              {t("bespokeTitle")}
            </h2>
            <div className="text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] text-white">
              <p>{t("bespokeP1")}</p>
              <p className="mt-[14.4px]">{t("bespokeP2")}</p>
            </div>
          </div>

          {/* Center — section title */}
          <div className="relative flex flex-col gap-6 lg:w-[783px] lg:shrink-0 lg:pt-[108px]">
            <h2 className="text-center font-subheading text-[34px] leading-[38px] font-medium tracking-[-1.8px] text-cream uppercase lg:text-[50px] lg:leading-[55px]">
              {t("centerTitle")}
            </h2>
          </div>

          {/* Right — After care */}
          <div className="relative flex flex-col gap-6 lg:w-[261px] lg:shrink-0 lg:pt-[108px]">
            <h2 className="font-subheading text-[30px] leading-[33px] font-medium tracking-[-1.8px] text-cream uppercase">
              {t("aftercareTitle")}
            </h2>
            <div className="text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] text-white">
              <p>{t("aftercareP1")}</p>
              <p className="mt-[14.4px]">
                <strong className="font-bold">{t("aftercareP2Safety")}</strong>,{" "}
                <strong className="font-bold">{t("aftercareP2Aftercare")}</strong>, and{" "}
                <strong className="font-bold">{t("aftercareP2Expertise")}</strong>{" "}
                {t("aftercareP2Rest")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function AboutUs() {
  const t = useTranslations("AboutUs");

  return (
    <section className="w-full px-5">
      <div className="mx-auto max-w-[1400px] py-[100px]">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Left column */}
          <div className="flex flex-col gap-6 lg:flex-1 lg:min-w-0 xl:w-[810px] xl:shrink-0">
            <div className="w-fit rounded-full border-[0.8px] border-[rgba(11,23,4,0.2)] px-3 py-2">
              <h2 className="text-[13px] leading-[20.8px] font-semibold tracking-[3px] text-[#0c2c1d] uppercase">
                {t("badge")}
              </h2>
            </div>

            <h2 className="font-subheading text-[34px] leading-[38px] font-medium tracking-[-1.8px] text-tan uppercase lg:text-[50px] lg:leading-[55px]">
              {t("heading1")}
            </h2>
            <h2 className="-mt-[15px] font-subheading text-[34px] leading-[38px] font-medium tracking-[-1.8px] text-[#0c2c1d] uppercase lg:text-[50px] lg:leading-[55px]">
              {t("heading2")}
            </h2>

            <div className="text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] text-body-text">
              <p>{t("paragraph1")}</p>
              <p className="mt-[14.4px]">
                {t.rich("paragraph2", {
                  strong: (chunks) => (
                    <strong className="font-bold text-[#0c2c1d]">
                      {chunks}
                    </strong>
                  ),
                })}
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-2 lg:w-[380px] xl:w-[551px] lg:shrink-0 lg:pt-[69px]">
            <h2 className="font-subheading text-[34px] leading-[38px] font-medium tracking-[-1.8px] text-tan uppercase lg:text-[50px] lg:leading-[55px]">
              {t("rightHeading")}
            </h2>

            <p className="text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] text-body-text">
              {t("rightParagraph")}
            </p>

            <p className="text-[14px] leading-[25.6px] font-medium tracking-[-0.2px] text-body-text">
              {t("otherServices")}
            </p>

            <p className="text-[14px] leading-[25.6px] font-medium tracking-[-0.2px] text-body-text">
              {t("disclaimer")}
            </p>

            <div>
              <Link
                href="/about-us"
                className="inline-block rounded-[8px] border-[2.4px] border-tan px-[26px] py-4 text-center font-display text-[18px] leading-[18px] font-semibold tracking-[0.6px] text-tan uppercase transition-colors duration-200 hover:bg-tan hover:text-black"
              >
                {t("discoverMore")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

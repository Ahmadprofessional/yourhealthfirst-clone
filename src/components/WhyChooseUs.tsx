"use client";

import { useTranslations } from "next-intl";
import {
  UserIcon,
  EditIcon,
  CogIcon,
  CheckCircleIcon,
} from "@/components/icons";

const featureIcons = [UserIcon, EditIcon, CogIcon, CheckCircleIcon];
const darkCard = [true, false, false, true];

const featureKeys = [
  { title: "feature1Title", desc: "feature1Desc" },
  { title: "feature2Title", desc: "feature2Desc" },
  { title: "feature3Title", desc: "feature3Desc" },
  { title: "feature4Title", desc: "feature4Desc" },
] as const;

export default function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");

  return (
    <section className="w-full bg-cream px-5">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 py-[100px]">
        <div className="flex flex-col gap-6">
          <div className="w-fit rounded-full border-[0.8px] border-forest px-3 py-2">
            <h2 className="text-[13px] leading-[20.8px] font-semibold tracking-[3px] text-forest uppercase">
              {t("badge")}
            </h2>
          </div>
          <h2 className="max-w-[708px] font-subheading text-[34px] leading-[38px] font-medium tracking-[-1.8px] text-rust uppercase lg:text-[50px] lg:leading-[55px]">
            {t("heading")}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureKeys.map((item, index) => {
            const Icon = featureIcons[index];
            const isDark = darkCard[index];
            return (
              <article
                key={item.title}
                className={`flex flex-col gap-6 rounded-[8px] p-6 ${
                  isDark ? "bg-black" : "bg-white"
                }`}
              >
                <Icon
                  className={`h-6 w-6 ${isDark ? "text-white" : "text-rust"}`}
                />
                <h3
                  className={`font-subheading text-[25px] leading-[30px] font-medium tracking-[-1px] uppercase ${
                    isDark ? "text-cream" : "text-forest"
                  }`}
                >
                  {t(item.title)}
                </h3>
                <p
                  className={`text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] ${
                    isDark ? "text-white" : "text-body-text"
                  }`}
                >
                  {t(item.desc)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

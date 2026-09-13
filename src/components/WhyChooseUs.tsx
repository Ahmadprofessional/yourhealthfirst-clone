import { whyChooseFeatures } from "@/data/site";
import {
  UserIcon,
  EditIcon,
  CogIcon,
  CheckCircleIcon,
} from "@/components/icons";

const featureIcons = [UserIcon, EditIcon, CogIcon, CheckCircleIcon];

// Cards 1 and 4 are black, 2 and 3 are white on the live site.
const darkCard = [true, false, false, true];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-cream px-5">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 py-[100px]">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Left image */}
          <div className="h-[360px] rounded-[8px] bg-[url('/images/why-choose-us.jpg')] bg-cover bg-center lg:h-[889px] lg:w-[637px] lg:shrink-0" />

          {/* Right */}
          <div className="flex flex-col justify-center gap-10 lg:w-[708px] lg:shrink-0">
            <div className="flex flex-col gap-6">
              <div className="w-fit rounded-full border-[0.8px] border-forest px-3 py-2">
                <h2 className="text-[13px] leading-[20.8px] font-semibold tracking-[3px] text-forest uppercase">
                  why choose us
                </h2>
              </div>
              <h2 className="font-subheading text-[34px] leading-[38px] font-medium tracking-[-1.8px] text-rust uppercase lg:text-[50px] lg:leading-[55px]">
                Experience Trusted Dermatology Care With Sofia
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-2">
              {whyChooseFeatures.map((feature, index) => {
                const Icon = featureIcons[index];
                const isDark = darkCard[index];
                return (
                  <article
                    key={feature.title}
                    className={`flex flex-col gap-6 rounded-[8px] p-6 sm:w-[342px] ${
                      isDark ? "bg-black" : "bg-white"
                    } ${index % 2 === 1 ? "sm:-ml-[120px]" : ""}`}
                  >
                    <Icon
                      className={`h-6 w-6 ${isDark ? "text-white" : "text-rust"}`}
                    />
                    <h3
                      className={`font-subheading text-[25px] leading-[30px] font-medium tracking-[-1px] uppercase ${
                        isDark ? "text-cream" : "text-forest"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] ${
                        isDark ? "text-white" : "text-body-text"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

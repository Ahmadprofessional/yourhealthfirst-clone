import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery | YourHealthFirst Clinic — Before & After Results",
  description:
    "View real before & after results from YourHealthFirst Clinic — cryolipolysis, anti-wrinkle, dermal fillers, dermal fillers and more. All pictures are based on real patients.",
};

const categories = [
  {
    title: "Cryolipolysis — Before & After",
    description: "Fat freezing results across multiple body areas",
    areas: ["Abdomen", "Waist", "Abdomen / Waist", "Lower Back", "Arms", "Legs"],
  },
  {
    title: "Anti-Wrinkle Treatments — Before & After",
    description: "Botox and anti-wrinkle injection results",
    areas: [
      "Anti-wrinkle forehead",
      "Anti-wrinkle frown",
      "Anti-wrinkle bunny lines",
      "Combination treatment",
    ],
  },
  {
    title: "Dermal Fillers — Before & After",
    description: "Filler treatments for volume restoration and enhancement",
    areas: [
      "Tear trough / Dark circles / Hollow eyes",
      "Nasolabial folds / Laugh lines / Marionette lines",
      "Frown correction",
      "Chin augmentation / Enhancement",
      "Non-surgical rhinoplasty",
      "Lip enhancement (female)",
      "Lip enhancement (male)",
    ],
  },
  {
    title: "Other Treatments",
    description: "Additional treatment results",
    areas: ["Microsclerotherapy", "Hair loss — regrowth & alopecia"],
  },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Page hero */}
      <section className="relative w-full bg-forest pt-[111px]">
        <div className="mx-auto max-w-[1400px] px-5 py-[80px] lg:py-[100px]">
          <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
            <p className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-tan uppercase">
              real results
            </p>
          </div>
          <h1 className="mt-4 font-display text-[42px] leading-[46px] font-bold tracking-[-1px] text-cream uppercase lg:text-[64px] lg:leading-[70px]">
            Gallery
          </h1>
          <p className="mt-3 max-w-[540px] font-nav text-[16px] leading-[26px] text-white/60">
            All before &amp; after pictures are based on real patients treated at
            YourHealthFirst Clinic by Sofia Bouzian.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      {/* Gallery notice */}
      <section className="w-full border-b border-black/8 bg-cream px-5 py-6">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[15px] leading-[24px] text-body-text">
            <strong className="text-forest">Important:</strong> Individual results may vary. All images shown
            are genuine before &amp; after photographs of patients treated at YourHealthFirst Clinic.
            Results depend on the individual, the number of sessions and adherence to aftercare advice.
            Full gallery is available to view during your consultation at the clinic.
          </p>
        </div>
      </section>

      {/* Gallery categories */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="flex flex-col gap-16">
            {categories.map((cat) => (
              <div key={cat.title} className="flex flex-col gap-8">
                {/* Category header */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <h2 className="font-subheading text-[24px] font-medium leading-[30px] tracking-[-1px] text-forest uppercase lg:text-[30px] lg:leading-[36px]">
                      {cat.title}
                    </h2>
                    <div className="flex-1 border-t border-black/8" />
                  </div>
                  <p className="text-[15px] text-body-text">{cat.description}</p>
                </div>

                {/* Placeholder grid — images to be added */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {cat.areas.map((area) => (
                    <div
                      key={area}
                      className="group relative overflow-hidden rounded-[10px] bg-cream aspect-[3/4]"
                    >
                      {/* Placeholder — real before/after images to be uploaded */}
                      <div className="flex h-full flex-col items-center justify-center gap-2 p-4">
                        <div className="flex gap-[2px]">
                          <div className="h-8 w-[45%] rounded-[4px] bg-body-text/10" />
                          <div className="h-8 w-[45%] rounded-[4px] bg-body-text/10" />
                        </div>
                        <p className="text-center text-[12px] leading-[18px] tracking-[0.5px] text-body-text/50 uppercase">
                          {area}
                        </p>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-forest/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <p className="w-full px-4 pb-4 text-center text-[13px] font-semibold tracking-[0.5px] text-cream uppercase">
                          {area}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note about full gallery */}
          <div className="mt-14 rounded-[12px] border border-tan/30 bg-cream p-8 text-center">
            <h3 className="font-subheading text-[20px] font-semibold leading-[26px] tracking-[-0.8px] text-forest uppercase">
              View the Full Gallery at Your Consultation
            </h3>
            <p className="mx-auto mt-3 max-w-[480px] text-[15px] leading-[24px] text-body-text">
              Our complete gallery of before &amp; after results is available to view during your
              consultation at the clinic. Contact us to book your appointment.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="tel:02072253582"
                className="inline-flex h-12 items-center justify-center rounded-[8px] bg-forest px-7 font-nav text-[14px] font-semibold tracking-[-0.3px] text-cream transition-opacity hover:opacity-90"
              >
                Call 0207 225 3582
              </a>
              <a
                href="/contact-us"
                className="inline-flex h-12 items-center justify-center rounded-[8px] border border-forest/30 px-7 font-nav text-[14px] font-semibold tracking-[-0.3px] text-forest transition-colors hover:border-forest"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery | YourHealthFirst Clinic — Before & After Results",
  description:
    "View real before & after results from YourHealthFirst Clinic — cryolipolysis, anti-wrinkle, dermal fillers and more. All pictures are based on real patients.",
};

const cryoImages = Array.from({ length: 19 }, (_, i) => ({
  src: `/images/gallery/cryolipolysis/cryo-${i + 1}.jpeg`,
  alt: `Cryolipolysis before & after — result ${i + 1}`,
}));

const botoxImages = Array.from({ length: 14 }, (_, i) => ({
  src: `/images/gallery/botox/botox-${i + 1}.jpeg`,
  alt: `Anti-wrinkle (Botox) before & after — result ${i + 1}`,
}));

function BeforeAfterGrid({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img, index) => (
        <div
          key={img.src}
          className="group relative overflow-hidden rounded-[12px] shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="relative aspect-square w-full">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top"
              loading={index < 3 ? "eager" : "lazy"}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 translate-y-4 px-4 pb-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-center font-subheading text-[12px] font-semibold tracking-[1px] text-cream uppercase">
              Result {index + 1}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ComingSoonPlaceholder({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-[12px] border border-dashed border-forest/20 bg-cream/60 px-8 py-16 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/8">
        <svg className="h-6 w-6 text-forest/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M9 9.75h.008v.008H9V9.75zm6.75 0h.008v.008h-.008V9.75z" />
        </svg>
      </div>
      <p className="font-subheading text-[13px] font-semibold tracking-[1px] text-forest/50 uppercase">
        {title}
      </p>
      <p className="text-[13px] leading-[20px] text-body-text/50">
        Photos coming soon
      </p>
    </div>
  );
}

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

      {/* Cryolipolysis section */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">

          {/* Section header */}
          <div className="mb-10 flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <h2 className="font-subheading text-[24px] font-medium leading-[30px] tracking-[-1px] text-forest uppercase lg:text-[30px] lg:leading-[36px]">
                Cryolipolysis — Before &amp; After
              </h2>
              <div className="flex-1 border-t border-black/8" />
            </div>
            <p className="text-[15px] text-body-text">
              Fat freezing results across multiple body areas — lower abdomen, waist, arms, back and legs.
            </p>
          </div>

          <BeforeAfterGrid images={cryoImages} />
        </div>
      </section>

      {/* Anti-Wrinkle section */}
      <section className="w-full border-t border-black/8 bg-cream/40 px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="mb-10 flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <h2 className="font-subheading text-[24px] font-medium leading-[30px] tracking-[-1px] text-forest uppercase lg:text-[30px] lg:leading-[36px]">
                Anti-Wrinkle Treatments — Before &amp; After
              </h2>
              <div className="flex-1 border-t border-black/8" />
            </div>
            <p className="text-[15px] text-body-text">
              Botox and anti-wrinkle injection results — forehead, frown lines, bunny lines and combination treatments.
            </p>
          </div>
          <BeforeAfterGrid images={botoxImages} />
        </div>
      </section>

      {/* Dermal Fillers section */}
      <section className="w-full border-t border-black/8 px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="mb-10 flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <h2 className="font-subheading text-[24px] font-medium leading-[30px] tracking-[-1px] text-forest uppercase lg:text-[30px] lg:leading-[36px]">
                Dermal Fillers — Before &amp; After
              </h2>
              <div className="flex-1 border-t border-black/8" />
            </div>
            <p className="text-[15px] text-body-text">
              Filler treatments — tear trough, nasolabial folds, lip enhancement, chin augmentation and non-surgical rhinoplasty.
            </p>
          </div>
          <ComingSoonPlaceholder title="Dermal Filler Before & After Photos" />
        </div>
      </section>

      {/* Other Treatments section */}
      <section className="w-full border-t border-black/8 bg-cream/40 px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="mb-10 flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <h2 className="font-subheading text-[24px] font-medium leading-[30px] tracking-[-1px] text-forest uppercase lg:text-[30px] lg:leading-[36px]">
                Other Treatments — Before &amp; After
              </h2>
              <div className="flex-1 border-t border-black/8" />
            </div>
            <p className="text-[15px] text-body-text">
              Microsclerotherapy, hair loss regrowth, alopecia and additional treatment results.
            </p>
          </div>
          <ComingSoonPlaceholder title="Other Treatment Before & After Photos" />
        </div>
      </section>

      {/* CTA */}
      <section className="w-full border-t border-black/8 px-5 py-[60px]">
        <div className="mx-auto max-w-[1400px]">
          <div className="rounded-[12px] border border-tan/30 bg-cream p-8 text-center">
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

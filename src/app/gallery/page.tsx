import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryExplorer from "@/components/GalleryExplorer";

export const metadata: Metadata = {
  title: "Gallery | YourHealthFirst Clinic — Before & After Results",
  description:
    "View real before & after results from YourHealthFirst Clinic — cryolipolysis, anti-wrinkle, dermal fillers and more. All pictures are based on real patients.",
};

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ treatment?: string | string[] }>;
}) {
  const { treatment } = await searchParams;
  const initialGroup = Array.isArray(treatment) ? treatment[0] : treatment;

  return (
    <div className="flex flex-col">
      <Header />

      {/* Page hero */}
      <section className="relative w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] pt-[111px]">
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

      <GalleryExplorer initialGroup={initialGroup} />

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
                className="inline-flex h-12 items-center justify-center rounded-[8px] bg-[#a8896a] px-7 font-nav text-[14px] font-semibold tracking-[-0.3px] text-cream transition-opacity hover:opacity-90"
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

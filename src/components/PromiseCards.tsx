export default function PromiseCards() {
  return (
    <section className="w-full px-5 pb-[100px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative flex flex-col justify-center gap-6 overflow-hidden rounded-[8px] bg-[#0c2c1d] bg-[url('/images/promise-bg.jpg')] bg-cover bg-center p-4 lg:h-[450px] lg:flex-row">
          {/* Dark overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black opacity-80"
          />

          {/* Left — Bespoke Treatments */}
          <div className="relative flex flex-col gap-6 lg:w-[261px] lg:shrink-0 lg:pt-[108px]">
            <h2 className="font-subheading text-[30px] leading-[33px] font-medium tracking-[-1.8px] text-cream uppercase">
              Bespoke Treatments
            </h2>
            <div className="text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] text-white">
              <p>
                Everybody is different. We strive to offer treatments that best
                suit your needs.
              </p>
              <p className="mt-[14.4px]">
                We are pioneers in Non-Invasive Aesthetic Treatments
              </p>
            </div>
          </div>

          {/* Center — section title */}
          <div className="relative flex flex-col gap-6 lg:w-[783px] lg:shrink-0 lg:pt-[108px]">
            <h2 className="text-center font-subheading text-[34px] leading-[38px] font-medium tracking-[-1.8px] text-cream uppercase lg:text-[50px] lg:leading-[55px]">
              OUR PROMISE TO YOU
            </h2>
          </div>

          {/* Right — After care */}
          <div className="relative flex flex-col gap-6 lg:w-[261px] lg:shrink-0 lg:pt-[108px]">
            <h2 className="font-subheading text-[30px] leading-[33px] font-medium tracking-[-1.8px] text-cream uppercase">
              After care
            </h2>
            <div className="text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] text-white">
              <p>
                We will do a close follow up after your treatment, to make sure
                you are happy with the results;
              </p>
              <p className="mt-[14.4px]">
                <strong className="font-bold">Safety</strong>,{" "}
                <strong className="font-bold">Aftercare</strong>, and{" "}
                <strong className="font-bold">Expertise</strong> are at the
                heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

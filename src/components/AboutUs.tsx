export default function AboutUs() {
  return (
    <section className="w-full px-5">
      <div className="mx-auto max-w-[1400px] py-[100px]">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Left column */}
          <div className="flex flex-col gap-6 lg:w-[810px] lg:shrink-0">
            <div className="w-fit rounded-full border-[0.8px] border-[rgba(11,23,4,0.2)] px-3 py-2">
              <h2 className="text-[13px] leading-[20.8px] font-semibold tracking-[3px] text-[#0c2c1d] uppercase">
                about us
              </h2>
            </div>

            <h2 className="font-subheading text-[34px] leading-[38px] font-medium tracking-[-1.8px] text-tan uppercase lg:text-[50px] lg:leading-[55px]">
              Experts in
            </h2>
            <h2 className="-mt-[15px] font-subheading text-[34px] leading-[38px] font-medium tracking-[-1.8px] text-[#0c2c1d] uppercase lg:text-[50px] lg:leading-[55px]">
              Rejuvenation without Surgery
            </h2>

            <div className="text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] text-body-text">
              <p>
                Get immediately natural and long lasting results without getting
                over injected, keeping a natural and most rejuvenated look
                without over-stuffed look, all treatments are treated with
                expert hands with many years of experience using the latest
                techniques and innovations to obtain unbeatable and natural
                results.
              </p>
              <p className="mt-[14.4px]">
                We offer a range of treatments including; Phlebotomy Services
                (blood draw) Cryolipolysis, Aqualyx and Lemon Bottle both fat
                dissolving treatment, Botox – Anti-wrinkles injections, Dermal
                Fillers, Eye bags correction, Under eyes dark circles,
                Rhinomodelation, Revoluminization, Neck rejuvenation, Peeling,
                Micro-needling, Warts, Skin tags, Moles, Millia &amp; Cherry
                Angioma removal, Sclerotherapy (spider veins removal),
                PRP-Platelet Rich Plasma for Hair loss, Hair Thinning, Alopecia
                Problems, PRP face, neck &amp; hands rejuvenation, Mesotherapy,
                Profhilo, CryoPen, Acne Scars, Active and Non-active Acne
                treatment, Rosacea, Stretch Marks, Age Spots, Dark Spots,
                Melasma, Skin Rejuvenation and more…
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-2 lg:w-[551px] lg:shrink-0 lg:pt-[69px]">
            <h2 className="font-subheading text-[34px] leading-[38px] font-medium tracking-[-1.8px] text-tan uppercase lg:text-[50px] lg:leading-[55px]">
              Ready to begin your journey?
            </h2>

            <p className="text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] text-body-text">
              Book with us to discuss the best options to achieve the results
              you want, call us today to book a consultation for a customized
              treatment plan created just for you.
            </p>

            <p className="text-[14px] leading-[25.6px] font-medium tracking-[-0.2px] text-body-text">
              Other Available services; Health Screening – Full body MOT – Visa
              Medicals &amp; Pre-Employment- Sexual Health Screening – Blood
              tests –
            </p>

            <p className="text-[14px] leading-[25.6px] font-medium tracking-[-0.2px] text-body-text">
              ***Where applicable, certain procedures will be refereed/ carried
              out by our affiliated clinic, by registered CQC doctor. ***
            </p>

            <div>
              <a
                href="#"
                className="inline-block rounded-[8px] border-[2.4px] border-tan px-[26px] py-4 text-center font-display text-[18px] leading-[18px] font-semibold tracking-[0.6px] text-tan uppercase transition-colors duration-200 hover:bg-tan hover:text-black"
              >
                discover more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

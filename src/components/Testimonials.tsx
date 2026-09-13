import Image from "next/image";
import { testimonials } from "@/data/site";
import { StarIcon, QuoteIcon } from "@/components/icons";

export default function Testimonials() {
  return (
    <section className="relative w-full bg-brown-gold bg-[url('/images/testimonials-bg.jpg')] bg-cover bg-left-top px-5">
      {/* Gold → black overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(#997331_0%,#000_100%)] opacity-90"
      />

      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-10 py-[100px] lg:flex-row">
        {/* Left column */}
        <div className="flex flex-col gap-6 lg:w-[488px] lg:shrink-0">
          <div className="w-fit rounded-[25px] border-[0.8px] border-white px-3 py-2">
            <h2 className="text-[13px] leading-[20.8px] font-semibold tracking-[3px] text-white uppercase">
              testimonials
            </h2>
          </div>

          <h2 className="font-subheading text-[36px] leading-[40px] font-medium tracking-[-1.8px] text-black uppercase lg:text-[50px] lg:leading-[55px]">
            <span className="block text-tan">what our</span>
            patient say
          </h2>

          <p className="max-w-[430px] text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div>
            <a
              href="#"
              className="inline-block rounded-[8px] border-[2.4px] border-tan px-[26px] py-4 text-center font-display text-[18px] leading-[18px] font-semibold tracking-[0.6px] text-tan uppercase transition-colors duration-200 hover:bg-tan hover:text-black"
            >
              more testimonials
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="grid flex-1 gap-[15px] sm:grid-cols-2">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="relative flex flex-col rounded-[8px] border-[1.6px] border-tan p-[30px] shadow-[9px_11px_14px_0_rgba(0,0,0,0.1)] lg:h-[354px]"
            >
              <ul className="flex h-[25.6px] items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index} className="mr-[5px] last:mr-0">
                    <StarIcon className="h-4 w-4 text-[#fec42d]" />
                  </li>
                ))}
              </ul>

              <p className="my-[30px] text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] text-white">
                {item.quote}
              </p>

              <div className="mt-auto flex items-center">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="mr-5 h-[70px] w-[70px] rounded-full object-cover"
                />
                <div>
                  <strong className="block font-display text-[21px] leading-[25.2px] font-medium tracking-[-1px] text-tan uppercase">
                    {item.name}
                  </strong>
                  <span className="text-[13px] leading-[25.6px] font-normal tracking-[-0.2px] text-white">
                    {item.role}
                  </span>
                </div>
              </div>

              <QuoteIcon
                aria-hidden="true"
                className="absolute right-[30px] bottom-[30px] h-[37px] w-[35px] text-tan"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

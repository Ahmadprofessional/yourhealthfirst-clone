import { testimonials } from "@/data/site";
import { StarIcon, QuoteIcon } from "@/components/icons";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default function Testimonials() {
  return (
    <section className="relative w-full bg-brown-gold bg-[url('/images/testimonials-bg.jpg')] bg-cover bg-left-top px-5">
      {/* Gold → black overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(#997331_0%,#000_100%)] opacity-90"
      />

      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-10 py-[100px]">
        {/* Heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-6">
            <div className="w-fit rounded-[25px] border-[0.8px] border-white px-3 py-2">
              <h2 className="text-[13px] leading-[20.8px] font-semibold tracking-[3px] text-white uppercase">
                testimonials
              </h2>
            </div>

            <h2 className="font-subheading text-[36px] leading-[40px] font-medium tracking-[-1.8px] text-black uppercase lg:text-[50px] lg:leading-[55px]">
              <span className="block text-tan">what our</span>
              patient say
            </h2>
          </div>

          <a
            href="https://www.google.com/search?q=YourHealthFirst+Clinic&oq=&gs_lcrp=EgZjaHJvbWUqCQgBEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQkyNzAwajBqMTWoAgiwAgHxBds1lDsBAJhh&sourceid=chrome&source=chrome.rb&ie=UTF-8#mpd=~15060418522766184397/customers/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit rounded-[8px] border-[2.4px] border-tan px-[26px] py-4 text-center font-display text-[18px] leading-[18px] font-semibold tracking-[0.6px] text-tan uppercase transition-colors duration-200 hover:bg-tan hover:text-black"
          >
            more testimonials
          </a>
        </div>

        {/* Cards */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="relative flex flex-col rounded-[8px] border-[1.6px] border-tan p-4 shadow-[9px_11px_14px_0_rgba(0,0,0,0.1)] lg:min-h-[260px]"
            >
              <ul className="flex h-[18px] items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index} className="mr-[3px] last:mr-0">
                    <StarIcon className="h-3 w-3 text-[#fec42d]" />
                  </li>
                ))}
              </ul>

              <p className="my-4 line-clamp-5 text-[13px] leading-[20px] font-medium tracking-[-0.2px] text-white">
                {item.quote}
              </p>

              <div className="mt-auto flex items-center">
                <div
                  aria-hidden="true"
                  className="mr-3 flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-tan font-subheading text-[15px] font-semibold text-forest"
                >
                  {getInitials(item.name)}
                </div>
                <div>
                  <strong className="block font-display text-[15px] leading-[18px] font-medium tracking-[-0.5px] text-tan uppercase">
                    {item.name}
                  </strong>
                  <span className="text-[11px] leading-[18px] font-normal tracking-[-0.2px] text-white">
                    {item.role}
                  </span>
                </div>
              </div>

              <QuoteIcon
                aria-hidden="true"
                className="absolute right-4 bottom-4 h-5 w-5 text-tan"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

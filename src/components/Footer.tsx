import Link from "next/link";
import Image from "next/image";
import { contact } from "@/data/site";
import {
  FacebookIcon,
  XTwitterIcon,
  InstagramIcon,
  PhoneIcon,
  MobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@/components/icons";

const accreditationLogos = [
  { src: "/images/logos/training2-1.jpg", alt: "Wigmore Medical & British Association of Sclerotherapists" },
  { src: "/images/logos/bgilogo.png", alt: "BGi UK Insurance Risk Management" },
  { src: "/images/logos/logocpd.jpg", alt: "CPD Accredited" },
  { src: "/images/logos/westminterlogo.png", alt: "City of Westminster Training Certification Service" },
  { src: "/images/logos/cpdlogo.png", alt: "CPD Member" },
  { src: "/images/logos/womenexcwawardthumbnail.jpg", alt: "Women Excellence Award" },
  { src: "/images/logos/wawlogo.jpg", alt: "WAW Hall of Fame" },
  { src: "/images/logos/seal.jpg", alt: "SoMUK" },
  { src: "/images/logos/National-Phlebotomist-Register-Logo-1-1024x431.png", alt: "National Phlebotomist Register" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/Yourhealthfirstsofia",
    Icon: FacebookIcon,
  },
  {
    label: "X-twitter",
    href: "https://twitter.com/YHFHarleyStreet",
    Icon: XTwitterIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yourhealthfirst_clinic_/?hl=en",
    Icon: InstagramIcon,
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact-us" },
];

export default function Footer() {
  return (
    <>
      {/* Accreditation logos bar */}
      <div className="w-full border-t border-gray-100 bg-white px-5 py-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-10">
            {accreditationLogos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                className="h-[80px] w-auto max-w-[160px] object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      <footer className="w-full bg-brown-gold px-5">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-[50px] py-[100px]">
        {/* Brand + socials */}
        <div className="flex flex-col gap-2">
          <h2 className="text-center font-subheading text-[34px] leading-[38px] font-medium tracking-[-1.8px] text-cream uppercase lg:text-[50px] lg:leading-[55px]">
            YourHealthFirst Clinic
          </h2>
          <div className="flex justify-center gap-[10px]">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-[10%] bg-cream text-body-text transition-opacity hover:opacity-80"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Columns */}
        <div className="flex flex-col gap-6 pt-[30px] lg:flex-row">
          {/* CTA */}
          <div className="flex flex-col gap-6 lg:w-[716px] lg:shrink-0">
            <h2 className="max-w-[573px] font-subheading text-[25px] leading-[30px] font-bold tracking-[-1px] text-white uppercase">
              NOT SURE EXACTLY WHO WOULD YOU LIKE TO SEE ?
            </h2>

            <div className="max-w-[394px] text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] text-white">
              <p>DON&rsquo;T WORRY!</p>
              <p>
                Our adviser will be sure to book you in the right clinic with
                the best medical practitioner to meet your needs.
              </p>
            </div>

            <div className="relative flex w-fit items-center">
              <a
                href="tel:02072253582"
                className="flex h-14 w-[179px] items-center justify-center rounded-l-[7px] bg-rust p-[15px] text-[16px] font-bold tracking-[-0.2px] text-white"
              >
                Call Now
              </a>
              <span className="absolute left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-[#fafaf8] text-[14px] font-medium text-forest uppercase">
                Or
              </span>
              <a
                href={`mailto:${contact.email}`}
                className="flex h-14 w-[179px] items-center justify-center rounded-r-[7px] bg-cream p-[15px] text-[16px] font-bold tracking-[-0.2px] text-rust"
              >
                Email Now
              </a>
            </div>
          </div>

          {/* Quick links + contact */}
          <div className="flex flex-col gap-6 sm:flex-row lg:w-[645px] lg:shrink-0">
            <div className="flex flex-col gap-6 sm:w-[310px]">
              <h2 className="font-serif text-[25px] leading-[30px] tracking-[-1px] text-white uppercase">
                Quick Link
              </h2>
              <ul className="flex flex-col gap-[9px]">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] text-cream transition-opacity hover:opacity-80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6 sm:w-[310px]">
              <h2 className="font-serif text-[25px] leading-[30px] tracking-[-1px] text-white uppercase">
                contact
              </h2>
              <ul className="flex flex-col gap-[9px] text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] text-cream">
                <li className="flex items-center">
                  <PhoneIcon className="h-[14px] w-[14px] shrink-0" />
                  <a href="tel:02072253582" className="pl-[5px]">
                    {contact.phone1}
                  </a>
                </li>
                <li className="flex items-center">
                  <MobileIcon className="h-[14px] w-[14px] shrink-0" />
                  <a href="tel:07818474041" className="pl-[5px]">
                    {contact.phone2}
                  </a>
                </li>
                <li className="flex items-center">
                  <EnvelopeIcon className="h-[14px] w-[14px] shrink-0" />
                  <a href={`mailto:${contact.email}`} className="pl-[5px]">
                    {contact.email}
                  </a>
                </li>
                <li className="flex items-center">
                  <MapPinIcon className="h-[14px] w-[14px] shrink-0" />
                  <span className="pl-[5px]">{contact.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "Blog | YourHealthFirst Clinic — Aesthetic & Wellness Insights",
  description:
    "Read the latest articles from YourHealthFirst Clinic on aesthetic medicine, hair loss, fat freezing, PRP therapy, dermal fillers and more.",
};

const posts = [
  {
    slug: "prp-and-exosome-therapy",
    title: "PRP and Exosome Therapy: Advanced Rejuvenation for Hair, Face and Body",
    excerpt:
      "PRP (Platelet-Rich Plasma) and Exosome therapy represent the cutting edge of regenerative aesthetics. In this article, Dr Sofia explores how combining these two powerful treatments can deliver superior results for hair restoration and skin rejuvenation.",
    date: "19 June 2025",
    category: "Hair Restoration",
    image: "/images/treatments/hair-restoration.jpg",
    href: "https://yourhealthfirst.uk/blog/prp-and-exosome-therapy-advanced-rejuvenation-for-hair-face-and-body",
    external: true,
  },
  {
    slug: "prp-injections-for-hair-loss",
    title: "Top PRP Injections in London — What You Need to Know",
    excerpt:
      "PRP injections for hair loss have become one of the most popular non-surgical treatments for thinning hair and alopecia. Dr Sofia outlines what PRP is, how it works, what to expect, and how to choose the right clinic.",
    date: "6 September 2023",
    category: "Hair Restoration",
    image: "/images/treatments/hair-restoration.jpg",
    href: "https://yourhealthfirst.uk/blog/prp-injections-for-hair-loss-treatment",
    external: true,
  },
  {
    slug: "cryolipolysis-fat-freezing",
    title: "Cryolipolysis: The Science Behind Fat Freezing",
    excerpt:
      "Cryolipolysis is one of the most effective non-surgical fat reduction treatments available. Find out how fat freezing works, what areas can be treated, how many sessions you need, and what results to expect.",
    date: "16 March 2023",
    category: "Body Contouring",
    image: "/images/treatments/body-contouring.jpg",
    href: "https://yourhealthfirst.uk/cryolipolysis",
    external: true,
  },
  {
    slug: "anti-wrinkles-injections",
    title: "Anti-Wrinkle Injections — Everything You Need to Know",
    excerpt:
      "Anti-wrinkle injections remain one of the most requested aesthetic treatments in the UK. Dr Sofia covers what they are, how they work, the areas that can be treated, and what makes the difference between a natural result and an overdone look.",
    date: "16 March 2023",
    category: "Face & Anti-Aging",
    image: "/images/treatments/anti-wrinkle.jpg",
    href: "https://yourhealthfirst.uk/anti-wrinkles-injections",
    external: true,
  },
  {
    slug: "prp-hair-loss",
    title: "PRP for Hair Loss — A Complete Guide",
    excerpt:
      "Platelet-Rich Plasma therapy for hair loss is backed by an increasing body of clinical evidence. This guide explains who it is suitable for, how many sessions are needed, what results are realistic, and how it compares to other hair restoration options.",
    date: "16 March 2023",
    category: "Hair Restoration",
    image: "/images/treatments/hair-restoration.jpg",
    href: "https://yourhealthfirst.uk/prp-hair-loss",
    external: true,
  },
  {
    slug: "dermal-fillers-and-its-uses",
    title: "Dermal Fillers and Their Uses — The Complete Guide",
    excerpt:
      "From lip enhancement to non-surgical rhinoplasty, dermal fillers have a remarkably wide range of applications. Dr Sofia explains the different types of filler, the areas they are used for, and what to look for when choosing a practitioner.",
    date: "16 March 2023",
    category: "Face & Anti-Aging",
    image: "/images/treatments/dermal-fillers.jpg",
    href: "https://yourhealthfirst.uk/dermal-fillers-and-its-uses",
    external: true,
  },
];

const categoryColors: Record<string, string> = {
  "Hair Restoration": "text-tan bg-tan/10",
  "Body Contouring": "text-rust bg-rust/10",
  "Face & Anti-Aging": "text-[#5c4425] bg-[#5c4425]/10",
};

export default function BlogsPage() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Page hero */}
      <section className="relative w-full bg-[linear-gradient(90deg,#1c1813_0%,#2b2217_50%,#3a2e1a_100%)] pt-[111px]">
        <div className="mx-auto max-w-[1400px] px-5 py-[80px] lg:py-[100px]">
          <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
            <p className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-tan uppercase">
              expert insights
            </p>
          </div>
          <h1 className="mt-4 font-display text-[42px] leading-[46px] font-bold tracking-[-1px] text-cream uppercase lg:text-[64px] lg:leading-[70px]">
            Blog
          </h1>
          <p className="mt-3 max-w-[500px] font-nav text-[16px] leading-[26px] text-white/60">
            Articles and guides from Sofia Bouzian — covering aesthetic
            medicine, skin health, hair restoration and wellbeing.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      {/* Blog posts */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">

          {/* Featured post */}
          <div className="mb-12">
            <Link
              href={posts[0].href}
              target={posts[0].external ? "_blank" : undefined}
              rel={posts[0].external ? "noopener noreferrer" : undefined}
              className="group flex flex-col overflow-hidden rounded-[14px] border border-black/8 bg-white transition-shadow hover:shadow-lg lg:flex-row"
            >
              <div className="aspect-[16/9] w-full overflow-hidden bg-cream lg:aspect-auto lg:h-[380px] lg:w-[560px] lg:shrink-0">
                <SafeImage
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-5 p-8 lg:p-12">
                <div className="flex items-center gap-3">
                  <span className={`rounded-full px-3 py-1 text-[12px] font-semibold tracking-[0.5px] uppercase ${categoryColors[posts[0].category] ?? "text-body-text bg-body-text/10"}`}>
                    {posts[0].category}
                  </span>
                  <span className="text-[13px] text-body-text/50">{posts[0].date}</span>
                </div>
                <h2 className="font-subheading text-[24px] font-medium leading-[30px] tracking-[-1px] text-forest uppercase lg:text-[30px] lg:leading-[36px]">
                  {posts[0].title}
                </h2>
                <p className="text-[15px] leading-[25px] text-body-text">
                  {posts[0].excerpt}
                </p>
                <span className="font-nav text-[13px] font-semibold tracking-[0.5px] text-tan uppercase transition-opacity group-hover:opacity-70">
                  Read Article →
                </span>
              </div>
            </Link>
          </div>

          {/* Remaining posts grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={post.href}
                target={post.external ? "_blank" : undefined}
                rel={post.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col overflow-hidden rounded-[12px] border border-black/8 bg-white transition-shadow hover:shadow-lg"
              >
                {/* Image */}
                <div className="aspect-[16/9] w-full overflow-hidden bg-cream">
                  <SafeImage
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-center gap-3">
                    <span className={`rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.5px] uppercase ${categoryColors[post.category] ?? "text-body-text bg-body-text/10"}`}>
                      {post.category}
                    </span>
                    <span className="text-[12px] text-body-text/50">{post.date}</span>
                  </div>
                  <h3 className="font-subheading text-[16px] font-semibold leading-[22px] tracking-[-0.6px] text-forest uppercase">
                    {post.title}
                  </h3>
                  <p className="flex-1 text-[14px] leading-[22px] text-body-text line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="font-nav text-[12px] font-semibold tracking-[0.5px] text-tan uppercase transition-opacity group-hover:opacity-70">
                    Read Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="w-full bg-cream px-5">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 py-[80px] text-center">
          <h2 className="font-subheading text-[28px] font-medium leading-[34px] tracking-[-1.2px] text-forest uppercase lg:text-[36px] lg:leading-[42px]">
            Have a Question?
          </h2>
          <p className="max-w-[440px] text-[16px] leading-[27px] text-body-text">
            If you&apos;d like to learn more about any treatment or book a
            consultation, we&apos;re always happy to help.
          </p>
          <a
            href="/contact-us"
            className="inline-flex h-14 items-center justify-center rounded-[8px] bg-[#2b2217] px-8 font-nav text-[15px] font-semibold tracking-[-0.3px] text-cream transition-opacity hover:opacity-90"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

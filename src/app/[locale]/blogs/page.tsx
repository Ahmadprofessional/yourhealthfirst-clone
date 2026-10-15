import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BlogPage" });
  return {
    title: t("heading"),
    description: t("subtitle"),
  };
}

const categoryColorBySlug: Record<string, string> = {
  "prp-and-exosome-therapy-advanced-rejuvenation-for-hair-face-and-body": "text-tan bg-tan/10",
  "prp-injections-for-hair-loss-treatment": "text-tan bg-tan/10",
  "cryolipolysis-fat-freezing": "text-rust bg-rust/10",
  "anti-wrinkles-injections": "text-[#5c4425] bg-[#5c4425]/10",
  "prp-hair-loss": "text-tan bg-tan/10",
  "dermal-fillers-and-its-uses": "text-[#5c4425] bg-[#5c4425]/10",
  "prp-and-exosome-therapy": "text-tan bg-tan/10",
  "prp-injections-for-hair-loss": "text-tan bg-tan/10",
};

export default async function BlogsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BlogPage" });

  const posts = [
    {
      slug: "prp-and-exosome-therapy-advanced-rejuvenation-for-hair-face-and-body",
      title: t("post1Title"),
      excerpt: t("post1Excerpt"),
      date: t("post1Date"),
      category: t("post1Cat"),
      image: "/images/blogs/prp-exosome-rejuvenation.jpeg",
      href: "/blog/prp-and-exosome-therapy-advanced-rejuvenation-for-hair-face-and-body",
    },
    {
      slug: "prp-injections-for-hair-loss-treatment",
      title: t("post2Title"),
      excerpt: t("post2Excerpt"),
      date: t("post2Date"),
      category: t("post2Cat"),
      image: "/images/blogs/top-prp-injections-london.jpeg",
      href: "/blog/prp-injections-for-hair-loss-treatment",
    },
    {
      slug: "cryolipolysis-fat-freezing",
      title: t("post3Title"),
      excerpt: t("post3Excerpt"),
      date: t("post3Date"),
      category: t("post3Cat"),
      image: "/images/blogs/cryolipolysis-fat-freezing.jpeg",
      href: "/blog/cryolipolysis-fat-freezing",
    },
    {
      slug: "anti-wrinkles-injections",
      title: t("post4Title"),
      excerpt: t("post4Excerpt"),
      date: t("post4Date"),
      category: t("post4Cat"),
      image: "/images/blogs/anti-wrinkle-injections.jpeg",
      href: "/blog/anti-wrinkles-injections",
    },
    {
      slug: "prp-hair-loss",
      title: t("post5Title"),
      excerpt: t("post5Excerpt"),
      date: t("post5Date"),
      category: t("post5Cat"),
      image: "/images/blogs/prp-hair-loss-guide.jpeg",
      href: "/blog/prp-hair-loss",
    },
    {
      slug: "dermal-fillers-and-its-uses",
      title: t("post6Title"),
      excerpt: t("post6Excerpt"),
      date: t("post6Date"),
      category: t("post6Cat"),
      image: "/images/blogs/dermal-fillers-guide.jpeg",
      href: "/blog/dermal-fillers-and-its-uses",
    },
  ];

  return (
    <div className="flex flex-col">
      <Header />

      {/* Page hero */}
      <section className="relative w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] pt-[111px]">
        <div className="mx-auto max-w-[1400px] px-5 py-[80px] lg:py-[100px]">
          <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
            <p className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-tan uppercase">
              {t("badge")}
            </p>
          </div>
          <h1 className="mt-4 font-display text-[42px] leading-[46px] font-bold tracking-[-1px] text-cream uppercase lg:text-[64px] lg:leading-[70px]">
            {t("heading")}
          </h1>
          <p className="mt-3 max-w-[560px] font-nav text-[16px] leading-[26px] text-white/60">
            {t("subtitle")}
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
              className="group flex flex-col overflow-hidden rounded-[14px] border border-black/8 bg-white transition-shadow hover:shadow-lg lg:flex-row"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-cream lg:aspect-auto lg:h-[380px] lg:w-[560px] lg:shrink-0 flex items-center justify-center">
                <SafeImage
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="h-full w-full object-contain bg-[#f7f5f0] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-5 p-8 lg:p-12">
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-[12px] font-semibold tracking-[0.5px] uppercase ${
                      categoryColorBySlug[posts[0].slug] ?? "text-body-text bg-body-text/10"
                    }`}
                  >
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
                  {t("readMore")}
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
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.5px] uppercase ${
                        categoryColorBySlug[post.slug] ?? "text-body-text bg-body-text/10"
                      }`}
                    >
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
                    {t("readMore")}
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
            {t("questionTitle")}
          </h2>
          <p className="max-w-[440px] text-[16px] leading-[27px] text-body-text">
            {t("questionDesc")}
          </p>
          <Link
            href="/contact-us"
            className="inline-flex h-14 items-center justify-center rounded-[8px] bg-[#a8896a] px-8 font-nav text-[15px] font-semibold tracking-[-0.3px] text-cream transition-opacity hover:opacity-90"
          >
            {t("contactUs")}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

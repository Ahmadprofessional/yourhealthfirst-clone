import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BlogPage" });
  return {
    title: `${t("heading")} | YourHealthFirst Clinic — Harley Street`,
    description: t("subtitle"),
  };
}

export default async function BlogsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BlogPage" });

  const posts = [
    {
      slug: "prp-and-exosome-therapy",
      title: t("post1Title"),
      excerpt: t("post1Excerpt"),
      date: t("post1Date"),
      category: t("post1Cat"),
      image: "/images/treatments/hair-restoration.jpg",
      href: "https://yourhealthfirst.uk/blog/prp-and-exosome-therapy-advanced-rejuvenation-for-hair-face-and-body",
      external: true,
    },
    {
      slug: "prp-injections-for-hair-loss",
      title: t("post2Title"),
      excerpt: t("post2Excerpt"),
      date: t("post2Date"),
      category: t("post2Cat"),
      image: "/images/treatments/hair-restoration.jpg",
      href: "https://yourhealthfirst.uk/blog/prp-injections-for-hair-loss-treatment",
      external: true,
    },
    {
      slug: "cryolipolysis-fat-freezing",
      title: t("post3Title"),
      excerpt: t("post3Excerpt"),
      date: t("post3Date"),
      category: t("post3Cat"),
      image: "/images/treatments/body-contouring.jpg",
      href: "https://yourhealthfirst.uk/cryolipolysis",
      external: true,
    },
    {
      slug: "anti-wrinkles-injections",
      title: t("post4Title"),
      excerpt: t("post4Excerpt"),
      date: t("post4Date"),
      category: t("post4Cat"),
      image: "/images/treatments/anti-wrinkle.jpg",
      href: "https://yourhealthfirst.uk/anti-wrinkles-injections",
      external: true,
    },
    {
      slug: "prp-hair-loss",
      title: t("post5Title"),
      excerpt: t("post5Excerpt"),
      date: t("post5Date"),
      category: t("post5Cat"),
      image: "/images/treatments/hair-restoration.jpg",
      href: "https://yourhealthfirst.uk/prp-hair-loss",
      external: true,
    },
    {
      slug: "dermal-fillers-and-its-uses",
      title: t("post6Title"),
      excerpt: t("post6Excerpt"),
      date: t("post6Date"),
      category: t("post6Cat"),
      image: "/images/treatments/dermal-fillers.jpg",
      href: "https://yourhealthfirst.uk/dermal-fillers-and-its-uses",
      external: true,
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

      {/* Posts grid */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={post.href}
                target={post.external ? "_blank" : undefined}
                rel={post.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col overflow-hidden rounded-[14px] border border-black/8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-cream">
                  <SafeImage
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-forest/80 backdrop-blur-sm px-3 py-1 font-nav text-[11px] font-semibold tracking-[1px] text-cream uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="text-[12px] font-medium tracking-[0.5px] text-body-text/50 uppercase">
                    {post.date}
                  </p>
                  <h2 className="font-subheading text-[18px] font-bold leading-[24px] tracking-[-0.5px] text-forest transition-colors group-hover:text-tan uppercase">
                    {post.title}
                  </h2>
                  <p className="flex-1 text-[14px] leading-[23px] text-body-text line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 font-nav text-[13px] font-semibold tracking-[0.5px] text-tan uppercase transition-opacity group-hover:opacity-70">
                    {t("readMore")}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { routing } from "@/i18n/routing";
import { getAllBlogSlugs, getBlogPostBySlug, getAllBlogPosts, BlogPost } from "@/data/blogs";
import { sanityFetch } from "@/sanity/lib/fetch";
import { BLOG_BY_SLUG_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { getSanityAttribute } from "@/sanity/lib/dataAttribute";
import { urlFor } from "@/sanity/lib/image";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  const params: { locale: string; slug: string }[] = [];

  for (const locale of routing.locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | YourHealthFirst Clinic",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourhealthfirst.uk";
  const canonicalUrl = `${siteUrl}/${locale}/blog/${post.slug}`;

  // Multi-language alternates
  const languages: Record<string, string> = {
    "x-default": `${siteUrl}/en/blog/${post.slug}`,
  };
  for (const loc of routing.locales) {
    languages[loc] = `${siteUrl}/${loc}/blog/${post.slug}`;
  }

  return {
    title: `${post.title} | YourHealthFirst Clinic London`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: `${post.title} | YourHealthFirst Clinic London`,
      description: post.excerpt,
      url: canonicalUrl,
      siteName: "YourHealthFirst Clinic London",
      locale: locale === "en" ? "en_GB" : locale,
      type: "article",
      publishedTime: post.datePublished,
      authors: [post.author.name],
      images: [
        {
          url: post.image.startsWith("http") ? post.image : `${siteUrl}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | YourHealthFirst Clinic London`,
      description: post.excerpt,
      images: [post.image.startsWith("http") ? post.image : `${siteUrl}${post.image}`],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const [sanityPost, sanitySettings] = await Promise.all([
    sanityFetch<any>({
      query: BLOG_BY_SLUG_QUERY,
      params: { slug },
      tags: ["blogPost", `blogPost-${slug}`],
    }),
    sanityFetch<any>({
      query: SITE_SETTINGS_QUERY,
      tags: ["siteSettings"],
    }),
  ]);
  const docId = sanityPost?._id || `blogPost-${slug}`;

  const postTitle = sanityPost?.title || post.title;
  const postExcerpt = sanityPost?.excerpt || post.excerpt;
  const postCategory = sanityPost?.category || post.category;
  const postReadTime = sanityPost?.readTime || post.readTime;
  const postDate = sanityPost?.publishedAt || post.date;
  const postCoverImageUrl = (sanityPost?.coverImage ? urlFor(sanityPost.coverImage)?.url() : null) || post.image;
  const postKeyTakeaways = (sanityPost?.keyTakeaways && sanityPost.keyTakeaways.length > 0)
    ? sanityPost.keyTakeaways
    : post.keyTakeaways;
  const postAuthorName = sanityPost?.authorName || post.author.name;
  const postAuthorRole = sanityPost?.authorRole || post.author.role;
  const postSections = (sanityPost?.body && sanityPost.body.length > 0)
    ? sanityPost.body
    : post.sections;
  const postFaqs = (sanityPost?.faqs && sanityPost.faqs.length > 0)
    ? sanityPost.faqs
    : post.faqs;

  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourhealthfirst.uk";

  // JSON-LD Structured Data for Medical Blog Article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["BlogPosting", "MedicalWebPage"],
    headline: post.title,
    description: post.excerpt,
    image: post.image.startsWith("http") ? post.image : `${siteUrl}${post.image}`,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/${locale}/blog/${post.slug}`,
    },
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      description: post.author.bio,
      worksFor: {
        "@type": "MedicalClinic",
        name: "YourHealthFirst Clinic",
        address: {
          "@type": "PostalAddress",
          streetAddress: "2 Wimpole Street",
          addressLocality: "London",
          postalCode: "W1G 0EB",
          addressCountry: "GB",
        },
      },
    },
    publisher: {
      "@type": "MedicalOrganization",
      name: "YourHealthFirst Clinic London",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-cream text-charcoal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header sanitySettings={sanitySettings} />

      <main className="flex-1">
        {/* Article Hero */}
        <section className="relative w-full bg-[linear-gradient(135deg,#1f271e_0%,#2b3528_40%,#4a3e2e_100%)] pt-[120px] pb-[60px] lg:pt-[150px] lg:pb-[90px] text-white overflow-hidden">
          {/* Subtle gold grid glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,138,62,0.18),transparent_55%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,137,106,0.12),transparent_40%)] pointer-events-none" />

          <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-[12px] uppercase tracking-[1.5px] text-cream/70 font-nav mb-6"
            >
              <Link href={`/${locale}`} className="hover:text-tan transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href={`/${locale}/blogs`} className="hover:text-tan transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-tan truncate max-w-[280px] sm:max-w-md">{post.category}</span>
            </nav>

            {/* Category badge & metadata */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className="rounded-full bg-tan/20 border border-tan/30 px-3.5 py-1 text-[11px] font-semibold tracking-[1px] text-tan uppercase"
                data-sanity={getSanityAttribute(docId, "blogPost", "category")}
              >
                {postCategory}
              </span>
              <span className="text-[13px] text-cream/60">{postDate}</span>
              <span className="text-cream/30">•</span>
              <span className="text-[13px] text-cream/60">{postReadTime}</span>
            </div>

            {/* Main Headline */}
            <h1
              className="font-display text-[32px] sm:text-[44px] lg:text-[54px] font-bold leading-[1.15] tracking-[-1px] text-cream uppercase max-w-[1050px]"
              data-sanity={getSanityAttribute(docId, "blogPost", "title")}
            >
              {postTitle}
            </h1>

            {/* Subtitle / Excerpt */}
            <p
              className="mt-5 text-[17px] sm:text-[19px] leading-[28px] text-cream/80 max-w-[860px] font-light"
              data-sanity={getSanityAttribute(docId, "blogPost", "excerpt")}
            >
              {postExcerpt}
            </p>

            {/* Author bar */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative h-13 w-13 rounded-full overflow-hidden border-2 border-tan/60 shrink-0">
                  <SafeImage
                    src={post.author.image}
                    alt={postAuthorName}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p
                    className="font-semibold text-[15px] text-cream tracking-[0.2px]"
                    data-sanity={getSanityAttribute(docId, "blogPost", "authorName")}
                  >
                    {postAuthorName}
                  </p>
                  <p className="text-[12px] text-tan font-nav">{postAuthorRole}</p>
                  <p className="text-[11px] text-cream/50">2 Wimpole Street, London W1G 0EB</p>
                </div>
              </div>

              {/* Consultation quick button */}
              <Link
                href={`/${locale}/contact-us`}
                className="inline-flex items-center gap-2 rounded-[8px] bg-tan hover:bg-[#b87d35] text-forest font-semibold text-[13px] px-5 py-2.5 transition-all shadow-md hover:shadow-lg"
              >
                <span>Book Consultation</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Image Section */}
        <section className="relative -mt-6 sm:-mt-10 px-5 sm:px-6">
          <div className="mx-auto max-w-[1280px]">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] border border-black/10 shadow-2xl bg-[#1c241b] flex items-center justify-center">
              {/* Subtle ambient backdrop to ensure seamless visual warmth */}
              <div
                className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-105 pointer-events-none"
                style={{ backgroundImage: `url(${post.image})` }}
                aria-hidden="true"
              />
              <SafeImage
                src={postCoverImageUrl}
                alt={post.imageAlt}
                className="relative z-10 h-full w-full object-contain"
                data-sanity={getSanityAttribute(docId, "blogPost", "coverImage")}
              />
              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-[6px] text-[11px] text-white/80 font-nav tracking-wide z-20">
                YourHealthFirst Clinic London
              </div>
            </div>
          </div>
        </section>

        {/* Main Article Content & Sidebar */}
        <section className="py-12 sm:py-16 px-5 sm:px-6">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Content Column (8 cols) */}
              <article className="lg:col-span-8 flex flex-col gap-10">
                {/* Key Takeaways Box */}
                <div
                  className="rounded-[14px] bg-[#1a2119] border border-tan/30 p-6 sm:p-8 text-cream shadow-lg"
                  data-sanity={getSanityAttribute(docId, "blogPost", "keyTakeaways")}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-tan/20 text-tan text-[14px]">
                      ✦
                    </span>
                    <h2 className="font-subheading text-[18px] sm:text-[20px] font-semibold text-tan tracking-wide uppercase">
                      Clinical Highlights & Key Takeaways
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {postKeyTakeaways.map((takeaway: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-[15px] leading-[24px] text-cream/90">
                        <span className="text-tan mt-1 shrink-0 font-bold">✓</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Article Body Sections */}
                <div className="flex flex-col gap-10">
                  {postSections.map((sec: any, sIdx: number) => (
                    <section key={sIdx} className="space-y-4">
                      <h2
                        className="font-subheading text-[24px] sm:text-[28px] font-bold text-forest tracking-[-0.5px] uppercase"
                        data-sanity={getSanityAttribute(docId, "blogPost", `body[${sIdx}].heading`)}
                      >
                        {sec.heading}
                      </h2>

                      {sec.subheading && (
                        <h3 className="text-[17px] font-semibold text-tan tracking-wide">
                          {sec.subheading}
                        </h3>
                      )}

                      {sec.paragraphs?.map((para: string, pIdx: number) => (
                        <p
                          key={pIdx}
                          className="text-[16px] sm:text-[17px] leading-[29px] text-[#333333]"
                          data-sanity={getSanityAttribute(docId, "blogPost", `body[${sIdx}].paragraphs[${pIdx}]`)}
                        >
                          {para}
                        </p>
                      ))}

                      {sec.bullets && sec.bullets.length > 0 && (
                        <ul className="space-y-2.5 my-4 pl-2">
                          {sec.bullets.map((bullet: string, bIdx: number) => (
                            <li key={bIdx} className="flex items-start gap-3 text-[15.5px] leading-[26px] text-[#333333]">
                              <span className="h-2 w-2 rounded-full bg-tan mt-2.5 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {sec.callout && (
                        <div className="my-5 rounded-[10px] border-l-4 border-tan bg-tan/10 p-5 text-[15px] leading-[25px] text-forest font-medium">
                          {sec.callout}
                        </div>
                      )}
                    </section>
                  ))}
                </div>

                {/* Pull Quote Card */}
                {post.quote && (
                  <div className="relative my-4 rounded-[14px] bg-gradient-to-br from-[#f4eee6] to-[#e8decb] border border-tan/30 p-8 sm:p-10 shadow-sm">
                    <span className="text-6xl text-tan/40 font-serif absolute top-4 left-6 leading-none">“</span>
                    <blockquote className="relative z-10 text-[18px] sm:text-[20px] font-serif italic text-forest leading-[32px] pt-2">
                      {post.quote.text}
                    </blockquote>
                    <p className="mt-4 text-[13px] font-semibold text-tan tracking-[1px] uppercase">
                      — {post.quote.citation}
                    </p>
                  </div>
                )}

                {/* Clinical FAQs Accordion */}
                {postFaqs && postFaqs.length > 0 && (
                  <section className="space-y-6 pt-6 border-t border-black/10">
                    <div className="flex items-center gap-2">
                      <span className="text-tan font-bold text-[18px]">?</span>
                      <h2 className="font-subheading text-[24px] sm:text-[28px] font-bold text-forest tracking-[-0.5px] uppercase">
                        Frequently Asked Questions
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {postFaqs.map((faq: any, fIdx: number) => (
                        <div
                          key={fIdx}
                          className="rounded-[10px] border border-black/10 bg-white p-6 shadow-sm transition-all"
                        >
                          <h3
                            className="text-[17px] font-bold text-forest mb-2"
                            data-sanity={getSanityAttribute(docId, "blogPost", `faqs[${fIdx}].question`)}
                          >
                            {faq.question}
                          </h3>
                          <p
                            className="text-[15px] leading-[25px] text-[#4a4a4a]"
                            data-sanity={getSanityAttribute(docId, "blogPost", `faqs[${fIdx}].answer`)}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Doctor Bio Box */}
                <div className="rounded-[14px] border border-black/10 bg-white p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center shadow-sm">
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden border-2 border-tan shrink-0">
                    <SafeImage
                      src={post.author.image}
                      alt={post.author.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-center sm:text-left">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <h3 className="font-subheading text-[20px] font-bold text-forest uppercase">
                        {post.author.name}
                      </h3>
                      <span className="rounded-full bg-forest/10 px-2.5 py-0.5 text-[11px] font-semibold text-forest uppercase">
                        Medical Author
                      </span>
                    </div>
                    <p className="text-[13px] font-medium text-tan">
                      {post.author.role} • {post.author.credentials}
                    </p>
                    <p className="text-[14px] leading-[23px] text-[#555555]">
                      {post.author.bio}
                    </p>
                  </div>
                </div>

                {/* Related Treatment Spotlight Card */}
                {post.relatedTreatment && (
                  <div className="rounded-[14px] bg-[linear-gradient(135deg,#232b21_0%,#333d2f_100%)] p-8 text-cream flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                    <div className="space-y-2 text-center sm:text-left">
                      <span className="text-[11px] font-semibold text-tan uppercase tracking-[1.5px]">
                        Related Treatment At YourHealthFirst
                      </span>
                      <h3 className="font-display text-[22px] sm:text-[26px] font-bold text-cream uppercase">
                        {post.relatedTreatment.title}
                      </h3>
                      <p className="text-[14px] leading-[22px] text-cream/70 max-w-lg">
                        {post.relatedTreatment.description}
                      </p>
                    </div>
                    <Link
                      href={`/${locale}${post.relatedTreatment.href}`}
                      className="rounded-[8px] bg-tan hover:bg-[#b87d35] text-forest font-bold text-[14px] px-6 py-3.5 shrink-0 transition-all text-center"
                    >
                      View Treatment Protocol →
                    </Link>
                  </div>
                )}
              </article>

              {/* Sidebar Column (4 cols) */}
              <aside className="lg:col-span-4 flex flex-col gap-8">
                {/* Sticky Consultation Card */}
                <div className="rounded-[14px] border border-tan/30 bg-white p-6 sm:p-7 shadow-lg space-y-5 sticky top-28">
                  <div className="space-y-2 border-b border-black/8 pb-4">
                    <span className="text-[11px] font-bold text-tan uppercase tracking-[1.5px]">
                      Harley Street Practice
                    </span>
                    <h3 className="font-subheading text-[20px] font-bold text-forest uppercase">
                      Private Consultation with Dr. Sofia
                    </h3>
                    <p className="text-[13px] leading-[20px] text-[#555555]">
                      Experience bespoke clinical assessment and customized treatment planning tailored to your exact aesthetic goals.
                    </p>
                  </div>

                  <div className="space-y-3 text-[13px]">
                    <div className="flex items-center gap-3 text-forest">
                      <span className="text-tan font-bold">📍</span>
                      <span>2 Wimpole Street, London W1G 0EB</span>
                    </div>
                    <div className="flex items-center gap-3 text-forest">
                      <span className="text-tan font-bold">📞</span>
                      <a href="tel:02080500445" className="hover:text-tan font-semibold transition-colors">
                        020 8050 0445
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-forest">
                      <span className="text-tan font-bold">💬</span>
                      <a
                        href="https://wa.me/447738048600"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-tan font-semibold transition-colors"
                      >
                        WhatsApp Direct (+44 7738 048600)
                      </a>
                    </div>
                  </div>

                  <Link
                    href={`/${locale}/contact-us`}
                    className="block w-full text-center rounded-[8px] bg-tan hover:bg-[#b87d35] text-forest font-bold text-[14px] py-3.5 transition-all shadow-md hover:shadow-lg"
                  >
                    Schedule Consultation
                  </Link>
                </div>

                {/* Related Articles Widget */}
                <div className="rounded-[14px] border border-black/10 bg-white p-6 shadow-sm space-y-4">
                  <h3 className="font-subheading text-[17px] font-bold text-forest uppercase border-b border-black/8 pb-3">
                    More Clinical Articles
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/${locale}/blog/${rel.slug}`}
                        className="group block space-y-1"
                      >
                        <span className="text-[11px] text-tan uppercase tracking-wide font-semibold">
                          {rel.category}
                        </span>
                        <h4 className="text-[14px] font-bold text-forest group-hover:text-tan transition-colors leading-[20px]">
                          {rel.title}
                        </h4>
                        <p className="text-[12px] text-[#777777] line-clamp-2">
                          {rel.excerpt}
                        </p>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href={`/${locale}/blogs`}
                    className="block text-center text-[13px] font-semibold text-tan hover:underline pt-2"
                  >
                    View All Articles →
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Global Bottom Consultation CTA */}
        <section className="w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] px-5 py-16 sm:py-20 text-center text-white">
          <div className="mx-auto max-w-[800px] space-y-6">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[12px] font-semibold text-tan uppercase tracking-[2px]">
              Ready to Begin?
            </span>
            <h2 className="font-display text-[32px] sm:text-[44px] font-bold uppercase leading-tight text-cream">
              Book Your Private Aesthetic Consultation
            </h2>
            <p className="text-[16px] sm:text-[18px] text-cream/90 max-w-xl mx-auto leading-relaxed">
              Meet with Dr. Sofia Bouzian at 2 Wimpole Street, London to receive your bespoke treatment plan.
            </p>
            <div className="pt-2">
              <Link
                href={`/${locale}/contact-us`}
                className="inline-flex h-14 items-center justify-center rounded-[8px] bg-forest px-8 font-nav text-[15px] font-semibold tracking-[-0.3px] text-cream transition-all hover:bg-black shadow-xl"
              >
                Book Your Consultation Online
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer sanitySettings={sanitySettings} />
    </div>
  );
}

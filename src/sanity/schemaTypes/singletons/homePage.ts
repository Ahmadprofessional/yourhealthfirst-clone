import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    // Hero Section
    defineField({
      name: "heroBadge",
      title: "Hero Small Badge",
      type: "string",
      description: "Small gold badge at the very top (e.g. 'Harley Street London | Doctor-Led Clinic')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Main Heading",
      type: "string",
      description: "Primary headline at the top of the homepage",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subheading / Lead Paragraph",
      type: "text",
      rows: 3,
      description: "Introductory paragraph under the main headline",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroCtaText",
      title: "Hero CTA Button Text",
      type: "string",
      initialValue: "Book Consultation",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSince",
      title: "Hero Since Text",
      type: "string",
      initialValue: "EXCELLENCE IN AESTHETICS SINCE 2013",
    }),
    defineField({
      name: "heroTrustedBy",
      title: "Hero Trusted By Text",
      type: "string",
      initialValue: "TRUSTED BY 10,000+ PATIENTS WORLDWIDE",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image / Doctor Portrait",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text (for screen readers & SEO)",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),

    // About Us Preview
    defineField({
      name: "aboutBadge",
      title: "About Us Badge",
      type: "string",
      description: "e.g. 'Meet Dr. Sofia Yassine'",
    }),
    defineField({
      name: "aboutTitle",
      title: "About Us Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutLead",
      title: "About Us Lead Paragraph",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "aboutParagraphs",
      title: "About Us Body Paragraphs",
      type: "array",
      of: [{ type: "text", rows: 3 }],
      description: "Body paragraphs introducing the clinic philosophy and doctor expertise",
    }),
    defineField({
      name: "aboutRightHeading",
      title: "About Us Right Column Heading",
      type: "string",
      description: "Right column heading (e.g. 'EXPERT CARE IN HARLEY STREET')",
    }),
    defineField({
      name: "aboutRightParagraph",
      title: "About Us Right Column Lead Paragraph",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "aboutOtherServices",
      title: "About Us Other Services Paragraph",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "aboutDisclaimer",
      title: "About Us Disclaimer / Medical Notice",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "aboutCtaText",
      title: "About Us CTA Button Text",
      type: "string",
      initialValue: "Discover More",
    }),
    defineField({
      name: "aboutImage",
      title: "Doctor Sofia Portrait Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),

    // Promise Cards
    defineField({
      name: "promiseCards",
      title: "Promise Cards (3-4 pillars)",
      type: "array",
      of: [{ type: "featureItem" }],
      description: "Core commitments (e.g. 'Natural Results', 'Doctor-Led', 'Premium Products')",
    }),
    defineField({
      name: "promiseCardsBespokeP2",
      title: "Promise Cards Bespoke Sub-paragraph",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "promiseCardsAftercareP2",
      title: "Promise Cards Aftercare Sub-paragraph",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "promiseBgImage",
      title: "Promise Section Background Image",
      type: "image",
      options: { hotspot: true },
    }),

    // Services Section
    defineField({
      name: "servicesBadge",
      title: "Services Section Small Badge",
      type: "string",
      description: "e.g. 'Our Aesthetic & Medical Services'",
    }),
    defineField({
      name: "servicesSubtitle",
      title: "Services Section Subtitle / Heading",
      type: "text",
      rows: 2,
      description: "Subheading under services badge",
    }),
    defineField({
      name: "servicesGhpSmall",
      title: "GHP Badge Small Header",
      type: "string",
      initialValue: "GLOBAL HEALTH & PHARMA",
    }),
    defineField({
      name: "servicesGhpTitle",
      title: "GHP Award Title",
      type: "string",
      initialValue: "A Leader in Non-Surgical Aesthetics 2019",
    }),
    defineField({
      name: "servicesGhpYear",
      title: "GHP Award Year / Subtext",
      type: "string",
      initialValue: "Healthcare & Pharmaceutical Awards",
    }),
    defineField({
      name: "servicesList",
      title: "Services Cards Override List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "slug", title: "Treatment Slug", type: "string" },
            { name: "title", title: "Service Card Title", type: "string" },
            { name: "description", title: "Service Card Description", type: "text", rows: 3 },
          ],
        },
      ],
      description: "Optional overrides for individual service card headlines and descriptions",
    }),

    // Why Choose Us
    defineField({
      name: "whyChooseBadge",
      title: "Why Choose Us Badge",
      type: "string",
    }),
    defineField({
      name: "whyChooseTitle",
      title: "Why Choose Us Heading",
      type: "string",
    }),
    defineField({
      name: "whyChooseFeatures",
      title: "Why Choose Us Feature Pillars",
      type: "array",
      of: [{ type: "featureItem" }],
    }),

    // Testimonials
    defineField({
      name: "testimonialsBadge",
      title: "Testimonials Badge",
      type: "string",
    }),
    defineField({
      name: "testimonialsTitle",
      title: "Testimonials Section Heading",
      type: "string",
    }),
    defineField({
      name: "testimonialsList",
      title: "Patient Testimonials List",
      type: "array",
      of: [{ type: "testimonialItem" }],
    }),
    defineField({
      name: "testimonialsBgImage",
      title: "Testimonials Section Background Image",
      type: "image",
      options: { hotspot: true },
    }),

    // FAQs
    defineField({
      name: "faqBadge",
      title: "FAQ Badge",
      type: "string",
    }),
    defineField({
      name: "faqTitle",
      title: "FAQ Heading",
      type: "string",
    }),
    defineField({
      name: "faqs",
      title: "Frequently Asked Questions",
      type: "array",
      of: [{ type: "faqItem" }],
    }),
    defineField({
      name: "faqCardImage",
      title: "FAQ Contact Card Photo",
      type: "image",
      options: { hotspot: true },
    }),

    // Booking CTA Banner
    defineField({
      name: "bookingHeading",
      title: "Booking Banner Heading",
      type: "string",
      description: "Bottom callout banner headline",
    }),
    defineField({
      name: "bookingSubtitle",
      title: "Booking Banner Subtitle",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "bookingButtonText",
      title: "Booking Banner Button Text",
      type: "string",
      initialValue: "Book Consultation",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Home Page",
        subtitle: "Main website homepage content",
      };
    },
  },
});

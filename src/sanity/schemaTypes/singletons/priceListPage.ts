import { defineField, defineType } from "sanity";

export const priceListPage = defineType({
  name: "priceListPage",
  title: "Price List Page Header",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "badgeText",
      title: "Hero Badge Text",
      type: "string",
    }),
    defineField({
      name: "taglines",
      title: "Taglines (Right side of hero)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "policyBadge",
      title: "Policy Badge Text",
      type: "string",
    }),
    defineField({
      name: "policyHeading",
      title: "Policy Section Heading",
      type: "string",
    }),
    defineField({
      name: "policyIntro",
      title: "Policy Introduction Paragraph",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "pricingPolicyNotice",
      title: "Pricing Transparency & Consultation Policy",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "ctaBadge",
      title: "Bottom CTA Badge",
      type: "string",
    }),
    defineField({
      name: "ctaHeading",
      title: "Bottom CTA Heading",
      type: "string",
    }),
    defineField({
      name: "ctaSubtitle",
      title: "Bottom CTA Subtitle",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "bookCta",
      title: "Book Consultation Button Text",
      type: "string",
    }),
    defineField({
      name: "contactCta",
      title: "Contact Us Button Text",
      type: "string",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Price List Page Header",
        subtitle: "Pricing policy and header copy",
      };
    },
  },
});

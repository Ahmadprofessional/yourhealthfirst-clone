import { defineField, defineType } from "sanity";

export const treatment = defineType({
  name: "treatment",
  title: "Treatment Detail Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Treatment Title",
      type: "string",
      description: "e.g. 'Anti-Wrinkle Injections', 'Profhilo'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      description: "URL path for this treatment (locked to preserve website links and SEO)",
      readOnly: true, // Sophia cannot alter the slug and break existing links
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short highlight subtitle (e.g. 'Smooth, refresh and subtly lift — with expert precision')",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Face & Anti-Aging", value: "Face & Anti-Aging" },
          { title: "Body & Contouring", value: "Body & Contouring" },
          { title: "Skin Rejuvenation", value: "Skin Rejuvenation" },
          { title: "Longevity & Wellness", value: "Longevity & Wellness" },
        ],
      },
    }),
    defineField({
      name: "priceFrom",
      title: "Starting Price Indicator",
      type: "string",
      description: "e.g. 'From £350' or '£450'",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Treatment Photo",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text for SEO" }],
    }),
    defineField({
      name: "intro",
      title: "Treatment Introduction",
      type: "text",
      rows: 4,
      description: "Overview narrative explaining the treatment",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bodyParagraphs",
      title: "Detailed Body Paragraphs",
      type: "array",
      of: [{ type: "text", rows: 4 }],
      description: "In-depth treatment explanation and procedure details paragraphs",
    }),
    defineField({
      name: "benefits",
      title: "Key Clinical Benefits (Bullet Points)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "suitableFor",
      title: "Who Is It For / Ideal Candidates",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "procedureSteps",
      title: "Step-by-Step Procedure Stages",
      type: "array",
      of: [{ type: "procedureStep" }],
    }),
    defineField({
      name: "secondaryImage",
      title: "Secondary Treatment Photo",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text for SEO" }],
    }),
    defineField({
      name: "galleryImages",
      title: "Before & After Results Photos (Replace or add to gallery)",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", type: "string", title: "Alt text / Result caption" }],
        },
      ],
      description: "Upload custom before & after patient result photos for this treatment",
    }),
    defineField({
      name: "faqs",
      title: "Treatment-Specific FAQs",
      type: "array",
      of: [{ type: "faqItem" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "heroImage",
    },
  },
});

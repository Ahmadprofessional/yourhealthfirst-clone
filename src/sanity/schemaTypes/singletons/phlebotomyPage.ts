import { defineField, defineType } from "sanity";

export const phlebotomyPage = defineType({
  name: "phlebotomyPage",
  title: "Phlebotomy Page",
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
      name: "heroBadge",
      title: "Hero Badge",
      type: "string",
    }),
    defineField({
      name: "bloodDrawImage",
      title: "Blood Draw Appointment Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "introHeading",
      title: "Intro Main Heading",
      type: "string",
    }),
    defineField({
      name: "introParagraphs",
      title: "Intro Section Paragraphs",
      type: "array",
      of: [{ type: "text", rows: 3 }],
    }),
    defineField({
      name: "heroBannerImage",
      title: "Checklist Section Banner Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "priorTitle",
      title: "Prior to Test Heading",
      type: "string",
    }),
    defineField({
      name: "priorInstructions",
      title: "Prior to Test Instructions",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "onDayTitle",
      title: "On the Day Heading",
      type: "string",
    }),
    defineField({
      name: "onDaySteps",
      title: "On the Day Steps",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "whyTitle",
      title: "Why it Matters Heading",
      type: "string",
    }),
    defineField({
      name: "whySubtitle",
      title: "Why it Matters Subtitle",
      type: "string",
    }),
    defineField({
      name: "centrifugeImage",
      title: "Centrifuge Machine Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "spinningBadge",
      title: "Centrifuge Section Badge",
      type: "string",
    }),
    defineField({
      name: "spinningTitle",
      title: "Centrifuge Section Title",
      type: "string",
    }),
    defineField({
      name: "spinningP1",
      title: "Centrifuge Section Paragraph 1",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "spinningP2",
      title: "Centrifuge Section Paragraph 2",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "spinningCta",
      title: "Centrifuge Learn More CTA Text",
      type: "string",
    }),
    defineField({
      name: "faqs",
      title: "Phlebotomy FAQs",
      type: "array",
      of: [{ type: "faqItem" }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Phlebotomy Page",
        subtitle: "Dedicated blood testing clinic page",
      };
    },
  },
});

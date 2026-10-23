import { defineField, defineType } from "sanity";

export const homeSkincarePage = defineType({
  name: "homeSkincarePage",
  title: "Home Skincare Page",
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
      title: "Coming Soon Badge Text",
      type: "string",
    }),
    defineField({
      name: "tagline",
      title: "Tagline Text",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "bgImage",
      title: "Background Image (Optional)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "notifyTitle",
      title: "Notification Prompt Text",
      type: "string",
    }),
    defineField({
      name: "registerCta",
      title: "Register Interest Button Text",
      type: "string",
    }),
    defineField({
      name: "introText",
      title: "Introduction Text",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "routineGuide",
      title: "Morning & Evening Routine Steps",
      type: "array",
      of: [{ type: "featureItem" }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Home Skincare Page",
        subtitle: "Medical-grade skincare routines copy",
      };
    },
  },
});

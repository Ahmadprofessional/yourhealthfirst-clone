import { defineField, defineType } from "sanity";

export const pressPage = defineType({
  name: "pressPage",
  title: "Press & Media Page",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      initialValue: "Press & Media Features",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "pressInquiriesText",
      title: "Press & Media Inquiries Guidance Text",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "badgeText",
      title: "Hero Badge Text",
      type: "string",
    }),
    defineField({
      name: "videoCoverageTitle",
      title: "Video Coverage Section Title",
      type: "string",
    }),
    defineField({
      name: "youtubeEmbedUrl",
      title: "YouTube Video Embed URL",
      type: "url",
    }),
    defineField({
      name: "pressGalleryTitle",
      title: "Press Gallery Section Title",
      type: "string",
    }),
    defineField({
      name: "pressImages",
      title: "Press Coverage Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "image", title: "Press Clipping Image", type: "image", options: { hotspot: true } },
            { name: "alt", title: "Image Alt Text / Caption", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "features",
      title: "Media Features & Clippings",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "publication", type: "string", title: "Publication Name (e.g. Vogue, Tatler)" },
            { name: "headline", type: "string", title: "Article Headline" },
            { name: "quote", type: "text", rows: 3, title: "Quote Excerpt" },
            { name: "date", type: "string", title: "Date / Issue" },
            { name: "link", type: "url", title: "External Article Link" },
            {
              name: "image",
              type: "image",
              title: "Article Clipping / Logo Image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Press & Media Page",
        subtitle: "Media clippings, features, and quotes",
      };
    },
  },
});

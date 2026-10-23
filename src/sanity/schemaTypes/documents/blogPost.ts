import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Clinical Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Article Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Article Summary / Excerpt",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "date",
      initialValue: () => new Date().toISOString().split("T")[0],
    }),
    defineField({
      name: "readTime",
      title: "Estimated Read Time",
      type: "string",
      initialValue: "5 min read",
    }),
    defineField({
      name: "category",
      title: "Article Category",
      type: "string",
    }),
    defineField({
      name: "coverImage",
      title: "Featured Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
    defineField({
      name: "authorName",
      title: "Author Name",
      type: "string",
      initialValue: "Dr. Sofia Bouzian",
    }),
    defineField({
      name: "authorRole",
      title: "Author Title / Role",
      type: "string",
      initialValue: "Lead Aesthetic Practitioner",
    }),
    defineField({
      name: "keyTakeaways",
      title: "Key Takeaways (Top summary bullet points)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "body",
      title: "Article Body Content (Paragraphs & Headings)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "heading", type: "string", title: "Section Heading (H2)" },
            { name: "paragraphs", type: "array", of: [{ type: "text", rows: 4 }], title: "Paragraphs" },
            { name: "bullets", type: "array", of: [{ type: "string" }], title: "Bullet points (optional)" },
          ],
        },
      ],
    }),
    defineField({
      name: "faqs",
      title: "Article FAQs",
      type: "array",
      of: [{ type: "faqItem" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "coverImage",
    },
  },
});

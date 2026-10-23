import { defineField, defineType } from "sanity";

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ Item",
  type: "object",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      description: "The patient question (e.g. 'How long do results last?')",
      validation: (Rule) => Rule.required().error("Question is required"),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
      rows: 4,
      description: "Clear, clinical answer in plain English",
      validation: (Rule) => Rule.required().error("Answer is required"),
    }),
  ],
  preview: {
    select: {
      title: "question",
      subtitle: "answer",
    },
  },
});

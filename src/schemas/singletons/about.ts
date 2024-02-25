import { DocumentIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "overview",
      type: "text",
      description: "Used for the <meta> description tag for SEO",
      validation: (Rule) => [Rule.required(), Rule.max(155)],
    }),
  ],
});

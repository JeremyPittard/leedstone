// @ts-ignore
import { defineCollection, z } from "astro:content";
import { PageBlock } from "../types/content";

const posts = defineCollection({
  // Type-check frontmatter using a schema
  type: "content",
  schema: z.object({
    title: z.string(),
    content: z.any(),
  }),
});
const pages = defineCollection({
  // Type-check frontmatter using a schema
  type: "data",
  schema: z.object({
    title: z.string(),
    content: z.array(PageBlock),
  }),
});

export const collections = { posts: posts, pages: pages };

import { defineCollection, z } from "astro:content";
import { PageBlock } from "../types/content";

const posts = defineCollection({
  // Type-check frontmatter using a schema
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.any(),
    description: z.string().optional(),
    content: z.any(),
    publishDate: z.date(),
  }),
});
const pages = defineCollection({
  // Type-check frontmatter using a schema
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    ogImage: z.string().optional(),
    content: z.array(PageBlock),
    richData: z.string().optional(),
    seoTracking: z.string().optional(),
  }),
});

export const collections = { posts: posts, pages: pages };

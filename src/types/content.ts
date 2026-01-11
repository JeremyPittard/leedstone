// this is for astro content config/zod

import { z } from "astro:content";

const InternalLink = z.object({
  link: z.string(),
  linkText: z.string(),
});

const ExternalLink = z.object({
  link: z.string(),
  linkText: z.string(),
});

const Link = z.union([InternalLink, ExternalLink]);

const ImageGrid = z.object({
  image: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  link: z.array(Link).optional(),
});

const Hero = z.object({
  title: z.string(),
  description: z.string().optional(),
  image: z.string(),
  cta: z.array(Link).optional(),
});

const PageHeader = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
});

const TextWithImage = z.object({
  title: z.string().optional(),
  description: z.string(),
  cta: z.array(Link).optional(),
  imageSide: z.enum(["left", "right"]),
});

const CTA = z.object({
  title: z.string(),
  description: z.string(),
  cta: z.array(Link).optional(),
});

const Breakout = z.object({
  title: z.string(),
  description: z.string(),
  cta: z.array(Link),
});

const BlockQuote = z.object({
  blockquote: z.string(),
});

// Placeholder schemas for TODO items
const FAQBlock = z.any();
const ReviewsBlock = z.any();
const RecentPosts = z.object({
  title: z.string(),
  postCount: z.number(),
  showViewAll: z.boolean(),
  viewAllText: z.string(),
});
const RichText = z.any();

export const PageBlock = z.object({
  discriminant: z.string(),
  value: z.union([
    BlockQuote,
    RichText,
    Hero,
    PageHeader,
    TextWithImage,
    z.array(ImageGrid),
    FAQBlock,
    ReviewsBlock,
    RecentPosts,
    CTA,
    Breakout,
  ]),
});

type InternalLink = {
  link: string;
  linkText: string;
};
type ExternalLink = {
  link: string;
  linkText: string;
};

export type CTALink = {
  discriminant: string;
  value: InternalLink | ExternalLink;
};

export type Feature = {
  title: string;
  image?: string;
  description: string;
};

export type TimelineItem = {
  title: string;
  image?: string;
  description: string;
};

type ImageGrid = {
  image?: string;
  title?: string;
  description?: string;
  link?: (InternalLink | ExternalLink)[];
};

export type HeroProps = {
  title: string;
  description?: string;
  image: string;
  cta?: (InternalLink | ExternalLink)[];
};

export type pageHeader = {
  title: string;
  description: string;
  image: string;
};

export type TextWithImageProps = {
  title?: string;
  description: string;
  cta?: (InternalLink | ExternalLink)[];
  imageSide: "left" | "right";
};

export type Review = {
  id: string;
  collection: string;
  data: {
    pullQuote: string;
    review: string;
    rating: number;
    platform: string;
    image?: string;
    name: string;
    location: string;
  };
};

export type ImageGridProps = ImageGrid[];
export type FAQBlockProps = any; //TODO ammend this when I know what the object is
export type ReviewsBlockProps = any; //TODO ammend this when I know what the object is
export type BlogListBlockProps = any; //TODO ammend this when I know what the object is

export type CTAProps = {
  title: string;
  description: string;
  cta?: (InternalLink | ExternalLink)[];
};

export type BreakoutProps = {
  title: string;
  description: string;
  cta: (InternalLink | ExternalLink)[];
};

export type BlockQuoteProps = {
  blockquote: string;
};

export type RichTextPros = any; //TODO ammend this when I know what the object is

export type PageBlockValues =
  | BlockQuoteProps
  | RichTextPros
  | HeroProps
  | pageHeader
  | TextWithImageProps
  | ImageGridProps
  | FAQBlockProps
  | ReviewsBlockProps
  | BlogListBlockProps
  | CTAProps
  | BreakoutProps;

export type PageBlock = {
  discriminant: string;
  value: PageBlockValues;
};

# The Blank Theme

The Blank Theme is a starter template for building modern websites using Astro, Tailwind CSS 4.0, and Keystatic CMS. It provides a flexible and scalable foundation for developers to create dynamic and visually appealing web applications.

## Features

- **Astro Framework**: Leverage the power of Astro for building fast and optimized websites.
- **Tailwind CSS 4.0**: Quickly scaffold styles and design tokens with the latest version of Tailwind CSS.
- **Keystatic CMS**: A highly customizable, Git-based CMS with pre-configured page builder functionality.
- **Hybrid ITCSS Approach**: Combines ITCSS principles with Tailwind CSS for organized and maintainable styling.
- **Pre-configured Blocks**: Includes a variety of reusable blocks for building pages dynamically.

## Project Structure

The project follows a well-organized structure:

```
astro.config.mjs
src/
  components/
    blocks/
      BlockQuote.astro
      BlogList.astro
      ...
    navigation/
      Footer.astro
      Header.astro
  content/
    pages/
      home.yaml
      about-us.yaml
    posts/
      first-post.mdoc
      new-post.mdoc
  layouts/
    Layout.astro
  pages/
    index.astro
    posts/
      [slug].astro
  styles/
    1-settings/
      colors.css
      theme.css
    ...
public/
  images/
  fonts/
```

## Styling

The Blank Theme uses Tailwind CSS 4.0 and adopts a hybrid ITCSS approach. Key layers include:

- **Settings**: Design tokens and global variables.
- **Generic**: Base styles and resets.
- **Utilities**: Tailwind utility classes for rapid styling.

## CMS Integration

This template integrates Keystatic CMS for content management. It supports local development and production configurations with GitHub or cloud-based authentication. For large projects, consider upgrading to the pro tier for additional features.

### Adding New Blocks

To add new blocks to the page builder:

1. Create a new component in `src/components/blocks/`.
2. Add the block to `field.blocks` in `src/keystatic-collections/pages.ts`.
3. Update the `componentMap` in `src/components/TheComponent.astro` to include the new block.

## Getting Started

### Installation

Install dependencies using pnpm:

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

- Admin UI: [http://127.0.0.1:4321/keystatic](http://127.0.0.1:4321/keystatic)
- Homepage: [http://localhost:4321](http://localhost:4321)

### Build

Build the project for production:

```bash
pnpm build
```

## Frameworks and Tools

- [Astro](https://astro.build): Modern static site generator.
- [Tailwind CSS 4.0](https://tailwindcss.com/blog/tailwindcss-v4-alpha): Utility-first CSS framework.
- [Keystatic CMS](https://keystatic.com/docs/introduction): Git-based CMS for content management.

## License

This project is licensed under the MIT License.

# AGENTS.md

## Project Overview

This is a landscaping website built with Astro, Tailwind CSS 4.0, and Keystatic CMS. It's a content-managed site showcasing landscaping services with a block-based page builder system.

## Tech Stack

- **Framework**: Astro 5.16.8 (static site generator)
- **Styling**: Tailwind CSS 4.0 with hybrid ITCSS approach
- **CMS**: Keystatic (Git-based content management)
- **Package Manager**: pnpm 9.15.4
- **Components**: Astro components with React integration

## Development Commands

```bash
# Development
pnpm dev              # Start dev server (http://localhost:4321)
pnpm start            # Alias for pnpm dev

# Build & Deploy
pnpm build           # Build for production
pnpm preview         # Preview production build

# CMS Access
# Admin UI: http://127.0.0.1:4321/keystatic
```

## Dependency Management

**IMPORTANT**: Always confirm before adding any new libraries, packages, or dependencies to this project.

- Explain why the dependency is needed
- Suggest alternatives if available
- Check for conflicts with existing packages
- Consider bundle size impact
- Verify compatibility with current stack (Astro 5.16.8, Tailwind 4.0, etc.)

Current package manager: pnpm 9.15.4

## Architecture & Key Files

### Core Structure

- `src/components/blocks/` - Reusable page builder components
- `src/keystatic-collections/` - CMS schema definitions
- `src/content/pages/` - Page content (YAML)
- `src/styles/` - ITCSS-organized styles (7-layer architecture)

### Critical Files

- `src/keystatic-collections/pages.ts` - Main page schema with 13 block types
- `src/components/TheComponent.astro` - Component mapper for blocks
- `src/content/config.ts` - Keystatic configuration
- `astro.config.mjs` - Astro configuration

## Adding New Blocks

1. Create component in `src/components/blocks/[BlockName].astro`
2. Add to `field.blocks` in `src/keystatic-collections/pages.ts`
3. Update `componentMap` in `src/components/TheComponent.astro`
4. Follow existing naming conventions (PascalCase)

## Styling Guidelines

- **ITCSS Layers**: 1-settings → 2-tools → 3-generic → 4-elements → 5-objects → 6-components → 7-utilities
- **Tailwind**: Use utility classes for rapid styling
- **Custom CSS**: Organize in appropriate ITCSS layer
- **Colors**: Defined in `src/styles/1-settings/colors.css`

## Content Management

### Keystatic Collections

- `pages` - Main site pages with block-based content
- `posts` - Blog posts (.mdoc format)
- `faqs` - FAQ items
- `reviews` - Customer testimonials
- `site-settings` - Global configuration

### Block Types Available

- Hero, PageHeader, TextWithImage, FeaturesBlock, Timeline, IconGrid, ContactBlock, FAQ Block, Reviews, CTA, FullWidthImage

## Code Style

- **Components**: Use .astro extension for Astro components
- **TypeScript**: Strict typing throughout
- **Imports**: Organize imports by type (framework, components, utilities)
- **Naming**: PascalCase for components, camelCase for functions/variables

## Testing & Quality

- **Linting**: Not explicitly configured (consider adding)
- **Type Checking**: TypeScript strict mode enabled
- **Build Verification**: Always run `pnpm build` before commits

## Security Notes

- No secrets or API keys should be committed
- Keystatic uses Git-based content (no database)
- Image uploads go to `src/assets/images/` directories

## Deployment Considerations

- Static site generation (serverless compatible)
- Image optimization handled by Astro
- Keystatic admin UI disabled in production

## Common Tasks

### Adding a new page:

1. Create YAML file in `src/content/pages/`
2. Use Keystatic admin UI to add blocks
3. Preview at `http://localhost:4321/[page-slug]`

### Adding blog content:

1. Create .mdoc file in `src/content/posts/`
2. Follow existing frontmatter pattern
3. Access at `/posts/[slug]`

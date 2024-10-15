# The Blank Theme

this is a blank canvas for Astro with Tailwind 4 and Keystatic.

## Features

- uses Tailwind 4.0 for quick scaffolding of styles and design tokens
- Keystatic with pagebuilder pre configured
- Astro because Astro rocks

## About the styling

Using Tailwind 4 this theme takes a hybrid ITCSS approach where certain layers are handled by Tailwind.
Specifically.

- settings
- generic
- trumps/utilities

## Frameworks

- [tailwind 4.0](https://tailwindcss.com/blog/tailwindcss-v4-alpha)
- [Astro](https://astro.build)

## CMS

This template uses Keystatic, a highly customisable git based CMS. It starts off configured to run locally for a quick dev experience but in prod you should use either 'github' or 'cloud' for authentication. Consider paying for the pro tier of cloud if your project is large enough, it comes with features that this template does not use.

- [keystatic docs](https://keystatic.com/docs/introduction)

### The Component

this template allows users to build pages inside the cms using keystatic 'blocks'. Each page is then passed through <TheComponent /> which renders the appropriate astro component. If you wish to add more blocks you will need to

1. Add new component to src/components/blocks.
2. Add new component to field.blocks src/keystatic-collections/pages. [check out the keystatic doc on blocks here](https://keystatic.com/docs/fields/blocks).
3. Add the new component key and component to the componentMap object in src/components/TheComponent.astro

## Spin up

This template comes with the homepage prepopulated with basic dummy data and with a structure that has been a proven winner (if marketing youtubers are anything to go by...) for service based businesses. As well as a page populated with all blocks rendering.

To setup:

```bash
pnpm install
```

To run:

```
pnpm dev
```

Admin UI: [http://127.0.0.1:4321/keystatic](http://127.0.0.1:4321/keystatic)

Homepage: [http://localhost:4321](http://localhost:4321)

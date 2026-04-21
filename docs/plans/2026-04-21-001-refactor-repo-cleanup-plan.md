---
title: "refactor: Clean up codebase quality and architecture"
type: refactor
status: completed
date: 2026-04-21
deepened: 2026-04-21
---

# Cleanup & Code Quality Plan

## Overview

Comprehensive cleanup of an Astro/Tailwind/Keystatic landscaping website. Fix orphaned components, type issues, code quality, and Prettier configuration.

## Problem Frame

The codebase has several issues discovered during research:
- Orphaned `blockquote` block component mapped but not in schema
- Missing Astro parser in Prettier config
- TypeScript `any` type TODOs in block types
- Minor unused imports and inconsistent patterns across block components

## Requirements Trace

- R1. Implement functional blockquote component with schema
- R2. Add Prettier Astro parser for proper formatting
- R3. Replace `any` types with proper interfaces
- R4. Clean up unused imports and minor inconsistencies

## Scope Boundaries

- Non-goal: Major architectural refactors
- Non-goal: Adding block types beyond blockquote
- Non-goal: Changing content structure

## Context & Research

### Relevant Code and Patterns

- `src/keystatic-collections/pages.ts` - Block schema (13 blocks defined)
- `src/components/TheComponent.astro` - Component mapper (13 blocks mapped)
- `src/types/blocks.ts` - Type definitions with `any` TODOs
- `.prettierrc` - Current Prettier config

### Key Mismatch

| Location | Component | Status |
|----------|----------|--------|
| TheComponent.astro:37 | `blockquote: BlockQuote` | MAPPED |
| pages.ts | blockquote | NOT IN SCHEMA |
| BlockQuote.astro | Exists | HARDCODED PLACEHOLDER |

**Target State (after cleanup):**
| Location | Component | Status |
|----------|----------|--------|
| TheComponent.astro | blockquote | MAPPED |
| pages.ts | blockquote | IN SCHEMA |
| BlockQuote.astro | Functional | IMPLEMENTED |

## Key Technical Decisions

- **Decision**: Make blockquote functional rather than remove
  - **Rationale**: User requested keeping blockquote as a working feature. Will add proper schema and implement functional component.

- **Decision**: Keep 13 block types after cleanup (12 schema + blockquote)
  - **Rationale**: Blockquote added as functional block, matching mapper.

## Open Questions

### Resolved During Planning

- **Question**: Should blockquote be added to schema or removed?
  - **Resolution**: Remove from componentMap. The component is not functional.

- **Question**: Should Prettier run on the codebase?
  - **Resolution**: Yes, add Astro parser to enable proper formatting.

## Implementation Units

- [ ] **Unit 1: Fix Prettier configuration**

**Goal:** Enable proper Astro file formatting

**Dependencies:** None

**Files:**
- Modify: `.prettierrc`

**Approach:**
- Add `prettier-plugin-astro` to enable formatting of `.astro` files

**Test scenarios:**
- Run `pnpm prettier --write src/` and verify `.astro` files are formatted

**Verification:**
- Prettier runs without errors on `.astro` files

---

- [ ] **Unit 2: Implement functional blockquote component**

**Goal:** Make blockquote a working block with proper schema

**Dependencies:** None

**Files:**
- Modify: `src/keystatic-collections/pages.ts`
- Modify: `src/components/TheComponent.astro`
- Modify: `src/components/blocks/BlockQuote.astro`

**Approach:**
- Add `blockquote` block schema to pages.ts (with: quote text, author, citation optional fields)
- Keep blockquote in componentMap (already there)
- Implement BlockQuote.astro with proper props and styling (follow existing block patterns)

**Patterns to follow:**
- Other block components in src/components/blocks/ (e.g., CTA.astro, TextWithImage.astro for structure)
- Schema patterns from pages.ts for consistent block definition

**Test scenarios:**
- Happy path: BlockQuote renders quote text and author
- Edge case: Empty quote handling
- Error path: Missing quote text should show placeholder or be validated

**Verification:**
- Block appears in Keystatic admin
- Block renders on page when added to content
- Build succeeds with 13 blocks

---

- [ ] **Unit 3: Fix TypeScript any types**

**Goal:** Replace `any` type TODOs with proper interfaces

**Dependencies:** None

**Files:**
- Modify: `src/types/blocks.ts`

**Approach:**
- Review existing block components to understand their prop shapes
- Replace `any` with proper TypeScript interfaces
- Interfaces to fix:
  - `FAQBlockProps`
  - `ReviewsBlockProps`
  - `RichTextPros` (note typo: should be `RichTextProps`)

**Patterns to follow:**
- Other type definitions in same file, or look at component props

**Test scenarios:**
- TypeScript compiles without the three `any` type issues

**Verification:**
- TypeScript strict mode passes

---

- [ ] **Unit 4: Clean up unused imports**

**Goal:** Remove dead code and improve code quality

**Dependencies:** Unit 2 must be complete

**Files:**
- Modify: `src/components/blocks/ContactBlock.astro`
- Modify: `src/components/blocks/PageHeader.astro`

**Approach:**
- ContactBlock.astro: Remove unused `ContactBlockItem` import
- PageHeader.astro: Remove unused `image` destructure or use it

**Verification:**
- No lint warnings for unused vars/imports

---

- [ ] **Unit 5: Verify consistency in FullWidthImage**

**Goal:** Verify prop access pattern is consistent

**Dependencies:** Review of FullWidthImage.astro behavior

**Files:**
- Modify: `src/components/blocks/FullWidthImage.astro` (if inconsistent)

**Approach:**
- Check how props are accessed vs other blocks
- Make consistent if needed

**Verification:**
- Block renders correctly in build

---

- [ ] **Unit 6: Run full verification**

**Goal:** Confirm all changes work together

**Dependencies:** All previous units

**Verification:**
- `pnpm build` succeeds
- `pnpm prettier --write` runs cleanly
- No TypeScript errors
- ComponentMap has 13 entries (12 schema + blockquote)

## System-Wide Impact

- **Interaction graph:** Block component changes affect page rendering
- **Unchanged invariants:** All 12 functional block types continue to work

## Risks & Dependencies

| Risk | Mitigation |
|------|------------|
| Breaking block rendering | All units verified with build |
| TypeScript errors after typedef changes | Run typecheck after each unit |

## Documentation / Operational Notes

- None - cleanup only

## Sources & References

- Build output: Verified clean build passes (2749.05 kB client bundle)
- Prettier config: `.prettierrc` - missing `prettier-plugin-astro`
- Target: 13 block types (12 schema + functional blockquote)
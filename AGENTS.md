<!-- bmad:context -->
<!-- Verified 2026-10-03 against 4f603d6. Managed by bmad-project-context; edits inside this block are replaced on refresh. Keep anything you want preserved outside the markers. -->

## hamzan-wahyudi

Personal portfolio website for Hamzan Wahyudi. Built with Astro 4 (SSG), TypeScript, Tailwind CSS, SolidJS, and MDX content collections. Deployed to Vercel (`https://zannns.vercel.app`).

## Where things are

- Global metadata, nav links, & skills list: `src/consts.ts`
- Content collection schemas (Zod Source of Truth): `src/content/config.ts`
- Content entries (MDX/Markdown): `src/content/{work,blog,projects,legal,education,awards}/`
- Reusable UI components: `src/components/`
- Page routes: `src/pages/`
- Global styles: `src/styles/`

## Running and verifying

- Package manager: use `pnpm` exclusively.
- Dev server: `pnpm dev`
- Typecheck & Build: `pnpm build` (runs `astro check` before build).
- Linting: `pnpm lint` or `pnpm lint:fix`

## Conventions that differ from defaults

- Use `YYYY-MM-DD` string format for dates in content collection frontmatter.
- Check `src/content/config.ts` for schema validation before creating or editing MDX content.
- Update `stack` in `src/consts.ts` when adding or modifying tech stack skills.
- Use `astro-icon` with icon sets from `@iconify-json/mdi` or `@iconify-json/simple-icons`.

<!-- /bmad:context -->

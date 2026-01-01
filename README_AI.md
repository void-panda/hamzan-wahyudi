# AI Agent Documentation for Hamzan Wahyudi Portfolio

## Project Overview
This project is a personal portfolio website for Hamzan Wahyudi, built with Astro 4. It uses a static site generation (SSG) approach with MDX for content management. The design system is built with Tailwind CSS.

## Tech Stack
- **Framework**: Astro v4
- **Language**: TypeScript
- **Styling**: Tailwind CSS (with `@tailwindcss/typography` and `@tailwindcss/forms`)
- **Interactivity**: SolidJS (via `@astrojs/solid-js`)
- **Content**: MDX (`@astrojs/mdx`)
- **Icons**: Astro Icon (`astro-icon`)
- **Image Optimization**: Sharp
- **Search**: Fuse.js

## Project Structure
```
root/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable UI components
│   ├── content/     # MDX content collections (Source of Truth)
│   ├── layouts/     # Page layouts
│   ├── pages/       # File-based routing
│   ├── styles/      # Global styles
│   ├── consts.ts    # Global constants & metadata
│   └── env.d.ts     # Environment types
├── astro.config.mjs # Astro configuration
├── tailwind.config.mjs
└── package.json
```

## Content Management
Content is managed via Astro Content Collections in `src/content/`.
All content files are MDX or Markdown.

### 1. Work (`src/content/work`)
**Schema:**
```typescript
{
  company: string,
  role: string,
  dateStart: Date,
  dateEnd: Date | string, // Can be a date or string (e.g., "Present")
}
```

### 2. Blog (`src/content/blog`)
**Schema:**
```typescript
{
  title: string,
  summary: string,
  date: Date,
  tags: string[],
  draft: boolean (optional)
}
```

### 3. Projects (`src/content/projects`)
**Schema:**
```typescript
{
  title: string,
  summary: string,
  date: Date,
  tags: string[],
  draft: boolean (optional),
  demoUrl: string (optional),
  repoUrl: string (optional)
}
```

### 4. Legal (`src/content/legal`)
**Schema:**
```typescript
{
  title: string,
  date: Date
}
```

## Key Configuration Files
- `src/consts.ts`: Contains site title, description, social links, and skills data (languages, frameworks, tools).
- `src/content/config.ts`: Defines the Zod schemas for content collections.

## Development Commands
- `npm run dev` / `pnpm dev`: Start development server
- `npm run build` / `pnpm build`: Build for production
- `npm run preview` / `pnpm preview`: Preview production build
- `npm run lint`: Lint code

## AI Agent Guidelines
1. **Adding Content**: When asked to add a blog post or project, create a new `.md` or `.mdx` file in the respective `src/content/` subdirectory. Ensure frontmatter matches the schema above.
2. **Modifying UI**: Check `src/components` for existing components before creating new ones. Use Tailwind CSS for styling.
3. **Updating Skills**: Update `stack` object in `src/consts.ts`.
4. **Dates**: Use YYYY-MM-DD format for dates in frontmatter.

import { defineCollection, z } from "astro:content"

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
})

const blog = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    image: image().optional(),
  }),
})

const projects = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    image: image().optional(),
  }),
})

const legal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
})

const education = defineCollection({
  type: "content",
  schema: z.object({
    institution: z.string(),
    major: z.string(),
    period: z.string(),
    order: z.number().optional(),
  }),
})

const awards = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.string(),
    image: image(),
    order: z.number().optional(),
  }),
})

export const collections = { work, blog, projects, legal, education, awards }

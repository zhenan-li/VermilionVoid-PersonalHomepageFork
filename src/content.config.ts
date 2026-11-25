import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    published: z.date(),
    updated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    description: z.string().optional().default(""),
    image: z.string().optional().default(""),
    tags: z.array(z.string()).optional().default([]),
    category: z.string().optional().nullable().default(""),
    lang: z.string().optional(),
    translationKey: z.string().regex(/^[\p{L}\p{N}_-]+(?:\/[\p{L}\p{N}_-]+)*$/u).optional(),
    pinned: z.boolean().optional().default(false),

    encrypted: z.boolean().optional().default(false),
    password: z.string().optional().default(""),
    disclaimer: z.union([z.string(), z.array(z.string())]).optional(),

    prevTitle: z.string().default(""),
    prevSlug: z.string().default(""),
    nextTitle: z.string().default(""),
    nextSlug: z.string().default(""),
  }),
})

export const collections = { posts }

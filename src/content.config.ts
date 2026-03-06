import { defineCollection, z } from 'astro:content';

const artworkSchema = z.object({
  title: z.string(),
  year: z.number(),
  medium: z.string().optional(),
  dimensions: z.string().optional(),
  image: z.string(),
  order: z.number().default(0),
  featured: z.boolean().default(false),
});

const paintings = defineCollection({
  type: 'data',
  schema: artworkSchema,
});

const vessels = defineCollection({
  type: 'data',
  schema: artworkSchema,
});

export const collections = { paintings, vessels };

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const weekly = defineCollection({
	// Load Markdown and MDX files in the `src/content/weekly/` directory.
	loader: glob({ base: './src/content/weekly', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		// Transform string to Date object
		date: z.coerce.date(),
	}),
});

export const collections = { weekly };

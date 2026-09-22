import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    brand: z.string().optional(),      // nombre del producto, identificación secundaria
    subtitle: z.string().optional(),
    description: z.string(),
    status: z.enum(["ongoing", "finished", "archived"]),
    kind: z.enum(["client", "own"]).optional(),   // trabajo para cliente vs proyecto propio
    clientNote: z.string().optional(),            // sector o contexto del cliente, sin nombre
    featured: z.boolean().default(false),
    role: z.string().optional(),       // qué hizo Ari en el proyecto
    problem: z.string().optional(),
    challenge: z.string().optional(), // reto de ingeniería
    solution: z.string().optional(),
    decisions: z.array(z.string()).optional(),
    highlights: z.array(z.string()).optional(), // métricas/logros destacados
    result: z.string().optional(),
    tech: z.array(z.string()),
    areas: z.array(z.string()).optional(),
    image: image().optional(),        // imagen de portada del proyecto
    images: z.array(z.object({        // galería del case study
      src: image(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),
    repo: z.string().optional(),
    live: z.string().optional(),
    date: z.date(),
    order: z.number().default(0),
  }),
});

export const collections = {
  projects,
};

/// <reference types="astro/client" />
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    status: z.enum(["ongoing", "finished", "archived"]),
    featured: z.boolean().default(false),

    // Caso de estudio
    problem: z.string().optional(),
    solution: z.string().optional(),
    decisions: z.array(z.string()).optional(),
    result: z.string().optional(),

    // Tech y habilidades
    tech: z.array(z.string()),
    areas: z.array(z.string()).optional(), // ej: "backend", "data", "system design"

    // Links
    repo: z.string().url().optional(),
    live: z.string().url().optional(),

    // Meta
    date: z.date(),
    order: z.number().default(0),
  }),
});

const skills = defineCollection({
  schema: z.object({
    name: z.string(),
    icon: z.string().optional(),
    description: z.string(),
    problems: z.array(z.string()), // tipos de problemas resueltos
    projects: z.array(z.string()), // IDs o slugs de proyectos
    level: z.enum(["expert", "advanced", "intermediate"]).default("intermediate"),
    order: z.number().default(0),
  }),
});

export const collections = {
  projects,
  skills,
};

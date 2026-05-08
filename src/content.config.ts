import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    status: z.enum(["ongoing", "finished", "archived"]),
    featured: z.boolean().default(false),
    problem: z.string().optional(),
    challenge: z.string().optional(), // reto de ingeniería
    solution: z.string().optional(),
    decisions: z.array(z.string()).optional(),
    highlights: z.array(z.string()).optional(), // métricas/logros destacados
    result: z.string().optional(),
    tech: z.array(z.string()),
    areas: z.array(z.string()).optional(),
    repo: z.string().optional(),
    live: z.string().optional(),
    date: z.date(),
    order: z.number().default(0),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/skills" }),
  schema: z.object({
    name: z.string(),
    icon: z.string().optional(),
    statement: z.string().optional(),
    description: z.string(),
    impact_areas: z.array(z.string()).optional(),
    problems: z.array(z.string()).optional(),
    projects: z.array(z.string()),
    level: z.enum(["expert", "advanced", "intermediate"]).default("intermediate"),
    order: z.number().default(0),
    narrative: z.object({
      intro: z.string().optional(),
      what_changed: z.string().optional(),
      how_i_use: z.string().optional(),
      projects_context: z.string().optional(),
      tradeoffs: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  projects,
  skills,
};

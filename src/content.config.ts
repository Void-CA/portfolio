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
    image: z.string().optional(),     // ruta a imagen de portada del proyecto
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
    perspectives: z.array(z.string()).optional(),
    specialties: z.array(z.string()).optional(),
    level: z.enum(["expert", "advanced", "intermediate"]).default("intermediate"),
    order: z.number().default(0),
    narrative: z.object({
      intro: z.string().optional(),
      what_changed: z.array(z.string()).optional(),
      how_i_use: z.array(z.string()).optional(),
      projects_context: z.string().optional(),
      tradeoffs: z.array(z.string()).optional(),
    }).optional(),
  }),
});

const specialties = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/specialties" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    competencies: z.array(z.string()),
    featured_projects: z.array(z.string()),
    order: z.number().default(0),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),     // ruta a imagen asociada a la nota
    project: z.string().optional(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().default(true),
  }),
});

export const collections = {
  projects,
  skills,
  specialties,
  notes,
};

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
    solution: z.string().optional(),
    decisions: z.array(z.string()).optional(),
    result: z.string().optional(),
    tech: z.array(z.string()),
    areas: z.array(z.string()).optional(),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    date: z.date(),
    order: z.number().default(0),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/skills" }),
  schema: z.object({
    name: z.string(),
    icon: z.string().optional(),
    description: z.string(),
    problems: z.array(z.string()),
    projects: z.array(z.string()),
    level: z.enum(["expert", "advanced", "intermediate"]).default("intermediate"),
    order: z.number().default(0),
  }),
});

export const collections = {
  projects,
  skills,
};

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
    architecture: z.string().optional(), // resumen para el panel técnico
    decisions: z.array(
      z.union([
        z.string(),
        z.object({ label: z.string(), detail: z.string() }),
      ])
    ).optional(),
    improvements: z.array(z.object({ // una card por mejora, autosustentable
      label: z.string(),              // sujeto: "Consultas", "Estado financiero"
      before: z.string().optional(),  // situación previa, solo si está documentada
      beforeLabel: z.string().optional(), // default "Antes"; usar "Contexto" si no hay estado previo
      after: z.string(),
      value: z.string().optional(),   // dato real para resaltar en "Ahora"
    })).optional(),
    result: z.string().optional(),
    tech: z.array(z.string()),
    areas: z.array(z.string()).optional(),
    image: image().optional(),        // imagen de portada del proyecto
    imageAlt: z.string().optional(),  // alt de la portada; el proyecto es dueño de sus assets
    images: z.array(z.object({        // galería del case study
      key: z.string(),                // clave semántica estable para referenciar la imagen
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

const about = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/about" }),
  schema: z.object({
    title: z.string(),
    lead: z.string().optional(),            // entrada que acompaña al H1
    location: z.string().optional(),        // "Chinandega, Nicaragua · Trabajo remoto · Español / Inglés"
    flow: z.array(z.string()).optional(),   // proceso → datos → software → infraestructura → resultado
    areas: z.array(z.object({
      label: z.string(),
      items: z.array(z.string()),
    })).optional(),
    interests: z.array(z.string()).optional(),
    formation: z.array(z.object({
      title: z.string(),
      place: z.string(),
      period: z.string(),
    })),
    tools: z.array(z.object({
      label: z.string(),
      items: z.array(z.string()),
    })),
  }),
});

export const collections = {
  projects,
  about,
};

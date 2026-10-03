import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    brand: z.string().optional(),      // nombre del producto, identificación secundaria
    subtitle: z.string().optional(),
    description: z.string(),
    summary: z.string(),               // 1 línea problema→resultado para la card (summary); no derivada de description/result
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

// Un servicio es un modelo rico; el home y el listado consumen una proyección
// de resumen (identidad + description + visual conceptual), y la página
// /servicios/[slug] consume el detalle completo.
//
// El catálogo es plano (5 servicios, sin categorías): `need` es la frase en voz
// del cliente que funciona como puerta de entrada orientada al problema.
//
// `evidence` apunta a un proyecto real (slug) y, opcionalmente, a una imagen de
// su galería por `key`.
const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: ({ image }) => z.object({
    label: z.string(),        // nombre de la oferta para tiles y lista
    title: z.string(),        // título completo; H1 de la vista de servicio
    need: z.string(),         // puerta de entrada en voz del cliente (selector)
    description: z.string(),  // resumen de descubrimiento (home + meta)
    icon: z.string(),
    order: z.number().default(0),

    // Visual conceptual del servicio: identidad visual en home, bento y hero.
    // No es evidencia; la evidencia vive en `evidence`.
    image: image().optional(),
    imageAlt: z.string().optional(),

    // Capa de reconocimiento rápido (home, bento, carrusel). Es contenido
    // editorial propio, NO una versión truncada de `detail`.
    summary: z.object({
      problem: z.string(),                          // 1 frase, 30–70 caracteres
      points: z.array(z.string()).default([]),      // máx 3, casi etiquetas
      scope: z.array(z.string()).default([]),       // máx 5, reconocible por el cliente
    }),

    detail: z.object({
      problem: z.string().optional(),                 // narrativa en voz del cliente
      situations: z.array(z.string()).default([]),    // señales donde el cliente se reconoce
      changes: z.array(z.string()).default([]),       // cambios observables
      applications: z.array(z.object({                // escenarios desarrollados
        title: z.string(),
        description: z.string(),
      })).default([]),
      integrations: z.array(z.string()).default([]),  // con qué puede conectarse
      build: z.array(z.string()).default([]),         // implementación técnica (subordinada)
      fit: z.array(z.string()).default([]),           // "puede ser una buena opción si…"
    }),

    evidence: z.object({      // opcional mientras el contenido está en desarrollo
      project: z.string(),    // slug del proyecto que respalda el servicio
      image: z.string().optional(), // key de la galería del proyecto; si falta, portada
    }).optional(),
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
  services,
  about,
};

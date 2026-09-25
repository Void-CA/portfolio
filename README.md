# acastillo.net — Portafolio técnico

Sitio personal y de servicios de **Ari Castillo**, desarrollador de software independiente.
Comunica una propuesta clara: **software a medida, automatización y datos** para
organizaciones cuyos procesos no encajan bien en herramientas genéricas.

El sitio es estático (Astro genera HTML en `dist/`) y tiene dos bloques de contenido:

- **Servicios** — qué tipo de problema se resuelve y cómo se trabaja.
- **Proyectos** — evidencia real de que eso se hizo: problem, solución, resultado y detalle técnico.

> La sección de servicios no referencia proyectos. La relación entre "qué hago" y
> "qué hice" se construye en la cabeza de quien lee, no con enlaces cruzados.

---

## Stack

| Pieza | Uso |
| --- | --- |
| [Astro 6](https://astro.build) | Generación estática, islas de JS mínimas, `astro:assets` |
| [Tailwind CSS 4](https://tailwindcss.com) | Vía plugin de Vite; tokens en `@theme` |
| TypeScript | Modo `strict` (`astro/tsconfigs/strict`) |
| `sharp` | Optimización de imágenes en build |
| `@astrojs/check` | Chequeo de tipos de las plantillas |

**Requisitos:** Node `>=22.12.0` y [pnpm](https://pnpm.io).

---

## Empezar

```bash
pnpm install
pnpm dev        # servidor de desarrollo
pnpm build      # build estático a dist/
pnpm preview    # previsualizar el build
pnpm astro check # typecheck de .astro y TS
```

No hay comando de lint dedicado. La verificación antes de publicar es
`pnpm astro check` y `pnpm build`.

---

## Estructura

```text
src/
├─ pages/
│  ├─ index.astro            # home: hero + secciones
│  ├─ sobre-mi.astro         # bio, experiencia, tecnologías, contacto
│  └─ proyectos/
│     ├─ index.astro         # listado de proyectos
│     └─ [slug].astro        # case study individual
├─ layouts/
│  └─ Layout.astro           # <html>, SEO, Open Graph, JSON-LD
├─ components/
│  ├─ Layout / navegación    # Header, Footer, SectionHeader
│  ├─ compartidos            # Icon, Gallery, ProjectCard, HeroDiagram
│  ├─ SiteConfig.ts          # identidad, contacto y social (fuente única)
│  └─ home/
│     ├─ HeroSection.astro
│     ├─ ServicesSection.astro   # orquesta servicios
│     ├─ ProcessSection.astro
│     ├─ EvidenceSection.astro
│     ├─ AboutTeaser.astro
│     ├─ ContactSection.astro
│     └─ services/
│        ├─ ServiceNav.astro     # selector por categorías (tablist)
│        └─ ServicePanel.astro   # panel de un servicio
├─ content/
│  └─ projects/*.md          # case studies (una entrada por proyecto)
├─ data/
│  ├─ services.ts            # definición de los servicios
│  └─ icons.ts               # set de iconos SVG
├─ assets/
│  ├─ debita/ · pna/         # capturas de proyectos
│  └─ servicios/             # visual conceptual de cada servicio
├─ styles/
│  ├─ tailwind.css           # @theme: fuente de verdad del sistema visual
│  ├─ global.css             # reset/base y contenedores
│  └─ components.css         # primitivas compartidas (.btn, .chip, .flow…)
├─ content.config.ts         # esquema de la colección `projects`
└─ astro.config.mjs          # site, shiki, plugin de Tailwind
```

---

## Contenido

### Proyectos (content collection)

Cada proyecto es un Markdown en `src/content/projects/`, con el **nombre del archivo
como slug** (p. ej. `debita.md` → `/proyectos/debita`). El frontmatter se valida
contra el esquema de `src/content.config.ts`.

Campos principales:

- Identidad: `title`, `brand`, `subtitle`, `description`, `status` (`ongoing` / `finished` / `archived`), `kind` (`client` / `own`), `role`, `date`, `order`.
- Relato: `problem`, `challenge`, `solution`, `result`, `improvements[]` (Antes/Ahora + `value`).
- Técnico: `architecture`, `decisions[]`, `tech[]`, `areas[]`, `repo`, `live`.
- Imágenes: `image` + `imageAlt` (portada) y `images[]` (galería con `key`/`src`/`alt`/`caption`).

`order` define el orden en listados; `featured: true` lo muestra en la sección
"Evidencia" del home. El cuerpo Markdown se renderiza en el detalle técnico.

### Servicios (datos tipados)

Los servicios viven en `src/data/services.ts` como un array tipado. Cada uno declara:

```ts
{
  id, num, icon,          // identidad visual
  label, category,        // etiqueta del selector y categoría (Operaciones / Datos / Sistemas)
  problem, title,         // problema (voz del cliente) y solución
  description, changes,   // descripción y "qué cambia"
  flow,                   // secuencia problema → solución → resultado
  image, imageAlt         // archivo dentro de src/assets/servicios/
}
```

El visual se resuelve con `import.meta.glob` contra `src/assets/servicios/`. Para
publicar la imagen de un servicio, basta con dejar el archivo con el nombre exacto
que declara `image` (p. ej. `automatizacion.png`). Si falta, el panel muestra un
marco neutro, de modo que todos los servicios conservan el mismo peso visual.

Recomendado para los visuales de servicio: **16:10**, conceptuales y concretos
(representan el trabajo del servicio, no capturas de un proyecto).

### Iconos

`src/data/icons.ts` es el set único de iconos SVG (line icons monocromáticos).
Se consumen con `<Icon name="..." />`. Regla: un icono identifica, navega o
explica algo; si solo decora, sobra.

---

## Sistema visual

El archivo `src/styles/tailwind.css` es la **única fuente de verdad**: define con
`@theme static` los colores semánticos, la escala tipográfica (6 tiers), radios,
sombras, el ritmo de secciones y los breakpoints. No se usa la paleta por defecto
de Tailwind: los nombres son del sistema (`accent`, `surface`, `primary`, `muted`,
`border`, `shadow-card`, `rounded-lg`, `py-section`…).

- `global.css` — reset/base y contenedores (`.page`, `main`).
- `components.css` — primitivas reutilizadas en más de un lugar (`.btn`, `.chip`,
  `.flow`, `.eyebrow`, `.section-head`, `.prose-body`).
- Lo específico de un componente vive en su propio `.astro` (utilidades o
  `<style>` acotado, solo cuando no es expresable con utilidades).

Cambiar la identidad visual debería implicar tocar casi solo `tailwind.css`.

---

## Deploy

Build 100% estático:

```bash
pnpm build      # genera dist/
```

El sitio publicado es `https://acastillo.net` (configurado como `site` en
`astro.config.mjs`). `dist/` puede servirse desde cualquier hosting estático.

---

## Convenciones

- Idioma del sitio y de los contenidos: **español**.
- Identidad, contacto y metadatos sociales: editar `src/components/SiteConfig.ts`
  (evitar hardcodear email o enlaces en los componentes).
- SEO/OG/JSON-LD centralizados en `src/layouts/Layout.astro`.
- Interactividad con JS nativo en `<script>` de Astro; sin frameworks de islas.

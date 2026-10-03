import type { CollectionEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';

// Fuente: colección `services`. El modelo completo es la fuente de verdad; el
// home consume una proyección de resumen y la página de servicio, el detalle.
export type ServiceEntry = CollectionEntry<'services'>;
export type ProjectEntry = CollectionEntry<'projects'>;
export type ServiceDetail = ServiceEntry['data']['detail'];

// Proyección de reconocimiento rápido: lo que consumen home, bento, nav y
// carrusel. Sale de `summary` (contenido editorial propio), nunca de `detail`.
export interface ServiceSummary {
  id: string;
  num: string;
  label: string;
  title: string;
  need: string;
  description: string;
  icon: string;
  order: number;
  visual?: ImageMetadata;
  problem: string;
  points: string[];
  scope: string[];
}

// Resuelve el visual de un proyecto de evidencia: imagen de la galería por
// `key` o, si no se indica, la portada. Se usa en la card de Evidencia de la
// página de servicio; el visual de identidad del servicio es `image` (conceptual).
export function resolveProjectVisual(
  evidence: ServiceEntry['data']['evidence'],
  projects: ProjectEntry[],
): ImageMetadata | undefined {
  if (!evidence) return undefined;
  const project = projects.find(p => p.id === evidence.project);
  if (!project) return undefined;
  if (evidence.image) {
    const match = project.data.images?.find(img => img.key === evidence.image);
    if (match) return match.src;
  }
  return project.data.image;
}

export function buildServiceSummaries(services: ServiceEntry[]): ServiceSummary[] {
  return [...services]
    .sort((a, b) => a.data.order - b.data.order)
    .map((entry, i) => ({
      id: entry.id,
      num: String(i + 1).padStart(2, '0'),
      label: entry.data.label,
      title: entry.data.title,
      need: entry.data.need,
      description: entry.data.description,
      icon: entry.data.icon,
      order: entry.data.order,
      visual: entry.data.image,
      problem: entry.data.summary.problem,
      points: entry.data.summary.points,
      scope: entry.data.summary.scope,
    }));
}

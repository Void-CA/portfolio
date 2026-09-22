export interface Service {
  id: string;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    id: "automatizar-procesos",
    title: "Automatizar procesos manuales",
    description:
      "Flujos que corren solos y quedan registrados: menos intervención manual, más trazabilidad.",
  },
  {
    id: "sistemas-internos",
    title: "Ordenar la operación en un sistema interno",
    description:
      "Una fuente única de información en lugar de planillas y sistemas aislados que nadie puede auditar.",
  },
  {
    id: "integracion",
    title: "Conectar sistemas y datos dispersos",
    description:
      "Integración entre servicios y fuentes de datos, sin acoplar los sistemas entre sí.",
  },
  {
    id: "software-a-medida",
    title: "Software a medida para procesos que no encajan",
    description:
      "Sistemas construidos alrededor de cómo trabajás, no al revés: modelan tus reglas reales.",
  },
  {
    id: "industrial",
    title: "Monitoreo y control de sistemas industriales",
    description:
      "Software que conecta dispositivos, monitorea señales y ejecuta acciones sobre el mundo físico.",
  },
];

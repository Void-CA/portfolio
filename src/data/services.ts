export interface Service {
  id: string;
  num: string;
  icon: string;
  problem: string;      // etiqueta del selector, en primera persona del cliente
  title: string;        // solución
  description: string;
  changes: string[];    // "qué cambia"
  flow: string[];       // secuencia problema → solución → resultado
  evidence: { label: string; href: string };
}

export const SERVICES: Service[] = [
  {
    id: "automatizar",
    num: "01",
    icon: "cycle",
    problem: "Hay tareas que hacemos a mano constantemente.",
    title: "Automatizar procesos",
    description:
      "Convertimos tareas repetitivas en flujos que se ejecutan solos y quedan registrados.",
    changes: ["Menos trabajo manual", "Menos errores", "Trazabilidad de cada operación"],
    flow: ["Tarea manual", "Automatización", "Registro"],
    evidence: { label: "Debita", href: "/proyectos/debita" },
  },
  {
    id: "sistemas-internos",
    num: "02",
    icon: "layers",
    problem: "La información está repartida entre varias herramientas.",
    title: "Un sistema interno que ordena la operación",
    description:
      "Reunimos la operación dispersa en un solo lugar, con información confiable y auditable.",
    changes: ["Una sola fuente de información", "Sin versiones que no coinciden", "Operación auditable"],
    flow: ["Planillas", "Sistema", "Información única"],
    evidence: { label: "Alliance", href: "/proyectos/alliance" },
  },
  {
    id: "integracion",
    num: "03",
    icon: "link",
    problem: "Nuestros sistemas no se comunican entre sí.",
    title: "Integración de sistemas y datos",
    description:
      "Conectamos las herramientas que ya usás para que la información circule sola, sin copiarla a mano.",
    changes: ["Fin de la copia manual", "Datos consistentes entre sistemas", "Cada sistema sigue siendo independiente"],
    flow: ["Facturación", "API", "Viajes"],
    evidence: { label: "Alliance", href: "/proyectos/alliance" },
  },
  {
    id: "a-medida",
    num: "04",
    icon: "sliders",
    problem: "Las herramientas que existen no se ajustan a nuestro proceso.",
    title: "Software a medida",
    description:
      "Construimos la herramienta que tu operación necesita, en lugar de adaptar tu proceso a una genérica.",
    changes: ["Se adapta a cómo trabajás", "No obliga a cambiar tu flujo", "Habilita análisis que antes no existían"],
    flow: ["Formato institucional", "PNA", "Análisis"],
    evidence: { label: "PNA", href: "/proyectos/pna" },
  },
  {
    id: "industrial",
    num: "05",
    icon: "cpu",
    problem: "Necesitamos conectar software con equipos o procesos físicos.",
    title: "Monitoreo y control industrial",
    description:
      "Software que conecta dispositivos, monitorea señales y ejecuta acciones sobre el mundo físico.",
    changes: ["Monitoreo de equipos", "Control de procesos", "Un mismo sistema sobre simulación o hardware real"],
    flow: ["Señales", "Software", "Equipos"],
    evidence: { label: "Thalos", href: "/proyectos/thalos" },
  },
];

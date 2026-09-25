export interface Service {
  id: string;
  num: string;
  icon: string;
  label: string;        // nombre corto para el selector
  category: string;     // agrupación temática en el selector
  problem: string;      // el problema, en voz del cliente
  title: string;        // la solución
  description: string;
  changes: string[];    // "qué cambia"
  flow: string[];       // secuencia problema → solución → resultado
  image: string;        // archivo dentro de src/assets/servicios/
  imageAlt: string;     // descripción del visual conceptual del servicio
}

// Los servicios describen qué problema se resuelve y cómo se trabaja.
// La evidencia de que se hizo vive en la sección de proyectos: acá no se
// referencian casos. El `image` es un visual conceptual del servicio, no una
// captura de un proyecto.
//
// El conjunto se lee como una sola especialidad —software aplicado a
// operaciones— con distintas formas de intervención, no como seis
// especialidades independientes. La redacción evita el tono de agencia y usa
// el vocabulario del oficio: centralizar, registrar, procesar, integrar,
// consultar, controlar.
export const SERVICES: Service[] = [
  {
    id: "automatizar",
    num: "01",
    icon: "cycle",
    label: "Automatización",
    category: "Operaciones",
    problem: "Hay tareas que hacemos a mano constantemente.",
    title: "Automatizar procesos operativos",
    description:
      "Convertimos tareas repetitivas en flujos de software que ejecutan, validan y registran cada operación.",
    changes: ["Ejecución automática de tareas", "Validación en cada paso", "Registro de cada operación"],
    flow: ["Tarea manual", "Automatización", "Registro"],
    image: "automatizacion.png",
    imageAlt: "Representación de un proceso automatizado: entrada, procesamiento y salida",
  },
  {
    id: "sistemas-internos",
    num: "02",
    icon: "layers",
    label: "Sistemas internos",
    category: "Operaciones",
    problem: "La información está repartida entre varias herramientas.",
    title: "Centralizar la operación en un sistema propio",
    description:
      "Reunimos información y procesos dispersos en una herramienta común, con datos consistentes y trazabilidad de las operaciones.",
    changes: ["Información centralizada", "Datos consistentes entre áreas", "Trazabilidad de las operaciones"],
    flow: ["Planillas", "Sistema", "Información única"],
    image: "sistemas-internos.png",
    imageAlt: "Vistas de un sistema interno que unifica información antes dispersa",
  },
  {
    id: "analitica",
    num: "03",
    icon: "chart",
    label: "Analítica",
    category: "Datos",
    problem: "Tenemos datos, pero obtener información útil requiere demasiado trabajo.",
    title: "Convertir datos operativos en información útil",
    description:
      "Estructuramos y procesamos los datos de tu operación para construir consultas, indicadores y reportes que puedas utilizar directamente.",
    changes: ["Datos estructurados y consultables", "Indicadores y reportes a medida", "Consultas directas sobre la operación"],
    flow: ["Datos", "Procesamiento", "Consulta"],
    image: "analitica.png",
    imageAlt: "Tablero analítico con indicadores y visualización de datos",
  },
  {
    id: "integracion",
    num: "04",
    icon: "link",
    label: "Integraciones",
    category: "Datos",
    problem: "Nuestros sistemas no se comunican entre sí.",
    title: "Conectar sistemas y datos",
    description:
      "Diseñamos integraciones para que diferentes aplicaciones intercambien información de forma controlada, sin duplicar trabajo ni centralizarlo todo en una sola aplicación.",
    changes: ["Intercambio entre aplicaciones", "Sin duplicar trabajo", "Cada sistema sigue siendo independiente"],
    flow: ["Facturación", "API", "Viajes"],
    image: "integracion.png",
    imageAlt: "Sistemas distintos conectados entre sí mediante una capa de integración",
  },
  {
    id: "a-medida",
    num: "05",
    icon: "sliders",
    label: "Software a medida",
    category: "Sistemas",
    problem: "Las herramientas existentes no se ajustan a nuestro proceso.",
    title: "Construir software alrededor de tu operación",
    description:
      "Diseñamos y desarrollamos la herramienta específica que necesita tu proceso, en lugar de obligarlo a adaptarse a una solución genérica.",
    changes: ["Se ajusta a tu proceso", "No obliga a cambiar tu forma de trabajar", "Herramientas propias, no genéricas"],
    flow: ["Proceso", "Software propio", "Operación"],
    image: "a-medida.png",
    imageAlt: "Interfaz de una aplicación de negocio construida a medida",
  },
  {
    id: "industrial",
    num: "06",
    icon: "cpu",
    label: "Sistemas industriales",
    category: "Sistemas",
    problem: "Necesitamos conectar software con equipos o procesos físicos.",
    title: "Software para monitoreo y control de procesos físicos",
    description:
      "Conectamos software con dispositivos y señales para observar procesos, procesar su información y ejecutar respuestas definidas por la operación.",
    changes: ["Adquisición de señales de equipos", "Monitoreo y procesamiento de señales", "Respuestas según reglas de la operación"],
    flow: ["Señales", "Software", "Equipos"],
    image: "industrial.png",
    imageAlt: "Equipo físico conectado a un sistema de monitoreo y control",
  },
];

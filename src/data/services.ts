export interface Service {
  id: string;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    id: "automatizar",
    title: "Automatizar tareas que hoy dependen de trabajo manual",
    description:
      "Menos trabajo repetitivo y menos errores: las tareas se hacen solas y quedan registradas.",
  },
  {
    id: "sistemas-aislados",
    title: "Dejar de depender de planillas y sistemas aislados",
    description:
      "Toda la operación en un solo lugar, con información confiable en vez de versiones que no coinciden.",
  },
  {
    id: "compartir-informacion",
    title: "Hacer que tus sistemas compartan información",
    description:
      "Dejás de copiar datos a mano entre herramientas: la información circula sola.",
  },
  {
    id: "a-medida",
    title: "Construir la herramienta que tu operación necesita",
    description:
      "Software hecho para cómo trabajás, no una herramienta genérica a la que hay que adaptarse.",
  },
  {
    id: "industrial",
    title: "Conectar software con procesos y equipos físicos",
    description:
      "Sensores, equipos y sistemas que se monitorean y controlan desde una misma aplicación.",
  },
];

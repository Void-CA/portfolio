---
name: Robotics

statement: "Software que mueve cosas requiere más rigor que software que solo procesa datos."

description: "Desarrollo de software para modelado, simulación y planificación de movimiento en sistemas robóticos, con énfasis en la separación entre dominio matemático y backend de ejecución."

impact_areas:
  - simulación
  - planificación de movimiento
  - modelado matemático
  - visualización 3D
  - sistemas de tiempo real
  - arquitecturas desacopladas

perspectives:
  - Systems
  - Modeling
  - Runtime

projects:
  - thalos

level: advanced

order: 0

narrative:
  intro: "Thalos nació de una observación práctica: las plataformas de robótica suelen atar el dominio matemático a un backend particular, lo que obliga a reescribir cuando se pasa de simulación a hardware. La pregunta de diseño fue cómo desacoplar la generación de trayectorias de su materialización."

  what_changed:
    - "Tratar la separación planning/execution como decisión arquitectónica explícita, no como detalle de implementación"
    - "Pensar el scene graph como consumidor del dominio, no como productor de verdad"
    - "Resistir la tentación de atar el dominio a un framework de simulación particular"
    - "Modelar la matemática del problema (cinemática, transformaciones) como capa aislada, no como utilidad dispersa"

  how_i_use:
    - "Cinética y cinemática de robots seriales con nalgebra como base numérica"
    - "Diseño de motion compilers que producen trayectorias agnósticas del backend"
    - "Visualización 3D desacoplada para validación de trayectorias"
    - "APIs HTTP para integración con sistemas externos sin acoplar el core"
    - "Documentación arquitectónica temprana: la complejidad se modela cuando se entiende"

  projects_context: "Thalos es el proyecto que sostiene esta skill. La decisión de separar planning de execution (mantener el motion compiler independiente del backend físico) surgió de la frustración de ver cómo plataformas existentes obligaban a reescribir el dominio cada vez que se cambiaba de etapa (simulación a ROS2 a hardware). En Thalos esa decisión está modelada en el workspace multi-crate: thalos-core no sabe qué backend lo ejecuta."

  tradeoffs:
    - "Separar planning de execution añade capas: para problemas muy simples puede ser overkill"
    - "nalgebra es poderosa pero exige entender el álgebra lineal que el framework abstrae"
    - "La simulación no captura todos los modos de falla del hardware real: el último 10% siempre es físico"
    - "Documentación arquitectónica temprana requiere disciplina: es fácil caer en código sin narrativa"
---

## Introducción

Thalos nació de una observación práctica: las plataformas de robótica
suelen atar el dominio matemático a un backend particular, lo que
obliga a reescribir cuando se pasa de simulación a hardware. La
pregunta de diseño fue cómo desacoplar la generación de trayectorias
de su materialización.

## Decisiones técnicas

Thalos fue el proyecto que sostuvo la decisión clave: tratar la
separación planning/execution como arquitectura explícita, no como
detalle. El motion compiler produce trayectorias agnósticas del backend
y el runtime decide cómo materializarlas.

---
name: Rust

statement: "El lenguaje que me obligó a aprender a programar de nuevo."

description: Desarrollo de herramientas y sistemas con énfasis en control, performance y explicitud.

impact_areas:
  - sistemas
  - performance
  - diseño de APIs
  - modelado de dominio
  - tooling

projects:
  - argos
  - pna
  - debita
  - magic-orm

level: advanced

order: 1

narrative:
  intro: |
    Empecé a usar Rust a partir del desarrollo de Argos, un proyecto que nació con restricciones bastante claras relacionadas con consumo de memoria, portabilidad y eficiencia.
    Necesitaba construir una herramienta capaz de monitorear procesos sin convertirse ella misma en otra carga para el sistema.

  what_changed:
    - "Pensar explícitamente quién es dueño de un dato, cuánto tiempo debe existir, y quién puede modificarlo"
    - "Prestar más atención a diseño de APIs, separación de responsabilidades y modelado de errores"
    - "Entender el costo real de ciertas abstracciones"
    - "Aplicar ideas de ownership incluso en otros lenguajes"

  how_i_use:
    - "Desarrollo Desktop y herramientas de línea de comandos"
    - "Herramientas CLI, tooling, procesamiento offline y parsers"
    - "Cuando necesito control fino sobre recursos o binarios portables"
    - "No para prototipos rápidos: ahí prefiero TypeScript"
    - "Sistemas concurrentes y aplicaciones donde el overhead importa"

  projects_context: |
    Rust se ha convertido en mi lenguaje favorito, permite una flexibilidad y control que me ha permitido llevar proyectos de diversos tipos como desktop, CLI, parsers y sistemas concurrentes. Argos es un ejemplo claro de cómo Rust me permitió construir una herramienta eficiente y portable para monitorear procesos, mientras que proyectos como Debita y Magic-ORM se benefician de la seguridad de tipos y el modelado explícito que Rust ofrece.

  tradeoffs:
    - "Curva de aprendizaje real: el borrow checker puede ser frustrante al inicio"
    - "Velocidad de desarrollo más lenta que en lenguajes interpretados"
    - "El ecosistema ha madurado pero sigue siendo menor que npm o Python"
    - "Algunas abstracciones requieren mucho más diseño previo"
---
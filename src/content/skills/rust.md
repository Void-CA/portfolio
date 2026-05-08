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

perspectives:
  - Runtime
  - Systems
  - Tooling

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
    Argos fue el proyecto que definió mi relación inicial con Rust, principalmente por las restricciones de consumo de recursos, concurrencia y portabilidad que requería. Más adelante lo utilicé en PNA para experimentar con WebAssembly y procesamiento offline dentro del navegador. Con el tiempo terminé explorando otras capacidades del lenguaje en proyectos como Magic-ORM, donde trabajé con traits, macros derive y metaprogramación para construir abstracciones más expresivas, y en Debita, donde Rust funciona como base de modelado y lógica dentro de una aplicación desktop construida con Tauri.





  tradeoffs:
    - "Curva de aprendizaje real: el borrow checker puede ser frustrante al inicio"
    - "Velocidad de desarrollo más lenta que en lenguajes interpretados"
    - "El ecosistema ha madurado pero sigue siendo menor que npm o Python"
    - "Algunas abstracciones requieren mucho más diseño previo"
---
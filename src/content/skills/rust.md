---
name: Rust
statement: "Donde cada error de compilación es una oportunidad de aprender el modelo de propiedad."
description: Desarrollo de sistemas con énfasis en performance, concurrencia y seguridad de memoria.
impact_areas:
  - sistemas
  - performance
  - diseño de APIs
  - modelado de dominio
projects:
  - argos
  - pna
level: advanced
order: 1
narrative:
  intro: |
    Empecé con Rust por necesidad: necesitaba una CLI que consumiera menos recursos que los que monitoreaba.
    Pero lo que empezó como pragmático se convirtió en una forma de pensar. El modelo de propiedad
    me obligó a pensar en términos de flujos de datos y quién es responsable de qué en cada momento.
  what_changed: |
    Antes de Rust, trabajaba con garbage collection como un deal done. Rust me enseñó que la memoria es un 
    recurso como cualquier otro: tiene propietarios, lifetimes, y responsabilidades claras.
    Esto cambió cómo diseño APIs - ahora siempre pienso en términos de "quién posee esto" y
    "cuándo se libera", incluso en lenguajes con GC.
  how_i_use: |
    Lo uso para herramientas de CLI, parsers, y cualquier sistema donde el performance importa.
    No lo elijo para APIs de negocio o prototipos rápidos - ahí prefiero TypeScript o Python.
    Para servicios largos o herramientas de sistema, es mi primera elección.
  projects_context: |
    En Argos, la constraint era clara: un monitor que consume 20% del CPU es inútil.
    Rust permitió controlar el memory layout y el sampling interval con precisión.
    En PNA, WebAssembly fue natural dada la experiencia previa con el compilador.
  tradeoffs: |
    El borrow checker es lento de aprender. Hay errores que no entiendes hasta que los ves tres veces.
    El ecosistema de crates es maduro pero no tanto como npm o PyPI.
    No es ideal para prototipos rápidos - el ciclo edit-compile es más largo que en interpreted.
---
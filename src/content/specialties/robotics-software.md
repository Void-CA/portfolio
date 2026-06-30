---
name: "Robotics Software"
description: "Desarrollo de software para modelado, simulación y planificación de movimiento en sistemas robóticos, con separación explícita entre el dominio matemático y el backend de ejecución física."
competencies:
  - rust
  - robotics
  - docker
  - mqtt
featured_projects:
  - thalos
order: 4
---

Construyo software para sistemas donde el resultado de un cómputo es
movimiento físico. Eso cambia todo: el código no puede permitirse
indeterminismo, la matemática no puede abstraerse mal, y la
arquitectura tiene que separar explícitamente la generación de
trayectorias de su materialización.

La decisión central de esta especialidad es tratar el planning como
dominio puro (agnóstico del hardware) y la ejecución como backend
intercambiable. Eso permite que un mismo programa opere sobre
simulación, ROS2 o un controlador físico, sin reescribir el dominio.
El precio: más capas, más disciplina arquitectónica, más
documentación.

---
title: Thalos
subtitle: Plataforma de modelado, análisis y visualización de sistemas robóticos
description: Plataforma modular para experimentación con planificación de movimiento, simulación y ejecución de robots seriales. Diseñada con separación explícita entre planning y execution, permitiendo que un mismo programa opere sobre simulación, ROS2 o backends de hardware sin modificar el dominio.
status: ongoing
featured: true
order: 1

problem: >
  No existía una plataforma ligera y modular para experimentar con planificación
  de movimiento, simulación y ejecución robótica que permitiera evolucionar
  progresivamente desde un simulador puro hasta la integración con hardware
  real, sin reescribir el dominio en cada salto de etapa.

challenge: >
  Diseñar una arquitectura donde la generación de trayectorias estuviera
  desacoplada del backend de movimiento, de modo que un mismo programa
  pudiera ejecutarse sobre simulación, ROS2 o futuros backends físicos sin
  modificar el código de dominio. La restricción principal: el cambio de
  backend no podía implicar reescritura ni adaptadores espurios.

solution: >
  Thalos se estructura como un workspace multi-crate en Rust con cuatro
  capas explícitas: thalos-core (matemática y robótica con nalgebra, sin
  dependencias externas pesadas), thalos-visual (representación 3D con scene
  graph desacoplado), thalos-runtime (orquestación, estado mutable y
  commands) y thalos-api (HTTP con axum 0.8). El motion compiler es
  independiente del backend físico, lo que permite cambiar entre simulación,
  ROS2, comunicación serial u otros targets sin tocar el dominio.

decisions:
  - "Separación explícita entre planning y execution: el motion compiler genera trayectorias agnósticas del backend; el runtime decide cómo ejecutarlas"
  - "Workspace multi-crate para aislar responsabilidades: matemática, visualización, orquestación y API no se contaminan entre sí"
  - "nalgebra como base matemática en lugar de abstracciones pesadas: el dominio necesita precisión numérica, no frameworks de alto nivel"
  - "Backend agnóstico de dominio: un mismo programa corre sobre simulación, ROS2 o hardware real sin reescritura"
  - "API HTTP (axum 0.8) para integración con sistemas externos sin acoplar el dominio a la capa de transporte"
  - "Documentación arquitectónica desde etapas tempranas (Quarto): la complejidad se modela cuando se entiende, no cuando se acumula"
  - "Scene graph desacoplado de la matemática: visualización y simulación son consumidores, no productores de verdad"

highlights:
  - "Workspace multi-crate en Rust con responsabilidades aisladas por capa"
  - "Runtime desacoplado del backend físico mediante motion compiler independiente"
  - "Visualización 3D con scene graph que no contamina el dominio"
  - "API HTTP para integración con sistemas externos sin acoplar al core"
  - "Arquitectura preparada para múltiples backends: simulación, ROS2, comunicación serial, otros"
  - "Documentación arquitectónica y de dominio generada con Quarto desde etapas tempranas"

result: >
  Plataforma en desarrollo activo con núcleo de dominio y motion compiler
  ya operativos. La separación planning/execution ha permitido iterar sobre
  distintos backends sin reescribir lógica de dominio, sentando las bases
  para integración con hardware físico y experimentación con ROS2.

tech:
  - Rust
  - Angular
  - Three.js
  - Docker
  - MQTT

areas:
  - robotics
  - simulation
  - backend

repo: "https://github.com/Void-CA/Thalos"
date: 2026-01-15
---

## Arquitectura

Thalos se organiza como un workspace multi-crate con responsabilidades
estrictamente aisladas:

- **thalos-core**: matemática y robótica de base. Cinemática, transformaciones
  espaciales y abstracciones de dominio sin dependencias externas pesadas.
  Construido sobre `nalgebra` para precisión numérica explícita.
- **thalos-visual**: representación 3D, validación visual y primitivas para
  depuración. Mantiene un scene graph desacoplado del dominio, de modo que
  visualización y simulación son consumidores, no productores de verdad.
- **thalos-runtime**: orquestación, estado mutable, commands y selección de
  backend. Aquí vive la separación entre planning y execution: el motion
  compiler entrega trayectorias, el runtime decide cómo materializarlas.
- **thalos-api**: HTTP con `axum` 0.8, DTOs y routing. Pensada para
  integración con sistemas externos sin acoplar el dominio a la capa de
  transporte.

## Decisión central: planning vs execution

La decisión arquitectónica más importante de Thalos es la separación
explícita entre la generación de trayectorias y la materialización del
movimiento. El motion compiler produce trayectorias agnósticas del backend
—secuencias de puntos en el espacio, restricciones temporales, perfiles
de velocidad—. El runtime las recibe y decide cómo ejecutarlas según el
backend disponible: simulación pura, ROS2, comunicación serial con un
controlador físico, o cualquier backend futuro que se implemente.

Esta separación no es accidental ni prematura: es la respuesta a una
restricción concreta. Las plataformas de robótica suelen atar el dominio
a un backend particular, lo que obliga a reescribir cuando se cambia de
etapa (de simulación a hardware) o de vendor. Thalos trata esa decisión
como explícita y reversible desde el inicio.

## Estado actual y dirección

Thalos se encuentra en desarrollo activo con un núcleo de dominio y un
motion compiler ya operativos. Las prioridades inmediatas son ampliar
los backends soportados (ROS2 como próximo paso) y profundizar la
visualización 3D para validación de trayectorias complejas.

La documentación arquitectónica completa —visión, filosofía, modelo de
dominio, flujo interno, estado de madurez— está disponible en el
repositorio bajo `docs/`, generada con Quarto.

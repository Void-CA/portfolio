---
title: Monitoreo y ejecución robótica industrial
brand: Thalos
subtitle: Plataforma de modelado, análisis y ejecución de sistemas robóticos
description: Plataforma que planifica trayectorias y las ejecuta sobre simulación o hardware real. La generación de movimiento está desacoplada del backend, de modo que el mismo sistema opera sobre simulación, ROS2 o controladores físicos sin reescribir el dominio.
status: ongoing
featured: true
order: 3
kind: own
role: Arquitectura y desarrollo del núcleo de dominio y el motion compiler.

problem: >
  No existía una plataforma ligera para experimentar con planificación de
  movimiento y ejecución robótica que evolucionara de simulación a hardware real
  sin reescribir el dominio en cada etapa.

challenge: >
  Diseñar una arquitectura donde la generación de trayectorias estuviera
  desacoplada del backend de movimiento, de modo que un mismo programa
  pudiera ejecutarse sobre simulación, ROS2 o futuros backends físicos sin
  modificar el código de dominio. La restricción principal: el cambio de
  backend no podía implicar reescritura ni adaptadores espurios.

solution: >
  Thalos es un workspace multi-crate en Rust donde el motion compiler genera
  trayectorias agnósticas del backend; el runtime decide si corren en simulación,
  ROS2 o hardware.

decisions:
  - "Separación explícita entre planning y execution: el motion compiler genera trayectorias agnósticas del backend; el runtime decide cómo ejecutarlas"
  - "Workspace multi-crate para aislar responsabilidades: matemática, visualización, orquestación y API no se contaminan entre sí"
  - "nalgebra como base matemática en lugar de abstracciones pesadas: el dominio necesita precisión numérica, no frameworks de alto nivel"
  - "Backend agnóstico de dominio: un mismo programa corre sobre simulación, ROS2 o hardware real sin reescritura"
  - "API HTTP (axum 0.8) para integración con sistemas externos sin acoplar el dominio a la capa de transporte"
  - "Documentación arquitectónica desde etapas tempranas (Quarto): la complejidad se modela cuando se entiende, no cuando se acumula"
  - "Scene graph desacoplado de la matemática: visualización y simulación son consumidores, no productores de verdad"

highlights:
  - label: "Portabilidad"
    detail: "simulación, ROS2 y hardware con el mismo programa"
  - label: "Desacople"
    detail: "planning y execution independientes"
  - label: "Multi-crate"
    detail: "responsabilidades aisladas por capa"

result: >
  Un mismo programa planifica una trayectoria y la ejecuta en simulación o en
  hardware real sin cambios en el dominio.

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

---
title: Kora
subtitle: Sistema de gestión agrícola basado en Domain-Driven Design
description: Sistema en desarrollo orientado a la gestión de ciclos de cultivo, con modelado de dominio preciso que separa planificación de ejecución real.
status: ongoing
featured: false
order: 3

problem: >
  La gestión agrícola en sistemas tradicionales mezcla planificación teórica con
  ejecución real, generando inconsistencias entre lo que se planificó y lo que
  realmente ocurrió en el campo.

challenge: >
  Modelar un dominio agrícola donde las entidades (ciclos, periodos, áreas) tienen
  reglas de negocio complejas y dependencias temporales, sin caer en un modelo
  anémico que solo guarda datos sin comportamiento.

solution: >
  Aplicación de Domain-Driven Design para construir un modelo donde las entidades
  reflejan la realidad del negocio: separación clara entre intención (planificación)
  y ejecución (ciclos reales), con agregados que protegen invariantes del dominio.

decisions:
  - "DDD sobre CRUD tradicional: el dominio tiene reglas complejas que un modelo anémico no puede proteger"
  - "Separación intención/ejecución: planificar un cultivo no es lo mismo que ejecutarlo, y el modelo lo refleja"
  - "Agregados por ciclo de cultivo: cada ciclo es una unidad de consistencia, no una tabla aislada"

highlights:
  - "Modelo de dominio con comportamiento, no solo datos"
  - "Separación explícita de planificación y ejecución"

result: >
  Sistema en desarrollo. Modelo de dominio implementado con entidades que reflejan
  la realidad del negocio agrícola, priorizando claridad y mantenibilidad a largo plazo.

tech:
  - TypeScript
  - Domain-Driven Design
areas:
  - backend
  - system design
  - domain modeling

repo: "#"
date: 2025-11-01
---

## Modelo de dominio

El sistema se estructura en torno a los conceptos centrales del negocio agrícola:

- **Ciclo de cultivo**: Agregado principal que encapsula toda la lógica de un cultivo
- **Periodos**: Fases dentro del ciclo con reglas específicas
- **Áreas**: Unidades de territorio asociadas a ciclos y periodos
- **Planificación**: Intención que se convierte en ejecución bajo condiciones reales

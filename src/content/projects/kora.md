---
title: Kora
subtitle: Sistema de planificación y control operativo agrícola
description: Plataforma de gestión agrícola orientada al modelado preciso de operaciones de cultivo, diseñada bajo principios de Domain-Driven Design y separación explícita entre planificación y ejecución real.
status: ongoing
featured: true
order: 3

problem: >
  Los sistemas agrícolas tradicionales suelen tratar la planificación y la ejecución
  como si fueran la misma realidad. Esto provoca inconsistencias operativas,
  dificultades para auditar decisiones y poca capacidad de análisis sobre lo que
  realmente ocurrió en campo frente a lo presupuestado o programado.

challenge: >
  Diseñar un sistema capaz de representar operaciones agrícolas reales con precisión,
  incluyendo ciclos de cultivo, programación operativa, uso de áreas, actividades,
  costos y eventos de ejecución, manteniendo consistencia de dominio sin reducir el
  modelo a simples operaciones CRUD.

solution: >
  Kora aplica Domain-Driven Design para construir un modelo agrícola centrado en
  comportamiento y reglas de negocio. El sistema separa explícitamente la intención
  operativa (Schedules, presupuestos y programación) de la realidad ejecutada
  (Crop Cycles, actividades y gastos reales), permitiendo trazabilidad, análisis y
  evolución del dominio sin comprometer consistencia.

decisions:
  - "Separación explícita entre planificación y ejecución: un Schedule representa intención; un Crop Cycle representa realidad operativa"
  - "DDD sobre arquitectura CRUD tradicional: el dominio agrícola contiene invariantes y reglas temporales que requieren comportamiento de dominio"
  - "Bounded Contexts para desacoplar áreas operativas como agricultura, finanzas y monitoreo"
  - "Agregados orientados a consistencia operacional, no a estructura de tablas"
  - "Modelo diseñado para evolucionar hacia análisis operativo y trazabilidad histórica"

highlights:
  - "Arquitectura basada en Domain-Driven Design"
  - "Integración con monitoreo, costos y analítica agrícola"
  - "Enfoque en mantenibilidad y evolución del dominio a largo plazo"

philosophy:
  - "El software agrícola no debe simplificar la realidad del campo; debe modelarla"
  - "Las reglas de negocio pertenecen al dominio, no a controladores ni servicios dispersos"
  - "La planificación es una hipótesis operacional; la ejecución es evidencia"
  - "La arquitectura debe facilitar evolución del conocimiento del negocio"

result: >
  Sistema actualmente en desarrollo con un núcleo de dominio ya estructurado bajo
  principios de DDD. Kora prioriza claridad semántica, consistencia operacional y
  capacidad de evolución arquitectónica, sentando bases para futuras capacidades
  analíticas y de supervisión agrícola.

tech:
  - Rust
  - PostgreSQL
  - Docker

areas:
  - backend
  - agriculture technology

repo: "#"
date: 2025-11-01
---

## Modelo de dominio

Kora estructura el dominio agrícola alrededor de conceptos operativos reales y sus
relaciones temporales.

- **Crop Cycle**: representación de la ejecución real de un cultivo
- **Schedule**: programación e intención operacional previa a ejecución
- **Areas**: unidades geográficas o productivas asociadas a operaciones agrícolas
- **Periods**: ventanas temporales y fases operativas dentro del ciclo agrícola
- **Activities**: eventos y acciones ejecutadas durante el ciclo
- **Operational Costs**: registro y análisis de costos asociados a ejecución real

La arquitectura busca representar el comportamiento natural del negocio agrícola,
permitiendo contrastar lo planificado contra lo realmente ejecutado.

## Arquitectura y enfoque

Kora no se plantea como un simple sistema administrativo agrícola, sino como una
exploración de modelado de dominio aplicado a operaciones reales.

El proyecto utiliza:

- **Domain-Driven Design (DDD)** para modelado semántico del dominio
- **Clean Architecture** para desacoplar reglas de negocio de infraestructura
- **Bounded Contexts** para separar responsabilidades operativas
- **Value Objects y agregados** para proteger invariantes del dominio
- **Diseño evolutivo** orientado a crecimiento y trazabilidad histórica

El objetivo no es únicamente registrar datos agrícolas, sino construir una base
consistente para análisis operativo, control de ejecución y futura inteligencia
de negocio aplicada al sector agrícola.
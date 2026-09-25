---
title: Planificación y control operativo agrícola
brand: Kora
subtitle: Sistema de gestión operativa de cultivos
description: Plataforma que separa la planificación de la ejecución real en campo, para contrastar lo programado con lo que efectivamente ocurrió. Modela ciclos de cultivo, actividades, costos y trazabilidad histórica.
status: ongoing
featured: false
order: 5
kind: own
role: Modelado de dominio y diseño de la arquitectura.

problem: >
  Los sistemas agrícolas suelen tratar la planificación y la ejecución como una
  misma realidad, lo que dificulta auditar qué ocurrió realmente en campo.

challenge: >
  Diseñar un sistema capaz de representar operaciones agrícolas reales con precisión,
  incluyendo ciclos de cultivo, programación operativa, uso de áreas, actividades,
  costos y eventos de ejecución, manteniendo consistencia de dominio sin reducir el
  modelo a simples operaciones CRUD.

solution: >
  Kora modela el dominio agrícola separando explícitamente la intención
  (Schedules y presupuestos) de la realidad ejecutada (ciclos de cultivo,
  actividades y costos), con DDD.

decisions:
  - "Separación explícita entre planificación y ejecución: un Schedule representa intención; un Crop Cycle representa realidad operativa"
  - "DDD sobre arquitectura CRUD tradicional: el dominio agrícola contiene invariantes y reglas temporales que requieren comportamiento de dominio"
  - "Bounded Contexts para desacoplar áreas operativas como agricultura, finanzas y monitoreo"
  - "Agregados orientados a consistencia operacional, no a estructura de tablas"
  - "Modelo diseñado para evolucionar hacia análisis operativo y trazabilidad histórica"

improvements:
  - label: "Modelo"
    beforeLabel: "Contexto"
    before: "La planificación y la ejecución no son la misma realidad"
    after: "Dos conceptos separados, con reglas propias"
  - label: "Trazabilidad"
    beforeLabel: "Contexto"
    before: "Las decisiones deben auditarse contra lo ejecutado"
    after: "Historial de lo que realmente ocurrió en campo"
  - label: "Arquitectura"
    beforeLabel: "Contexto"
    before: "El dominio agrícola tiene invariantes y reglas temporales"
    after: "Reglas de negocio en el dominio (DDD)"

philosophy:
  - "El software agrícola no debe simplificar la realidad del campo; debe modelarla"
  - "Las reglas de negocio pertenecen al dominio, no a controladores ni servicios dispersos"
  - "La planificación es una hipótesis operacional; la ejecución es evidencia"
  - "La arquitectura debe facilitar evolución del conocimiento del negocio"

result: >
  El modelo dejó de tratar planificación y ejecución como lo mismo: cada una
  tiene sus reglas y su trazabilidad, con la planificación como hipótesis y la
  ejecución como evidencia.

tech:
  - Rust
  - PostgreSQL
  - Docker

areas:
  - backend
  - agriculture technology

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
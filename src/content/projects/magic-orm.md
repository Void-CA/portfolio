---
title: MagicORM
subtitle: Diseño de un ORM tipado y composicional en Rust
description: Exploración de arquitectura para una capa de acceso a datos enfocada en composición, seguridad de tipos y control explícito sobre SQL y relaciones.
status: ongoing
featured: true
order: 5

problem: >
  Muchos ORMs simplifican el acceso a datos a costa de ocultar comportamiento crítico.
  A medida que las consultas crecen en complejidad, aparecen problemas de control,
  rendimiento y trazabilidad del SQL generado. En otros casos, las APIs terminan
  siendo demasiado verbosas o rígidas para modelar relaciones reales.

challenge: >
  Diseñar un ORM que aproveche el sistema de tipos de Rust sin convertir la experiencia
  de desarrollo en una capa excesivamente compleja. El objetivo es equilibrar:
  expresividad, seguridad de tipos, composición de queries y transparencia sobre
  la ejecución real en base de datos.

solution: >
  MagicORM es una exploración de diseño centrada en composición y explicitud.
  Las queries se construyen mediante builders tipados y relaciones declarativas,
  manteniendo control directo sobre el SQL y permitiendo escape a consultas crudas
  cuando el caso lo requiere. El diseño busca evitar "magia implícita" y prioriza
  APIs previsibles y extensibles.

decisions:
  - "Composición sobre APIs monolíticas: queries y relaciones se construyen como piezas reutilizables"
  - "Relaciones explícitas: eager loading y asociaciones declaradas mediante macros y traits"
  - "Integración profunda con el sistema de tipos de Rust para validación en compile-time"
  - "Separación clara entre ergonomía y comportamiento implícito"
  - "Soporte para SQL crudo como parte natural de la arquitectura, no como excepción"

highlights:
  - "Query Builder tipado y composicional"
  - "Sistema de relaciones y eager loading"
  - "Transacciones integradas en operaciones del ORM"
  - "Macros derivadas para modelos y vistas"
  - "Exportación y transformación de resultados"
  - "Arquitectura orientada a extensibilidad"

result: >
  Más que un ORM tradicional, MagicORM funciona como un laboratorio de arquitectura
  y diseño de APIs en Rust. El proyecto ha servido para explorar trade-offs reales
  entre ergonomía, control y seguridad de tipos, además de profundizar en temas
  como metaprogramación, traits avanzados y composición de abstracciones.

tech:
  - Rust
  - SQLx
  - PostgreSQL
  - Macros
  - Tokio

areas:
  - backend
  - systems programming
  - database architecture
  - api design

repo: "#"
date: 2025-12-01
---

## Enfoque del proyecto

MagicORM no intenta replicar exactamente el comportamiento de ORMs tradicionales.
El foco principal está en explorar cómo diseñar una capa de persistencia moderna
aprovechando las capacidades del sistema de tipos de Rust.

Actualmente el proyecto experimenta con:

- **Query Builders tipados** para composición segura de consultas
- **Relaciones declarativas** (`has_many`, `belongs_to`, eager loading)
- **Views y modelos derivados** mediante macros
- **Transacciones integradas** dentro del flujo del ORM
- **Comparación entre patrones** como Active Record, Data Mapper y builders composicionales
- **Mecanismos de escape** hacia SQL crudo sin romper la arquitectura general

El proyecto también funciona como espacio de investigación para evaluar decisiones
de diseño relacionadas con ergonomía, trazabilidad de queries y límites de las
abstracciones en acceso a datos.
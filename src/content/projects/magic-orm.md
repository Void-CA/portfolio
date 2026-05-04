---
title: MagicORM
subtitle: Exploración de diseño de una capa de acceso a datos
description: ORM desde cero explorando diferentes enfoques para construcción de queries y el control de abstracciones sobre base de datos.
status: ongoing
featured: false
order: 5

problem: >
  Los ORMs existentes ocultan complejidad hasta que no pueden más. Cuando necesitas
  control fino sobre queries, terminas peleando contra la abstracción.

challenge: >
  Diseñar una capa de acceso a datos que balancee flexibilidad, control y simplicidad.
  El trade-off central: cada nivel de abstracción gana comodidad pero pierde expresividad.
  ¿Dónde está el punto correcto?

solution: >
  Exploración de diseño de un ORM con enfoque en transparencia: cada abstracción tiene
  un escape hatch claro. Queries construidas composicionalmente, sin magia oculta.
  El usuario siempre puede bajar al SQL crudo cuando lo necesita.

decisions:
  - "Composición sobre herencia: las queries se construyen combinando piezas, no extendiendo clases"
  - "Escape hatches explícitos: cada nivel de abstracción documenta cómo salir de él"
  - "Transparencia sobre conveniencia: preferimos que el usuario sepa qué SQL se genera"

highlights:
  - "Queries composicionales con escape a SQL crudo"
  - "Diseño enfocado en transparencia, no en magia"

result: >
  Proyecto de exploración técnica. No busca ser un ORM para producción, sino un
  ejercicio de diseño que revela los trade-offs ocultos en las capas de acceso a datos.

tech:
  - TypeScript
  - PostgreSQL
areas:
  - backend
  - system design
  - data modeling

repo: "#"
date: 2025-12-01
---

## Exploración de diseño

El proyecto explora tres enfoques:

- **Query Builder**: Construcción composicional de queries con tipos
- **Active Record**: Entidades que saben persistirse (y cuándo NO usarlo)
- **Data Mapper**: Separación total entre dominio y persistencia

Cada enfoque se implementa para el mismo caso de uso, permitiendo comparar trade-offs reales.

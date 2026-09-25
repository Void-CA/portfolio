---
title: Ecosistema de gestión operativa para transporte
brand: Alliance
subtitle: Facturación, viajes y liquidaciones en aplicaciones autónomas
description: Conjunto de aplicaciones que digitalizan la operación administrativa de una empresa de transporte. Facturación, registro de viajes y liquidaciones viven en módulos independientes que se integran por API en lugar de compartir tablas.
status: ongoing
featured: false
order: 4
kind: client
clientNote: sector transporte
role: Diseño y desarrollo del ecosistema completo (facturación, viajes y la capa compartida de impresión).

problem: >
  La operación administrativa requería herramientas propias del transporte para
  facturación, viajes y liquidaciones, áreas que cambian a distinto ritmo.

challenge: >
  Digitalizar la operación completa sin construir un sistema monolítico que
  acoplara áreas que evolucionan a distinto ritmo. La restricción concreta:
  cada módulo debía poder cambiar y desplegarse por separado, y la integración
  no podía apoyarse en acceso directo entre bases de datos.

solution: >
  Alliance es un ecosistema de aplicaciones autónomas: Facturación, Viajes y una
  capa de impresión compartida. Cada módulo es dueño de su backend y su base, y
  se integra por API o eventos.

decisions:
  - "Aplicaciones autónomas en lugar de un monolito: cada módulo es dueño de su código, su backend y su base de datos"
  - "Sin claves foráneas ni acceso directo entre bases: la integración se plantea por API o eventos"
  - "Backend en Fastify con Prisma sobre PostgreSQL como stack común de los módulos"
  - "Frontend en Next.js para una experiencia operativa consistente entre aplicaciones"
  - "Capa de impresión compartida y desacoplada del dominio, para documentos físicos y exportaciones"
  - "Despliegue reproducible con Docker Compose en desarrollo y producción"

improvements:
  - label: "Cobertura"
    before: "Procesos de transporte forzados en software genérico"
    after: "Facturación, viajes y liquidaciones propias"
  - label: "Integración"
    beforeLabel: "Contexto"
    before: "Cada app debe poder cambiar sin arrastrar a las demás"
    after: "Integración por API o eventos, sin bases compartidas"
  - label: "Documentos"
    beforeLabel: "Contexto"
    before: "Emisión de documentos físicos y exportaciones"
    after: "Capa de impresión compartida, con PDF y Excel"

result: >
  La operación quedó cubierta por Facturación y Viajes operando por separado, y
  hoy se puede sumar un módulo nuevo sin reescribir los existentes.

tech:
  - TypeScript
  - Fastify
  - Prisma
  - PostgreSQL
  - Next.js
  - Docker

areas:
  - backend
  - automation
  - data

date: 2026-09-01
---

## Arquitectura

Alliance está pensado como un ecosistema, no como una aplicación con módulos.
Cada producto asume la propiedad completa de su dominio:

- **Alliance Facturación**: clientes, comprobantes, servicios y plantillas de
  impresión, con autenticación y registro de auditoría.
- **Alliance Viajes**: choferes, vehículos, contenedores, viajes, gastos y
  liquidaciones.
- **Impresión compartida**: un servicio dedicado que resuelve la generación de
  documentos físicos y exportaciones, aislado del dominio de cada aplicación.

La regla estructural es explícita: **cada aplicación es dueña de su código, su
backend y su base de datos**. No existen claves foráneas ni acceso directo entre
bases. Cualquier integración pasa por API o eventos, de modo que un módulo puede
cambiar sin arrastrar a los demás.

## Por qué separado y no un monolito

Facturación y Viajes son áreas que evolucionan a ritmos distintos y tienen
responsabilidades claras. Unificarlas en una sola base habría creado un
acoplamiento difícil de revertir: un cambio en la facturación podría obligar a
tocar el registro de viajes, y la operación de cada área quedaría atada a la
velocidad de la otra.

El ecosistema invierte esa relación. Cada aplicación se despliega por separado
sobre una infraestructura común, y la integración —cuando se necesita— es un
contrato explícito entre sistemas, no un efecto colateral de compartir tablas.

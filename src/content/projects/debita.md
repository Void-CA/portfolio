---
title: Debita
subtitle: Sistema de gestión de deuda y cobros automatizados
description: Plataforma para automatizar el seguimiento, cálculo y cobro de deudas, reduciendo la fricción operativa entre acreedores y deudores.
status: finished
featured: true
order: 1

problem: >
  La gestión manual de deuda generaba errores en cálculos, retrasos en cobros
  y una experiencia opaca para ambas partes. No existía un sistema centralizado
  que permitiera seguimiento en tiempo real ni automatización de notificaciones.

solution: >
  Construcción de un sistema end-to-end que modela el ciclo completo de deuda:
  registro, cálculo dinámico de intereses, generación de estados de cuenta,
  automatización de cobros y dashboard de seguimiento para ambas partes.

decisions:
  - "Modelado de dominio centrado en el ciclo de vida de deuda, no en CRUD"
  - "Separación entre capa de cálculo financiero y capa de presentación"
  - "APIs idempotentes para cobros para evitar duplicación en redes inestables"
  - "Event-driven para notificaciones, desacoplando el core del sistema de alertas"

result: >
  Sistema en uso productivo. Reducción del 90% en errores de cálculo manual
  y automatización del flujo de cobros que eliminó la necesidad de intervención
  humana en el 70% de los casos estándar.

tech:
  - Django
  - PostgreSQL
  - Redis
  - React
  - Celery
areas:
  - backend
  - system design
  - data modeling
  - automation

repo: "#"
date: 2025-06-15
---

## Arquitectura del sistema

Debita se construyó como un sistema modular donde cada componente tiene una responsabilidad clara:

- **Core de dominio**: Modela las entidades de deuda, pagos, intereses y estados
- **Motor de cálculo**: Servicio aislado para cómputo financiero con pruebas exhaustivas
- **Cola de eventos**: Procesamiento asíncrono de notificaciones y cobros programados
- **Dashboard**: Interfaz de seguimiento para acreedores y deudores

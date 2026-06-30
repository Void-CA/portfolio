---
title: IoT Data Platform
subtitle: Plataforma de ingestión y monitoreo de sensores en tiempo real
description: Arquitectura desacoplada para ingesta, procesamiento y visualización de datos de sensores usando MQTT como backbone de mensajería.
status: ongoing
featured: true
order: 1

problem: >
  La gestión de datos de sensores en entornos reales requiere un sistema que maneje
  múltiples fuentes de datos simultáneas, con diferentes protocolos y frecuencias,
  sin acoplar la ingesta al procesamiento.

challenge: >
  Diseñar un pipeline donde la ingesta (MQTT), el almacenamiento time-series
  (InfluxDB) y la metadata (PostgreSQL) operen de forma independiente, garantizando
  que la pérdida de un componente no colapse todo el sistema. El trade-off principal:
  consistencia eventual vs simplicidad operativa.

solution: >
  Sistema modular orientado a flujos de datos: broker MQTT como sistema de mensajería
  central, backend Node.js para procesamiento y routing, InfluxDB para series temporales,
  PostgreSQL para metadata de sensores, y React para visualización. Todo orquestado
  con Docker para reproducibilidad.

decisions:
  - "MQTT sobre HTTP para comunicación sensor→servidor: menor overhead, reconexión nativa, QoS integrado"
  - "InfluxDB para time-series en lugar de PostgreSQL: queries de agregación temporal nativos, compresión de datos"
  - "PostgreSQL separado para metadata: las relaciones entre sensores, ubicaciones y configuraciones son relacionales, no series"
  - "Separación clara entre ingesta y procesamiento: si el backend se cae, el broker MQTT acumula mensajes"
  - "Docker para orquestación: cada componente es un servicio independiente, escalable por separado"

highlights:
  - "Sensores multifuente con MQTT"
  - "Pipeline de datos en tiempo real"
  - "Separación time-series / metadata por tipo de consulta"

result: >
  Sistema operativo con capacidad de registrar múltiples fuentes de datos,
  asociarlas a topics, procesar señales y almacenarlas en sistemas especializados
  para análisis posterior.

tech:
  - MQTT
  - Node.js
  - React
  - InfluxDB
  - PostgreSQL
  - Docker
areas:
  - backend
  - data
  - monitoring

repo: "#"
date: 2025-09-01
---

## Arquitectura del sistema

La plataforma se estructura como un pipeline de datos desacoplado:

- **Capa de ingesta**: Broker MQTT recibe datos de sensores con QoS configurable
- **Capa de procesamiento**: Node.js subscribe a topics, procesa señales y enruta
- **Capa de almacenamiento**: InfluxDB para métricas temporales, PostgreSQL para metadata
- **Capa de visualización**: React consume datos de ambas fuentes para dashboards

---
title: Argos
subtitle: Monitor de procesos en tiempo real con CLI
description: Sistema de supervisión de procesos del sistema operativo con métricas dinámicas, alertas configurables y exportación de datos estructurados.
status: ongoing
featured: true
order: 2

problem: >
  La monitorización de procesos en entornos productivos requería herramientas
  pesadas o configuraciones complejas. No existía una CLI ligera que permitiera
  supervisar métricas clave y exportar datos sin overhead.

challenge: >
  Recopilar métricas del sistema operativo cada segundo sin consumir recursos
  significativos del propio sistema monitorizado. El trade-off: precisión vs
  overhead en entornos con recursos limitados.

solution: >
  CLI en Rust que utiliza sysinfo para recopilar métricas del sistema en tiempo
  real, permite configurar umbrales de alerta y exporta datos en formatos
  estructurados (JSON, CSV) para análisis posterior.

decisions:
  - "Rust por seguridad de memoria y rendimiento determinista — un monitor que consume el 20% del CPU es un monitor que no sirve"
  - "Arquitectura por plugins para métricas customizables sin recompilar"
  - "Exportación incremental para evitar pérdida de datos en cortes"

highlights:
  - "< 2MB de consumo de RAM"
  - "Muestreo configurable desde 1 segundo"
  - "Zero-dependency en runtime"

result: >
  Herramienta en uso para monitoreo de servidores. Consumo de <2MB RAM
  y latencia de muestreo configurable desde 1 segundo.

tech:
  - Rust
  - sysinfo
  - serde
areas:
  - systems
  - cli
  - monitoring

repo: "#"
date: 2026-01-10
---

## Diseño técnico

Argos se estructura en tres capas:

- **Collector**: Recolección de métricas vía sysinfo con polling configurable
- **Processor**: Filtrado, agregación y detección de anomalías
- **Exporter**: Serialización a múltiples formatos y salida configurable

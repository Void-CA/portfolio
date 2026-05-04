---
title: Argos
subtitle: Monitor de procesos en tiempo real con CLI
description: CLI en Rust para monitoreo y análisis de procesos en ejecución, con métricas del sistema y exportación de resultados en múltiples formatos.
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
  real: CPU por proceso, memoria RAM, uso de disco, red y uptime. Permite configurar
  umbrales de alerta, muestreo por intervalos y exportación a JSON/CSV.

decisions:
  - "Rust por seguridad de memoria y rendimiento determinista — un monitor que consume el 20% del CPU es un monitor que no sirve"
  - "sysinfo como abstracción multiplataforma: mismo binario, diferentes sistemas operativos"
  - "Exportación incremental para evitar pérdida de datos en cortes de ejecución"
  - "CLI sobre daemon: el usuario controla cuándo y cómo se ejecuta, sin procesos fantasma"

highlights:
  - "< 2MB de consumo de RAM"
  - "Muestreo configurable desde 1 segundo"
  - "Exportación a JSON y CSV"
  - "Funcionamiento offline sin dependencias externas"

result: >
  Herramienta en uso para monitoreo de servidores y debugging de procesos.
  Consumo de <2MB RAM, latencia de muestreo configurable desde 1 segundo,
  y exportación de datos estructurados para análisis posterior.

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
- **Processor**: Filtrado, agregación y detección de umbrales
- **Exporter**: Serialización a JSON/CSV y salida configurable

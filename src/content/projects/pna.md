---
title: PNA
subtitle: Procesamiento académico offline con WebAssembly
description: Sistema para analizar notas académicas mediante un parser ejecutado en WebAssembly, funcionando completamente sin conexión a internet.
status: finished
featured: false
order: 4

problem: >
  El procesamiento de datos académicos requiere acceso a herramientas en la nube
  o software instalado. En contextos con conectividad limitada, esto imposibilita
  el análisis de información educativa.

challenge: >
  Ejecutar lógica de procesamiento de datos compleja en el navegador sin depender
  de un servidor, manteniendo performance aceptable y un bundle size razonable.

solution: >
  Parser de datos académicos compilado a WebAssembly que se ejecuta completamente
  en el navegador. Transforma datos estructurados en métricas útiles (promedios,
  distribuciones, tendencias) sin necesidad de conexión ni backend.

decisions:
  - "WebAssembly sobre JavaScript puro: el parser requiere procesamiento intensivo que JS no maneja eficientemente"
  - "100% offline: sin llamadas a API, sin dependencia de infraestructura externa"
  - "Datos estructurados como input: el sistema espera un formato conocido, no improvisa con datos sucios"

highlights:
  - "Funcionamiento 100% offline"
  - "Parser compilado a WebAssembly para performance"
  - "Cero dependencia de infraestructura"

result: >
  Sistema funcional que permite a instituciones educativas procesar y analizar
  notas académicas sin conexión, combinando eficiencia de compilación nativa
  con accesibilidad web.

tech:
  - WebAssembly
  - Rust
areas:
  - data
  - systems
  - web

repo: "#"
date: 2025-04-15
---

## Arquitectura

El sistema se compone de dos capas:

- **Parser WASM**: Compilado desde Rust, recibe datos estructurados y devuelve métricas
- **Capa analítica**: Interpreta los resultados del parser y genera visualizaciones

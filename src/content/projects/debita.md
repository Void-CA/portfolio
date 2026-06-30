---
title: Debita
subtitle: Plataforma de gestión financiera centrada en modelado de dominio
description: Sistema diseñado para estructurar operaciones financieras, centralizar estados de cuenta y representar reglas de deuda mediante una arquitectura desacoplada y orientada al dominio.
status: finished
featured: true
order: 3

problem: >
  La operación financiera del stakeholder dependía de procesos manuales y
  herramientas dispersas donde la información se duplicaba constantemente.
  Los estados de cuenta requerían validaciones manuales, existían dificultades
  para rastrear cambios históricos y el cálculo de deuda dependía de procesos
  operativos difíciles de auditar y mantener.

challenge: >
  Modelar un dominio financiero donde múltiples reglas afectan el estado de una
  deuda a lo largo del tiempo, garantizando integridad de datos, trazabilidad
  histórica y consistencia entre operaciones relacionadas. El sistema debía
  representar correctamente el comportamiento financiero sin reducir el dominio
  a simples operaciones CRUD.

solution: >
  Desarrollo de una plataforma centrada en el modelado explícito del ciclo de
  vida de la deuda y sus operaciones asociadas. El sistema organiza reglas de
  negocio, cálculos financieros, estados de cuenta y eventos operativos dentro
  de una arquitectura desacoplada orientada a mantener consistencia y permitir
  evolución futura del dominio.

decisions:
  - "Separación estricta entre lógica de dominio e infraestructura"
  - "Modelado orientado al comportamiento financiero y no únicamente a persistencia"
  - "Core del sistema desarrollado en Rust para priorizar control y confiabilidad"
  - "Arquitectura modular preparada para evolución y extensión del dominio"
  - "Uso de Tauri para construir una aplicación de escritorio ligera y desacoplada"
  - "Diseño orientado a trazabilidad, validación y auditoría de operaciones"

highlights:
  - "Digitalización estructurada de procesos financieros"
  - "Trazabilidad completa sobre operaciones y estados"
  - "Validación continua junto al stakeholder durante el desarrollo"
  - "Arquitectura centrada en integridad y evolución del dominio"
  - "Separación clara entre lógica financiera e interfaz"

result: >
  Debita permitió transformar un proceso financiero manual en un sistema capaz
  de representar, validar y centralizar información financiera de manera
  estructurada. Más allá de automatizar tareas operativas, el proyecto
  estableció una base arquitectónica enfocada en mantenibilidad, trazabilidad
  y evolución futura del dominio financiero.

tech:
  - Rust
  - Tauri
  - React
  - TypeScript
  - PostgreSQL
  - Docker

areas:
  - backend
  - financial systems

repo: "#"
date: 2025-06-15
---

## Arquitectura del sistema

Debita fue diseñado como un sistema modular orientado al dominio financiero,
donde la lógica crítica del sistema se mantiene desacoplada de la interfaz y
de los mecanismos de persistencia.

- **Core de dominio en Rust**: Encapsula reglas financieras, validaciones y comportamiento del sistema
- **Capa de aplicación**: Coordina casos de uso y flujo operativo entre módulos
- **Persistencia desacoplada**: Manejo de almacenamiento preparado para distintos motores y escenarios
- **Interfaz en React + Tauri**: Cliente de escritorio orientado a productividad operativa
- **Sistema de automatización**: Responsable de seguimiento operativo y coordinación de eventos internos

La arquitectura prioriza integridad de datos, mantenibilidad y evolución del
dominio, permitiendo extender funcionalidades sin comprometer la lógica
financiera central.
---
title: Analítica de notas académicas
brand: PNA
subtitle: Convertir formatos institucionales en información útil para decidir
description: Plataforma que toma las planillas de notas que los docentes ya usan y las convierte en analítica por grupo, evaluación y estudiante, sin cambiar el flujo institucional.
status: finished
featured: true
order: 2
kind: client
clientNote: sector educación
role: Diseño y desarrollo completo — motor de procesamiento, aplicación web y de escritorio.

problem: >
  Las notas se registran en planillas de formato fijo, poco legibles: leerlas
  exige interpretar filas y columnas a mano, y seguir el avance de cada alumno
  insume tiempo.

challenge: >
  Aprovechar los datos sin cambiar el flujo de trabajo de la institución. La
  restricción: la planilla institucional no se podía reemplazar ni reformar la
  cultura organizacional de la institución. El sistema tenía que aceptar el
  formato existente tal como llega, y aun así entregar análisis que hoy no existe.

solution: >
  PNA toma las planillas que la institución ya usa y las convierte, en el
  navegador, en analítica por grupo, evaluación y estudiante, sin cambiar el
  flujo de registro.

decisions:
  - "Aceptar el formato institucional como entrada en lugar de imponer uno nuevo: menos fricción y adopción real"
  - "Motor de procesamiento en Rust compilado a WebAssembly: los datos se procesan en el cliente, sin backend"
  - "Tres niveles de lectura (grupo, evaluación, estudiante) en lugar de un tablero genérico único"
  - "Métrica de esfuerzo requerido (puntos necesarios sobre puntos restantes) para proyectar el estado del alumno"
  - "Desglose por evaluación para identificar temas difíciles y actuar a tiempo"
  - "Aplicación web y de escritorio construidas sobre el mismo motor"

improvements:
  - label: "Análisis"
    before: "Leer filas y columnas a mano"
    after: "Por grupo, evaluación y estudiante"
  - label: "Seguimiento"
    before: "Detección tardía de dificultades"
    after: "Alerta temprana por alumno"
  - label: "Adopción"
    beforeLabel: "Contexto"
    before: "La institución no podía cambiar su forma de registrar"
    after: "Se usa la planilla institucional tal como llega"
  - label: "Ejecución"
    beforeLabel: "Contexto"
    before: "La herramienta debía distribuirse sin infraestructura"
    after: "Corre en el navegador (Rust → WebAssembly), sin backend"

result: >
  Los docentes pasaron de leer una planilla a trabajar con información
  accionable, y hoy hacen seguimiento individual sin cambiar su forma de
  registrar.

tech:
  - Rust
  - WebAssembly
  - TypeScript
  - React
  - Tauri

image: ../../assets/pna/pna-home.png
imageAlt: Vista general del grupo en PNA

images:
  - key: starting-data
    src: ../../assets/pna/pna-starting-data.png
    alt: Planilla institucional de notas en formato de hoja de cálculo
    caption: >
      Punto de partida: la planilla institucional que los docentes ya usan. Poco
      legible por sí misma y difícil de analizar sin procesarla.
  - key: home
    src: ../../assets/pna/pna-home.png
    alt: Vista general del grupo en PNA
    caption: >
      Vista general del grupo: número de estudiantes, evaluaciones, puntos
      acumulados, promedio, distribución de notas y estado respecto a la nota de
      aprobación.
  - key: evaluation-detail
    src: ../../assets/pna/pna-evaluation-detail.png
    alt: Detalle de una evaluación con distribución de resultados
    caption: >
      Detalle por evaluación: composición de resultados (bien, regular, mal),
      promedio, entregas y distribución. Pensado para detectar en qué evaluaciones
      el grupo tuvo dificultades.
  - key: student-detail
    src: ../../assets/pna/pna-student-detail.png
    alt: Detalle individual de un estudiante con su historial de rendimiento
    caption: >
      Seguimiento por estudiante: puntaje, percentil, esfuerzo requerido y
      comparación de su rendimiento contra el promedio del grupo en cada evaluación.

date: 2025-04-15
---

## La idea

La restricción institucional no era un obstáculo, era el punto de partida. PNA
parte de una idea simple: **no hace falta reformar toda la cultura organizacional
de una empresa para demostrar que sus datos tienen valor**. Si el formato
institucional ya existe y funciona, el software debería adaptarse a él, no al
revés.

## Tres niveles de lectura

PNA organiza la información según la decisión que habilita:

- **Grupo**: estado general, distribución de notas y cuántos alumnos están en
  riesgo de no aprobar.
- **Evaluación**: composición de resultados y rendimiento por actividad, para
  encontrar dónde el grupo se está trabando.
- **Estudiante**: puntaje, percentil y el *esfuerzo requerido* —qué porcentaje
  de los puntos restantes necesita— junto a su historial frente al promedio del
  grupo.

Ese último indicador es el que convierte los datos en acción: permite apoyar a
tiempo, con evidencia, antes de que el resultado sea irreversible.

---
title: Analítica de notas académicas
brand: PNA
subtitle: Convertir formatos institucionales en información útil para decidir
description: Plataforma que toma las planillas de notas que los docentes ya usan y las convierte en analítica por grupo, evaluación y estudiante, sin cambiar el flujo institucional.
status: finished
featured: false
order: 5
role: Diseño y desarrollo completo — motor de procesamiento, aplicación web y de escritorio.

problem: >
  Los docentes registran las notas en planillas institucionales de formato fijo.
  El formato es poco legible por sí mismo: sacar conclusiones exige interpretar
  filas y columnas a mano, y detectar a tiempo a un alumno en dificultad resulta
  prácticamente imposible.

challenge: >
  Aprovechar los datos sin cambiar el flujo de trabajo de la institución. La
  restricción: la planilla institucional no se podía reemplazar ni reformar la
  cultura organizacional de la institución. El sistema tenía que aceptar el
  formato existente tal como llega, y aun así entregar análisis que hoy no existe.

solution: >
  PNA toma las planillas institucionales y las transforma en analítica accionable
  en tres niveles: grupo, evaluación y estudiante. El docente sube el formato que
  ya usa y obtiene un desglose de las dimensiones de la información, la
  distribución de notas y una proyección del estado de cada alumno.

decisions:
  - "Aceptar el formato institucional como entrada en lugar de imponer uno nuevo: menos fricción y adopción real"
  - "Motor de procesamiento en Rust compilado a WebAssembly: los datos se procesan en el cliente, sin backend"
  - "Tres niveles de lectura (grupo, evaluación, estudiante) en lugar de un tablero genérico único"
  - "Métrica de esfuerzo requerido (puntos necesarios sobre puntos restantes) para proyectar el estado del alumno"
  - "Desglose por evaluación para identificar temas difíciles y actuar a tiempo"
  - "Aplicación web y de escritorio construidas sobre el mismo motor"

highlights:
  - "Datos procesados en el cliente (Rust → WebAssembly), sin backend"
  - "Tres niveles de análisis: grupo, evaluación y estudiante"
  - "Proyección por alumno: aprobado, bueno, advertencia, crítico o reprobado"
  - "Identificación temprana de evaluaciones y temas con dificultades"

result: >
  Los docentes pasaron de una planilla difícil de leer a información accionable
  sin cambiar su forma de registrar. El sistema permite ver el estado del grupo,
  detectar evaluaciones problemáticas y hacer seguimiento individual con apoyo
  temprano, manteniendo intacto el flujo institucional.

tech:
  - Rust
  - WebAssembly
  - TypeScript
  - React
  - Tauri

image: ../../assets/pna/pna-home.png

images:
  - src: ../../assets/pna/pna-starting-data.png
    alt: Planilla institucional de notas en formato de hoja de cálculo
    caption: >
      Punto de partida: la planilla institucional que los docentes ya usan. Poco
      legible por sí misma y difícil de analizar sin procesarla.
  - src: ../../assets/pna/pna-home.png
    alt: Vista general del grupo en PNA
    caption: >
      Vista general del grupo: número de estudiantes, evaluaciones, puntos
      acumulados, promedio, distribución de notas y estado respecto a la nota de
      aprobación.
  - src: ../../assets/pna/pna-evaluation-detail.png
    alt: Detalle de una evaluación con distribución de resultados
    caption: >
      Detalle por evaluación: composición de resultados (bien, regular, mal),
      promedio, entregas y distribución. Pensado para detectar en qué evaluaciones
      el grupo tuvo dificultades.
  - src: ../../assets/pna/pna-student-detail.png
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

---
title: Síndrome metabólico en colaboradores universitarios
subtitle: Análisis estadístico de datos antropométricos mediante regresión logística
description: Investigación académica actualmente en desarrollo. Participación como analista de datos en el estudio de factores asociados al síndrome metabólico, mediante análisis estadístico de datos antropométricos provenientes de una encuesta nacional y construcción de modelos de regresión logística.
status: ongoing
featured: true
order: 2

problem: >
  Una investigación académica requería caracterizar los factores asociados
  al síndrome metabólico en una población adulta, trabajando con datos
  antropométricos y clínicos provenientes de una encuesta nacional
  estandarizada. La etapa analítica demandaba modelar relaciones no
  triviales entre variables de exposición, covariables y desenlaces
  binarios, preservando rigor metodológico en un equipo donde mi rol
  era técnico, no clínico.

challenge: >
  Construir modelos de regresión logística que controlaran covariables
  relevantes, validar supuestos estadísticos sobre datos de encuesta con
  estructura jerárquica, y traducir los hallazgos en evidencia
  accionable para el equipo de investigación, sin atribuirme un rol
  que no me correspondía (epidemiológico, clínico o de diseño del
  estudio).

solution: >
  Análisis estadístico en R con tidyverse como núcleo: limpieza y
  recodificación de variables antropométricas, construcción de modelos
  GLM (regresión logística con ajuste por covariables), validación de
  supuestos (bondad de ajuste, multicolinealidad, influencia),
  estimación de odds ratios con intervalos de confianza, y tablas
  descriptivas estratificadas generadas con gtsummary para discusión
  con el equipo.

decisions:
  - "R + tidyverse como stack base: ecosistema maduro para análisis estadístico reproducible y comunicable"
  - "Modelos GLM con ajuste por covariables relevantes: edad, sexo, nivel de actividad física, antecedentes familiares"
  - "gtsummary para tablas descriptivas: legibles para el equipo no técnico, precisas para el equipo técnico"
  - "broom para tidy de outputs: separa el modelado de la presentación de resultados, evitando código spaghetti"
  - "Validación de supuestos como paso explícito, no como asunción: multicolinealidad, bondad de ajuste, análisis de residuos"
  - "Scope acotado al rol de analista: modelado, validación y comunicación de resultados, sin atribuciones de diseño del estudio"

highlights:
  - "Modelos de regresión logística para factores asociados al síndrome metabólico"
  - "Análisis descriptivo estratificado con gtsummary para discusión con equipo no técnico"
  - "Validación de supuestos estadísticos como flujo explícito (multicolinealidad, bondad de ajuste)"
  - "Regresiones ajustadas por covariables relevantes del dominio clínico-epidemiológico"
  - "Stack reproducible en R: scripts versionables, no análisis en Excel perdido"

result: >
  Investigación actualmente en desarrollo. Mi participación se centró en
  el análisis estadístico y la construcción de modelos, con validación
  continua de supuestos y comunicación de hallazgos al equipo de
  investigación. Los modelos aportaron evidencia cuantitativa sobre los
  factores asociados al desenlace estudiado, con estimaciones reportadas
  en términos de odds ratios ajustados.

tech:
  - R
  - tidyverse
  - broom
  - gtsummary
  - GLM
  - PostgreSQL

areas:
  - data analysis
  - data engineering
  - statistical modeling
  - research

repo: "#"
date: 2026-02-01
---

## Contexto y rol

La investigación buscaba caracterizar los factores asociados al síndrome
metabólico en una población adulta, utilizando datos antropométricos y
clínicos provenientes de una encuesta nacional estandarizada. Mi rol
fue estrictamente el de **analista de datos**: participé en la etapa
de modelado, validación y comunicación de resultados, no en el diseño
del estudio ni en la interpretación clínica.

El equipo de investigación estuvo a cargo del planteamiento
epidemiológico, la selección de variables, y la discusión final de
hallazgos. Yo aporté rigor técnico en la construcción de modelos, en la
verificación de supuestos estadísticos, y en la traducción de
resultados a formatos discutibles con perfiles no estadísticos.

## Enfoque metodológico

El análisis se estructuró en capas explícitas:

- **Limpieza y recodificación**: variables antropométricas, datos faltantes,
  recodificación de categorías, construcción de variables derivadas
  (IMC, perímetros, razones).
- **Análisis descriptivo estratificado**: tablas con `gtsummary` para
  caracterizar la muestra por subgrupos, discutibles con el equipo no
  técnico.
- **Modelado**: regresión logística con ajuste por covariables
  relevantes. Estimación de odds ratios crudos y ajustados con
  intervalos de confianza al 95%.
- **Validación de supuestos**: multicolinealidad (VIF), bondad de
  ajuste (Hosmer-Lemeshow cuando aplicó), análisis de influencia
  (Cook's distance, leverage), evaluación de residuales.

La separación entre modelado (`glm`), tidy de resultados (`broom`) y
presentación (`gtsummary`) permitió iterar sobre los modelos sin
reescribir la capa de reporte, y mantener un script versionable donde
cada transformación quedó documentada.

## Aprendizajes técnicos

La participación reforzó una convicción: **el análisis estadístico es
software**. Un script reproducible en R supera en rigor y trazabilidad
a una hoja de cálculo con fórmulas. Cada decisión de modelado (qué
covariables incluir, qué transformación aplicar, cómo tratar los
faltantes) quedó registrada en código, no en notas mentales.

También dejó una lección de scope: el analista no es el epidemiólogo.
Construir modelos ajustados correctamente no autoriza a interpretar
clínicamente los hallazgos. Esa frontera disciplinar se respeta
explicitando el rol y remitiendo al equipo correspondiente las
conclusiones de fondo.

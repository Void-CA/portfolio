---
name: "Data Analysis"

statement: "El análisis estadístico es software: un script reproducible supera una hoja de cálculo con fórmulas."

description: "Análisis estadístico aplicado con foco en regresión, modelos GLM, validación de supuestos y comunicación de resultados a equipos no técnicos. Énfasis en reproducibilidad y separación entre modelado, tidy de resultados y presentación."

impact_areas:
  - análisis estadístico
  - modelos de regresión
  - visualización de datos
  - comunicación técnica
  - reproducibilidad
  - investigación aplicada

perspectives:
  - Data
  - Modeling

specialties:
  - data-engineering
  - scientific-computing

projects:
  - sindrome-metabolico

level: advanced

order: 0

narrative:
  intro: "Mi acercamiento al análisis de datos fue como ingeniero, no como estadístico formal. Eso es a la vez limitación y fortaleza: limitación porque me formé leyendo papers, no en un programa de maestría; fortaleza porque vengo con disciplina de software reproducible donde el estadístico puro a veces improvisa con hojas de cálculo."

  what_changed:
    - "Cada transformación queda en código: no hay análisis que dependa de pasos manuales en Excel"
    - "El modelado, el tidy de resultados y la presentación son capas separadas: cambiar una no rompe las otras"
    - "Validación de supuestos como flujo explícito, no como asunción implícita"
    - "El analista no es el epidemiólogo: el scope se respeta, las conclusiones de fondo las firma el equipo correspondiente"
    - "Una tabla publicable se construye con código, no con copy-paste de outputs"

  how_i_use:
    - "Regresión logística con ajuste por covariables relevantes al dominio"
    - "Análisis descriptivo estratificado con gtsummary para discusión con perfiles no técnicos"
    - "broom para separar el modelado de la presentación de resultados"
    - "Validación de supuestos: multicolinealidad (VIF), bondad de ajuste, análisis de influencia"
    - "Stack reproducible en R + tidyverse: cada decisión de modelado queda documentada en el script"

  projects_context: "La investigación sobre síndrome metabólico fue el proyecto donde esta skill se aplicó con mayor intensidad. Mi rol fue el de analista: modelado, validación de supuestos, construcción de tablas descriptivas y comunicación de hallazgos al equipo de investigación. El equipo clínico-epidemiológico estuvo a cargo del diseño del estudio y la interpretación clínica; yo aporté rigor técnico en la construcción de modelos y en la traducción de resultados a formatos discutibles."

  tradeoffs:
    - "R tiene una curva de entrada real para quien viene de otros lenguajes: la sintaxis funcional no es obvia"
    - "tidyverse es poderoso pero exige entender el modelo de datos en columnas largas y anchas"
    - "Un script reproducible no sustituye el juicio estadístico: la herramienta amplifica, no reemplaza"
    - "Sin coautoría formal, el reconocimiento de la contribución queda atado a la generosidad del equipo"
---

## Introducción

Mi acercamiento al análisis de datos fue como ingeniero, no como
estadístico formal. Eso es a la vez limitación y fortaleza: vengo con
disciplina de software reproducible donde el estadístico puro a veces
improvisa con hojas de cálculo.

## Alcance del rol

La investigación sobre síndrome metabólico fue el proyecto donde
esta skill se aplicó con mayor intensidad. Mi rol fue el de analista:
modelado, validación de supuestos, construcción de tablas descriptivas
y comunicación de hallazgos al equipo de investigación. El equipo
clínico-epidemiológico estuvo a cargo del diseño del estudio y la
interpretación clínica; yo aporté rigor técnico en la construcción
de modelos.

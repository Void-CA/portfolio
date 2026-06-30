---
name: "Data Engineering"
description: "Construcción de pipelines de datos que van desde la ingesta hasta el análisis, con foco en integridad, reproducibilidad y separación clara entre el dato crudo, las transformaciones y el consumo analítico."
competencies:
  - postgresql
  - influxdb
  - data-analysis
featured_projects:
  - iot-platform
  - sindrome-metabolico
order: 3
---

Diseño pipelines donde el dato fluye por etapas explícitas: ingesta,
limpieza, transformación, almacenamiento especializado, análisis. Cada
etapa tiene su responsabilidad acotada, su formato esperado, su
política de fallos. Los datos se almacenan según el patrón de acceso
(series temporales en InfluxDB, metadata relacional en PostgreSQL),
no según la moda.

La disciplina que sostiene esta especialidad es tratar los datos
como artefactos de software: versionados, reproducibles, documentados.
Un script que produce el mismo resultado mañana es más valioso que
uno que produce el resultado hoy sin explicarse.

---
name: Docker
statement: "Si no puedes reproducirlo local, no podrás reproducirlo en producción."
description: Orquestación de servicios con contenedores para reproducibilidad y escalabilidad independiente por componente.
impact_areas:
  - infraestrutura
  - devops
  - arquitectura
  - reproducibilidad
projects:
  - iot-platform
  - debita
level: intermediate
order: 7
narrative:
  intro: |
    Empecé con Docker por frustración: "funciona en mi máquina" era el chiste recurrente.
    Lo primero que me enseñó fue que un sistema no es solo código - son servicios, configs, datos.
    Docker Compose fue el tool que hizo click para prototipar arquitecturas distribuidos.
  what_changed: |
    Antes pensaba en "la aplicación" como un bloque. Docker me enseñó a pensar en servicios
    que se compositionan. Ahora siempre diseño pensando en componentes independientes:
    cada servicio puede escalar, actualizarse y fallar por separado.
    También aprendí a pensar en infraestructura como código - el Dockerfile dice más que mil READMEs.
  how_i_use: |
    Siempre para desarrollo local - cada proyecto tiene docker-compose.yml.
    Para producción en proyectos pequeños/medianos donde un managed service es overkill.
    Ahora uso más directamente los servicios cloud (Supabase, Railway) para evitar ops.
    Lo elegí cuando hay multiples servicios (broker + backend + DB) o cuando el setup es complejo.
  projects_context: |
    En IoT Platform: MQTT broker + Node.js + InfluxDB + PostgreSQL.
    Sin Docker, el onboarding hubiera sido impracticable.
    En Debita similar: Django + Celery + Redis + PostgreSQL - cada uno en su container.
  tradeoffs: |
    Docker Desktop en Mac tiene overhead notable.
    Para proyectos simples (un backend + DB), puede ser overkill.
    El networking entre containers es diferente de producción real.
    Los volumes en Mac/M1 pueden tener problemas específicos.
    No es una solución de production deployment por sí solo.
---
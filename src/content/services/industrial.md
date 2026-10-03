---
label: "Sistemas industriales"
title: "Software para monitoreo y control de procesos físicos"
need: "Observar equipos y procesos"
description: "Conecto software con equipos y señales para observar procesos y ejecutar respuestas definidas por la operación."
icon: "cpu"
order: 5
image: "../../assets/servicios/industrial.jpg"
imageAlt: "Equipo físico conectado a un sistema de monitoreo y control"
summary:
  problem: "Sin visibilidad de lo que pasa en los equipos."
  points:
    - "Señales leídas automáticamente"
    - "Estado del proceso a la vista"
    - "Alertas ante desvíos"
  scope:
    - "Sensores"
    - "Medidores"
    - "Equipos"
    - "Procesos"
    - "Alertas"
detail:
  problem: >
    Los equipos y procesos físicos generan información que hoy se lee, se anota
    o se controla de forma manual. Sin una conexión con el software, saber qué
    está pasando en planta —y reaccionar a tiempo— depende de que alguien esté
    mirando.
  situations:
    - "Los datos de los equipos se leen o se anotan a mano."
    - "No hay una forma directa de ver el estado de un proceso en el momento."
    - "Detectar un desvío depende de que alguien lo note."
    - "La información de planta no llega a los sistemas de gestión."
  changes:
    - "Las señales de los equipos se leen automáticamente."
    - "El estado del proceso se observa en un solo lugar."
    - "Un desvío genera una alerta en lugar de esperar a que alguien lo vea."
    - "Las lecturas quedan registradas para consultarlas después."
  applications:
    - title: "Monitoreo de planta"
      description: "Lectura continua de sensores y medidores, con el estado del proceso visible en un tablero."
    - title: "Control de equipos"
      description: "Respuestas automáticas según reglas definidas por la operación."
    - title: "Alertas ante desvíos"
      description: "Avisos cuando una lectura sale del rango esperado."
    - title: "Historial de lecturas"
      description: "Registro de las señales en el tiempo, para análisis y trazabilidad."
  integrations:
    - "Equipos y sensores"
    - "Controladores y PLC"
    - "Sistemas de gestión en planta"
  build:
    - "Rust"
    - "Procesamiento en tiempo real"
    - "Integración con ROS2 y hardware"
  fit:
    - "Los equipos son parte central de la operación."
    - "Necesitás ver el proceso sin estar presente."
    - "Un desvío tiene consecuencias si no se detecta."
    - "La información de planta tiene que llegar a la gestión."
evidence:
  project: "thalos"
---

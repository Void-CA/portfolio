---
name: "Sistemas Distribuidos"
description: "Diseño de sistemas donde múltiples componentes independientes se comunican, procesan datos en paralelo y toleran fallos parciales. Foco en mensajería asíncrona, separación de responsabilidades por servicio y observabilidad end-to-end."
competencies:
  - mqtt
  - docker
  - nodejs
  - influxdb
featured_projects:
  - iot-platform
order: 2
---

Diseño sistemas donde ninguna pieza es crítica para el funcionamiento
del resto. La caída de un procesador no colapsa el pipeline; la
congestión de un sensor no bloquea a los demás. Esto se logra con
mensajería desacoplada (MQTT como backbone), backends especializados
cada uno con su rol claro, y orquestación con Docker que hace visible
la topología desde el primer día.

La disciplina que sostiene esta especialidad es asumir que las cosas
fallan y diseñar para esa realidad, no para el camino feliz.

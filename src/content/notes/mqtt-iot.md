---
title: "Por qué MQTT encajó bien en simulación IoT"
description: "MQTT no fue una elección trivial. Evaluamos HTTP, WebSockets y AMQP antes de decidir. Esto es lo que aprendimos."
date: 2026-03-15
project: iot-platform
tags:
  - MQTT
  - IoT
  - arquitectura
  - mensajería
published: true
---

## El problema de comunicación en IoT

Cuando diseñamos la plataforma IoT, el primer desafío no fue el almacenamiento ni la visualización. Fue la comunicación: ¿cómo reciben datos N sensores simultáneamente sin acoplar la ingesta al procesamiento?

HTTP/REST parecía la opción obvia (es lo que todos conocen), pero tiene problemas graves para IoT:

- **Polling**: el servidor no sabe cuándo hay datos nuevos hasta que el cliente pregunta
- **Overhead de conexión**: cada request abre y cierra conexión TCP
- **Sin QoS**: si el cliente no está disponible, el mensaje se pierde

## Por qué MQTT ganó

MQTT resuelve estos problemas con un modelo publish/subscribe sobre TCP:

```
Sensor → [MQTT Broker] → Backend (subscriber)
                       → Dashboard (subscriber)
                       → Logger (subscriber)
```

### Conexión persistente

Un sensor se conecta una vez y publica mensajes sin overhead de handshake. En simulaciones con 50+ sensores publicando cada 2 segundos, la diferencia vs HTTP era de ~3x menos tráfico de red.

### QoS integrado

MQTT tiene tres niveles de calidad de servicio:

| QoS | Comportamiento | Uso |
|-----|---------------|-----|
| 0   | Al menos una vez, sin confirmación | Telemetría no crítica (temp, humedad) |
| 1   | Al menos una vez, con confirmación | Datos operativos |
| 2   | Exactamente una vez | Comandos críticos |

Esto nos permitió mezclar tráfico crítico y no crítico en el mismo bus sin lógica adicional.

### Retención de mensajes

Un sensor publica su último valor conocido. Un dashboard nuevo se conecta y recibe automáticamente el último estado de cada sensor sin tener que esperar la próxima publicación.

## El trade-off

MQTT no es perfecto:

- **No es bueno para request/response**: si necesitás que un sensor responda a un comando específico, necesitás un patrón adicional (request topic + response topic)
- **Broker como single point of failure**: si el broker cae, todo el sistema de comunicación se detiene. Lo mitigamos con Docker para reinicio automático y persistencia de sesiones
- **Overhead de topics con muchos niveles**: tener topics muy anidados (`sensor/granja/bloque-a/fila-3/temperatura`) escala mal en brokers con muchos subscribers

## Lo que haría diferente hoy

Usaría MQTT v5 en vez de v3.1.1 por las propiedades de usuario en los mensajes, que permiten meter metadata sin modificar el payload. También exploraría MQTT over WebSockets como alternativa para dashboards que no necesitan conexión nativa MQTT.

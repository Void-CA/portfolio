---
label: "Integraciones"
title: "Conectar sistemas y datos"
need: "Conectar mis sistemas"
description: "Diseño integraciones para que tus sistemas intercambien información sin duplicar trabajo."
icon: "link"
order: 3
image: "../../assets/servicios/integracion.jpg"
imageAlt: "Sistemas distintos conectados entre sí mediante una capa de integración"
summary:
  problem: "Sistemas que no comparten la información."
  points:
    - "El dato se carga una vez"
    - "La información se mueve sola"
    - "Cada sistema sigue independiente"
  scope:
    - "Facturación"
    - "Contabilidad"
    - "Inventario"
    - "Sucursales"
    - "Formularios"
detail:
  problem: >
    Cuando dos sistemas no se hablan, la información se carga dos veces, se pasa
    a mano o directamente no está donde la necesitás. Cada sistema funciona,
    pero el trabajo de conectarlos lo termina haciendo una persona.
  situations:
    - "Un mismo dato se carga en más de un sistema."
    - "La información pasa de uno a otro copiándola a mano."
    - "No sabés si dos sistemas siguen mostrando lo mismo."
    - "Cada área tiene su propia versión de los datos."
  changes:
    - "La información se mueve sola entre los sistemas."
    - "Un dato se carga una sola vez."
    - "Cada sistema sigue siendo independiente."
    - "Todas las áreas ven la misma información actualizada."
  applications:
    - title: "Facturación y contabilidad"
      description: "Los comprobantes emitidos se reflejan automáticamente en la contabilidad."
    - title: "Ventas e inventario"
      description: "Cada venta descuenta existencias sin carga manual."
    - title: "Formularios y sistemas"
      description: "Lo que se carga en un formulario llega directo al sistema que lo necesita."
    - title: "Sucursales entre sí"
      description: "La información de cada sucursal se consolida sin pasar archivos."
  build:
    - "APIs REST y webhooks"
    - "Colas y eventos"
    - "Sincronización entre sistemas"
  fit:
    - "Ya usás varias herramientas que deberían compartir datos."
    - "El pasaje manual entre sistemas tiene costo o error."
    - "Querés que tus herramientas sigan como están."
    - "Necesitás una versión única y actualizada de los datos."
evidence:
  project: "alliance"
---

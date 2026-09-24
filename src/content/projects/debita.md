---
title: Gestión de finanzas operativas multi-empresa
brand: Debita
subtitle: Registros financieros dispersos convertidos en información trazable y consultable
description: Sistema que administra la información financiera de múltiples empresas clientes por separado y reconstruye el saldo de cada tercero a partir de sus operaciones. Reemplaza la consolidación manual en Excel por consultas trazables y reportes que antes tomaban hasta un día.
status: finished
featured: true
order: 1
kind: client
clientNote: sector financiero
role: Modelado de dominio, arquitectura y desarrollo del core del sistema.

problem: >
  La contabilidad de múltiples empresas se gestionaba mediante archivos Excel
  independientes, dificultando la consolidación y trazabilidad de la información.

challenge: >
  Modelar un dominio financiero donde múltiples reglas afectan el estado de una
  deuda a lo largo del tiempo, garantizando integridad de datos, trazabilidad
  histórica y consistencia entre operaciones relacionadas. El sistema no debía
  conservar solo el saldo final, sino permitir reconstruir cómo se llegó a él
  —factura, pago, ajuste, impuesto— sin reducir el dominio a simples operaciones
  CRUD ni asumir una única forma de operar.

solution: >
  Una plataforma financiera multi-tenant que centraliza operaciones, mantiene
  los datos aislados y permite reconstruir el estado de cada obligación.

architecture: >
  Sistema modular con separación estricta entre el dominio financiero y la
  infraestructura. El aislamiento de datos por empresa y la trazabilidad de
  operaciones son requisitos transversales, no características añadidas después.

decisions:
  - label: "Multi-tenancy"
    detail: "Aislamiento lógico de datos por empresa, como requisito de primer orden"
  - label: "Dominio"
    detail: "Modelado orientado al comportamiento financiero, no únicamente a persistencia"
  - label: "Trazabilidad"
    detail: "Operaciones (factura, pago, ajuste, impuesto) en lugar de almacenar solo el saldo resultante"
  - label: "Core"
    detail: "Rust, para priorizar control y confiabilidad"
  - label: "Desktop"
    detail: "Tauri, aplicación de escritorio ligera y desacoplada"
  - label: "Persistencia"
    detail: "PostgreSQL"
  - label: "Frontend"
    detail: "React + TypeScript"
  - label: "Deploy"
    detail: "Docker"

improvements:
  - label: "Consultas"
    value: "< 1 s"
    before: "Búsqueda manual entre archivos de Excel, uno por cliente"
    after: "Instantáneas, con filtros e historial"
  - label: "Estado financiero"
    value: "< 5 s"
    before: "Consolidación manual · hasta 1 día"
    after: "Disponible bajo demanda"
  - label: "Trazabilidad"
    before: "Reconstruir cada saldo a mano, entre registros"
    after: "Factura → pago → ajuste → impuesto → saldo"
  - label: "Cobros"
    before: "Vencimientos y comportamiento de pago, sin consolidar"
    after: "Facturado vs. cobrado, DSO y aging por tercero"

result: >
  Los estados financieros pasaron de requerir consolidación manual a estar
  disponibles bajo demanda, reduciendo una tarea que podía ocupar un día a
  segundos.

tech:
  - Rust
  - Tauri
  - React
  - TypeScript
  - PostgreSQL
  - Docker

areas:
  - backend
  - financial systems

image: ../../assets/debita/debita-stats.png
imageAlt: Tablero analítico de Debita con gráficos de facturación, cobro, DSO y aging

images:
  - key: stats
    src: ../../assets/debita/debita-stats.png
    alt: Tablero analítico de Debita con gráficos de facturación, cobro, DSO y aging
    caption: >
      Vista analítica: consolida la información del resto del sistema en
      indicadores de negocio. Facturación vs. cobro por mes, DSO (días promedio
      de pago por cliente), un heatmap de aging —cuánto tiempo lleva el dinero
      adeudado— y su dimensión vertical: quién lo debe.
  - key: workspace
    src: ../../assets/debita/debita-workspace.png
    alt: Pantalla de selección de empresa en Debita
    caption: >
      Punto de entrada: selección de la empresa cliente. Aquí se materializa el
      aislamiento lógico de los datos; cada empresa opera sobre su propio
      conjunto de información financiera.
  - key: client-detail
    src: ../../assets/debita/debita-client-detail.png
    alt: Perfil financiero de un cliente con saldo pendiente, recargos y facturas
    caption: >
      Perfil de un tercero dentro de una empresa: saldo pendiente, recargos por
      mora, cada factura asociada con su búsqueda histórica y un timeline de la
      actividad reciente.
  - key: payment-tracking
    src: ../../assets/debita/debita-payment-tracking.png
    alt: Detalle de los pagos y ajustes asociados a una factura
    caption: >
      Trazabilidad de una factura. En la operación real, una factura rara vez se
      cierra con un único pago: pasa por impuestos, mora, ajustes —descuentos o
      pagos no monetarios— y finalmente por pagos, que pueden ser varios en
      facturas grandes.

repo: "#"
date: 2025-06-15
---

## El problema, no la herramienta

Debita no nace de la consigna "pasar Excel a una aplicación web". Nace de dos
problemas concretos del trabajo contable: **mantener aislada** la información de
cada empresa cliente y **consolidar** un estado financiero que estaba repartido
entre decenas de registros. Excel resolvía el control básico, pero su modelo
—un archivo por cliente— no escalaba ni en organización ni en tiempo de análisis.

La propuesta de valor está mejor descrita como **registros financieros dispersos
→ información financiera estructurada, trazable y consultable**.

## Trazabilidad, no solo saldo

Un saldo es un número; saber *de dónde salió* es otra cosa. Debita conserva
operaciones y ajustes, no solo el resultado, de modo que cualquier saldo puede
reconstruirse:

```
Factura → Pago → Ajuste → Impuesto → Saldo resultante
```

en lugar de únicamente `Saldo = $X`. Esa granularidad permite inspeccionar el
estado financiero y auditar los movimientos que lo produjeron.

## Por qué apareció cada capacidad

Las funcionalidades del sistema no fueron decisiones arbitrarias: responden a la
cadena de necesidades del dominio.

- **Múltiples empresas clientes** → necesidad de aislamiento → *selección de empresa y datos separados por cliente*.
- **Cada empresa tiene terceros y obligaciones** → necesidad de estructurar relaciones financieras → *clientes, proveedores y facturas*.
- **Las facturas cambian de estado** → necesidad de representar saldos y vencimientos → *motor de estados*.
- **Los saldos cambian mediante operaciones** → necesidad de registrar pagos y ajustes → *motor de pagos y trazabilidad*.
- **El usuario necesita conocer el estado completo** → necesidad de consolidar información → *consultas, reportes y tablero analítico*.
- **La información se procesaba manualmente** → necesidad de automatización → *reducción drástica del tiempo de respuesta*.

Parte de estas capacidades se descubrieron durante el desarrollo —no estaban
todas definidas al inicio— y se convirtieron en funcionalidades a medida que el
dominio lo exigió.

## Arquitectura del sistema

Debita fue diseñado como un sistema modular orientado al dominio financiero,
donde la lógica crítica se mantiene desacoplada de la interfaz y de los
mecanismos de persistencia.

- **Core de dominio en Rust**: Encapsula reglas financieras, validaciones y comportamiento del sistema
- **Capa de aplicación**: Coordina casos de uso y flujo operativo entre módulos
- **Persistencia desacoplada**: Manejo de almacenamiento preparado para distintos motores y escenarios
- **Interfaz en React + Tauri**: Cliente de escritorio orientado a productividad operativa
- **Sistema de automatización**: Responsable de seguimiento operativo y coordinación de eventos internos

La arquitectura prioriza integridad de datos, mantenibilidad y evolución del
dominio, permitiendo extender funcionalidades sin comprometer la lógica
financiera central.
# Portafolio Técnico

Colección de proyectos y habilidades técnicas que demuestran experiencia en desarrollo de software, con énfasis en arquitectura de sistemas, diseño de dominio y construcción de soluciones escalables.

---

## Proyectos

### Destacados

#### [IoT Data Platform](/projects/web/portfolio/src/content/projects/iot-platform.md) — *En desarrollo*
Plataforma de ingestión y monitoreo de sensores en tiempo real. Arquitectura desacoplada usando MQTT como backbone de mensajería, InfluxDB para series temporales y PostgreSQL para metadata.

**-stack**: MQTT, Node.js, React, InfluxDB, PostgreSQL, Docker

**estado actual**: Arquitectura implementada, pipeline operativo

---

#### [Argos](/projects/web/portfolio/src/content/projects/argos.md) — *En desarrollo*
CLI en Rust para monitoreo de procesos del sistema. Consumo mínimo de recursos (<2MB RAM), muestreo configurable y exportación a JSON/CSV.

**-stack**: Rust, sysinfo, serde

**estado actual**: Herramienta funcional en uso

---

#### [Debita](/projects/web/portfolio/src/content/projects/debita.md) — *Completado*
Sistema de gestión de deuda y cobros automatizados. 90% de reducción en errores de cálculo manual, 70% de cobros automatizados.

**-stack**: Django, PostgreSQL, Redis, React, Celery, Docker

**estado actual**: En producción

---

### Otros Proyectos

#### [PNA](/projects/web/portfolio/src/content/projects/pna.md) — *Completado*
Procesamiento académico offline con WebAssembly. Parser compilado desde Rust que funciona 100% offline en el navegador.

**-stack**: WebAssembly, Rust

---

#### [MagicORM](/projects/web/portfolio/src/content/projects/magic-orm.md) — *En desarrollo*
Exploración de diseño de una capa de acceso a datos. Queries composicionales con escape a SQL crudo, transparencia sobre magia.

**-stack**: TypeScript, PostgreSQL

---

#### [Kora](/projects/web/portfolio/src/content/projects/kora.md) — *En desarrollo*
Sistema de gestión agrícola basado en Domain-Driven Design. Modelo de dominio con comportamiento, separación intención/ejecución.

**-stack**: TypeScript, DDD

---

## Habilidades

### Tecnologías Principales

| Habilidad | Nivel | Proyectos |
|-----------|-------|-----------|
| Rust | Advanced | argos, pna |
| System Design | Advanced | iot-platform, debita, argos, magic-orm |
| DDD | Advanced | kora, debita |
| PostgreSQL | Advanced | debita, iot-platform, magic-orm |
| Django | Advanced | debita |
| WebAssembly | Intermediate | pna |
| Docker | Intermediate | iot-platform, debita |
| MQTT | Intermediate | iot-platform |
| Node.js | Intermediate | iot-platform |
| React | Intermediate | iot-platform |

### Áreas de Especialización

- **Arquitectura de sistemas distribuidos**: Pipelines desacoplados con tolerancia a fallos parciales
- **Diseño de dominio**: Modelado que reflejar realidad de negocio, separación intención/ejecución
- **Sistemas embedded y CLI**: Herramientas de bajo consumo, procesamiento nativo
- **Data engineering**: Time-series, procesamiento en tiempo real, batch offline

---

## Puntos de Mejora e Incompletitud

### Proyectos Sin Terminar

- **IoT Data Platform**: La capa de visualización (React) no está documentada ni integrada completamente. Falta dashboard de alertas en tiempo real.
- **Argos**: CLI funcional pero sin tests de integración, sin releasebinarios para distribución.
- **Kora**: Modelo de dominio implementado, pero sin API ni interfaz. Solo-modelo.

### Proyectos Sin Documentación Técnica

- **Debita**: Aunque está en producción, no existe documento de arquitectura detallado. Las decisiones técnicas están en el markdown del proyecto pero no hay ADR ni specs formales.

### Proyectos Abandonados o Pendientes

- **MagicORM**: Quedó como exploración técnica. No hay casos de uso reales que lo justifiquen más allá del ejercicio de diseño.

### Gaps en Portafolio

1. **Falta проектов con Cloud**: Ningún proyecto usa AWS/GCP/Azure. Solo Docker local.
2. **Falta проектов con Testing**: Solo mentiona "pruebas exhaustivas" en Debita, pero no se muestra coverage ni estratégia.
3. **Falta проектов de CI/CD**: Pipelines de despliegue no documentados.
4. **Falta проектов con Grafana/Prometheus**: Menciona dashboards pero no hay integración con tooling de observabilidad.
5. **Falta проектов Frontend Real**: El único proyecto frontend es React para dashboards IoT, pero no es una app interactiva completa.
6. **Falta proyectos Mobile**: Nada de React Native, Flutter, o nativo.
7. **Falta proyectos de AI/ML**: No hay nada de machine learning ni data science.

### Documentación Pendiente

- No hay screenshotso demos visuales de las interfaces.
- No hay links a repositorios públicos (todos tienen `repo: "#"`).
- No hay datos de contacto o CV.

### Áreas de Conocimiento Sin Cobertura

- Seguridad: No hay mention de auth, JWT, OAuth, encryption.
- Cache: No hay mention de Redis más allá de Cola para Celery.
- API Design: Solo REST mentionné, no GraphQL ni gRPC.
- Database Advanced: No hay migrations complejas, partitioning, o replication configs.

---

## Cómo Usar Este Portafolio

Para ver los proyectos en detalle:

```bash
cd projects/web/portfolio
npm run dev
```

Para agregar un nuevo proyecto, crear un archivo en `src/content/projects/` con el formato del frontmatter.
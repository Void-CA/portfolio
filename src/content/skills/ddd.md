---
name: Domain-Driven Design

statement: "El código refleja el negocio solo cuando el modelo tiene comportamiento, no solo datos."

description: Modelado de dominio que refleja la realidad del negocio, separando intención de ejecución y protegiendo invariantes.

impact_areas:
  - arquitectura
  - modelado
  - patrones
  - consistencia

projects:
  - kora
  - debita

level: advanced

order: 3

narrative:
  intro: |
    Descubrí DDD frustrado: tenía modelos que eran "correctos" según la DB pero no decir nada sobre el negocio.
    Todo eran tablas con relaciones. El negocio vivía en mi cabeza, no en el código.
    Leer Evans fue como tener un vocabulario nuevo para cosas que ya intuía.

  what_changed:
    - "De pensar en 'qué tablas necesito' a pensar en 'qué conceptos del negocio tienen reglas que proteger'"
    - "Los agregados no son solo agrupar entidades, son definir qué operaciones son válidas y cuáles romperían la consistencia"
    - "Separar la intención (lo que quiero hacer) de la ejecución (cómo se hace)"
    - "El lenguaje ubícuo como herramienta de comunicación con domain experts"

  how_i_use:
    - "No lo aplico todo en cada proyecto: para CRuds simples es overkill"
    - "Lo uso cuando el dominio tiene reglas complejas: workflows, financieros, ciclos"
    - "Empiezo por el lenguaje ubícuo con el domain expert antes de escribir código"
    - "Identificar bounded contexts primero, modelo después"

  projects_context: |
    En Kora, el modelo de ciclos agrícolas necesitaba separar planificación de ejecución.
    Un ciclo tiene períodos con reglas específicas, y esas reglas cambian según la fase.
    DDD permitió modelar eso sin que el modelo se convierta en anémico.
    En Debita, el aggregate de Deuda protegía invariantes financieros que un ORM no puede.

  tradeoffs:
    - "DDD tiene jerga que asusta: no todo equipo lo necesita entender"
    - "El modelo inicial siempre está mal: hay que refactorizarlo varias veces"
    - "Para sistemas simples, agrega complejidad innecesaria"
    - "El mapping al código puede ser tricky sin una buena capa de abstracción"
---
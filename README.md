# Framework Playwright Híbrido


# Framework Híbrido de Pruebas Automatizadas

Este proyecto es un framework híbrido diseñado para automatizar pruebas de aplicaciones modernas, combinando pruebas de interfaz de usuario (UI), pruebas de API, validación de bases de datos, lectura de archivos Excel y pruebas de seguridad. El framework utiliza un enfoque BDD (Behavior Driven Development) con Cucumber, Playwright para la automatización de UI y se integra con ReportPortal para centralizar y visualizar los resultados de las pruebas. Además, se contempla la integración con un pipeline ...
## Tecnologías y Componentes

- Node.js
- TypeScript
- ts-node
- Cucumber (@cucumber/cucumber)
- Playwright
- Chai
- ReportPortal
- Supertest, mysql2, pg, xlsx, fs-extra, docx, jimp, chalk, date-fns

## Estructura del Proyecto

```
playwright-hybrid-framework-final/
├── package.json
├── tsconfig.json
├── reportportal.bdd.config.js
├── reportportal.config.js
├── reportPortalFormatter.js
├── playwright.config.ts
├── README.md
├── azure-pipelines.yml
├── src/
│   └── bdd/
│       └── features/
│           ├── login.feature
│           └── steps/
│               ├── steps.ts
│               └── support/
│                   ├── world.ts
│                   └── hooks.ts
└── types/
    └── custom.d.ts
```

## Instalación y Configuración

### Instalación de dependencias

```bash
npm install
```

### Ejecutar pruebas

- Ejecutar pruebas UI:

```bash
npm test
```

- Ejecutar pruebas BDD:

```bash
npm run test:bdd
```

## ReportPortal

- Reportes enriquecidos con capturas, videos, logs.
- Historial de ejecuciones, filtros, estadísticas.
- Configurado para pruebas BDD y UI.

## Integración con MCP y CursosIA

- Ejecución automática desde pipeline.
- Generación de reportes automáticos.
- Ajustes inteligentes de scripts con IA (futuro).
- Validación de DOM y flujos en tiempo real.

## Conclusión

Este framework es una solución integral que automatiza, organiza y da trazabilidad a todo tipo de pruebas, visualizando resultados de forma profesional y preparando el entorno para la evolución continua con inteligencia artificial.

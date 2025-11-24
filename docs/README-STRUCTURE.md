Estructura del repositorio

Objetivo: describir la convención de carpetas y cómo contribuir.

Carpetas raíz añadidas:
- `.github/workflows` — CI/CD (pipelines de GitHub Actions).
- `tests` — pruebas unitarias e integración (ej. Vitest/Jest/Cypress).
- `docs` — documentación del proyecto y guía de arquitectura.
- `scripts` — scripts de ayuda (PowerShell / Bash) para tareas comunes.
- `locales` — ficheros de traducción (i18n).
- `infra` — infraestructura-as-code (Terraform/Bicep/ARM templates).
- `docker` — Dockerfiles y `docker-compose`.

Recomendaciones rápidas:
- Mantener `src` para código de la aplicación.
- Colocar documentación técnica en `docs/` y guías de uso en `README.md`.
- Añadir tests en `tests/` y configurar CI para ejecutarlos.

Cómo ejecutar la CI localmente:
- `npm ci`
- `npx tsc --noEmit`
- `npm run build`


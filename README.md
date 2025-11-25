# Ivochote Community Web

![Astro](https://img.shields.io/badge/Astro-%20-blue) ![Node](https://img.shields.io/badge/Node-%3E=_18-brightgreen) ![Tailwind](https://img.shields.io/badge/Tailwind-3.x-blue)

Sitio institucional para el Centro Poblado de Ivochote. Este repositorio contiene la web estática construida con Astro, componentes React/TS para funcionalidades interactivas y TailwindCSS para estilos.

Resumen rápido:

- Páginas públicas: noticias, eventos, turismo, servicios, autoridades.
- Datos de ejemplo en `src/data/*.json` para desarrollo sin backend.
- Estructura modular: `services/`, `types/`, `components/`, `layouts/`.

---

## Tecnologías

- Astro (SSG / Islands)
- React (componentes interactivos)
- TypeScript
- TailwindCSS
- Vite / PostCSS

---

## Estado del proyecto

Proyecto en desarrollo. Muchas páginas y componentes han sido refactorizados para mejorar accesibilidad, tipado y consistencia. Faltan tareas de validación final (typecheck, tests y ejecución local).

---

## Estructura principal del repositorio

> Nota: la sección siguiente contiene una vista consolidada y detallada de la estructura del proyecto.

---

## Scripts útiles

Usa PowerShell en Windows (ejemplos):

```powershell
npm install
npm run dev      # Ejecuta el servidor de desarrollo (Vite)
npm run build    # Genera la versión de producción
npm run typecheck # Ejecuta TypeScript (tsc --noEmit)
npm test         # Ejecuta tests (Vitest)
```

---

## Desarrollo local

1.  Clona el repositorio y entra en la carpeta:

```powershell
git clone <repo-url>
cd "Ivochote-Community-Web"
```

2.  Instala dependencias y levanta el entorno:

```powershell
npm install
npm run dev
```

3.  Para comprobar tipos y errores estáticos:

```powershell
npm run typecheck
```

4.  Para construir la versión de producción:

# WEB DESCRIPCION

Sitio institucional del Centro Poblado de Ivochote. Proyecto construido con Astro, componentes React + TypeScript para las porciones interactivas y Tailwind CSS para el sistema de estilos.

## Índice

- [Descripción](#descripción)
- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Desarrollo](#desarrollo)
- [Construcción y despliegue](#construcción-y-despliegue)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Internals importantes](#internals-importantes)

## Descripción

Esta aplicación es el sitio web oficial del Centro Poblado de Ivochote. Provee páginas públicas para noticias, eventos, turismo, servicios y autoridades. Los datos de ejemplo están incluidos para facilitar el desarrollo local sin necesidad de backend.

## Características

- Sitio estático preconstruido con Astro.
- Componentes interactivos con React y TypeScript.
- Estilado con Tailwind CSS.
- Localización básica (`locales/` con `en.json` y `es.json`).
- Datos de ejemplo en `src/data/*.json` para desarrollo offline.

## Requisitos

- Node.js >= 18 (recomendado).
- npm (v9+ recomendado) o Yarn/PNPM si prefieres.

## Instalación

Desde PowerShell en Windows:

```powershell
git clone <REPO_URL>
cd "Ivochote-Community-Web"
npm install
```

Reemplaza `<REPO_URL>` por la URL del repositorio.

## Desarrollo

Levantamiento en modo desarrollo (Hot Reload):

```powershell
npm run dev
```

Comprobar tipos TypeScript:

```powershell
npm run typecheck
```

Pruebas: no hay tests configuradas en `package.json`. Si deseas añadir tests, agrega un script `test`.

## Construcción y despliegue

Generar artefacto de producción:

```powershell
npm run build
```

Servidor de previsualización de la build:

```powershell
npm run preview
```

Consejo: para desplegar en plataformas estáticas (Netlify, Vercel, Cloudflare Pages, etc.) usa la carpeta de salida que genere `astro build`.

## Estructura del proyecto (detallada)

A continuación encontrarás un árbol simplificado del repositorio con descripciones breves de las carpetas y archivos más relevantes. Usa esto como guía rápida para ubicar código y activos.

```
.
├─ astro.config.mjs        # Configuración de Astro
├─ package.json            # Scripts y dependencias (dev, build, preview, typecheck)
├─ postcss.config.cjs      # Configuración PostCSS / Tailwind
├─ tailwind.config.mjs     # Configuración Tailwind CSS
├─ tsconfig.json           # Configuración TypeScript
├─ README.md               # Documentación (este archivo)
├─ LICENSE                 # Licencia del proyecto
├─ public/                 # Archivos estáticos servidos (imágenes, fonts)
│  ├─ assets/
│  └─ images/
├─ src/
│  ├─ pages/               # Rutas y páginas (Astro files => URL routes)
│  │  ├─ index.astro
│  │  ├─ noticias/
│  │  └─ ...
│  ├─ components/          # Componentes React/TSX y Astro reutilizables
│  │  ├─ news/             # NewsCard, NewsSkeleton, etc.
│  │  └─ ui/
│  ├─ layouts/             # Layouts globales (BaseLayout, HomeLayout, ArticleLayout)
│  ├─ data/                # JSON con datos de ejemplo (mock data)
│  ├─ services/            # Lógica para consumir/transformar datos (authoritiesService, newsService...)
│  ├─ types/               # Tipos TypeScript para las entidades del dominio (News, Event, Service...)
│  ├─ styles/              # CSS global y Tailwind entrypoint
│  └─ utils/               # Helpers y formateadores
└─ config/
  ├─ navigation.ts        # Menú y rutas para la Navbar
  └─ site.config.ts

```

Descripción de carpetas y archivos clave:

- **`astro.config.mjs`**: archivo de configuración de Astro (integraciones y adaptadores).
- **`package.json`**: contiene los scripts principales: `dev`, `build`, `preview`, `typecheck`.
- **`src/pages/`**: cada archivo `.astro` o carpeta aquí representa una ruta pública. Ejemplos: `src/pages/noticias/index.astro`, `src/pages/eventos/[slug].astro`.
- **`src/components/`**: componentes visuales y widgets; separados por dominio (news, events, ui, etc.) para facilitar la navegación.
- **`src/layouts/`**: layouts que envuelven páginas; aquí están `BaseLayout.astro`, `HomeLayout.astro`, `ArticleLayout.astro`.
- **`src/data/`**: JSON con contenido de ejemplo usado por los servicios en `src/services/`; útil para desarrollo sin backend.
- **`src/services/`**: funciones que encapsulan la lectura y transformación de datos (simulan API); p. ej. `newsService.ts`, `eventsService.ts`.
- **`src/types/`**: definiciones TypeScript para las entidades del dominio (noticias, eventos, servicios, turismo, autoridades).
- **`public/`**: recursos estáticos accesibles directamente desde la web (optimiza imágenes y favicons aquí).
- **`config/navigation.ts`**: punto central para la definición del menú; actualízalo si añades nuevas rutas que deben mostrarse en la navbar.

## Internals importantes

- Navegación: `config/navigation.ts` (añade entradas para que aparezcan en la `Navbar`).
- Localización: archivos en `locales/`.
- Servicios de datos: `src/services/*Service.ts` (consumen `src/data/*.json`).

## Cómo contribuir

1.  Fork del repositorio.
2.  Crea una rama descriptiva: `git checkout -b feature/mi-cambio`.
3.  Implementa y añade tests cuando aplique.
4.  Ejecuta `npm run typecheck` antes de subir cambios.
5.  Abre un Pull Request describiendo el cambio y su motivación.

Buenas prácticas:

- Mantén commits pequeños y descriptivos.
- Añade documentación para cambios visibles en UI o en la API interna.

## Licencia

Proyecto bajo la licencia indicada en `LICENSE` (archivo en la raíz del repositorio).

## Contacto

Para dudas, reportes o coordinación del proyecto, abre un issue en GitHub o contacta al mantenedor del repositorio.

---

_Mantenido por EzerZuniga_.

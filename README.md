# Ivochote Community Web

> Portal web oficial de la Municipalidad del Centro Poblado de Ivochote — Echarati, La Convención, Cusco, Perú.

![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-%3E=18-339933?logo=node.js&logoColor=white)
![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify&logoColor=white)

---

## Tabla de contenidos

- [Descripción](#descripción)
- [Stack tecnológico](#stack-tecnológico)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Inicio rápido](#inicio-rápido)
- [Scripts disponibles](#scripts-disponibles)
- [Despliegue](#despliegue)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

---

## Descripción

Sitio institucional estático generado con **Astro** (SSG + Islands Architecture). Incluye secciones de noticias, eventos, turismo, servicios y autoridades. Los datos de contenido viven en `src/data/*.json`, lo que permite desarrollo completamente offline sin necesidad de un backend.

---

## Stack tecnológico

| Herramienta                                                                        | Rol                                |
| ---------------------------------------------------------------------------------- | ---------------------------------- |
| [Astro 5](https://astro.build)                                                     | Framework SSG / Islands            |
| [React 18](https://react.dev)                                                      | Componentes interactivos (Islands) |
| [TypeScript 5](https://www.typescriptlang.org)                                     | Tipado estático                    |
| [Tailwind CSS 3](https://tailwindcss.com)                                          | Sistema de estilos utilitario      |
| [PostCSS](https://postcss.org)                                                     | Transformaciones CSS               |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | Generación de sitemap.xml          |
| [Netlify](https://netlify.com)                                                     | Plataforma de despliegue           |

---

## Estructura del proyecto

```
.
├── astro.config.mjs          # Integraciones: React, Tailwind, Sitemap
├── tailwind.config.mjs       # Configuración de Tailwind CSS
├── postcss.config.cjs        # PostCSS (autoprefixer, etc.)
├── tsconfig.json             # Configuración TypeScript
├── netlify.toml              # Build y headers de seguridad para Netlify
│
├── config/
│   ├── navigation.ts         # Definición de menú y rutas del sitio
│   └── site.config.ts        # Metadatos globales (nombre, URL, SEO)
│
├── public/
│   ├── manifest.json         # Web App Manifest
│   ├── robots.txt
│   └── assets/images/        # Imágenes estáticas (brand, carrusel, servicios…)
│
└── src/
    ├── pages/                # Rutas del sitio (archivo = URL)
    │   ├── index.astro
    │   ├── noticias/         # /noticias  /noticias/[slug]
    │   ├── eventos/          # /eventos   /eventos/[evento]
    │   ├── turismo/          # /turismo   /turismo/[lugar]
    │   ├── servicios/        # /servicios /servicios/[servicio]
    │   ├── autoridades/      # /autoridades /autoridades/[autoridad]
    │   ├── contacto/
    │   └── 404.astro
    │
    ├── layouts/
    │   ├── BaseLayout.astro    # Layout raíz (Head, Navbar, Footer)
    │   ├── HomeLayout.astro    # Layout para la página de inicio
    │   └── ArticleLayout.astro # Layout para páginas de detalle
    │
    ├── components/
    │   ├── authorities/        # AuthorityCard
    │   ├── events/             # EventCard
    │   ├── news/               # NewsCard, NewsSearch
    │   ├── services/           # ServiceCard
    │   ├── tourism/            # PlaceCard
    │   ├── layout/             # Navbar, Footer
    │   ├── seo/                # Head, JsonLd
    │   └── ui/                 # Button y primitivos reutilizables
    │
    ├── services/               # Capa de acceso a datos (consume src/data/)
    │   ├── apiClient.ts
    │   ├── newsService.ts
    │   ├── eventsService.ts
    │   ├── authoritiesService.ts
    │   ├── servicesService.ts
    │   └── tourismService.ts
    │
    ├── types/                  # Interfaces y tipos de dominio
    │   ├── news.ts
    │   ├── events.ts
    │   ├── authorities.ts
    │   ├── services.ts
    │   └── tourism.ts
    │
    ├── data/                   # Mock data JSON (desarrollo sin backend)
    │   ├── noticias.json
    │   ├── events.json
    │   ├── authorities.json
    │   ├── services.json
    │   └── turismo.json
    │
    ├── styles/
    │   ├── globals.css         # Variables CSS y reset global
    │   └── tailwind.css        # Entrypoint de Tailwind (@tailwind directives)
    │
    └── utils/
        ├── formatters.ts       # Formateo de fechas, moneda y texto
        ├── helpers.ts          # Funciones de soporte general
        └── validators.ts       # Validaciones de datos
```

---

## Inicio rápido

**Requisitos previos:** Node.js >= 18 y npm >= 9.

```powershell
# 1. Clonar el repositorio
git clone https://github.com/EzerZuniga/Ivochote-Community-Web.git
cd Ivochote-Community-Web

# 2. Instalar dependencias
npm install

# 3. Levantar servidor de desarrollo en http://localhost:4321
npm run dev
```

---

## Scripts disponibles

| Comando             | Descripción                                           |
| ------------------- | ----------------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo con HMR en `localhost:4321`    |
| `npm run build`     | Genera la build de producción en `dist/`              |
| `npm run preview`   | Previsualiza la build de producción localmente        |
| `npm run typecheck` | Verifica tipos con `tsc --noEmit` sin emitir archivos |

---

## Despliegue

El proyecto está configurado para desplegarse en **Netlify** vía [netlify.toml](netlify.toml):

- Comando de build: `npm run build`
- Directorio publicado: `dist/`
- Node.js: 18
- Incluye headers de seguridad (CSP, X-Frame-Options, etc.) y redirección 404 personalizada.

URL de producción: **https://municipalidad-de-ivochote.netlify.app**

Para otras plataformas (Vercel, Cloudflare Pages), apunta el directorio de salida a `dist/`.

---

## Contribuir

1. Haz un fork y crea una rama desde `main`:
   ```powershell
   git checkout -b feature/nombre-del-cambio
   ```
2. Implementa el cambio con commits pequeños y descriptivos.
3. Verifica que no haya errores de tipos:
   ```powershell
   npm run typecheck
   ```
4. Abre un **Pull Request** describiendo el problema que resuelve y la solución aplicada.

> Para agregar una nueva sección: crea la página en `src/pages/`, el tipo en `src/types/`, el servicio en `src/services/`, los datos mock en `src/data/` y registra la ruta en `config/navigation.ts`.

---

## Licencia

Distribuido bajo los términos del archivo [LICENSE](LICENSE).

---

_Mantenido por [@EzerZuniga](https://github.com/EzerZuniga)._

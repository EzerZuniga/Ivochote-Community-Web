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

 Raíz:

 ```
 astro.config.mjs
 package.json
 postcss.config.cjs
 tailwind.config.mjs
 tsconfig.json
 README.md
 public/
 src/
   assets/
   components/
   data/
   hooks/
   layouts/
   lib/
   pages/
   services/
   styles/
   types/
   utils/
 tests/
 ```

 Carpetas clave:
 - `src/pages/` : rutas y páginas (ej. `noticias`, `eventos`, `turismo`, `servicios`, `autoridades`, `contacto`, `estadisticas`).
 - `src/components/` : componentes reutilizables (cards, formularios, carrusel, etc.).
 - `src/services/` : lógica para leer datos desde `src/data/*.json` (servicios, noticias, turismo, autoridades, eventos).
 - `src/types/` : tipos TypeScript para las entidades del sitio.
 - `src/data/` : datos JSON usados como mock/local dev.

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

 1. Clona el repositorio y entra en la carpeta:

 ```powershell
 git clone <repo-url>
 cd "Ivochote-Community-Web"
 ```

 2. Instala dependencias y levanta el entorno:

 ```powershell
 npm install
 npm run dev
 ```

 3. Para comprobar tipos y errores estáticos:

 ```powershell
 npm run typecheck
 ```

 4. Para construir la versión de producción:

 ```powershell
 npm run build
 ```

 ---

 ## Notas sobre desarrollo

 - Los datos de ejemplo están en `src/data/*.json` y los servicios en `src/services/*Service.ts` leen esos ficheros para simular una API.
 - Los layouts principales son `src/layouts/BaseLayout.astro`, `HomeLayout.astro` y `ArticleLayout.astro`.
 - Componentes importantes: `src/components/*` (NewsCard, EventCard, ServiceCard, PlaceCard, AuthorityCard, etc.).
 - Si agregas nuevas rutas, añade la entrada en `config/navigation.ts` si quieres que aparezcan en la `Navbar`.

 ---

 ## Contribuir

 1. Haz fork del repositorio.
 2. Crea una rama con tu feature: `git checkout -b feature/nombre`.
 3. Añade cambios, tests y asegúrate que `npm run typecheck` pasa.
 4. Abre un Pull Request con descripción clara.

 ---

 ## Contacto

 Para preguntas o coordinación del proyecto, abre un issue o contacta al mantenedor del repositorio vía GitHub.

 ---

 ## Licencia

 Revisa el archivo `LICENSE` en la raíz del repositorio.


# Ivochote Digital - Project Skeleton

Astro + React + TypeScript + TailwindCSS starter structure for the "Ivochote Digital" site.

## Quick start

1. Install dependencies
<!doctype html>
<html lang="es">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width,initial-scale=1" />
		<title>Ivochote Digital — Guía rápida</title>
	</head>
	<body>
		<header>
			<h1>Ivochote Digital</h1>
			<p>Plantilla profesional basada en <strong>Astro</strong>, <strong>React</strong>, <strong>TypeScript</strong> y <strong>TailwindCSS</strong>. Proyecto orientado a sitios comunitarios y portales municipales.</p>
		</header>

		<section>
			<h2>Características principales</h2>
			<ul>
				<li>Arquitectura con <em>islands</em> (Astro) y componentes React cuando se necesita interactividad.</li>
				<li>Tipado estricto con TypeScript.</li>
				<li>Estilos con TailwindCSS y utilidades personalizadas.</li>
				<li>Estructura modular: servicios, tipos, layouts y componentes reusables.</li>
			</ul>
		</section>

		<section>
			<h2>Requisitos</h2>
			<ul>
				<li>Node.js >= 18</li>
				<li>npm o pnpm como gestor de paquetes</li>
			</ul>
		</section>

		<section>
			<h2>Instalación y ejecución</h2>
			<p>Ejecuta los siguientes comandos en PowerShell (Windows):</p>
			<pre><code>npm install
npm run dev</code></pre>
			<p>Para generar una versión de producción:</p>
			<pre><code>npm run build
npm run preview</code></pre>
		</section>

		<section>
			<h2>Scripts útiles</h2>
			<ul>
				<li><code>npm run dev</code> — servidor de desarrollo</li>
				<li><code>npm run build</code> — compilar para producción</li>
				<li><code>npm run preview</code> — previsualizar la build localmente</li>
				<li><code>npm run typecheck</code> — ejecutar <code>tsc --noEmit</code></li>
			</ul>
		</section>

		<section>
			<h2>Estructura del proyecto</h2>
			<p>Resumen de carpetas y archivos importantes:</p>
			<ul>
				<li><code>src/pages/</code> — rutas y páginas del sitio (Astro)</li>
				<li><code>src/components/</code> — componentes UI reusables</li>
				<li><code>src/services/</code> — capa de acceso a datos y funciones helper</li>
				<li><code>src/styles/</code> — hojas globales y utilidades Tailwind</li>
				<li><code>src/types/</code> — definiciones TypeScript para el dominio</li>
				<li><code>public/</code> — assets públicos (imágenes, fuentes, descargas)</li>
				<li><code>astro.config.mjs</code>, <code>tailwind.config.mjs</code>, <code>tsconfig.json</code> — configuraciones principales</li>
			</ul>
		</section>

		<section>
			<h2>Buenas prácticas y recomendaciones</h2>
			<ul>
				<li>Mantener los componentes pequeños y con una sola responsabilidad.</li>
				<li>Centralizar llamadas a datos en <code>src/services/</code>.</li>
				<li>Usar tipos estrictos y evitar <code>any</code> cuando sea posible.</li>
				<li>Servir fuentes y assets desde <code>/public</code> para mejor rendimiento.</li>
			</ul>
		</section>

		<section>
			<h2>Contribuir</h2>
			<p>Si quieres contribuir:</p>
			<ol>
				<li>Fork del repositorio y crea una rama descriptiva.</li>
				<li>Haz cambios pequeños y testea en <code>npm run dev</code>.</li>
				<li>Abre un Pull Request con descripción clara y ejemplos si aplica.</li>
			</ol>
		</section>

		<footer>
			<p>License: <strong>MIT</strong> — ver <code>LICENSE</code>.</p>
			<p>Contacto: <a href="mailto:you@example.com">you@example.com</a> (reemplaza con contacto real).</p>
		</footer>
	</body>
</html>

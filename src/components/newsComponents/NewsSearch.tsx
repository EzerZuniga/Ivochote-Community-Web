import { useState, useMemo, useDeferredValue } from "react";
import type { News } from "../../types/news";
import { formatDate } from "../../utils/formatters";

interface Props {
  news: News[];
  categories: string[];
}

const CAT_COLORS: Record<string, string> = {
  institucional: "bg-primary-700",
  obras: "bg-amber-600",
  salud: "bg-emerald-600",
  comunidad: "bg-sky-600",
};

function catColor(cat?: string): string {
  return cat
    ? (CAT_COLORS[cat.toLowerCase()] ?? "bg-primary-600")
    : "bg-primary-600";
}

export default function NewsSearch({ news, categories }: Props) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    let results = news;
    if (selectedCategory) {
      results = results.filter(
        (n) =>
          (n.category ?? "").toLowerCase() === selectedCategory.toLowerCase(),
      );
    }
    if (deferredQuery.trim()) {
      const q = deferredQuery.trim().toLowerCase();
      results = results.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          (n.excerpt ?? "").toLowerCase().includes(q) ||
          (n.tags ?? []).some((t) => t.toLowerCase().includes(q)),
      );
    }
    return results;
  }, [news, deferredQuery, selectedCategory]);

  const [featured, ...rest] = filtered;

  return (
    <div>
      {/* Search bar */}
      <div className="relative mb-5">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar noticias por título, resumen o etiqueta..."
          className="w-full pl-12 pr-12 py-3.5 border-2 border-primary-200 bg-white text-sm text-primary-900 placeholder-primary-400 focus:outline-none focus:border-primary-600 transition-colors"
          aria-label="Buscar noticias"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-400 hover:text-primary-700 transition-colors"
            aria-label="Limpiar búsqueda"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Category pills */}
      {categories.length > 0 && (
        <div
          className="flex flex-wrap gap-2 mb-6"
          role="group"
          aria-label="Filtrar por categoría"
        >
          <button
            onClick={() => setSelectedCategory("")}
            aria-pressed={selectedCategory === ""}
            className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              selectedCategory === ""
                ? "bg-primary-800 text-white"
                : "bg-primary-50 text-primary-700 hover:bg-primary-100"
            }`}
          >
            Todas
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setSelectedCategory(selectedCategory === cat ? "" : cat)
              }
              aria-pressed={selectedCategory === cat}
              className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-primary-800 text-white"
                  : "bg-primary-50 text-primary-700 hover:bg-primary-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Result count */}
      <p
        className="text-sm text-primary-900/50 mb-6"
        aria-live="polite"
        aria-atomic="true"
      >
        {filtered.length === 0
          ? "No se encontraron noticias"
          : `${filtered.length} noticia${filtered.length !== 1 ? "s" : ""} encontrada${filtered.length !== 1 ? "s" : ""}`}
      </p>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="py-24 flex flex-col items-center gap-4 text-center">
          <svg
            className="w-16 h-16 text-primary-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <p className="font-semibold text-primary-900/60">Sin resultados</p>
            <p className="text-sm text-primary-900/40 mt-1">
              Intenta con otro término o categoría
            </p>
          </div>
          <button
            onClick={() => {
              setQuery("");
              setSelectedCategory("");
            }}
            className="text-sm font-semibold text-primary-700 underline hover:text-primary-500 transition-colors"
          >
            Limpiar filtros
          </button>
        </div>
      )}

      {/* Featured card (first result) */}
      {featured && (
        <a
          href={`/noticias/${featured.slug}`}
          className="group relative block no-underline mb-8 overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300"
          aria-label={`Leer noticia destacada: ${featured.title}`}
        >
          <div
            className="relative overflow-hidden bg-primary-100"
            style={{ aspectRatio: "21/8" }}
          >
            {featured.image ? (
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
                width={900}
                height={343}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 12h6"
                  />
                </svg>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-950/30 to-transparent" />
            {featured.category && (
              <span
                className={`absolute top-4 left-4 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 ${catColor(featured.category)}`}
              >
                {featured.category}
              </span>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 text-white">
              <div className="flex items-center gap-2 text-xs text-white/60 mb-2">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <time dateTime={featured.date}>
                  {formatDate(featured.date)}
                </time>
                <span className="text-white/40">·</span>
                <span className="text-amber-400 font-semibold">Destacado</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold leading-snug max-w-2xl group-hover:text-amber-300 transition-colors line-clamp-2">
                {featured.title}
              </h2>
              {featured.excerpt && (
                <p className="mt-2 text-sm sm:text-base text-white/70 line-clamp-2 max-w-2xl hidden sm:block">
                  {featured.excerpt}
                </p>
              )}
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-amber-400">
                Leer noticia completa
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div
            className="absolute bottom-0 left-0 h-[3px] w-0 bg-amber-400 transition-all duration-500 group-hover:w-full"
            aria-hidden="true"
          />
        </a>
      )}

      {/* Grid of remaining news */}
      {rest.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((n) => (
            <a
              key={n.id}
              href={`/noticias/${n.slug}`}
              className="group relative block no-underline bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              aria-label={`Leer: ${n.title}`}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden bg-primary-50 h-48">
                {n.image ? (
                  <img
                    src={n.image}
                    alt={n.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={400}
                    height={192}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-primary-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 12h6"
                      />
                    </svg>
                  </div>
                )}
                {n.category && (
                  <span
                    className={`absolute top-3 left-3 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 ${catColor(n.category)}`}
                  >
                    {n.category}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-primary-900/50 mb-2">
                  <svg
                    className="w-3.5 h-3.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <time dateTime={n.date}>{formatDate(n.date)}</time>
                </div>
                <h2 className="font-bold text-base sm:text-lg text-primary-900 leading-snug group-hover:text-primary-700 transition-colors line-clamp-2">
                  {n.title}
                </h2>
                {n.excerpt && (
                  <p className="text-sm text-primary-900/60 mt-2 line-clamp-2">
                    {n.excerpt}
                  </p>
                )}
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-primary-700 group-hover:text-primary-600 transition-colors uppercase tracking-wide">
                  Leer más
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 h-[3px] w-0 bg-primary-700 transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

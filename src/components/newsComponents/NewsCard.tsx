import type { News } from "../../types/news";
import { formatDate } from "../../utils/formatters";

interface Props {
  item: News;
  href?: string;
  variant?: "default" | "compact";
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

export default function NewsCard({ item, href, variant = "default" }: Props) {
  const url = href ?? `/noticias/${item.slug}`;
  const isCompact = variant === "compact";

  return (
    <article className="group relative bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
      <a
        href={url}
        className="block no-underline"
        aria-label={`Leer: ${item.title}`}
      >
        {/* Thumbnail */}
        <div
          className={`relative overflow-hidden bg-primary-50 ${isCompact ? "h-36" : "h-48"}`}
        >
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
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
          {item.category && (
            <span
              className={`absolute top-3 left-3 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 ${catColor(item.category)}`}
            >
              {item.category}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
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
            <time dateTime={item.date}>{formatDate(item.date)}</time>
          </div>
          <h3 className="font-bold text-base text-primary-900 leading-snug group-hover:text-primary-700 transition-colors line-clamp-2">
            {item.title}
          </h3>
          {!isCompact && item.excerpt && (
            <p className="text-sm text-primary-900/60 mt-1.5 line-clamp-2">
              {item.excerpt}
            </p>
          )}
          <div className="mt-3 flex items-center gap-1 text-xs font-bold text-primary-700 uppercase tracking-wide">
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
      </a>
      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 h-[3px] w-0 bg-primary-700 transition-all duration-500 group-hover:w-full"
        aria-hidden="true"
      />
    </article>
  );
}

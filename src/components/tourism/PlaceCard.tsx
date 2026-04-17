import type { TourismPlace } from "../../types/tourism";

interface Props {
  place: TourismPlace;
  href?: string;
}

const ICON_PATHS: Record<string, string> = {
  river:
    "M3 12c3-4 6-4 9 0s6 4 9 0M3 6c3-4 6-4 9 0s6 4 9 0M3 18c3-4 6-4 9 0s6 4 9 0",
  forest:
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M9 7h.01M15 11h.01M12 3l3 6H9l3-6z",
  coffee:
    "M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zm4-7v3m4-3v3m4-3v3",
  community:
    "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  thermal:
    "M13 10h-2V3l-7 11h6v7l7-11h-4zM9 2a1 1 0 011-1h4a1 1 0 010 2h-4a1 1 0 01-1-1z",
};

const CATEGORY_STYLE: Record<
  string,
  { iconBg: string; badge: string; accent: string }
> = {
  naturaleza: {
    iconBg: "bg-emerald-700",
    badge: "bg-emerald-100 text-emerald-800",
    accent: "bg-emerald-600",
  },
  gastronomia: {
    iconBg: "bg-amber-700",
    badge: "bg-amber-100 text-amber-800",
    accent: "bg-amber-500",
  },
  cultura: {
    iconBg: "bg-primary-700",
    badge: "bg-primary-100 text-primary-800",
    accent: "bg-primary-600",
  },
  aventura: {
    iconBg: "bg-rose-700",
    badge: "bg-rose-100 text-rose-800",
    accent: "bg-rose-500",
  },
};

const DEFAULT_STYLE = CATEGORY_STYLE.naturaleza;

const DIFFICULTY_LABEL: Record<string, string> = {
  baja: "Fácil",
  media: "Media",
  alta: "Alta",
};

export default function PlaceCard({ place, href }: Props) {
  const style = CATEGORY_STYLE[place.category] ?? DEFAULT_STYLE;
  const iconPath = ICON_PATHS[place.icon ?? ""] ?? ICON_PATHS["forest"];

  return (
    <article className="group flex flex-col bg-white border border-gray-200 shadow-md shadow-primary-950/10 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-950/20 transition-all duration-300 h-full">
      {/* Franja de acento */}
      <div className={`h-1 w-full ${style.accent}`} aria-hidden="true" />

      <div className="flex flex-col flex-1 p-5">
        {/* Ícono + badge */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-11 h-11 ${style.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
            </svg>
          </div>
          <span
            className={`text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 ${style.badge}`}
          >
            {place.category}
          </span>
        </div>

        {/* Título */}
        <h3 className="text-base font-bold text-gray-900 leading-snug mb-1">
          {href ? (
            <a href={href} className="hover:text-primary-700 transition-colors">
              {place.name}
            </a>
          ) : (
            place.name
          )}
        </h3>

        {/* Línea de acento */}
        <div className={`h-0.5 w-8 ${style.accent} mb-3`} aria-hidden="true" />

        {/* Descripción */}
        {place.description && (
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">
            {place.description}
          </p>
        )}

        {/* Meta: dificultad + duración */}
        {(place.difficulty || place.duration) && (
          <div className="flex items-center gap-3 mt-3">
            {place.difficulty && (
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <svg
                  className="w-3.5 h-3.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                {DIFFICULTY_LABEL[place.difficulty] ?? place.difficulty}
              </div>
            )}
            {place.duration && (
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <svg
                  className="w-3.5 h-3.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {place.duration}
              </div>
            )}
          </div>
        )}

        {/* Enlace */}
        {href && (
          <a
            href={href}
            className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-primary-700 hover:text-primary-500 transition-colors"
          >
            Conocer más
            <svg
              className="w-3 h-3 transition-transform duration-150 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}

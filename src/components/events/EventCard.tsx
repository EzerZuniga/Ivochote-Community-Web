import type { EventItem } from "../../types/events";

interface Props {
  event: EventItem;
  href?: string;
}

const CATEGORY_STYLE: Record<
  string,
  { dateBg: string; badge: string; accent: string }
> = {
  institucional: {
    dateBg: "bg-primary-700",
    badge: "bg-primary-100 text-primary-800",
    accent: "bg-primary-600",
  },
  "econ\u00f3mico": {
    dateBg: "bg-amber-700",
    badge: "bg-amber-100 text-amber-800",
    accent: "bg-amber-500",
  },
  cultural: {
    dateBg: "bg-rose-700",
    badge: "bg-rose-100 text-rose-800",
    accent: "bg-rose-500",
  },
  ambiental: {
    dateBg: "bg-emerald-700",
    badge: "bg-emerald-100 text-emerald-800",
    accent: "bg-emerald-600",
  },
  deportivo: {
    dateBg: "bg-blue-700",
    badge: "bg-blue-100 text-blue-800",
    accent: "bg-blue-600",
  },
};

const DEFAULT_STYLE = CATEGORY_STYLE.institucional;

const STATUS_STYLE: Record<string, { label: string; cls: string }> = {
  upcoming: { label: "Próximamente", cls: "bg-blue-100 text-blue-700" },
  ongoing: { label: "En curso", cls: "bg-emerald-100 text-emerald-700" },
  past: { label: "Finalizado", cls: "bg-gray-100 text-gray-500" },
  cancelled: { label: "Cancelado", cls: "bg-red-100 text-red-700" },
};

const MONTHS_ES = [
  "ENE",
  "FEB",
  "MAR",
  "ABR",
  "MAY",
  "JUN",
  "JUL",
  "AGO",
  "SEP",
  "OCT",
  "NOV",
  "DIC",
];

export default function EventCard({ event, href }: Props) {
  const style = CATEGORY_STYLE[event.category ?? ""] ?? DEFAULT_STYLE;
  const status = STATUS_STYLE[event.status ?? ""];
  const locationText =
    typeof event.location === "string"
      ? event.location
      : (event.location?.name ?? event.location?.address ?? "");

  const eventDate = event.date ? new Date(event.date + "T12:00:00") : null;
  const day = eventDate ? eventDate.getDate() : null;
  const month = eventDate ? MONTHS_ES[eventDate.getMonth()] : null;
  const year = eventDate ? eventDate.getFullYear() : null;

  return (
    <article className="group flex flex-col bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
      {/* Franja de acento superior */}
      <div className={`h-1 w-full ${style.accent}`} aria-hidden="true" />

      <div className="flex gap-4 p-5 flex-1">
        {/* Bloque de fecha */}
        {eventDate && (
          <div
            className={`flex-shrink-0 w-14 flex flex-col items-center justify-center ${style.dateBg} text-white shadow-sm self-start`}
          >
            <span className="text-xl font-extrabold leading-none pt-1.5">
              {day}
            </span>
            <span className="text-[9px] font-bold uppercase tracking-widest pb-1.5">
              {month}
            </span>
            <div className="w-full text-center bg-black/20 text-[9px] font-semibold py-0.5">
              {year}
            </div>
          </div>
        )}

        <div className="flex flex-col flex-1 min-w-0">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={`text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 ${style.badge}`}
            >
              {event.category ?? "general"}
            </span>
            {status && (
              <span
                className={`text-[10px] font-bold px-2 py-0.5 ${status.cls}`}
              >
                {status.label}
              </span>
            )}
          </div>

          {/* Título */}
          <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2 mb-1">
            {event.title}
          </h3>

          {/* Línea acento */}
          <div
            className={`h-0.5 w-8 ${style.accent} mb-3`}
            aria-hidden="true"
          />

          {/* Descripción */}
          {event.description && (
            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
              {event.description}
            </p>
          )}

          {/* Hora + Lugar */}
          <div className="flex flex-col gap-1 mt-3">
            {event.time && (
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
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
                {event.time}
              </div>
            )}
            {locationText && (
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="truncate">{locationText}</span>
              </div>
            )}
          </div>

          {/* Enlace */}
          {href && (
            <a
              href={href}
              className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-primary-700 hover:text-primary-500 transition-colors"
            >
              Ver evento
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
      </div>
    </article>
  );
}

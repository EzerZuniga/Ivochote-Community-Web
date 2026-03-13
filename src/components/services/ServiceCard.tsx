import type { ServiceItem } from "../../types/services";

interface Props {
  service: ServiceItem;
  href?: string;
}

const ICON_PATHS: Record<string, string> = {
  "id-card": "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0",
  license: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  social: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  clean: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
};

const CATEGORY_STYLE: Record<string, { iconBg: string; badge: string; accent: string }> = {
  administrativo: { iconBg: "bg-primary-700", badge: "bg-primary-100 text-primary-800", accent: "bg-primary-600" },
  salud:          { iconBg: "bg-rose-600",    badge: "bg-rose-100 text-rose-800",       accent: "bg-rose-500"    },
  educacion:      { iconBg: "bg-emerald-700", badge: "bg-emerald-100 text-emerald-800", accent: "bg-emerald-600" },
  otros:          { iconBg: "bg-primary-900", badge: "bg-slate-100 text-slate-700",     accent: "bg-primary-800" },
};

const DEFAULT_STYLE = CATEGORY_STYLE.administrativo;

export default function ServiceCard({ service, href }: Props) {
  const style = CATEGORY_STYLE[service.category ?? "otros"] ?? DEFAULT_STYLE;
  const iconPath = ICON_PATHS[service.icon ?? ""] ?? ICON_PATHS["id-card"];

  return (
    <article className="group flex flex-col bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
      {/* Franja de acento superior */}
      <div className={`h-1 w-full ${style.accent}`} aria-hidden="true" />

      <div className="flex flex-col flex-1 p-5">
        {/* Ícono + badge */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-11 h-11 ${style.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
            </svg>
          </div>
          <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 ${style.badge}`}>
            {service.category ?? "general"}
          </span>
        </div>

        {/* Título */}
        <h3 className="text-base font-bold text-gray-900 leading-snug mb-1">
          {service.title}
        </h3>

        {/* Línea de acento */}
        <div className={`h-0.5 w-8 ${style.accent} mb-3`} aria-hidden="true" />

        {/* Descripción */}
        {service.description && (
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">
            {service.description}
          </p>
        )}

        {/* Horario */}
        {service.hours && (
          <div className="flex items-center gap-1.5 mt-3 text-xs text-gray-400">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{service.hours}</span>
          </div>
        )}

        {/* Enlace */}
        {href && (
          <a
            href={href}
            className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-primary-700 hover:text-primary-500 transition-colors"
          >
            Ver servicio
            <svg
              className="w-3 h-3 transition-transform duration-150 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}

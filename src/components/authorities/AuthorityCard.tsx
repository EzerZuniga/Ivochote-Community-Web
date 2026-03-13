import type { Authority } from "../../types/authorities";

interface Props {
  authority: Authority;
  featured?: boolean;
}

function PersonIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="22" r="12" fill="currentColor" opacity="0.9" />
      <path
        d="M8 56c0-13.255 10.745-24 24-24s24 10.745 24 24H8z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

const BADGE: Record<string, string> = {
  Alcalde: "bg-primary-900 text-white",
  Regidor: "bg-primary-100 text-primary-800 border border-primary-200",
  Regidora: "bg-primary-100 text-primary-800 border border-primary-200",
};

export default function AuthorityCard({ authority, featured = false }: Props) {
  const slug = authority.slug ?? authority.id;
  const badgeClass = BADGE[authority.position ?? "Regidor"] ?? BADGE.Regidor;

  if (featured) {
    return (
      <article className="group relative flex flex-col sm:flex-row gap-6 sm:gap-8 bg-white rounded-2xl p-7 sm:p-8 shadow-md hover:shadow-xl border border-primary-100 transition-all duration-300 overflow-hidden">
        {/* Accent stripe */}
        <div
          className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary-600 to-primary-950 rounded-l-2xl"
          aria-hidden="true"
        />
        {/* Avatar */}
        <div className="flex-shrink-0 flex justify-center sm:justify-start pl-2 sm:pl-4">
          <div className="relative">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-primary-800 to-primary-950 flex items-center justify-center shadow-lg">
              <PersonIcon className="w-20 h-20 sm:w-24 sm:h-24 text-white/70" />
            </div>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-extrabold uppercase tracking-widest bg-amber-400 text-amber-900 px-3 py-0.5 rounded-full shadow-sm">
              Alcalde
            </span>
          </div>
        </div>
        {/* Info */}
        <div className="flex-1 min-w-0 pt-2 sm:pt-0">
          <span
            className={`inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2 ${badgeClass}`}
          >
            {authority.position}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-primary-900 leading-tight">
            {authority.name}
          </h3>
          {authority.department && (
            <p className="mt-1 text-sm font-medium text-primary-900/50">
              {authority.department}
            </p>
          )}
          {authority.bio && (
            <p className="mt-3 text-sm sm:text-base text-primary-900/70 leading-relaxed">
              {authority.bio}
            </p>
          )}
          <a
            href={`/autoridades/${slug}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary-700 hover:text-primary-500 transition-colors"
          >
            Ver perfil completo
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-primary-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
      {/* Header con gradiente oscuro */}
      <div className="relative flex flex-col items-center pt-8 pb-6 bg-gradient-to-br from-primary-800 to-primary-950">
        {/* Badge cargo */}
        <span className={`absolute top-3 right-3 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
          authority.position === 'Regidora'
            ? 'bg-amber-400 text-amber-900'
            : 'bg-white/20 text-white border border-white/30'
        }`}>
          {authority.position}
        </span>
        {/* Avatar */}
        <div className="w-20 h-20 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center shadow-md backdrop-blur-sm">
          <PersonIcon className="w-12 h-12 text-white" />
        </div>
      </div>

      {/* Cuerpo */}
      <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
        <h3 className="text-[15px] font-extrabold text-primary-900 leading-snug">
          {authority.name}
        </h3>
        {authority.department && (
          <p className="mt-1 text-xs font-semibold text-primary-600">
            {authority.department}
          </p>
        )}
        {authority.bio && (
          <p className="mt-3 text-sm text-primary-900/70 leading-relaxed line-clamp-3">
            {authority.bio}
          </p>
        )}
        <a
          href={`/autoridades/${slug}`}
          className="mt-auto pt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-primary-700 hover:text-primary-500 transition-colors"
        >
          Ver perfil
          <svg
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}

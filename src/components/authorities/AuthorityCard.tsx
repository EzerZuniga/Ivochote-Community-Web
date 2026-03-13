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

export default function AuthorityCard({ authority, featured = false }: Props) {
  const slug = authority.slug ?? authority.id;

  // Card compartida: layout horizontal tipo directorio
  const avatarBg = featured
    ? "bg-gradient-to-br from-primary-800 to-primary-950"
    : "bg-gradient-to-br from-primary-700 to-primary-900";

  const accentColor = featured ? "bg-amber-400" : "bg-primary-600";

  return (
    <article className="group relative flex flex-row gap-0 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      {/* Borde izquierdo de acento */}
      <div className={`absolute inset-y-0 left-0 w-1 ${accentColor}`} aria-hidden="true" />

      {/* Avatar */}
      <div className="flex-shrink-0 flex items-center justify-center pl-6 pr-4 py-6">
        <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-xl ${avatarBg} flex items-center justify-center shadow-md`}>
          <PersonIcon className="w-12 h-12 sm:w-14 sm:h-14 text-white/80" />
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 min-w-0 py-5 pr-5">
        {/* Departamento como título */}
        {authority.department && (
          <h3 className="text-sm sm:text-base font-bold text-primary-700 leading-snug">
            {authority.department}
          </h3>
        )}

        {/* Línea divisora de color */}
        <div className={`mt-2 mb-3 h-0.5 w-12 rounded-full ${accentColor}`} aria-hidden="true" />

        {/* Nombre */}
        <p className="text-[15px] sm:text-base font-bold text-gray-900 leading-snug">
          {authority.name}
        </p>

        {/* Cargo */}
        <p className="mt-0.5 text-[11px] font-bold uppercase tracking-widest text-gray-400">
          {featured ? "Alcalde Municipal" : authority.position}
        </p>

        {/* Contacto */}
        {(authority.email || authority.phone) && (
          <div className="mt-3 space-y-1">
            {authority.email && (
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${authority.email}`} className="hover:text-primary-600 transition-colors truncate">{authority.email}</a>
              </div>
            )}
            {authority.phone && (
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${authority.phone}`} className="hover:text-primary-600 transition-colors">{authority.phone}</a>
              </div>
            )}
          </div>
        )}

        {/* Ver perfil */}
        <a
          href={`/autoridades/${slug}`}
          className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-primary-600 hover:text-primary-800 transition-colors"
        >
          Ver perfil
          <svg
            className="w-3 h-3 transition-transform duration-150 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </article>
  );
}

import type { ServiceItem } from "../../types/services";

interface Props {
  service: ServiceItem;
  href?: string;
}

export default function ServiceCard({ service, href }: Props) {
  return (
    <article className="bg-white border border-primary-100 rounded-lg p-5 hover:shadow-md transition-shadow duration-200">
      {service.image && (
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-36 object-cover rounded-md mb-3"
          loading="lazy"
          width={400}
          height={144}
        />
      )}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs bg-primary-100 text-primary-900 px-2 py-0.5 rounded-full capitalize">
          {service.category ?? "general"}
        </span>
        {service.featured && (
          <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">
            Destacado
          </span>
        )}
      </div>
      <h3 className="font-semibold text-primary-900">{service.title}</h3>
      {service.description && (
        <p className="text-sm text-primary-900/60 mt-1 line-clamp-2">
          {service.description}
        </p>
      )}
      {href && (
        <a
          href={href}
          className="inline-flex items-center gap-1 text-sm text-primary-900 font-medium hover:text-primary-700 mt-3 transition-colors"
        >
          Más información
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
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      )}
    </article>
  );
}

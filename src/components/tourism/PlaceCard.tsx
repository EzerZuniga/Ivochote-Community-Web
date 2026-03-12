import type { TourismPlace } from "../../types/tourism";

interface Props {
  place: TourismPlace;
  href?: string;
}

export default function PlaceCard({ place, href }: Props) {
  return (
    <article className="group bg-white border border-primary-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
      {place.images?.[0] && (
        <img
          src={place.images[0]}
          alt={place.name}
          className="w-full h-48 object-cover group-hover:scale-[1.02] transition-transform duration-300"
          loading="lazy"
          width={400}
          height={192}
        />
      )}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs bg-primary-100 text-primary-900 px-2 py-0.5 rounded-full capitalize">
            {place.category}
          </span>
          {place.difficulty && (
            <span className="text-xs text-primary-900/50">
              Dificultad: {place.difficulty}
            </span>
          )}
        </div>
        {href ? (
          <a
            href={href}
            className="font-semibold text-primary-900 hover:text-primary-700 no-underline line-clamp-2 transition-colors"
          >
            {place.name}
          </a>
        ) : (
          <h3 className="font-semibold text-primary-900 group-hover:text-primary-700 transition-colors">
            {place.name}
          </h3>
        )}
        {place.description && (
          <p className="text-sm text-primary-900/60 mt-1 line-clamp-2">
            {place.description}
          </p>
        )}
        {place.duration && (
          <p className="text-xs text-primary-900/50 mt-2">
            Duración: {place.duration}
          </p>
        )}
      </div>
    </article>
  );
}

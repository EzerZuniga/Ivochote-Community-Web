import type { EventItem } from "../../types/events";
import { formatDate } from "../../utils/formatters";

interface Props {
  event: EventItem;
}

const STATUS_LABELS: Record<string, string> = {
  upcoming: 'Próximamente',
  ongoing: 'En curso',
  past: 'Finalizado',
  cancelled: 'Cancelado',
};

export default function EventCard({ event }: Props) {
  const eventDate = event.date ? new Date(event.date) : null;

  return (
    <article className="bg-white border border-primary-100 rounded-lg p-5 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start gap-4">
        {eventDate && (
          <div className="flex-shrink-0 w-14 h-14 bg-primary-100 rounded-lg flex flex-col items-center justify-center">
            <span className="text-lg font-bold text-primary-900 leading-none">{eventDate.getDate()}</span>
            <span className="text-[10px] text-primary-700 uppercase mt-0.5">
              {eventDate.toLocaleDateString('es-PE', { month: 'short' })}
            </span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-primary-900 line-clamp-2">{event.title}</h3>
          {event.date && <time className="text-xs text-primary-900/50 block mt-1" dateTime={event.date}>{formatDate(event.date)}</time>}
          {event.description && <p className="text-sm text-primary-900/60 mt-2 line-clamp-2">{event.description}</p>}
          {event.location && (
            <p className="text-xs text-primary-900/50 mt-2">
              📍 {typeof event.location === 'string' ? event.location : (event.location.name ?? event.location.address)}
            </p>
          )}
          <div className="mt-3 flex flex-wrap gap-2">
            {event.category && <span className="text-xs bg-primary-100 text-primary-900 px-2 py-0.5 rounded-full">{event.category}</span>}
            {event.status && <span className="text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded-full">{STATUS_LABELS[event.status] ?? event.status}</span>}
          </div>
        </div>
      </div>
    </article>
  );
}

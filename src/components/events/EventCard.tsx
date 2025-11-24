import React from 'react';
import type { EventItem } from '../../types/events';

type Props = {
  event: EventItem;
};

export default function EventCard({ event }: Props) {
  return (
    <article className="event-card border rounded p-3">
      {event.image && <img src={event.image} alt={event.title} className="w-full h-36 object-cover rounded" />}
      <h4 className="mt-2 font-medium">{event.title}</h4>
      {event.date && <time className="text-xs text-gray-500">{event.date}</time>}
      {event.location && <div className="text-sm text-gray-600">{event.location}</div>}
    </article>
  );
}

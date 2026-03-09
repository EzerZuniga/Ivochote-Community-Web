import React from "react";
import type { EventItem } from "../../types/events";

type Props = {
  event: EventItem;
};

export default function EventCard({ event }: Props) {
  return (
    <article className="event-card border border-primary-100 rounded p-3">
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-36 object-cover rounded"
        />
      )}
      <h4 className="mt-2 font-medium text-primary-900">{event.title}</h4>
      {event.date && (
        <time className="text-xs text-primary-900/50">{event.date}</time>
      )}
      {event.location && (
        <div className="text-sm text-primary-900/60">
          {typeof event.location === "string"
            ? event.location
            : (event.location.name ?? event.location.address)}
        </div>
      )}
    </article>
  );
}

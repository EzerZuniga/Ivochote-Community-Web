import { apiGet } from "../api/contentClient";
import type { EventItem, EventsList } from "../types/events";

export async function fetchEvents(): Promise<EventsList> {
  const data = await apiGet<EventsList>("/events");
  if (!Array.isArray(data)) return [];
  return data;
}

export async function fetchEventBySlug(
  slug: string,
): Promise<EventItem | undefined> {
  if (!slug) return undefined;
  const list = await fetchEvents();
  return list.find((e) => e.slug === slug || e.id === slug);
}

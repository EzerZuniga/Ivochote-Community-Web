export type EventStatus = 'upcoming' | 'ongoing' | 'past' | 'cancelled';

export interface EventLocation {
  name?: string;
  address?: string;
  coordinates?: { lat: number; lng: number };
}

export interface EventItem {
  id: string;
  title: string;
  slug?: string;
  date?: string;
  endDate?: string;
  description?: string;
  location?: EventLocation | string;
  image?: string;
  category?: string;
  featured?: boolean;
  status?: EventStatus;
  tags?: string[];
  meta?: Record<string, unknown>;
}

export type EventsList = EventItem[];

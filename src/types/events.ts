export type EventStatus = "upcoming" | "ongoing" | "past" | "cancelled";

export interface EventLocation {
  name?: string;
  address?: string;
  coordinates?: { lat: number; lng: number };
}

export interface ProgramItem {
  time: string;
  activity: string;
}

export interface EventItem {
  id: string;
  title: string;
  slug?: string;
  date?: string;
  endDate?: string;
  time?: string;
  description?: string;
  fullDescription?: string;
  location?: EventLocation | string;
  image?: string;
  category?: string;
  icon?: string;
  organizer?: string;
  program?: ProgramItem[];
  featured?: boolean;
  order?: number;
  status?: EventStatus;
  tags?: string[];
  meta?: Record<string, unknown>;
}

export type EventsList = EventItem[];

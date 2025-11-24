export type Coordinates = { lat: number; lng: number };

export type TourismCategory = 'naturaleza' | 'cultura' | 'aventura' | 'gastronomia';

export type Difficulty = 'baja' | 'media' | 'alta';

export type OpeningHours = Record<string, { open: string; close: string } | { closed: true }>;

export interface ContactInfo {
  phone?: string;
  email?: string;
  website?: string;
}

export interface TourismPlace {
  id: string;
  name: string;
  slug: string;
  description?: string;
  fullDescription?: string;
  location?: string;
  coordinates: Coordinates;
  category: TourismCategory;
  difficulty?: Difficulty;
  duration?: string;
  bestSeason?: string[];
  images?: string[];
  featured?: boolean;
  rating?: number;
  tags?: string[];
  contact?: ContactInfo;
  openingHours?: OpeningHours;
}
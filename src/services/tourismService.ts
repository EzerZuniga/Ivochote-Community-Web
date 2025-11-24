import { apiGet } from './apiClient';
import type { TourismPlace } from '../types/tourism';

export async function fetchPlaces(): Promise<TourismPlace[]> {
  const res = await apiGet<TourismPlace[]>('/tourism');
  return Array.isArray(res) ? res : [];
}

export async function fetchPlaceBySlug(slug: string): Promise<TourismPlace | null> {
  if (!slug) return null;
  const places = await fetchPlaces();
  return places.find((p) => p.slug === slug) ?? null;
}

export async function searchPlaces(query?: string, category?: string): Promise<TourismPlace[]> {
  const places = await fetchPlaces();
  let result = places;
  if (category) result = result.filter((p) => p.category === category);
  if (query) {
    const q = query.trim().toLowerCase();
    result = result.filter((p) => {
      const hay = [p.name, p.description ?? '', (p.tags ?? []).join(' ')].join(' ').toLowerCase();
      return hay.includes(q);
    });
  }
  return result;
}

export async function getFeaturedPlaces(): Promise<TourismPlace[]> {
  const places = await fetchPlaces();
  return places.filter((p) => Boolean(p.featured));
}

const tourismService = {
  fetchPlaces,
  fetchPlaceBySlug,
  searchPlaces,
  getFeaturedPlaces,
};

export default tourismService;

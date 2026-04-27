import { apiGet } from "../api/contentClient";
import type { ServiceItem, ServicesList } from '../types/services';

export async function fetchServices(): Promise<ServicesList> {
  const data = await apiGet<ServicesList>('/services');
  if (!Array.isArray(data)) return [];
  return data;
}

export async function fetchServiceBySlug(slug: string): Promise<ServiceItem | undefined> {
  if (!slug) return undefined;
  const list = await fetchServices();
  return list.find((s) => s.slug === slug || s.id === slug);
}

export async function searchServices(query?: string, category?: string): Promise<ServicesList> {
  const list = await fetchServices();
  let results = list;

  if (category) {
    const cat = category.toLowerCase();
    results = results.filter((s) => (s.category ?? '').toString().toLowerCase() === cat);
  }

  if (query) {
    const q = query.toLowerCase();
    results = results.filter((s) => {
      return (
        (s.title ?? '').toLowerCase().includes(q) ||
        (s.description ?? '').toLowerCase().includes(q)
      );
    });
  }

  return results;
}

export async function getCategories(): Promise<string[]> {
  const list = await fetchServices();
  const set = new Set<string>();
  for (const s of list) {
    set.add((s.category ?? 'otros').toString());
  }
  return Array.from(set);
}

export async function getFeaturedServices(limit?: number): Promise<ServicesList> {
  const list = (await fetchServices()).filter((s) => Boolean(s.featured));
  if (typeof limit === 'number') return list.slice(0, limit);
  return list;
}

const servicesService = {
  fetchServices,
  fetchServiceBySlug,
  searchServices,
  getCategories,
  getFeaturedServices,
};

export default servicesService;

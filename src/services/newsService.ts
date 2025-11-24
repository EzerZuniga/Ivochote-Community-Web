import { apiGet } from './apiClient';
import type { News, NewsList } from '../types/news';

export async function fetchNews(): Promise<NewsList> {
  const data = await apiGet<NewsList>('/news');
  if (!Array.isArray(data)) return [];
  return data;
}

export async function fetchNewsBySlug(slug: string): Promise<News | undefined> {
  if (!slug) return undefined;
  const list = await fetchNews();
  return list.find((n: News) => n.slug === slug || n.id === slug);
}

export async function searchNews(query?: string, tag?: string, category?: string): Promise<NewsList> {
  let results = await fetchNews();

  if (category) {
    const cat = category.toLowerCase();
    results = results.filter((n: News) => (n.category ?? '').toString().toLowerCase() === cat);
  }

  if (tag) {
    const t = tag.toLowerCase();
    results = results.filter((n: News) => Array.isArray(n.tags) && n.tags.some((tg: string) => tg.toLowerCase() === t));
  }

  if (query) {
    const q = query.toLowerCase();
    results = results.filter((n: News) => {
      return (
        (n.title ?? '').toLowerCase().includes(q) ||
        (n.excerpt ?? '').toLowerCase().includes(q) ||
        (n.content ?? '').toLowerCase().includes(q) ||
        (n.tags ?? []).some((tg: string) => tg.toLowerCase().includes(q))
      );
    });
  }

  return results;
}

export async function getLatest(limit = 5): Promise<NewsList> {
  const list = await fetchNews();
  const sorted = list.slice().sort((a: News, b: News) => {
    const ta = new Date(a.date).getTime() || 0;
    const tb = new Date(b.date).getTime() || 0;
    return tb - ta;
  });
  return sorted.slice(0, limit);
}

export async function getFeaturedNews(limit?: number): Promise<NewsList> {
  const list = (await fetchNews()).filter((n: News) => Boolean(n.featured));
  if (typeof limit === 'number') return list.slice(0, limit);
  return list;
}

export async function getCategories(): Promise<string[]> {
  const list = await fetchNews();
  const set = new Set<string>();
  for (const n of list) {
    if (n.category) set.add(n.category);
  }
  return Array.from(set);
}

const newsService = {
  fetchNews,
  fetchNewsBySlug,
  searchNews,
  getLatest,
  getFeaturedNews,
  getCategories,
};

export default newsService;

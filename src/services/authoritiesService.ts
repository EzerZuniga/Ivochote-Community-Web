import { apiGet } from "../api/contentClient";
import type { Authority } from "../types/authorities";

export async function fetchAuthorities(): Promise<Authority[]> {
  const data = await apiGet<Authority[]>("/authorities");
  if (!Array.isArray(data)) return [];
  return data;
}

export async function fetchAuthorityBySlug(
  slug: string,
): Promise<Authority | undefined> {
  if (!slug) return undefined;
  const list = await fetchAuthorities();
  return list.find((a) => a.slug === slug || a.id === slug);
}

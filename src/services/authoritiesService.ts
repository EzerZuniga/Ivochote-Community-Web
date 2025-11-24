import { apiGet } from './apiClient';
import type { Authority } from '../types/authorities';

export async function fetchAuthorities(): Promise<Authority[]> {
  return apiGet<Authority[]>('/authorities');
}

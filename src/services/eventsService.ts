import { apiGet } from './apiClient';
import type { EventsList } from '../types/events';

export async function fetchEvents(): Promise<EventsList> {
  return apiGet<EventsList>('/events');
}

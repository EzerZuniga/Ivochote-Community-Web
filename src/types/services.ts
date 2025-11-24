export type ServiceCategory = 'administrativo' | 'salud' | 'educacion' | 'transporte' | 'cultura' | 'otros';

export interface ServiceContact {
  phone?: string;
  email?: string;
  url?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug?: string;
  description?: string;
  category?: ServiceCategory | string;
  image?: string;
  contact?: ServiceContact;
  featured?: boolean;
  order?: number;
  meta?: Record<string, unknown>;
}

export type ServicesList = ServiceItem[];

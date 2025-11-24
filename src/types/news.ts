export type NewsStatus = 'draft' | 'published' | 'archived';

export interface Author {
  id?: string;
  name: string;
  avatar?: string;
}

export interface News {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  image?: string;
  date: string;
  author: Author | string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  status?: NewsStatus;
  readingTime?: number;
  meta?: Record<string, unknown>;
}

export interface NewsCategory {
  id: string;
  name: string;
  slug: string;
  count?: number;
}

export type NewsList = News[];
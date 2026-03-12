export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

export interface Authority {
  id: string;
  slug?: string;
  name: string;
  position?: string;
  department?: string;
  bio?: string;
  image?: string;
  email?: string;
  phone?: string;
  order?: number;
  social?: SocialLinks;
  meta?: Record<string, unknown>;
}

export type AuthoritiesList = Authority[];

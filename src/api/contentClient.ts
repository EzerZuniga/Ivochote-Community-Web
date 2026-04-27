const CONTENT_ENDPOINTS = {
  news: "/news",
  tourism: "/tourism",
  authorities: "/authorities",
  services: "/services",
  events: "/events",
} as const;

const CONTENT_LOADERS = {
  [CONTENT_ENDPOINTS.news]: () => import("../data/noticias.json"),
  [CONTENT_ENDPOINTS.tourism]: () => import("../data/turismo.json"),
  [CONTENT_ENDPOINTS.authorities]: () => import("../data/authorities.json"),
  [CONTENT_ENDPOINTS.services]: () => import("../data/services.json"),
  [CONTENT_ENDPOINTS.events]: () => import("../data/events.json"),
} as const;

type ContentPath = keyof typeof CONTENT_LOADERS;

function toErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return "Unexpected error";
}

export { CONTENT_ENDPOINTS };
export type { ContentPath };

export async function apiGet<T = unknown>(path: ContentPath): Promise<T> {
  try {
    const loader = CONTENT_LOADERS[path];
    if (!loader) {
      throw new Error(`Unknown apiGet path: ${path}`);
    }

    const mod = await loader();
    return (mod.default ?? mod) as T;
  } catch (error) {
    console.error(`apiGet failed for "${path}":`, toErrorMessage(error));
    return [] as unknown as T;
  }
}

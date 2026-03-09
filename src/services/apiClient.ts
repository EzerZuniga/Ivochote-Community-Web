export async function apiGet<T = unknown>(path: string): Promise<T> {
  try {
    switch (path) {
      case "/news": {
        const mod = await import("../data/noticias.json");
        return (mod.default ?? mod) as T;
      }
      case "/tourism": {
        const mod = await import("../data/turismo.json");
        return (mod.default ?? mod) as T;
      }
      case "/authorities": {
        const mod = await import("../data/authorities.json");
        return (mod.default ?? mod) as T;
      }
      case "/services": {
        const mod = await import("../data/services.json");
        return (mod.default ?? mod) as T;
      }
      case "/events": {
        const mod = await import("../data/events.json");
        return (mod.default ?? mod) as T;
      }
      default:
        throw new Error(`Unknown apiGet path: ${path}`);
    }
  } catch (err) {
    console.error("apiGet error", err);
    return [] as unknown as T;
  }
}

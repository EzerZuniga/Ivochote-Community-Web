export async function apiGet<T = any>(path: string): Promise<T> {
  // Simple local mapper for development: map paths to JSON files under `src/data`.
  // Supported endpoints: /news, /tourism, /authorities, /services, /events
  try {
    switch (path) {
      case '/news': {
        const mod = await import('../data/noticias.json');
        return (mod.default ?? mod) as T;
      }
      case '/tourism': {
        const mod = await import('../data/turismo.json');
        return (mod.default ?? mod) as T;
      }
      case '/authorities': {
        const mod = await import('../data/authorities.json');
        return (mod.default ?? mod) as T;
      }
      case '/services': {
        // no services.json provided by default — return empty array to be safe
        return ([] as unknown) as T;
      }
      case '/events': {
        // no events.json provided by default — return empty array to be safe
        return ([] as unknown) as T;
      }
      default: {
        // allow direct import by relative file name, e.g. '/data/file'
        throw new Error(`Unknown apiGet path: ${path}`);
      }
    }
  } catch (err) {
    // Fail gracefully in dev — return empty structure
    // eslint-disable-next-line no-console
    console.error('apiGet error', err);
    return (null as unknown) as T;
  }
}

export const apiClient = {
  get: apiGet,
};

export const formatDate = (s: string) => {
  try {
    return new Date(s).toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return s;
  }
};

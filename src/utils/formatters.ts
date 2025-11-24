export function formatDate(value: Date | string | number, locale = 'es-PE', options?: Intl.DateTimeFormatOptions): string {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat(locale, options ?? { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
}

export function formatTime(value: Date | string | number, locale = 'es-PE', options?: Intl.DateTimeFormatOptions): string {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat(locale, options ?? { hour: '2-digit', minute: '2-digit' }).format(date);
}

export function formatDateTime(value: Date | string | number, locale = 'es-PE', options?: Intl.DateTimeFormatOptions): string {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat(locale, options ?? { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(date);
}

export function formatNumber(value: number, locale = 'es-PE', options?: Intl.NumberFormatOptions): string {
  if (!isFinite(value)) return String(value);
  return new Intl.NumberFormat(locale, options ?? { maximumFractionDigits: 2 }).format(value);
}

export function formatCurrency(amount: number, currency = 'PEN', locale = 'es-PE', options?: Intl.NumberFormatOptions): string {
  if (!isFinite(amount)) return String(amount);
  return new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 2, ...(options ?? {}) }).format(amount);
}

export function truncate(s: string | null | undefined, length = 100, ellipsis = '…'): string {
  if (s == null) return '';
  const str = String(s);
  return str.length <= length ? str : str.slice(0, Math.max(0, length - ellipsis.length)) + ellipsis;
}

export function capitalize(s: string | null | undefined): string {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

const formatters = { formatDate, formatTime, formatDateTime, formatNumber, formatCurrency, truncate, capitalize };

export default formatters;

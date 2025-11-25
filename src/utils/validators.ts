export function isNotEmpty(s?: string): s is string {
  return typeof s === 'string' && s.trim().length > 0;
}

export function isEmail(s?: string): boolean {
  if (!isNotEmpty(s)) return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(s.trim());
}

export function isURL(s?: string): boolean {
  if (!isNotEmpty(s)) return false;
  try {
    new URL(s as string);
    return true;
  } catch {
    return false;
  }
}

export function isNumeric(s?: string): boolean {
  if (!isNotEmpty(s)) return false;
  return /^[+-]?\d+(?:\.\d+)?$/.test(s.trim());
}

export function isPhone(s?: string): boolean {
  if (!isNotEmpty(s)) return false;
  return /^\+?[0-9 ()-]{6,20}$/.test(s.trim());
}

export function hasMinLength(s?: string, min = 1): boolean {
  if (!isNotEmpty(s)) return false;
  return s.trim().length >= min;
}

export function hasMaxLength(s?: string, max = Infinity): boolean {
  if (typeof max !== 'number' || max < 0) return false;
  if (s == null) return true;
  return s.trim().length <= max;
}

export function normalizeString(s?: string): string {
  if (!isNotEmpty(s)) return '';
  return s.trim().replace(/\s+/g, ' ');
}

export function toTitleCase(s?: string): string {
  const value = normalizeString(s);
  if (!value) return '';
  return value
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

const validators = {
  isNotEmpty,
  isEmail,
  isURL,
  isNumeric,
  isPhone,
  hasMinLength,
  hasMaxLength,
  normalizeString,
  toTitleCase
};

export default validators;

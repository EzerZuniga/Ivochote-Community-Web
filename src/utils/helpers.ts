export const noop = (): void => {};

export function clamp(value: number, min = 0, max = 1): number {
	return Math.min(max, Math.max(min, value));
}

export function debounce<T extends (...args: any[]) => any>(fn: T, wait = 200) {
	let timeout: ReturnType<typeof setTimeout> | null = null;
	const debounced = (...args: Parameters<T>) => {
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			timeout = null;
			fn(...args);
		}, wait);
	};
	debounced.cancel = () => {
		if (timeout) {
			clearTimeout(timeout);
			timeout = null;
		}
	};
	return debounced as typeof debounced & { cancel: () => void };
}

export function throttle<T extends (...args: any[]) => any>(fn: T, limit = 200) {
	let lastCall = 0;
	return (...args: Parameters<T>) => {
		const now = Date.now();
		if (now - lastCall >= limit) {
			lastCall = now;
			fn(...args);
		}
	};
}

export function formatDate(value: Date | string | number, locale = 'es-PE', options?: Intl.DateTimeFormatOptions) {
	const date = value instanceof Date ? value : new Date(value);
	if (Number.isNaN(date.getTime())) return '';
	return new Intl.DateTimeFormat(locale, options ?? { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
}

export function classNames(...args: Array<string | false | null | undefined | Record<string, boolean>>): string {
	const classes: string[] = [];
	for (const arg of args) {
		if (!arg) continue;
		if (typeof arg === 'string') classes.push(arg);
		else if (typeof arg === 'object') {
			for (const [k, v] of Object.entries(arg)) if (v) classes.push(k);
		}
	}
	return classes.join(' ');
}

export function pick<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
	const res = {} as Pick<T, K>;
	for (const k of keys) if (k in obj) res[k] = obj[k];
	return res;
}

export function omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
	const res = { ...obj } as T;
	for (const k of keys) delete (res as any)[k];
	return res as Omit<T, K>;
}

export function deepClone<T>(value: T): T {
	if (typeof structuredClone === 'function') return structuredClone(value) as T;
	return JSON.parse(JSON.stringify(value)) as T;
}

export function isEmptyObject(value: unknown): boolean {
	return typeof value === 'object' && value != null && Object.keys(value).length === 0;
}

const helpers = {
	noop,
	clamp,
	debounce,
	throttle,
	formatDate,
	classNames,
	pick,
	omit,
	deepClone,
	isEmptyObject
};

export default helpers;

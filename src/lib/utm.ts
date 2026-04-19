const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const STORAGE_KEY = "streaml-utm-params";

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

/**
 * Capture UTM parameters from the current URL and persist them
 * in sessionStorage using first-touch attribution (only stores
 * on the first landing; subsequent navigations won't overwrite).
 */
export function captureUtmParams(): void {
  if (typeof window === "undefined") return;

  try {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
  } catch {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};

  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }

  if (Object.keys(utm).length === 0) return;

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
  } catch {
    // sessionStorage unavailable
  }
}

export function getStoredUtmParams(): UtmParams {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as UtmParams;
  } catch {
    return {};
  }
}

export function buildOutboundUrl(baseUrl: string): string {
  const utm = getStoredUtmParams();
  const entries = Object.entries(utm);
  if (entries.length === 0) return baseUrl;

  const url = new URL(baseUrl);
  for (const [key, value] of entries) {
    if (value) url.searchParams.set(key, value);
  }
  return url.toString();
}

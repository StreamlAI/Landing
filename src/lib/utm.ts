const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const STORAGE_KEY = "streaml-utm-params";
const COOKIE_NAME = "sl_utm";
const COOKIE_MAX_AGE = 30 * 24 * 60 * 60; // 30 days

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>> & {
  landing_url?: string;
  referrer?: string;
  timestamp?: number;
};

function setUtmCookie(params: UtmParams): void {
  const value = encodeURIComponent(JSON.stringify(params));
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_NAME}=${value}; domain=.streaml.app; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
}

export function captureUtmParams(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};

  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }

  if (Object.keys(utm).length === 0) return;

  const fullUtm: UtmParams = {
    ...utm,
    landing_url: window.location.href.split("?")[0],
    referrer: document.referrer || undefined,
    timestamp: Date.now(),
  };

  setUtmCookie(fullUtm);

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
  } catch {
    // sessionStorage unavailable
  }
}

export function getStoredUtmParams(): UtmParams {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as UtmParams;
  } catch {
    // sessionStorage unavailable
  }

  if (typeof document !== "undefined") {
    const match = document.cookie.match(/(?:^|;\s*)sl_utm=([^;]*)/);
    if (match) {
      try {
        return JSON.parse(decodeURIComponent(match[1]));
      } catch {
        // malformed cookie
      }
    }
  }

  return {};
}

export function buildOutboundUrl(baseUrl: string): string {
  const utm = getStoredUtmParams();
  const entries = Object.entries(utm).filter(
    ([key]) => key.startsWith("utm_"),
  );
  if (entries.length === 0) return baseUrl;

  const url = new URL(baseUrl);
  for (const [key, value] of entries) {
    if (value) url.searchParams.set(key, value);
  }
  return url.toString();
}

export function getUtmForPostHog(): Record<string, string | undefined> | null {
  const utm = getStoredUtmParams();
  if (!utm.utm_source && !utm.utm_medium && !utm.utm_campaign) return null;
  return {
    utm_source: utm.utm_source,
    utm_medium: utm.utm_medium,
    utm_campaign: utm.utm_campaign,
    utm_term: utm.utm_term,
    utm_content: utm.utm_content,
  };
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = "G-0EW4L3EC8W";
const CONSENT_KEY = "streaml-cookie-consent";

export type ConsentState = "accepted" | "rejected" | null;

export function getConsentState(): ConsentState {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    if (value === "accepted" || value === "rejected") return value;
    return null;
  } catch {
    return null;
  }
}

export function setConsentState(state: "accepted" | "rejected"): void {
  try {
    localStorage.setItem(CONSENT_KEY, state);
  } catch {
    // localStorage unavailable
  }
  if (state === "accepted") {
    loadGoogleAnalytics();
  }
}

function loadGoogleAnalytics(): void {
  if (typeof document === "undefined") return;
  if (document.querySelector(`script[src*="googletagmanager.com/gtag"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());

  const configParams: Record<string, string> = {};
  try {
    const raw = sessionStorage.getItem("streaml-utm-params");
    if (raw) {
      const utm = JSON.parse(raw) as Record<string, string>;
      if (utm.utm_source) configParams.campaign_source = utm.utm_source;
      if (utm.utm_medium) configParams.campaign_medium = utm.utm_medium;
      if (utm.utm_campaign) configParams.campaign_name = utm.utm_campaign;
      if (utm.utm_term) configParams.campaign_term = utm.utm_term;
      if (utm.utm_content) configParams.campaign_content = utm.utm_content;
    }
  } catch {
    // sessionStorage unavailable
  }

  window.gtag("config", GA_MEASUREMENT_ID, configParams);
}

export function initAnalytics(): void {
  if (getConsentState() === "accepted") {
    loadGoogleAnalytics();
  }
}

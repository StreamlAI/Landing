declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = "G-CGXY3QXY7K";
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
  window.gtag("config", GA_MEASUREMENT_ID);
}

export function initAnalytics(): void {
  if (getConsentState() === "accepted") {
    loadGoogleAnalytics();
  }
}

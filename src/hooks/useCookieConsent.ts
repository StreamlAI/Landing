import { useState, useCallback } from "react";
import {
  getConsentState,
  setConsentState,
  type ConsentState,
} from "@/lib/analytics";

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(() => getConsentState());

  const acceptAll = useCallback(() => {
    setConsentState("accepted");
    setConsent("accepted");
  }, []);

  const rejectNonEssential = useCallback(() => {
    setConsentState("rejected");
    setConsent("rejected");
  }, []);

  return { consent, acceptAll, rejectNonEssential };
}

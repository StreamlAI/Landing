import { useEffect } from "react";
import { useLocation } from "wouter";
import { capturePageView } from "@/lib/analytics";

export function usePageView() {
  const [location] = useLocation();

  useEffect(() => {
    capturePageView(location);
  }, [location]);
}

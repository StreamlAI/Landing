import { useMemo } from "react";
import { buildOutboundUrl } from "@/lib/utm";

export function useUtmUrl(baseUrl: string): string {
  return useMemo(() => buildOutboundUrl(baseUrl), [baseUrl]);
}

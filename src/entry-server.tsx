import { renderToString } from "react-dom/server";
import { Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import LandingPage from "@/pages/LandingPage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import Customers from "@/pages/Customers";
import CustomerStory from "@/pages/CustomerStory";

const pages: Record<string, React.ComponentType> = {
  "/": LandingPage,
  "/privacy-policy": PrivacyPolicy,
  "/terms-of-service": TermsOfService,
  "/use-cases": Customers,
  "/use-cases/gtm-series-a-startup": CustomerStory,
};

export function render(url: string) {
  const queryClient = new QueryClient();
  const PageComponent = pages[url] || LandingPage;

  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter ssrPath={url}>
          <PageComponent />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );

  return { html };
}

export const routes = Object.keys(pages);

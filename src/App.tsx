import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LandingPage from "@/pages/LandingPage";
import BlogList from "@/pages/BlogList";
import BlogPost from "@/pages/BlogPost";

import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import Customers from "@/pages/Customers";
import CustomerStory from "@/pages/CustomerStory";
import Templates from "@/pages/Templates";
import TemplateDetail from "@/pages/TemplateDetail";
import WaitlistPage from "@/pages/WaitlistPage";
import NotFound from "@/pages/not-found";
import { CookieConsent } from "@/components/CookieConsent";
import { usePageView } from "@/hooks/usePageView";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/blog" component={BlogList} />
      <Route path="/blog/:slug" component={BlogPost} />

      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/use-cases" component={Customers} />
      <Route path="/use-cases/:slug" component={CustomerStory} />
      <Route path="/templates" component={Templates} />
      <Route path="/templates/:slug" component={TemplateDetail} />
      <Route path="/waitlist" component={WaitlistPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  usePageView();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <CookieConsent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
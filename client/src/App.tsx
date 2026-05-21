import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { Suspense, lazy } from "react";

const DubCallHomePage = lazy(() => import("@/pages/DubCallHomePage"));
const DubCallCompanyPage = lazy(() => import("@/pages/DubCallCompanyPage"));
const DubCallProductPage = lazy(() => import("@/pages/DubCallProductPage"));
const DubCallPricingPage = lazy(() => import("@/pages/DubCallPricingPage"));
const DubCallContactPage = lazy(() => import("@/pages/DubCallContactPage"));
const DubCallPrivacyPage = lazy(() => import("@/pages/DubCallPrivacyPage"));
const DubCallResourcesPage = lazy(() => import("@/pages/DubCallResourcesPage"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="h-8 w-8 border-2 border-black border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" component={DubCallHomePage} />
          <Route path="/company" component={DubCallCompanyPage} />
          <Route path="/product" component={DubCallProductPage} />
          <Route path="/pricing" component={DubCallPricingPage} />
          <Route path="/contact" component={DubCallContactPage} />
          <Route path="/privacy" component={DubCallPrivacyPage} />
          <Route path="/resources" component={DubCallResourcesPage} />
          <Route component={DubCallHomePage} />
        </Switch>
      </Suspense>
    </>
  );
}

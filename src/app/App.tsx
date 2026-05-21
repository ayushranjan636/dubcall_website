import { useEffect, Suspense, lazy } from "react";
import { Switch, Route, useLocation } from "wouter";

const HomePage = lazy(() => import("@/pages/HomePage"));
const CompanyPage = lazy(() => import("@/pages/CompanyPage"));
const ProductPage = lazy(() => import("@/pages/ProductPage"));
const PricingPage = lazy(() => import("@/pages/PricingPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const PrivacyPage = lazy(() => import("@/pages/PrivacyPage"));
const ResourcesPage = lazy(() => import("@/pages/ResourcesPage"));

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
          <Route path="/" component={HomePage} />
          <Route path="/company" component={CompanyPage} />
          <Route path="/product" component={ProductPage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/resources" component={ResourcesPage} />
          <Route component={HomePage} />
        </Switch>
      </Suspense>
    </>
  );
}

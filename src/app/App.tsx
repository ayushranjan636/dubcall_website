import { useEffect, Suspense, lazy } from "react";
import { Switch, Route, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { TalkToUsProvider } from "@/lib/talk-to-us";
import TalkToUs from "@/components/shared/TalkToUs";

const HomePage = lazy(() => import("@/pages/HomePage"));
const CompanyPage = lazy(() => import("@/pages/CompanyPage"));
const ProductPage = lazy(() => import("@/pages/ProductPage"));
const PricingPage = lazy(() => import("@/pages/PricingPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const PrivacyPage = lazy(() => import("@/pages/PrivacyPage"));
const ResourcesPage = lazy(() => import("@/pages/ResourcesPage"));

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg">
      <div className="h-7 w-7 animate-spin rounded-full border-2 border-fg/20 border-t-fg" />
    </div>
  );
}

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);
  return null;
}

function PageTransition({ children, k }: { children: React.ReactNode; k: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={k}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [location] = useLocation();

  return (
    <TalkToUsProvider>
      <div className="min-h-screen bg-bg text-fg">
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <PageTransition k={location}>
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
          </PageTransition>
        </Suspense>
        {/* Global modal — mounted once, opened from anywhere via useTalkToUs() */}
        <TalkToUs />
      </div>
    </TalkToUsProvider>
  );
}

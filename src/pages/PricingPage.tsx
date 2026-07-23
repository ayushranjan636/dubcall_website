import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Seo, { faqJsonLd } from "@/lib/seo";
import PricingSection from "@/components/sections/pricing/PricingSection";
import CreditPacks from "@/components/sections/pricing/CreditPacks";
import AddOns from "@/components/sections/pricing/AddOns";
import PricingTrust from "@/components/sections/pricing/PricingTrust";
import EnterpriseBanner from "@/components/sections/pricing/EnterpriseBanner";
import PricingFAQ, { pricingFaqs } from "@/components/sections/pricing/PricingFAQ";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Seo
        title="DubCall Pricing — AI Voice Agent Plans from ₹0 to ₹10,000/mo"
        description="DubCall pricing 2026: Free plan (10 credits/month), Starter ₹2,000/mo (~$20), Pro ₹5,000/mo (~$49), Scale ₹10,000/mo (~$99). Annual billing saves 20%. Credit packs at ₹5/credit with volume discounts up to 30%."
        path="/pricing"
        jsonLd={faqJsonLd(pricingFaqs)}
      />
      <Navbar />
      <main className="pt-24">
        <PricingSection />
        <CreditPacks />
        <AddOns />
        <PricingTrust />
        <EnterpriseBanner />
        <PricingFAQ />
      </main>
      <Footer />
    </div>
  );
}

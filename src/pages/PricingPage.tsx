import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingSection from "@/components/sections/pricing/PricingSection";
import CreditPacks from "@/components/sections/pricing/CreditPacks";
import AddOns from "@/components/sections/pricing/AddOns";
import PricingTrust from "@/components/sections/pricing/PricingTrust";
import EnterpriseBanner from "@/components/sections/pricing/EnterpriseBanner";
import PricingFAQ from "@/components/sections/pricing/PricingFAQ";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-bg text-fg">
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

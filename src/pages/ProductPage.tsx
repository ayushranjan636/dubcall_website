import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/sections/product/ProductHero";
import ProductFlow from "@/components/sections/product/ProductFlow";
import ProductFeatures from "@/components/sections/product/ProductFeatures";
import ProductPricing from "@/components/sections/product/ProductPricing";
import TrustSection from "@/components/sections/product/TrustSection";
import EnterpriseSection from "@/components/sections/product/EnterpriseSection";
import AddOnsSection from "@/components/sections/product/AddOnsSection";
import ProductFAQ from "@/components/sections/product/ProductFAQ";
import ProductCTA from "@/components/sections/product/ProductCTA";

export default function ProductPage() {
  return (
    <div className="dubcall-page min-h-screen bg-white text-black overflow-x-hidden">
      <Navbar />
      <ProductHero />
      <ProductFlow />
      <ProductFeatures />
      <ProductPricing />
      <TrustSection />
      <EnterpriseSection />
      <AddOnsSection />
      <ProductFAQ />
      <ProductCTA />
      <Footer />
    </div>
  );
}

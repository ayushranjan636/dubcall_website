import DubCallNavbar from "@/components/dubcall/Navbar";
import DubCallFooter from "@/components/dubcall/Footer";
import ProductHero from "@/components/dubcall/product/ProductHero";
import ProductFlow from "@/components/dubcall/product/ProductFlow";
import ProductFeatures from "@/components/dubcall/product/ProductFeatures";
import ProductPricing from "@/components/dubcall/product/ProductPricing";
import TrustSection from "@/components/dubcall/product/TrustSection";
import EnterpriseSection from "@/components/dubcall/product/EnterpriseSection";
import AddOnsSection from "@/components/dubcall/product/AddOnsSection";
import ProductFAQ from "@/components/dubcall/product/ProductFAQ";
import ProductCTA from "@/components/dubcall/product/ProductCTA";

export default function DubCallProductPage() {
  return (
    <div className="dubcall-page min-h-screen bg-white text-black overflow-x-hidden">
      <DubCallNavbar />
      <ProductHero />
      <ProductFlow />
      <ProductFeatures />
      <ProductPricing />
      <TrustSection />
      <EnterpriseSection />
      <AddOnsSection />
      <ProductFAQ />
      <ProductCTA />
      <DubCallFooter />
    </div>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/sections/product/ProductHero";
import ProductFlow from "@/components/sections/product/ProductFlow";
import ProductFeatures from "@/components/sections/product/ProductFeatures";
import ProductFAQ from "@/components/sections/product/ProductFAQ";
import ProductCTA from "@/components/sections/product/ProductCTA";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Navbar />
      <main className="pt-24">
        <ProductHero />
        <ProductFlow />
        <ProductFeatures />
        <ProductFAQ />
        <ProductCTA />
      </main>
      <Footer />
    </div>
  );
}

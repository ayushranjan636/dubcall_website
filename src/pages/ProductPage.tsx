import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Seo, { faqJsonLd } from "@/lib/seo";
import ProductHero from "@/components/sections/product/ProductHero";
import ProductFlow from "@/components/sections/product/ProductFlow";
import ProductFeatures from "@/components/sections/product/ProductFeatures";
import ProductFAQ, { productFaqs } from "@/components/sections/product/ProductFAQ";
import ProductCTA from "@/components/sections/product/ProductCTA";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Seo
        title="AI Voice Agent Platform — Routing, Actions & Analytics | DubCall"
        description="DubCall AI voice agents hold natural phone conversations with ~320ms response, route calls intelligently, update CRMs like HubSpot and Salesforce, book meetings, and call any REST API. Deploy in under a day."
        path="/product"
        jsonLd={faqJsonLd(productFaqs)}
      />
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

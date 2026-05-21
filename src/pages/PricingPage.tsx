import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingSection from "@/components/sections/pricing/PricingSection";

export default function PricingPage() {
  return (
    <div className="dubcall-page min-h-screen bg-white text-black overflow-x-hidden">
      <Navbar />
      <PricingSection />
      <Footer />
    </div>
  );
}

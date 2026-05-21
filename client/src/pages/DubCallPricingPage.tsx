import DubCallNavbar from "@/components/dubcall/Navbar";
import DubCallFooter from "@/components/dubcall/Footer";
import DubCallPricingSection from "@/components/dubcall/DubCallPricingSection";

export default function DubCallPricingPage() {
  return (
    <div className="dubcall-page min-h-screen bg-white text-black overflow-x-hidden">
      <DubCallNavbar />

      {/* Hero */}
      <section className="py-24 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 border border-black rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-white">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            Pricing
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Start free. Scale as you grow. No hidden fees.
          </p>
        </div>
      </section>

      <DubCallPricingSection />
      <DubCallFooter />
    </div>
  );
}

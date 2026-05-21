import DubCallNavbar from "@/components/dubcall/Navbar";
import DubCallHero from "@/components/dubcall/Hero";
import DubCallTrustedBy from "@/components/dubcall/TrustedBy";
import DubCallStats from "@/components/dubcall/Stats";
import DubCallAgentStudio from "@/components/dubcall/AgentStudio";
import DubCallUseCase from "@/components/dubcall/UseCase";
import DubCallFeatures from "@/components/dubcall/Features";
import DubCallTestimonials from "@/components/dubcall/Testimonials";
import DubCallIntegrations from "@/components/dubcall/Integrations";
import DubCallCTA from "@/components/dubcall/CTA";
import DubCallFooter from "@/components/dubcall/Footer";

export default function DubCallHomePage() {
  return (
    <div className="dubcall-page min-h-screen bg-white text-black overflow-x-hidden">
      <DubCallNavbar />
      <DubCallHero />
      <DubCallTrustedBy />
      <DubCallStats />
      <DubCallAgentStudio />
      <DubCallUseCase />
      <DubCallFeatures />
      <DubCallTestimonials />
      <DubCallIntegrations />
      <DubCallCTA />
      <DubCallFooter />
    </div>
  );
}

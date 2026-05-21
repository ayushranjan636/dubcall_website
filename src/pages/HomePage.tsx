import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/home/Hero";
import TrustedBy from "@/components/sections/home/TrustedBy";
import Stats from "@/components/sections/home/Stats";
import AgentStudio from "@/components/sections/home/AgentStudio";
import UseCase from "@/components/sections/home/UseCase";
import Features from "@/components/sections/home/Features";
import Testimonials from "@/components/sections/home/Testimonials";
import Integrations from "@/components/sections/home/Integrations";
import CTA from "@/components/shared/CTA";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Stats />
        <AgentStudio />
        <Features />
        <UseCase />
        <Integrations />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

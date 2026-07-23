import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Seo from "@/lib/seo";
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
      <Seo
        title="DubCall — AI Voice Agents for Support, Sales & Lead Calls"
        description="DubCall builds AI voice agents that make and answer phone calls in 32+ languages including Hindi and English — qualifying leads, booking appointments, and resolving support 24×7. Start free; plans from ₹2,000/month."
        path="/"
      />
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

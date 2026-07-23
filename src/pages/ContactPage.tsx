import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Seo from "@/lib/seo";
import TalkToUsForm from "@/components/shared/TalkToUsForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Seo
        title="Contact DubCall — Book a Demo or Talk to Sales"
        description="Talk to the DubCall team about AI voice agents for your business. Book a demo, get pricing help, or reach support — we respond within 24 hours."
        path="/contact"
      />
      <Navbar />
      <main className="relative pt-36 pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px] dc-mesh-blob-1" />
        </div>
        <TalkToUsForm />
      </main>
      <Footer />
    </div>
  );
}

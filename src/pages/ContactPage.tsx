import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TalkToUsForm from "@/components/shared/TalkToUsForm";

export default function ContactPage() {
  return (
    <div className="dubcall-page min-h-screen bg-white text-black overflow-x-hidden">
      <Navbar />
      <section className="pt-32 pb-24 px-4">
        <TalkToUsForm />
      </section>
      <Footer />
    </div>
  );
}

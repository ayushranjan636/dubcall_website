import DubCallNavbar from "@/components/dubcall/Navbar";
import DubCallFooter from "@/components/dubcall/Footer";
import TalkToUsForm from "@/components/dubcall/TalkToUsForm";

export default function DubCallContactPage() {
  return (
    <div className="dubcall-page min-h-screen bg-white text-black overflow-x-hidden">
      <DubCallNavbar />

      <section className="py-16 md:py-24 bg-white">
        <TalkToUsForm />
      </section>

      <DubCallFooter />
    </div>
  );
}

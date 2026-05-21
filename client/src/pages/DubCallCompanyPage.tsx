import DubCallNavbar from "@/components/dubcall/Navbar";
import DubCallFooter from "@/components/dubcall/Footer";
import DubCallCTA from "@/components/dubcall/CTA";
import CompanyHero from "@/components/dubcall/company/CompanyHero";
import CompanyVision from "@/components/dubcall/company/CompanyVision";
import CompanyTeam from "@/components/dubcall/company/CompanyTeam";
import CompanyAdvisors from "@/components/dubcall/company/CompanyAdvisors";

export default function DubCallCompanyPage() {
  return (
    <div className="dubcall-page min-h-screen bg-white text-black overflow-x-hidden">
      <DubCallNavbar />
      <CompanyHero />
      <CompanyVision />
      <CompanyTeam />
      <CompanyAdvisors />
      <DubCallCTA />
      <DubCallFooter />
    </div>
  );
}

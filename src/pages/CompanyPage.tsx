import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/shared/CTA";
import CompanyHero from "@/components/sections/company/CompanyHero";
import CompanyVision from "@/components/sections/company/CompanyVision";
import CompanyTeam from "@/components/sections/company/CompanyTeam";
import CompanyAdvisors from "@/components/sections/company/CompanyAdvisors";

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Navbar />
      <main className="pt-24">
        <CompanyHero />
        <CompanyVision />
        <CompanyTeam />
        <CompanyAdvisors />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

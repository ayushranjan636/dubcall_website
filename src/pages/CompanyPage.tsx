import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Seo from "@/lib/seo";
import CTA from "@/components/shared/CTA";
import CompanyHero from "@/components/sections/company/CompanyHero";
import CompanyVision from "@/components/sections/company/CompanyVision";
import CompanyTeam from "@/components/sections/company/CompanyTeam";
import CompanyAdvisors from "@/components/sections/company/CompanyAdvisors";

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Seo
        title="About DubCall — Voice AI Company by NextSens Global Pvt. Ltd."
        description="DubCall is built by NextSens Global Pvt. Ltd. in India, founded by Pretam Ram (CEO) and Piyush Modi (CBO). Agentic voice AI with human-level interaction — supported by Cartesia Startups and Nirmaan."
        path="/company"
      />
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

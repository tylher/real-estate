import AgentsSection from "@/components/home/AgentSection";
import CompanyOverview from "@/components/home/CompanyOverview";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import HeroSection from "@/components/home/hero";
import LeadCaptureSection from "@/components/home/LeadCaptureSection";
import ValuesSection from "@/components/home/ValuesSections";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ValuesSection />
      <FeaturedProperties />
      <CompanyOverview/>
      <AgentsSection />
      <LeadCaptureSection />
    </main>
  );
}

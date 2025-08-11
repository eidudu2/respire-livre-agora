import Hero from "@/components/Hero";
import Differentials from "@/components/Differentials";
import Benefits from "@/components/Benefits";
import GuideContent from "@/components/GuideContent";
import Testimonials from "@/components/Testimonials";
import Offer from "@/components/Offer";
import FinalCta from "@/components/FinalCta";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Differentials />
      <Benefits />
      <GuideContent />
      <Testimonials />
      <Offer />
      <FinalCta />
    </div>
  );
};

export default Index;
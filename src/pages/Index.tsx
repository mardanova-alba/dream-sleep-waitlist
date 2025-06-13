
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RoadmapSection from "@/components/RoadmapSection";
import FooterSection from "@/components/FooterSection";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleJoinWaitlist = () => {
    setIsWaitlistOpen(true);
  };

  const handleCloseWaitlist = () => {
    setIsWaitlistOpen(false);
  };

  return (
    <div className="min-h-screen relative">
      {/* Full page background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/98e9dc4f-ac73-4286-bbca-f1218462eec5.png')"
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10">
        <HeroSection onJoinWaitlist={handleJoinWaitlist} />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <RoadmapSection />
        <FooterSection onJoinWaitlist={handleJoinWaitlist} />
        
        <WaitlistForm isOpen={isWaitlistOpen} onClose={handleCloseWaitlist} />
      </div>
    </div>
  );
};

export default Index;

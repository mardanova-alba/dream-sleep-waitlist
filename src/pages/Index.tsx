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
    <div className="min-h-screen">
      {/* Hero with dreamy background */}
      <div 
        className="min-h-screen bg-cover bg-center bg-fixed relative"
        style={{
          backgroundImage: "url('/lovable-uploads/1822767b-1b9c-40d9-9b77-781ab2095d81.png')"
        }}
      >
        {/* Gradient overlay for dreamy effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/30 via-purple-100/20 to-pink-100/30"></div>
        
        <HeroSection onJoinWaitlist={handleJoinWaitlist} />
      </div>
      
      {/* Other sections with soft backgrounds */}
      <div className="bg-gradient-to-b from-blue-50/50 to-purple-50/30">
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <RoadmapSection />
        <FooterSection onJoinWaitlist={handleJoinWaitlist} />
      </div>
      
      <WaitlistForm isOpen={isWaitlistOpen} onClose={handleCloseWaitlist} />
    </div>
  );
};

export default Index;

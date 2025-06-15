
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
    <div className="min-h-screen relative smooth-scroll">
      {/* Optimized Desktop background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat hidden md:block background-fixed bg-optimized"
        style={{
          backgroundImage: "url('/lovable-uploads/ff90ff01-c6e6-4ff4-853c-2f0dc2616b45.png')"
        }}
      />
      
      {/* Optimized Mobile background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat md:hidden mobile-bg-optimized"
        style={{
          backgroundImage: "url('/lovable-uploads/42260745-1326-4ba2-9922-b977dee14da1.png')"
        }}
      />
      
      {/* Content overlay with optimized transitions */}
      <div className="relative z-10 optimized-transition">
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

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
  return <div className="min-h-screen bg-[#cee8ff]">
      <HeroSection onJoinWaitlist={handleJoinWaitlist} />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <RoadmapSection />
      <FooterSection onJoinWaitlist={handleJoinWaitlist} />
      
      <WaitlistForm isOpen={isWaitlistOpen} onClose={handleCloseWaitlist} />
    </div>;
};
export default Index;
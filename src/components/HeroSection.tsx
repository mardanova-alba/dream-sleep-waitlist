
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

const HeroSection = ({ onJoinWaitlist }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
      {/* Fixed Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/98e9dc4f-ac73-4286-bbca-f1218462eec5.png')"
        }}
      />
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30"></div>
      
      {/* Enhanced gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-amber-600/15"></div>

      <div className="relative max-w-7xl mx-auto text-center z-10 w-full">
        {/* Main headline with enhanced typography */}
        <div className="mb-6 sm:mb-8 lg:mb-10 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-2 sm:mb-4 leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl">
              MoneyDream.AI
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-light leading-tight drop-shadow-lg">
            Earn While You Sleep
          </h2>
        </div>

        {/* Enhanced subtext with better contrast */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 lg:mb-12 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed animate-fade-in px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-white/95 font-medium drop-shadow-lg bg-black/20 px-6 py-3 rounded-2xl backdrop-blur-sm border border-white/10">
            Autonomous, hedge-fund-grade trading powered by modular AI agents. 
            Let advanced algorithms work 24/7 while you rest.
          </span>
        </p>

        {/* Enhanced CTA Button */}
        <div className="animate-fade-in px-4 sm:px-6">
          <Button 
            onClick={onJoinWaitlist} 
            className="pill-button text-base sm:text-lg md:text-xl font-semibold px-8 sm:px-10 md:px-16 py-4 sm:py-5 md:py-6 h-auto bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 w-full sm:w-auto max-w-xs sm:max-w-none border-2 border-amber-300/50 hover:border-amber-200 hover:scale-105 backdrop-blur-sm"
          >
            Join Waitlist
          </Button>
        </div>

        {/* Spacer for better mobile layout */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          {/* Content can be added here if needed */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

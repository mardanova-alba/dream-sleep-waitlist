
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
          backgroundImage: "url('/lovable-uploads/e0c1f05f-ba58-447e-826c-07c8f1d7211b.png')"
        }} 
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 sm:bg-black/35"></div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light/20 via-transparent to-brand-primary/20"></div>

      <div className="relative max-w-7xl mx-auto text-center z-10 w-full">
        {/* Main headline */}
        <div className="mb-6 sm:mb-8 lg:mb-10 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold gradient-text mb-2 sm:mb-4 leading-tight drop-shadow-lg">
            MoneyDream.AI
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-white/90 font-light leading-tight">
            Earn While You Sleep
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 lg:mb-12 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed animate-fade-in drop-shadow-md text-[#f4e290]/80 px-4 sm:px-6 lg:px-8 text-center">
          Autonomous, hedge-fund-grade trading powered by modular AI agents. 
          Let advanced algorithms work 24/7 while you rest.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in px-4 sm:px-6">
          <Button 
            onClick={onJoinWaitlist} 
            className="pill-button text-brand-text text-sm sm:text-base md:text-lg font-medium px-6 sm:px-8 md:px-12 py-3 sm:py-3 md:py-4 h-auto bg-blue-300 hover:bg-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto max-w-xs sm:max-w-none"
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

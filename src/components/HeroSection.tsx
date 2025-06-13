
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

const HeroSection = ({ onJoinWaitlist }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10 w-full">
        {/* Main headline */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              MoneyDream.AI
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 font-light leading-tight">
            Earn While You Sleep
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-lg sm:text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/80 px-4">
          Autonomous, hedge-fund-grade trading powered by modular AI agents. 
          Let advanced algorithms work 24/7 while you rest.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in">
          <Button 
            onClick={onJoinWaitlist} 
            className="text-lg font-semibold px-12 py-6 h-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 rounded-full border-2 border-purple-400/30 hover:border-purple-300 hover:scale-105"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

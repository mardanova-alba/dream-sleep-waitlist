import { Button } from "@/components/ui/button";
interface HeroSectionProps {
  onJoinWaitlist: () => void;
}
const HeroSection = ({
  onJoinWaitlist
}: HeroSectionProps) => {
  return <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
      <div className="relative max-w-7xl mx-auto text-center z-10 w-full">
        {/* Main headline */}
        <div className="mb-6 sm:mb-8 lg:mb-10 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold mb-2 sm:mb-4 leading-tight text-white drop-shadow-2xl md:text-7xl">
            MoneyDream.AI
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-white/95 font-light leading-tight drop-shadow-lg">
            Earn While You Sleep
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 lg:mb-12 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed animate-fade-in text-white/90 px-4 sm:px-6 lg:px-8 text-center drop-shadow-md">
          Autonomous, hedge-fund-grade trading powered by modular AI agents. 
          Let advanced algorithms work 24/7 while you rest.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in px-4 sm:px-6">
          <Button onClick={onJoinWaitlist} className="pill-button sm:text-base md:text-lg font-medium px-6 sm:px-8 md:px-12 py-3 sm:py-3 md:py-4 h-auto bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto max-w-xs sm:max-w-none text-2xl text-sky-600">
            Join Waitlist
          </Button>
        </div>
      </div>
    </section>;
};
export default HeroSection;
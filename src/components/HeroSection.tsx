import { Button } from "@/components/ui/button";
interface HeroSectionProps {
  onJoinWaitlist: () => void;
}
const HeroSection = ({
  onJoinWaitlist
}: HeroSectionProps) => {
  return <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-20 pb-16 overflow-hidden">
      {/* Fixed Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat" style={{
      backgroundImage: "url('/lovable-uploads/e0c1f05f-ba58-447e-826c-07c8f1d7211b.png')"
    }} />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light/20 via-transparent to-brand-primary/20"></div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Main headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight drop-shadow-lg px-2">
          <span className="gradient(#add8e6, #d8b4fe, #ffe4e1)-text text-8xl ">MoneyDream.AI</span>
          <br />
          <span className="gradient-text text-6xl">
            Earn While You Sleep
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in drop-shadow-md md:text-xl px-[56px]">Autonomous, hedge-fund-grade trading powered by modular AI agents. Let advanced algorithms work 24/7 while you rest.</p>

        {/* CTA Button */}
        <div className="animate-fade-in px-4">
          <Button onClick={onJoinWaitlist} className="pill-button text-brand-text text-base md:text-lg px-8 md:px-12 py-3 md:py-4 h-auto bg-blue-300 hover:bg-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto">
            Join Waitlist
          </Button>
        </div>

        {/* Hero Art placeholder - removed since we're using background image */}
        <div className="mt-16 animate-fade-in">
          <div className="relative max-w-3xl mx-auto">
            {/* Content can be added here if needed */}
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
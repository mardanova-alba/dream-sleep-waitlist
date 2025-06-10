import { Button } from "@/components/ui/button";
interface HeroSectionProps {
  onJoinWaitlist: () => void;
}
const HeroSection = ({
  onJoinWaitlist
}: HeroSectionProps) => {
  return <section className=".custom-gradient {\n  background-image:\n    radial-gradient(ellipse at bottom left, rgba(30, 58, 138, 0.6) 20%, transparent 70%),\n    radial-gradient(ellipse at bottom right, rgba(30, 58, 138, 0.6) 20%, transparent 70%),\n    linear-gradient(to bottom, #E0F2FE, #1E3A8A);\n}">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light via-white to-brand-primary opacity-60"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-primary-DEFAULT">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-brand-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Logo */}
        

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-text mb-6 animate-fade-in leading-tight">
          <span className="gradient-text">MoneyDream.AI</span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl font-light">
            Earn While You Sleep
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-brand-text/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Autonomous, hedge-fund-grade trading powered by modular AI agents. 
          Let advanced algorithms work 24/7 while you rest.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in">
          <Button onClick={onJoinWaitlist} className="pill-button text-brand-text text-lg px-12 py-4 h-auto bg-blue-300 hover:bg-blue-200">
            Join Waitlist
          </Button>
        </div>

        {/* Hero Art */}
        <div className="mt-16 animate-fade-in">
          <div className="relative max-w-3xl mx-auto">
            
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;

import { Button } from "@/components/ui/button";

interface FooterSectionProps {
  onJoinWaitlist: () => void;
}

const FooterSection = ({ onJoinWaitlist }: FooterSectionProps) => {
  return (
    <footer className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-primary/20 to-brand-accent/30">
      <div className="max-w-7xl mx-auto">
        {/* Final CTA */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text mb-4 sm:mb-6 leading-tight">
            Ready to Dream Bigger?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-brand-text/70 mb-6 sm:mb-8 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Join thousands of forward-thinking investors who are already on the waitlist
          </p>
          <Button 
            onClick={onJoinWaitlist} 
            className="pill-button text-brand-text text-sm sm:text-base md:text-lg font-medium px-8 sm:px-10 md:px-12 py-3 sm:py-3 md:py-4 h-auto bg-blue-400 hover:bg-blue-300 w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            Join the Waitlist
          </Button>
        </div>

        {/* Risk Disclaimer */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 card-shadow mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg font-semibold text-brand-text mb-3 sm:mb-4">
            Risk Disclaimer
          </h3>
          <p className="text-xs sm:text-sm text-brand-text/60 leading-relaxed text-justify">
            Trading involves substantial risk and may result in the loss of your invested capital. 
            Past performance is not indicative of future results. MoneyDream.AI's automated trading 
            systems do not guarantee profits and all investments carry inherent risks. Please consider 
            your financial situation and risk tolerance before using our services. This is not 
            financial advice and you should consult with a qualified financial advisor before making 
            investment decisions.
          </p>
        </div>

        {/* Footer bottom */}
        <div className="text-center text-brand-text/60 text-xs sm:text-sm">
          <p>&copy; 2024 MoneyDream.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

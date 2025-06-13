
import { Button } from "@/components/ui/button";

interface FooterSectionProps {
  onJoinWaitlist: () => void;
}

const FooterSection = ({ onJoinWaitlist }: FooterSectionProps) => {
  return (
    <footer className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 relative">
      {/* Section overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/95 to-blue-100/95 backdrop-blur-sm"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Final CTA */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Ready to Dream Bigger?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 font-medium">
            Join thousands of forward-thinking investors who are already on the waitlist
          </p>
          <Button 
            onClick={onJoinWaitlist} 
            className="pill-button text-base sm:text-lg md:text-xl font-semibold px-8 sm:px-10 md:px-16 py-4 sm:py-5 md:py-6 h-auto bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 w-full sm:w-auto max-w-xs sm:max-w-none border-2 border-amber-300/50 hover:border-amber-200 hover:scale-105"
          >
            Join the Waitlist
          </Button>
        </div>

        {/* Risk Disclaimer */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-2xl mb-8 sm:mb-10 border border-white/50">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
            Risk Disclaimer
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify font-medium">
            Trading involves substantial risk and may result in the loss of your invested capital. 
            Past performance is not indicative of future results. MoneyDream.AI's automated trading 
            systems do not guarantee profits and all investments carry inherent risks. Please consider 
            your financial situation and risk tolerance before using our services. This is not 
            financial advice and you should consult with a qualified financial advisor before making 
            investment decisions.
          </p>
        </div>

        {/* Footer bottom */}
        <div className="text-center text-gray-600 text-sm sm:text-base font-medium">
          <p>&copy; 2024 MoneyDream.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

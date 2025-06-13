
import { Button } from "@/components/ui/button";

interface FooterSectionProps {
  onJoinWaitlist: () => void;
}

const FooterSection = ({ onJoinWaitlist }: FooterSectionProps) => {
  return (
    <footer className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50/50 to-pink-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Final CTA */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6 leading-tight lowercase tracking-wide">
            ready to dream bigger?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed font-light lowercase">
            join thousands of forward-thinking investors who are already on the waitlist
          </p>
          <Button 
            onClick={onJoinWaitlist} 
            className="bg-gradient-to-r from-purple-200/80 to-blue-200/80 hover:from-purple-300/90 hover:to-blue-300/90 text-gray-800 font-light text-lg px-10 py-4 rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 lowercase tracking-wide"
          >
            join the waitlist
          </Button>
        </div>

        {/* Risk Disclaimer */}
        <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg mb-8 border border-white/40">
          <h3 className="text-lg font-light text-gray-800 mb-4 lowercase tracking-wide">
            risk disclaimer
          </h3>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify font-light">
            trading involves substantial risk and may result in the loss of your invested capital. 
            past performance is not indicative of future results. moneydream.ai's automated trading 
            systems do not guarantee profits and all investments carry inherent risks. please consider 
            your financial situation and risk tolerance before using our services. this is not 
            financial advice and you should consult with a qualified financial advisor before making 
            investment decisions.
          </p>
        </div>

        {/* Footer bottom */}
        <div className="text-center text-gray-600 text-xs sm:text-sm font-light lowercase">
          <p>&copy; 2024 moneydream.ai. all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

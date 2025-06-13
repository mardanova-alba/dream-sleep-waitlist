
import { Button } from "@/components/ui/button";
interface FooterSectionProps {
  onJoinWaitlist: () => void;
}
const FooterSection = ({
  onJoinWaitlist
}: FooterSectionProps) => {
  return <footer className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Semi-transparent overlay for better readability */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm md:bg-white/10 bg-black/20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Final CTA */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-lg text-blue-900 md:text-5xl">
            Ready to Dream Bigger?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 drop-shadow-md">
            Join thousands of forward-thinking investors who are already on the waitlist
          </p>
          <Button onClick={onJoinWaitlist} className="pill-button sm:text-base md:text-lg font-medium px-8 sm:px-10 md:px-12 py-3 sm:py-3 md:py-4 h-auto bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 w-full sm:w-auto max-w-xs sm:max-w-none shadow-xl hover:shadow-2xl transition-all duration-300 text-blue-900 text-xl">
            Join the Waitlist
          </Button>
        </div>

        {/* Risk Disclaimer */}
        <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 sm:p-8 shadow-xl mb-6 sm:mb-8 md:bg-white/20 bg-white/30">
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 drop-shadow-lg">
            Risk Disclaimer
          </h3>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed text-justify drop-shadow-md">
            Trading involves substantial risk and may result in the loss of your invested capital. 
            Past performance is not indicative of future results. MoneyDream.AI's automated trading 
            systems do not guarantee profits and all investments carry inherent risks. Please consider 
            your financial situation and risk tolerance before using our services. This is not 
            financial advice and you should consult with a qualified financial advisor before making 
            investment decisions.
          </p>
        </div>

        {/* Footer bottom */}
        <div className="text-center text-white/70 text-xs sm:text-sm drop-shadow-md">
          <p>© 2025 MoneyDream.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default FooterSection;

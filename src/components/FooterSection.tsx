
import { Button } from "@/components/ui/button";

interface FooterSectionProps {
  onJoinWaitlist: () => void;
}

const FooterSection = ({ onJoinWaitlist }: FooterSectionProps) => {
  return (
    <footer className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Final CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Dream Bigger?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto leading-relaxed">
            Join thousands of forward-thinking investors who are already on the waitlist
          </p>
          <Button 
            onClick={onJoinWaitlist} 
            className="text-lg font-semibold px-12 py-6 h-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 rounded-full border-2 border-purple-400/30 hover:border-purple-300 hover:scale-105"
          >
            Join the Waitlist
          </Button>
        </div>

        {/* Risk Disclaimer */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/20">
          <h3 className="text-xl font-bold text-white mb-6">
            Risk Disclaimer
          </h3>
          <p className="text-white/80 leading-relaxed">
            Trading involves substantial risk and may result in the loss of your invested capital. 
            Past performance is not indicative of future results. MoneyDream.AI's automated trading 
            systems do not guarantee profits and all investments carry inherent risks. Please consider 
            your financial situation and risk tolerance before using our services. This is not 
            financial advice and you should consult with a qualified financial advisor before making 
            investment decisions.
          </p>
        </div>

        {/* Footer bottom */}
        <div className="text-center text-white/60">
          <p>&copy; 2024 MoneyDream.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

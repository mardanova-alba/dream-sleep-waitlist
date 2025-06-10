
import { Button } from "@/components/ui/button";

interface FooterSectionProps {
  onJoinWaitlist: () => void;
}

const FooterSection = ({ onJoinWaitlist }: FooterSectionProps) => {
  return (
    <footer className="py-24 px-6 bg-gradient-to-b from-brand-primary/20 to-brand-accent/30">
      <div className="max-w-5xl mx-auto">
        {/* Final CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
            Ready to Dream Bigger?
          </h2>
          <p className="text-xl text-brand-text/70 mb-8 max-w-2xl mx-auto">
            Join thousands of forward-thinking investors who are already on the waitlist
          </p>
          <Button 
            onClick={onJoinWaitlist}
            className="pill-button bg-brand-accent text-brand-text hover:bg-brand-accent/90 text-lg px-12 py-4 h-auto"
          >
            Join the Waitlist
          </Button>
        </div>

        {/* Risk Disclaimer */}
        <div className="bg-white rounded-2xl p-8 card-shadow mb-8">
          <h3 className="text-lg font-semibold text-brand-text mb-4">
            Risk Disclaimer
          </h3>
          <p className="text-sm text-brand-text/60 leading-relaxed">
            Trading involves substantial risk and may result in the loss of your invested capital. 
            Past performance is not indicative of future results. MoneyDream.AI's automated trading 
            systems do not guarantee profits and all investments carry inherent risks. Please consider 
            your financial situation and risk tolerance before using our services. This is not 
            financial advice and you should consult with a qualified financial advisor before making 
            investment decisions.
          </p>
        </div>

        {/* Footer bottom */}
        <div className="text-center text-brand-text/60 text-sm">
          <p>&copy; 2024 MoneyDream.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

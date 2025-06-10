
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Thanks = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-light via-white to-brand-primary px-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-accent rounded-full mb-6 shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
            <span className="text-3xl">✨</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6 animate-fade-in">
          Welcome to the Future!
        </h1>
        
        <p className="text-xl text-brand-text/70 mb-8 leading-relaxed animate-fade-in">
          You're now on the MoneyDream.AI waitlist. We'll notify you as soon as we launch 
          and you'll be among the first to experience autonomous trading that works while you sleep.
        </p>

        <div className="animate-fade-in">
          <Button 
            onClick={() => navigate("/")}
            className="pill-button bg-brand-accent text-brand-text hover:bg-brand-accent/90 text-lg px-8 py-3 h-auto"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;

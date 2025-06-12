
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Connect Broker / Exchange",
      description: "Securely link your existing trading account through our encrypted API integration"
    },
    {
      number: "02",
      title: "Choose Risk Level",
      description: "Select your preferred risk tolerance and investment goals with our guided setup"
    },
    {
      number: "03",
      title: "Toggle AI On",
      description: "Activate our autonomous trading system with a single click — that's it"
    },
    {
      number: "04",
      title: "Track P&L, Sharpe, Drawdown",
      description: "Monitor real-time performance metrics through our intuitive dashboard"
    },
    {
      number: "05",
      title: "Sleep Tight — We Trade All Night",
      description: "Relax while our AI agents work 24/7 across global markets"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-light to-brand-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text mb-4 sm:mb-6 leading-tight">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-brand-text/70 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Get started in minutes with our streamlined onboarding process
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 bg-white rounded-2xl p-6 sm:p-8 card-shadow hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-brand-accent rounded-full flex items-center justify-center">
                <span className="text-sm sm:text-base md:text-lg font-bold text-brand-text">
                  {step.number}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-brand-text mb-2 sm:mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-brand-text/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

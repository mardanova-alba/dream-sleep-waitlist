
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
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 relative">
      {/* Section overlay for readability */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 font-medium">
            Get started in minutes with our streamlined onboarding process
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/50"
            >
              <div className="flex-shrink-0 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-lg sm:text-xl md:text-2xl font-black text-white">
                  {step.number}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
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

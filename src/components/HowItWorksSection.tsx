
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get started in minutes with our streamlined onboarding process
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 hover:from-gray-100 hover:to-gray-200 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-black text-white">
                  {step.number}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
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

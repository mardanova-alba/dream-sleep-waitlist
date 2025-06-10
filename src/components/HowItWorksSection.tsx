const HowItWorksSection = () => {
  const steps = [{
    number: "01",
    title: "Connect Broker",
    description: "Securely link your existing trading account through our encrypted API integration"
  }, {
    number: "02",
    title: "Choose Risk",
    description: "Select your preferred risk tolerance and investment goals with our guided setup"
  }, {
    number: "03",
    title: "Toggle AI",
    description: "Activate our autonomous trading system with a single click — that's it"
  }, {
    number: "04",
    title: "Track P&L",
    description: "Monitor real-time performance metrics through our intuitive dashboard"
  }, {
    number: "05",
    title: "Sleep — We Trade All Night",
    description: "Relax while our AI agents work 24/7 across global markets"
  }];
  return <section className="py-32 px-6 bg-gradient-to-b from-white via-brand-light/30 to-white relative overflow-hidden">
      {/* Dreamy background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-brand-primary rounded-full animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-1/4 left-1/6 w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-brand-primary rounded-full animate-pulse" style={{
        animationDelay: '0.5s'
      }}></div>
        <div className="absolute bottom-1/3 right-1/6 w-2 h-2 bg-brand-accent rounded-full animate-pulse" style={{
        animationDelay: '1.5s'
      }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-brand-accent"></div>
            <span className="text-4xl">🌙</span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-brand-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
            How It Works
          </h2>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">
            Get started in minutes with our streamlined onboarding process
          </p>
        </div>

        {/* Horizontal Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-accent/30 via-brand-primary/50 to-brand-accent/30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => <div key={index} className="group relative flex flex-col items-center text-center rounded-2xl mx-0 bg-sky-900">
                {/* Step Circle */}
                <div className="relative mb-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-white to-brand-light rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(191,233,255,0.3)] group-hover:shadow-[0_12px_40px_rgba(191,233,255,0.4)] transition-all duration-500 border border-brand-accent/20">
                    <div className="text-center">
                      <div className="text-2xl mb-1">
                        {index === 0 && "🔗"}
                        {index === 1 && "⚖️"}
                        {index === 2 && "🤖"}
                        {index === 3 && "📊"}
                        {index === 4 && "🌟"}
                      </div>
                      <span className="text-sm font-bold text-brand-text/70">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Floating dots around circle */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-brand-accent rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-brand-primary rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>

                {/* Step Content */}
                <div className="space-y-4 max-w-xs">
                  <h3 className="text-lg leading-tight text-center font-extrabold md:text-xl py-[17px] my-0 mx-[13px] text-slate-900">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed px-0 py-[4px] text-center my-[10px] text-sm mx-[13px] text-slate-900">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (hidden on mobile) */}
                {index < steps.length - 1 && <div className="hidden lg:block absolute top-16 -right-2 text-brand-accent/50 text-xl transform -translate-y-1/2 bg-transparent">
                    →
                  </div>}
              </div>)}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-accent rounded-full opacity-60"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-brand-accent/60 to-brand-primary/60"></div>
            <div className="w-2 h-2 bg-brand-primary rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;
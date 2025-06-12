
const RoadmapSection = () => {
  const milestones = [
    {
      quarter: "Q2 2025",
      title: "Closed Beta Launch",
      description: "Limited access for stocks trading with select partners",
      status: "upcoming"
    },
    {
      quarter: "Q3 2025",
      title: "Crypto + $DREAM Staking",
      description: "Expand to cryptocurrency markets and introduce token rewards",
      status: "upcoming"
    },
    {
      quarter: "Q4 2025",
      title: "Public Launch + Rewards",
      description: "Full public release with comprehensive reward ecosystem",
      status: "upcoming"
    },
    {
      quarter: "2026+",
      title: "Global Expansion",
      description: "Options trading, LATAM/APAC markets, and B2B solutions",
      status: "future"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text mb-4 sm:mb-6 leading-tight">
            Roadmap
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-brand-text/70 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Our journey to democratize institutional-grade trading
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile for cleaner look */}
          <div className="absolute left-6 sm:left-7 md:left-8 top-8 bottom-8 w-0.5 bg-brand-accent hidden md:block"></div>
          
          <div className="space-y-6 sm:space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start gap-4 sm:gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-brand-accent rounded-full flex items-center justify-center relative z-10">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-brand-text rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-6 sm:p-8 card-shadow hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-brand-text leading-tight">
                      {milestone.title}
                    </h3>
                    <span className="font-semibold text-sm sm:text-base mt-1 sm:mt-0 text-sky-600">
                      {milestone.quarter}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-brand-text/70 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;

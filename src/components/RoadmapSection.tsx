const RoadmapSection = () => {
  const milestones = [{
    quarter: "Q2 2025",
    title: "Closed Beta Launch",
    description: "Limited access for stocks trading with select partners",
    status: "upcoming"
  }, {
    quarter: "Q3 2025",
    title: "Crypto + $DREAM Staking",
    description: "Expand to cryptocurrency markets and introduce token rewards",
    status: "upcoming"
  }, {
    quarter: "Q4 2025",
    title: "Public Launch + Rewards",
    description: "Full public release with comprehensive reward ecosystem",
    status: "upcoming"
  }, {
    quarter: "2026+",
    title: "Global Expansion",
    description: "Options trading, LATAM/APAC markets, and B2B solutions",
    status: "future"
  }];
  return <section className="py-24 px-6 bg-brand-light">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
            Roadmap
          </h2>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">
            Our journey to democratize institutional-grade trading
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-brand-accent hidden md:block"></div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => <div key={index} className="relative flex flex-col md:flex-row items-start gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center relative z-10">
                  <div className="w-3 h-3 bg-brand-text rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-8 card-shadow hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all duration-300 bg-accent-DEFAULT">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-brand-text">
                      {milestone.title}
                    </h3>
                    <span className="font-semibold mt-2 sm:mt-0 text-sky-300">
                      {milestone.quarter}
                    </span>
                  </div>
                  <p className="text-brand-text/70 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default RoadmapSection;
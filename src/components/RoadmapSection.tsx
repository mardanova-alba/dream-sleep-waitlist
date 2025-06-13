
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Roadmap
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our journey to democratize institutional-grade trading
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-purple-300 hidden md:block"></div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center relative z-10 shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                      {milestone.title}
                    </h3>
                    <span className="font-semibold text-purple-600 mt-2 sm:mt-0">
                      {milestone.quarter}
                    </span>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
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

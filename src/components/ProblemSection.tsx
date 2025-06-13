
const ProblemSection = () => {
  const problems = [
    {
      stat: "30M+",
      description: "new traders since 2020 — yet 80% quit within 2 years"
    },
    {
      stat: "25%",
      description: "of volume is retail, but lags S&P 500 by 6%+ annually"
    },
    {
      stat: "3 Missing",
      description: "Time, tools, and discipline are the missing pieces"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Semi-transparent overlay for better readability */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
            The Retail Investor Gap
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 drop-shadow-md">
            Despite unprecedented access to markets, retail investors face systematic disadvantages
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-300 mb-3 sm:mb-4 drop-shadow-lg">
                  {problem.stat}
                </div>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed drop-shadow-md">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

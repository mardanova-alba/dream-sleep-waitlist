
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
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 relative">
      {/* Section overlay for readability */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            The Retail Investor Gap
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 font-medium">
            Despite unprecedented access to markets, retail investors face systematic disadvantages
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-8 sm:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/90"
            >
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                  {problem.stat}
                </div>
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-medium">
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

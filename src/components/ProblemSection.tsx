
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
      description: "time, tools, and discipline are the missing pieces"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/70 to-purple-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6 leading-tight lowercase tracking-wide">
            the retail investor gap
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed font-light lowercase">
            despite unprecedented access to markets, retail investors face systematic disadvantages
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-white/40 hover:bg-white/40"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-purple-700 mb-4 tracking-wide">
                  {problem.stat}
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light lowercase">
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


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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            The Retail Investor Gap
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Despite unprecedented access to markets, retail investors face systematic disadvantages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl"
            >
              <div className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
                {problem.stat}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

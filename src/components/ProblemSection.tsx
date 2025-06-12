const ProblemSection = () => {
  const problems = [{
    stat: "30M+",
    description: "new traders since 2020 — yet 80% quit within 2 years"
  }, {
    stat: "25%",
    description: "of volume is retail, but lags S&P 500 by 6%+ annually"
  }, {
    stat: "3 Missing",
    description: "Time, tools, and discipline are the missing pieces"
  }];
  return <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text mb-4 sm:mb-6 leading-tight">
            The Retail Investor Gap
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-brand-text/70 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Despite unprecedented access to markets, retail investors face systematic disadvantages
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((problem, index) => <div key={index} className="border border-gray-50 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-[0_8px_24px_rgba(0,0,0,0.20)] transition-all duration-300 hover:-translate-y-1 bg-neutral-50">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-3 sm:mb-4">
                  {problem.stat}
                </div>
                <p className="text-sm sm:text-base text-brand-text/80 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProblemSection;
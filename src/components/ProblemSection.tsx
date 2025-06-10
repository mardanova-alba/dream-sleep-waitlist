
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
    <section className="py-24 px-6 bg-gradient-to-b from-white to-brand-light">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
            The Retail Investor Gap
          </h2>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">
            Despite unprecedented access to markets, retail investors face systematic disadvantages
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 card-shadow hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-4">
                  {problem.stat}
                </div>
                <p className="text-brand-text/80 leading-relaxed">
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

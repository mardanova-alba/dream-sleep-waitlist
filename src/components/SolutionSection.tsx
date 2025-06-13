
import { Clock, Clock as Strategy, FileText, Rocket, Calendar } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Agentic AI Engine",
      description: "Autonomous decision-making powered by advanced machine learning algorithms"
    },
    {
      icon: <Strategy className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Multi-Strategy Stack",
      description: "Diversified trading approaches adapted to market conditions in real-time"
    },
    {
      icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Hands-Free Portfolio Management",
      description: "Complete automation from analysis to execution, requiring zero daily input"
    },
    {
      icon: <Rocket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Performance-Aligned Fees",
      description: "We only profit when you profit — aligned incentives for mutual success"
    },
    {
      icon: <Calendar className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "$DREAM Token Yield",
      description: "Earn additional rewards through our native token ecosystem"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text mb-4 sm:mb-6 leading-tight">
            Our Solution
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-brand-text/70 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Professional-grade trading infrastructure made accessible to everyone
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-6 sm:p-8 card-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-sky-400 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-sky-950 font-bold leading-tight">
                {solution.title}
              </h3>
              <p className="text-sm sm:text-base text-brand-text/70 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

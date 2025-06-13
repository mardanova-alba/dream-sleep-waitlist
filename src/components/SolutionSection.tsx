
import { Clock, Target, FileText, Rocket, Calendar } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Agentic AI Engine",
      description: "Autonomous decision-making powered by advanced machine learning algorithms"
    },
    {
      icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Semi-transparent overlay for better readability */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm md:bg-white/10 bg-black/20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
            Our Solution
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 drop-shadow-md">
            Professional-grade trading infrastructure made accessible to everyone
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="group bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 md:bg-white/20 bg-white/30"
            >
              <div className="text-yellow-300 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                {solution.icon}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-white font-bold leading-tight drop-shadow-lg">
                {solution.title}
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed drop-shadow-md">
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

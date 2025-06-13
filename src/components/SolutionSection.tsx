
import { Clock, Clock as Strategy, FileText, Rocket, Calendar } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: <Clock className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
      title: "Agentic AI Engine",
      description: "Autonomous decision-making powered by advanced machine learning algorithms"
    },
    {
      icon: <Strategy className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
      title: "Multi-Strategy Stack",
      description: "Diversified trading approaches adapted to market conditions in real-time"
    },
    {
      icon: <FileText className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
      title: "Hands-Free Portfolio Management",
      description: "Complete automation from analysis to execution, requiring zero daily input"
    },
    {
      icon: <Rocket className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
      title: "Performance-Aligned Fees",
      description: "We only profit when you profit — aligned incentives for mutual success"
    },
    {
      icon: <Calendar className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
      title: "$DREAM Token Yield",
      description: "Earn additional rewards through our native token ecosystem"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 relative">
      {/* Section overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/95 to-indigo-50/95 backdrop-blur-sm"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Our Solution
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 font-medium">
            Professional-grade trading infrastructure made accessible to everyone
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-3 border border-white/50"
            >
              <div className="text-blue-600 mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-gray-900 font-bold leading-tight">
                {solution.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
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

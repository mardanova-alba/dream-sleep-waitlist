
import { Clock, Strategy, FileText, Rocket, Calendar } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Agentic AI Engine",
      description: "Autonomous decision-making powered by advanced machine learning algorithms"
    },
    {
      icon: <Strategy className="w-10 h-10" />,
      title: "Multi-Strategy Stack",
      description: "Diversified trading approaches adapted to market conditions in real-time"
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Hands-Free Portfolio Management",
      description: "Complete automation from analysis to execution, requiring zero daily input"
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Performance-Aligned Fees",
      description: "We only profit when you profit — aligned incentives for mutual success"
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "$DREAM Token Yield",
      description: "Earn additional rewards through our native token ecosystem"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Our Solution
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Professional-grade trading infrastructure made accessible to everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-3"
            >
              <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>
              <h3 className="text-2xl mb-4 text-gray-900 font-bold leading-tight">
                {solution.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
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

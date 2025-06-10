import { Clock, Clock as Strategy, FileText, Rocket, Calendar } from "lucide-react";
const SolutionSection = () => {
  const solutions = [{
    icon: <Clock className="w-8 h-8" />,
    title: "Agentic AI Engine",
    description: "Autonomous decision-making powered by advanced machine learning algorithms"
  }, {
    icon: <Strategy className="w-8 h-8" />,
    title: "Multi-Strategy Stack",
    description: "Diversified trading approaches adapted to market conditions in real-time"
  }, {
    icon: <FileText className="w-8 h-8" />,
    title: "Hands-Free Portfolio Management",
    description: "Complete automation from analysis to execution, requiring zero daily input"
  }, {
    icon: <Rocket className="w-8 h-8" />,
    title: "Performance-Aligned Fees",
    description: "We only profit when you profit — aligned incentives for mutual success"
  }, {
    icon: <Calendar className="w-8 h-8" />,
    title: "$DREAM Token Yield",
    description: "Earn additional rewards through our native token ecosystem"
  }];
  return <section className="py-24 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
            Our Solution
          </h2>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">
            Professional-grade trading infrastructure made accessible to everyone
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 bg-transparent">
          {solutions.map((solution, index) => <div key={index} className="group bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-8 card-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-2 ">
              <div className="text-brand-accent mb-6 group-hover:scale-110 transition-transform duration-300 bg-slate-50">
                {solution.icon}
              </div>
              <h3 className="text-xl mb-4 text-sky-950 font-bold">
                {solution.title}
              </h3>
              <p className="text-brand-text/70 leading-relaxed">
                {solution.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default SolutionSection;
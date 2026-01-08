import { useState, useEffect } from "react";
import { Bot, Workflow, BarChart3, Globe } from "lucide-react";

const workflowItems = [
  {
    id: 1,
    title: "Bot de Captación",
    description: "Chatbot inteligente para captar y calificar leads automáticamente 24/7",
    icon: Bot,
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: 2,
    title: "Workflow Automatizado",
    description: "Flujos de trabajo complejos para automatizar procesos de ventas y marketing",
    icon: Workflow,
    gradient: "from-green-500/20 to-teal-500/20"
  },
  {
    id: 3,
    title: "Dashboard de Estadísticas",
    description: "Paneles de control con métricas en tiempo real para tomar decisiones",
    icon: BarChart3,
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 4,
    title: "Web Design con HighLevel",
    description: "Diseño y desarrollo de páginas web y funnels optimizados para conversión",
    icon: Globe,
    gradient: "from-pink-500/20 to-violet-500/20"
  }
];

const ResultsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % workflowItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = workflowItems[currentIndex].icon;

  return (
    <section id="results" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block">
            Resultados
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Automatizaciones que he creado
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cada solución está diseñada para resolver problemas específicos y generar resultados medibles.
          </p>
        </div>

        {/* Main showcase */}
        <div className="relative mb-12">
          <div className={`aspect-video rounded-2xl overflow-hidden bg-gradient-to-br ${workflowItems[currentIndex].gradient} border border-border shadow-xl`}>
            <div className="w-full h-full flex items-center justify-center backdrop-blur-sm">
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-2xl bg-background/30 backdrop-blur-sm flex items-center justify-center mb-6 mx-auto border border-border/50">
                  <CurrentIcon className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-3">{workflowItems[currentIndex].title}</h3>
                <p className="text-muted-foreground max-w-md mx-auto">{workflowItems[currentIndex].description}</p>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-6">
            {workflowItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-foreground w-8" 
                    : "bg-foreground/30 hover:bg-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {workflowItems.map((workflow, index) => {
            const Icon = workflow.icon;
            return (
              <button
                key={workflow.id}
                onClick={() => setCurrentIndex(index)}
                className={`aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 bg-gradient-to-br ${workflow.gradient} ${
                  index === currentIndex 
                    ? "border-foreground shadow-lg scale-105" 
                    : "border-border hover:border-foreground/50"
                }`}
              >
                <div className="w-full h-full flex flex-col items-center justify-center p-4">
                  <Icon className="w-6 h-6 mb-2 text-foreground" />
                  <span className="text-xs text-center font-medium">{workflow.title}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

import { useState, useEffect } from "react";
import { Bot, Workflow, BarChart3, Globe } from "lucide-react";

// Imágenes placeholder - reemplaza estas rutas con tus imágenes
// Para reemplazar: sube tus imágenes a src/assets/ y actualiza las rutas
import resultBot from "@/assets/result-bot.jpg";
import resultWorkflow from "@/assets/result-workflow.jpg";
import resultDashboard from "@/assets/result-dashboard.jpg";
import resultWeb from "@/assets/result-web.jpg";
const workflowItems = [
  {
    id: 1,
    title: "Bot de Captación",
    description: "Chatbot inteligente para captar y calificar leads automáticamente 24/7",
    icon: Bot,
    image: resultBot,
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "Workflow Automatizado",
    description: "Flujos de trabajo complejos para automatizar procesos de ventas y marketing",
    icon: Workflow,
    image: resultWorkflow,
    gradient: "from-green-500/20 to-teal-500/20",
  },
  {
    id: 3,
    title: "Resultados que hablan por si solos",
    description: "Clientes contentos con todo su negocio, centralizado y medible",
    icon: BarChart3,
    image: resultDashboard,
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 4,
    title: "Web Design con HighLevel",
    description: "Diseño y desarrollo de páginas web y funnels optimizados para conversión",
    icon: Globe,
    image: resultWeb,
    gradient: "from-pink-500/20 to-violet-500/20",
  },
];
const ResultsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % workflowItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="results" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block">Resultados</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Automatizaciones que he creado</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cada solución está diseñada para resolver problemas específicos y generar resultados medibles.
          </p>
        </div>

        {/* Main showcase */}
        <div className="relative mb-12">
          <div className="aspect-video rounded-2xl overflow-hidden border border-border shadow-xl bg-muted">
            <img
              src={workflowItems[currentIndex].image}
              alt={workflowItems[currentIndex].title}
              className="w-full h-full object-cover object-top"
            />
            {/* Overlay con título */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6 my-[33px] rounded-xl">
              <h3 className="text-xl md:text-2xl font-semibold">{workflowItems[currentIndex].title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{workflowItems[currentIndex].description}</p>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-6">
            {workflowItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-foreground w-8" : "bg-foreground/30 hover:bg-foreground/50"}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {workflowItems.map((workflow, index) => {
            return (
              <button
                key={workflow.id}
                onClick={() => setCurrentIndex(index)}
                className={`aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 ${index === currentIndex ? "border-foreground shadow-lg scale-105" : "border-border hover:border-foreground/50"}`}
              >
                <img src={workflow.image} alt={workflow.title} className="w-full h-full object-cover object-top" />
              </button>
            );
          })}
        </div>

        {/* Labels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          {workflowItems.map((workflow) => (
            <span key={workflow.id} className="text-xs text-center text-muted-foreground">
              {workflow.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ResultsSection;

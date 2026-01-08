import { useState, useEffect } from "react";

// Placeholder images for workflows - these would be replaced with actual screenshots
const workflowImages = [
  {
    id: 1,
    title: "Automatización de Lead Nurturing",
    description: "Flujo completo de seguimiento automático de leads",
    placeholder: "bg-gradient-to-br from-secondary to-accent"
  },
  {
    id: 2,
    title: "Bot de Atención al Cliente",
    description: "Chatbot inteligente para respuestas 24/7",
    placeholder: "bg-gradient-to-br from-accent to-secondary"
  },
  {
    id: 3,
    title: "Pipeline de Ventas Automatizado",
    description: "Sistema de seguimiento y cierre de ventas",
    placeholder: "bg-gradient-to-br from-muted to-secondary"
  },
  {
    id: 4,
    title: "Workflow de Onboarding",
    description: "Proceso automatizado de bienvenida a nuevos clientes",
    placeholder: "bg-gradient-to-br from-secondary to-muted"
  },
  {
    id: 5,
    title: "Sistema de Recordatorios",
    description: "Automatización de seguimiento y recordatorios",
    placeholder: "bg-gradient-to-br from-accent to-muted"
  }
];

const ResultsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % workflowImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
            Cada workflow está diseñado para resolver problemas específicos y generar resultados medibles.
          </p>
        </div>

        {/* Main showcase */}
        <div className="relative mb-12">
          <div className="aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-xl">
            {/* Current workflow display */}
            <div className={`w-full h-full ${workflowImages[currentIndex].placeholder} flex items-center justify-center`}>
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-background/20 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{workflowImages[currentIndex].title}</h3>
                <p className="text-muted-foreground text-sm">{workflowImages[currentIndex].description}</p>
                <p className="text-xs text-muted-foreground/60 mt-4">
                  Imagen de workflow próximamente
                </p>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-6">
            {workflowImages.map((_, index) => (
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {workflowImages.map((workflow, index) => (
            <button
              key={workflow.id}
              onClick={() => setCurrentIndex(index)}
              className={`aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex 
                  ? "border-foreground shadow-lg scale-105" 
                  : "border-border hover:border-foreground/50"
              }`}
            >
              <div className={`w-full h-full ${workflow.placeholder} flex items-center justify-center`}>
                <span className="text-xs text-center px-2 font-medium">{workflow.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

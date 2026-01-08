import { Zap, Target, Layers, Bot, TrendingUp, Users } from "lucide-react";
import profile from "@/assets/profile.png";

const timeline = [
  {
    period: "2023 - Presente",
    title: "Especialista en Automatizaciones",
    company: "Freelance",
    description: "Desarrollo de flujos de trabajo en GoHighLevel, Make y ClickUp para agencias y empresas."
  },
  {
    period: "2023 - 2024",
    title: "Creative Director",
    company: "Red Thread Marketing / The Room",
    description: "Dirección creativa, estrategias de contenido y gestión de equipos remotos."
  },
  {
    period: "2019 - 2023",
    title: "Social Media Manager",
    company: "Marketing 4ACS / Freelance",
    description: "Gestión de redes sociales, creación de contenido y análisis de data."
  }
];

const services = [
  {
    icon: Bot,
    title: "Automatizaciones GoHighLevel",
    description: "Creo flujos de trabajo automatizados, bots y sistemas CRM que operan 24/7 sin intervención manual."
  },
  {
    icon: Target,
    title: "Estrategias Multicanal",
    description: "Diseño estrategias integradas para Instagram, LinkedIn y otros canales que maximizan tu alcance."
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description: "Implemento tácticas de crecimiento basadas en data para escalar tu negocio de forma sostenible."
  },
  {
    icon: Layers,
    title: "Flujos de Trabajo",
    description: "Optimizo procesos operativos para que tu equipo trabaje de forma más eficiente."
  },
  {
    icon: Users,
    title: "Dirección de Equipos",
    description: "Experiencia liderando equipos creativos y de marketing en múltiples agencias."
  },
  {
    icon: Zap,
    title: "Setup Automatizado",
    description: "Configuro sistemas completos listos para usar desde el día uno."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block">
              Sobre mí
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Más de 5 años transformando negocios con automatización
            </h2>
            <p className="text-muted-foreground mb-6">
              Soy Brahyann Aytor Plaz, especialista en growth marketing y automatizaciones. 
              He dirigido 6 agencias de marketing y trabajado con clientes internacionales, 
              creando sistemas que generan resultados consistentes.
            </p>
            <p className="text-muted-foreground mb-8">
              Mi enfoque combina estrategia de contenido, gestión de proyectos y tecnología 
              para crear soluciones que no solo funcionan, sino que escalan. Domino todas 
              las áreas del marketing digital para ofrecer estrategias verdaderamente efectivas.
            </p>
            
            {/* Skills tags */}
            <div className="flex flex-wrap gap-2">
              {["GoHighLevel", "CRM", "Zapier", "Social Media", "Project Management", "Diseño UX/UI", "Dirección Creativa"].map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-background border border-border rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-secondary border border-border">
              <img 
                src={profile} 
                alt="Aytor Plaz" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-foreground/5 rounded-3xl -z-10"></div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <span className="text-sm text-muted-foreground uppercase tracking-wider mb-8 block">
            Trayectoria
          </span>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-border"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-10">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-foreground"></div>
                  
                  <span className="text-sm text-muted-foreground">{item.period}</span>
                  <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.company}</p>
                  <p className="text-muted-foreground mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover:border-foreground/20 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-4 group-hover:bg-foreground/10 transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

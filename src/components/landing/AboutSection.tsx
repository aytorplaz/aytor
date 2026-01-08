import { Zap, Target, Layers, Bot, TrendingUp, Users } from "lucide-react";
import profile from "@/assets/profile.png";

const timeline = [
  {
    period: "2024 - Presente",
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
    period: "2022 - 2023",
    title: "Marketing Manager",
    company: "Agencia Digital",
    description: "Gestión integral de campañas y estrategias de crecimiento para múltiples clientes."
  },
  {
    period: "2021 - 2022",
    title: "Project Manager",
    company: "Freelance",
    description: "Coordinación de proyectos digitales y equipos multidisciplinarios."
  },
  {
    period: "2019 - 2021",
    title: "Social Media Manager",
    company: "Marketing 4ACS / Freelance",
    description: "Gestión de redes sociales, creación de contenido y análisis de data."
  },
  {
    period: "2018 - 2019",
    title: "Community Manager",
    company: "Agencia Creativa",
    description: "Inicio en el mundo digital manejando comunidades y contenido para marcas."
  }
];

const services = [
  {
    icon: Bot,
    title: "Automatizaciones GoHighLevel",
  },
  {
    icon: Target,
    title: "Estrategias Multicanal",
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
  },
  {
    icon: Layers,
    title: "Flujos de Trabajo",
  },
  {
    icon: Users,
    title: "Dirección de Equipos",
  },
  {
    icon: Zap,
    title: "Setup Automatizado",
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="text-center md:text-left">
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
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
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

          <div className="relative order-first md:order-last">
            <div className="aspect-square rounded-3xl overflow-hidden bg-secondary border border-border max-w-sm mx-auto md:max-w-none">
              <img 
                src={profile} 
                alt="Aytor Plaz" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-foreground/5 rounded-3xl -z-10 hidden md:block"></div>
          </div>
        </div>

        {/* Timeline + Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="text-center lg:text-left">
            <span className="text-sm text-muted-foreground uppercase tracking-wider mb-8 block">
              Trayectoria
            </span>
            <div className="relative inline-block lg:block w-full">
              {/* Timeline line - centered on mobile */}
              <div className="absolute left-1/2 lg:left-[7px] -translate-x-1/2 lg:translate-x-0 top-2 bottom-2 w-[2px] bg-border"></div>
              
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="relative px-8 lg:pl-10 lg:pr-0">
                    {/* Timeline dot - centered on mobile */}
                    <div className="absolute left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 top-1 w-4 h-4 rounded-full bg-foreground"></div>
                    
                    <div className="pt-8 lg:pt-0">
                      <span className="text-sm text-muted-foreground">{item.period}</span>
                      <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.company}</p>
                      <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="text-center lg:text-left">
            <span className="text-sm text-muted-foreground uppercase tracking-wider mb-8 block">
              Especialidades
            </span>
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="glass-card p-4 hover:border-foreground/20 transition-colors group text-center lg:text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center mb-3 group-hover:bg-foreground/10 transition-colors mx-auto lg:mx-0">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

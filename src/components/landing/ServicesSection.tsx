import { Headphones, Workflow, Globe, Settings, Rocket, Calendar } from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Soporte Whitelabel para SaaS",
    description:
      "Soporte técnico de marca blanca para plataformas SaaS con GoHighLevel. Tu equipo atendidos por expertos.",
  },
  {
    icon: Workflow,
    title: "Flujos de Trabajo Personalizados",
    description:
      "Creación de automatizaciones a medida para optimizar los procesos de tus clientes y aumentar su productividad.",
  },
  {
    icon: Globe,
    title: "Diseño Web y Funnels",
    description: "Páginas web y embudos de venta optimizados para conversión. Diseño moderno y estratégico.",
  },
  {
    icon: Settings,
    title: "Automatizaciones Integrales",
    description: "Flujos de marketing, ventas y operaciones con HighLevel, Make y ClickUp. Todo conectado.",
  },
  {
    icon: Rocket,
    title: "Desarrollo de Agencias desde 0",
    description: "De una idea a la realidad. Desarrollo completo de agencias de marketing con todas las herramientas.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block">Servicios</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Lo que puedo hacer por ti</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Soluciones completas de automatización y marketing para escalar tu negocio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="glass-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center mb-4 group-hover:bg-foreground/20 transition-colors">
                  <Icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://crm.theplaze.com/widget/booking/LuXYVYDmV2WeuwQHGDgN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-base font-medium hover:opacity-90 transition-opacity"
          >
            <Calendar className="w-5 h-5" />
            Agenda una llamada
          </a>
          <p className="text-muted-foreground text-sm mt-4">Conversemos sobre tu proyecto sin compromiso</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos M.",
    role: "CEO, Agencia de Marketing",
    content: "Aytor transformó completamente nuestra operación. Las automatizaciones que implementó nos ahorraron más de 20 horas semanales.",
    rating: 5
  },
  {
    id: 2,
    name: "María L.",
    role: "Fundadora, E-commerce",
    content: "Profesional, puntual y con resultados excepcionales. El sistema de seguimiento de leads que creó aumentó nuestras conversiones en un 40%.",
    rating: 5
  },
  {
    id: 3,
    name: "Roberto S.",
    role: "Director, Consultoría",
    content: "Excelente trabajo en la implementación de GoHighLevel. Todo el proceso fue claro y el soporte post-implementación impecable.",
    rating: 5
  },
  {
    id: 4,
    name: "Ana G.",
    role: "CMO, Startup Tech",
    content: "Las estrategias multicanal que diseñó nos ayudaron a triplicar nuestro alcance en 3 meses. Muy recomendado.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lo que dicen mis clientes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Resultados reales de personas que han confiado en mi trabajo.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="glass-card p-8 hover:border-foreground/20 transition-colors relative"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-foreground/10 absolute top-6 right-6" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
                  <span className="text-lg font-semibold">{testimonial.name[0]}</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fiverr link */}
        <div className="text-center mt-12">
          <a 
            href="https://fiverr.com/aytorplaz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Ver más reseñas en Fiverr</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

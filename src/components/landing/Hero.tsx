import { ArrowDown } from "lucide-react";
import profile from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm text-muted-foreground">Disponible para nuevos proyectos</span>
        </div>

        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-border shadow-lg">
            <img 
              src={profile} 
              alt="Aytor Plaz" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Automatizo tu negocio<br />
          <span className="text-muted-foreground">para que crezca sin ti</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Especialista en automatizaciones con GoHighLevel, estrategias multicanal y growth marketing. 
          Creo sistemas que trabajan 24/7 para escalar tu negocio.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a 
            href="#contact"
            className="bg-foreground text-background px-8 py-4 rounded-full text-base font-medium hover:opacity-90 transition-opacity"
          >
            Agenda una consulta
          </a>
          <a 
            href="#vsl"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-foreground transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <span>Ver cómo trabajo</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <a href="#vsl" className="inline-flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs mb-2">Descubre más</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

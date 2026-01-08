import { Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo-dark.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <img src={logo} alt="Aytor Plaz" className="h-8 md:h-10" />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Sobre mí
          </a>
          <a href="#results" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Resultados
          </a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Testimonios
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contacto
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="https://instagram.com/aytorplaz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/aytor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://fiverr.com/aytorplaz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Fiverr
          </a>
          <a 
            href="#contact" 
            className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Contáctame
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

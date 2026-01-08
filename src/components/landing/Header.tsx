import { Instagram, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-dark.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-full px-4 md:px-8 py-3 flex items-center gap-4 md:gap-10 shadow-lg">
        <a href="#hero" className="flex items-center flex-shrink-0">
          <img src={logo} alt="Aytor Plaz" className="h-7 md:h-8 w-auto object-contain" />
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Sobre mí
          </a>
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Servicios
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

        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://instagram.com/aytorplaz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a 
            href="https://linkedin.com/in/aytor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-4 h-4" />
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

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl p-4 shadow-lg">
          <nav className="flex flex-col gap-3">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Sobre mí
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Servicios
            </a>
            <a href="#results" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Resultados
            </a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Testimonios
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Contacto
            </a>
          </nav>
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
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
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

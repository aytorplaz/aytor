const VSLSection = () => {
  return <section id="vsl" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mira cómo puedo ayudarte
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            En este video te explico mi metodología de trabajo y los resultados que puedes esperar.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary border border-border shadow-2xl">
          {/* Placeholder for VSL video - replace with actual video embed */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-foreground/10 flex items-center justify-center mb-4 mx-auto hover:bg-foreground/20 transition-colors cursor-pointer group">
                <svg className="w-8 h-8 text-foreground group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground">
                Video próximamente
              </p>
            </div>
          </div>
          
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
        </div>

        {/* Stats below video */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1">7+</div>
            <div className="text-sm text-muted-foreground">Años de experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1">100+</div>
            <div className="text-sm text-muted-foreground">Automatizaciones creadas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1">30+</div>
            <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1">6</div>
            <div className="text-sm text-muted-foreground">Agencias dirigidas</div>
          </div>
        </div>
      </div>
    </section>;
};
export default VSLSection;
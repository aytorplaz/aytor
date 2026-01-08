import { useEffect } from "react";

const ContactSection = () => {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script');
    script.src = 'https://crm.barbaralcooks.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://crm.barbaralcooks.com/js/form_embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block">
            Contacto
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para automatizar tu negocio?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cuéntame sobre tu proyecto y te responderé en menos de 24 horas.
          </p>
        </div>

        {/* Form Container */}
        <div className="glass-card p-8 md:p-12">
          <iframe
            src="https://crm.barbaralcooks.com/widget/form/XyUD4KtVGC3zfE9m0crf"
            style={{ width: '100%', height: '748px', border: 'none', borderRadius: '4px' }}
            id="inline-XyUD4KtVGC3zfE9m0crf"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Contáctame"
            data-height="748"
            data-layout-iframe-id="inline-XyUD4KtVGC3zfE9m0crf"
            data-form-id="XyUD4KtVGC3zfE9m0crf"
            title="Contáctame"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

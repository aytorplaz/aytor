import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import VSLSection from "@/components/landing/VSLSection";
import AboutSection from "@/components/landing/AboutSection";
import ResultsSection from "@/components/landing/ResultsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <VSLSection />
        <AboutSection />
        <ResultsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

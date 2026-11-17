import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ConsultationForm } from './components/ConsultationForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { PortfolioProject, ServiceItem } from './data/studioData';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string | null>(
    null
  );
  const [preselectedStyle, setPreselectedStyle] = useState<string | null>(null);

  const scrollToConsultation = useCallback(() => {
    const el = document.getElementById('consultation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleSelectServiceForConsultation = useCallback(
    (service: ServiceItem) => {
      setPreselectedService(service.title);
      setPreselectedStyle(service.defaultStyle);
      scrollToConsultation();
    },
    [scrollToConsultation]
  );

  const handleRequestSimilarProject = useCallback(
    (project: PortfolioProject) => {
      setPreselectedStyle(
        project.style.includes('Minimalist')
          ? 'Minimalist'
          : project.style.includes('Contemporary')
            ? 'Contemporary'
            : project.style.includes('Traditional')
              ? 'Traditional'
              : 'Luxury'
      );
      scrollToConsultation();
    },
    [scrollToConsultation]
  );

  const handleFooterServiceClick = useCallback(
    (serviceTitle: string) => {
      setPreselectedService(serviceTitle);
      scrollToConsultation();
    },
    [scrollToConsultation]
  );

  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#191816]">
      <Navbar onBookConsultation={scrollToConsultation} />

      <main>
        <HeroSection onBookConsultation={scrollToConsultation} />
        <AboutSection />
        <PortfolioSection onRequestSimilar={handleRequestSimilarProject} />
        <ServicesSection
          onSelectServiceForConsultation={handleSelectServiceForConsultation}
        />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ConsultationForm
          preselectedService={preselectedService}
          preselectedStyle={preselectedStyle}
        />
        <ContactSection />
      </main>

      <Footer onSelectService={handleFooterServiceClick} />
      <FloatingActions onBookConsultation={scrollToConsultation} />
    </div>
  );
}

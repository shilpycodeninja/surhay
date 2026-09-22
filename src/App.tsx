import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { IndustryCarousel } from './components/IndustryCarousel';
import { WhyChooseUs } from './components/WhyChooseUs';
import { StudioSection } from './components/StudioSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { RequestModal } from './components/RequestModal';

export default function App() {
  const [motionPaused, setMotionPaused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState('');

  const toggleMotion = () => {
    setMotionPaused((prev) => !prev);
  };

  const handleOpenRequest = (topic?: string) => {
    if (topic) setModalTopic(topic);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalTopic('');
  };

  return (
    <div className={`min-h-screen bg-[#F5F3EE] text-[#0A0A0B] ${motionPaused ? 'motion-paused' : ''}`}>
      {/* 1 — Sticky Header (72px) */}
      <Header
        onOpenRequest={() => handleOpenRequest('Erstgespräch')}
        motionPaused={motionPaused}
        onToggleMotion={toggleMotion}
      />

      <main>
        {/* 2 — Hero & Trust-Strip */}
        <Hero
          onOpenRequest={() => handleOpenRequest('Hero Website Anfrage')}
          motionPaused={motionPaused}
        />

        {/* 3 — Trust / Intro Strip with infinite marquee */}
        <TrustTicker motionPaused={motionPaused} />

        {/* 4 — SIGNATURE SECTION: Industry Carousel */}
        <IndustryCarousel
          onSelectIndustry={(industry) => handleOpenRequest(`Branche: ${industry}`)}
          motionPaused={motionPaused}
        />

        {/* 5 — Why Choose Us */}
        <WhyChooseUs />

        {/* 6 — Studio Section (Dark) */}
        <StudioSection onOpenRequest={() => handleOpenRequest('Studio Erstgespräch')} />

        {/* 7 — Services */}
        <ServicesSection onSelectService={(service) => handleOpenRequest(`Service: ${service}`)} />

        {/* 8 — Portfolio (Alternating editorial layout) */}
        <PortfolioSection onSelectProject={(project) => handleOpenRequest(`Projekt-Referenz: ${project}`)} />

        {/* 9 — Process (4-step timeline) */}
        <ProcessSection />

        {/* 10 — Pricing Packages */}
        <PricingSection onSelectPackage={(pkg) => handleOpenRequest(`Paket: ${pkg}`)} />

        {/* 11 — Insights / Blog */}
        <BlogSection />

        {/* 12 — Frequently Asked Questions */}
        <FaqSection />

        {/* 13 — Final CTA & Multi-Step Inquiry Form */}
        <FinalCta />
      </main>

      {/* 14 — Footer (Dark) */}
      <Footer onOpenRequest={() => handleOpenRequest('Footer Erstgespräch')} />

      {/* Global Interactive Request Modal */}
      <RequestModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        presetTopic={modalTopic}
      />
    </div>
  );
}

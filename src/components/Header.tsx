import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ArrowRight, ChevronDown, Play, Pause, Globe, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenRequest: () => void;
  motionPaused: boolean;
  onToggleMotion: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenRequest,
  motionPaused,
  onToggleMotion,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'DE' | 'EN'>('DE');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projekte', href: '#projekte' },
    { label: 'Prozess', href: '#prozess' },
    { label: 'Preise', href: '#preise' },
    { label: 'Über uns', href: '#studio' },
    { label: 'Blog', href: '#blog' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F3EE]/90 backdrop-blur-md border-b border-[#0A0A0B]/10 shadow-[0_2px_12px_rgba(10,10,11,0.03)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Logo size="md" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1" aria-label="Hauptnavigation">
          {/* Mega Menu Trigger: Leistungen */}
          <div
            className="relative"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button
              id="nav-leistungen-trigger"
              onClick={() => setMegaMenuOpen(!megaMenuOpen)}
              className="px-3.5 py-2 text-sm font-medium text-[#0A0A0B] hover:text-[#0E7490] inline-flex items-center gap-1.5 group transition-colors"
              aria-expanded={megaMenuOpen}
            >
              <span>Leistungen</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-[#0E7490]' : 'text-[#686759]'}`}
              />
              <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-[#0E7490] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
            </button>

            {/* Mega Dropdown */}
            {megaMenuOpen && (
              <div
                id="mega-menu-dropdown"
                className="absolute top-full left-0 w-[540px] -mt-1 p-6 bg-[#FFFFFF] border border-[#0A0A0B]/10 rounded-xl shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-3 rounded-lg hover:bg-[#F5F3EE] transition-colors cursor-pointer group">
                    <a href="#services" onClick={() => setMegaMenuOpen(false)} className="block">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[#0E7490] font-semibold tracking-wider">01 WEBDESIGN</span>
                        <ArrowRight size={14} className="text-[#0E7490] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h4 className="font-display font-bold text-base text-[#0A0A0B] mt-0.5">Individuelles Screendesign</h4>
                      <p className="text-xs text-[#686759] mt-1">Conversion-stark, keine Baukästen oder gekaufte Templates.</p>
                    </a>
                  </div>

                  <div className="p-3 rounded-lg hover:bg-[#F5F3EE] transition-colors cursor-pointer group">
                    <a href="#services" onClick={() => setMegaMenuOpen(false)} className="block">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[#0E7490] font-semibold tracking-wider">02 WEBENTWICKLUNG</span>
                        <ArrowRight size={14} className="text-[#0E7490] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h4 className="font-display font-bold text-base text-[#0A0A0B] mt-0.5">Pixelgenaue Umsetzung</h4>
                      <p className="text-xs text-[#686759] mt-1">Sauberer Code, extrem schnelle Ladezeiten (&lt; 1s) und CMS.</p>
                    </a>
                  </div>

                  <div className="p-3 rounded-lg hover:bg-[#F5F3EE] transition-colors cursor-pointer group">
                    <a href="#services" onClick={() => setMegaMenuOpen(false)} className="block">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[#0E7490] font-semibold tracking-wider">03 FULL STACK</span>
                        <ArrowRight size={14} className="text-[#0E7490] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h4 className="font-display font-bold text-base text-[#0A0A0B] mt-0.5">Alles aus einer Hand</h4>
                      <p className="text-xs text-[#686759] mt-1">Konzept, Design, Code, SEO & optionale Wartung vom Gründer direkt.</p>
                    </a>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#0A0A0B]/10 flex items-center justify-between text-xs text-[#686759]">
                  <span className="italic">Drei Wege zur Website — maßgeschneidert auf Ihr Budget.</span>
                  <a
                    href="#services"
                    onClick={() => setMegaMenuOpen(false)}
                    className="font-semibold text-[#0E7490] hover:underline inline-flex items-center gap-1"
                  >
                    Alle Leistungen <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Standard Navigation Items */}
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-3.5 py-2 text-sm font-medium text-[#0A0A0B] hover:text-[#0E7490] transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-[#0E7490] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
            </a>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="hidden lg:flex items-center space-x-3">
          {/* Motion Pause Toggle */}
          <button
            id="motion-toggle-btn"
            onClick={onToggleMotion}
            className="p-2 rounded-lg text-[#686759] hover:text-[#0A0A0B] hover:bg-[#0A0A0B]/5 transition-colors"
            title={motionPaused ? 'Animationen fortsetzen' : 'Animationen pausieren (Accessibility)'}
            aria-label={motionPaused ? 'Animationen aktivieren' : 'Animationen anhalten'}
          >
            {motionPaused ? <Play size={16} className="text-[#0E7490]" /> : <Pause size={16} />}
          </button>

          {/* Language Switcher */}
          <button
            id="language-switch-btn"
            onClick={() => setLang(lang === 'DE' ? 'EN' : 'DE')}
            className="px-2.5 py-1 text-xs font-semibold text-[#686759] hover:text-[#0A0A0B] border border-[#0A0A0B]/15 rounded-md inline-flex items-center gap-1 transition-colors"
            title="Sprache wechseln"
          >
            <Globe size={12} />
            <span>{lang}</span>
            <span className="text-[10px] text-[#A3A29A]">· {lang === 'DE' ? 'DEU' : 'ENG'}</span>
          </button>

          {/* Primary CTA */}
          <button
            id="header-cta-btn"
            onClick={onOpenRequest}
            className="px-5 py-2.5 bg-[#0E7490] hover:bg-[#0C627A] text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all duration-200 inline-flex items-center gap-2 group"
          >
            <span>Website anfragen</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={onToggleMotion}
            className="p-2 rounded-lg text-[#686759] hover:text-[#0A0A0B]"
            aria-label="Animationen pausieren"
          >
            {motionPaused ? <Play size={18} className="text-[#0E7490]" /> : <Pause size={18} />}
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#0A0A0B] hover:bg-[#0A0A0B]/5 transition-colors"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden fixed top-[72px] inset-x-0 bg-[#F5F3EE] border-b border-[#0A0A0B]/10 px-6 py-6 shadow-xl flex flex-col space-y-4 animate-in slide-in-from-top-4 duration-200"
        >
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-semibold text-[#0A0A0B] py-2 border-b border-[#0A0A0B]/10"
          >
            Leistungen & Services
          </a>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-[#0A0A0B] py-2 border-b border-[#0A0A0B]/10"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRequest();
              }}
              className="w-full py-3.5 bg-[#0E7490] text-white font-semibold rounded-lg text-center shadow-md flex items-center justify-center gap-2"
            >
              <span>Website anfragen</span>
              <ArrowRight size={16} />
            </button>
            <div className="flex items-center justify-between text-xs text-[#686759] pt-2">
              <span>Berlin · Deutschland</span>
              <span>hallo@surhay.design</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

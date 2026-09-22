import React from 'react';
import { Logo } from './Logo';
import { ArrowUp, ArrowRight, Heart } from 'lucide-react';

interface FooterProps {
  onOpenRequest: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRequest }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-[#0A0A0B] text-[#F5F3EE] pt-20 pb-12 border-t border-[#F5F3EE]/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Banner: Logo, Statement & CTA */}
        <div className="pb-16 mb-16 border-b border-[#F5F3EE]/15 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <Logo variant="dark" size="lg" showSubtitle />
            <p className="font-body text-base text-[#A3A29A] mt-3 max-w-md">
              Websites, die Unternehmen sichtbar machen — aus Berlin. Maßgeschneidert, performant und verlässlich.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenRequest}
              className="px-6 py-3.5 bg-[#0E7490] hover:bg-[#0C627A] text-white font-semibold text-sm rounded-lg inline-flex items-center gap-2 group transition-all"
            >
              <span>Erstgespräch vereinbaren</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-lg bg-[#F5F3EE]/5 hover:bg-[#F5F3EE]/10 border border-[#F5F3EE]/15 flex items-center justify-center text-[#F5F3EE] transition-colors"
              aria-label="Nach oben scrollen"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Four Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Column 1: Leistungen */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#22D3EE] font-bold mb-4">
              LEISTUNGEN
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A3A29A]">
              <li>
                <a href="#services" className="hover:text-[#F5F3EE] transition-colors">
                  Webdesign & UI/UX
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F5F3EE] transition-colors">
                  Webentwicklung & Code
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F5F3EE] transition-colors">
                  SEO & Google Sichtbarkeit
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F5F3EE] transition-colors">
                  Individuelle Lösungen
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#22D3EE] hover:underline font-semibold block pt-1">
                  Alle Leistungen →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Studio */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#22D3EE] font-bold mb-4">
              STUDIO
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A3A29A]">
              <li>
                <a href="#studio" className="hover:text-[#F5F3EE] transition-colors">
                  Agentur & Philosophie
                </a>
              </li>
              <li>
                <a href="#prozess" className="hover:text-[#F5F3EE] transition-colors">
                  Unser 4-Schritte Prozess
                </a>
              </li>
              <li>
                <a href="#projekte" className="hover:text-[#F5F3EE] transition-colors">
                  Ausgewählte Projekte
                </a>
              </li>
              <li>
                <a href="#preise" className="hover:text-[#F5F3EE] transition-colors">
                  Preise & Pakete
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Mehr */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#22D3EE] font-bold mb-4">
              MEHR
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A3A29A]">
              <li>
                <a href="#blog" className="hover:text-[#F5F3EE] transition-colors">
                  Blog & Insights
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F5F3EE] transition-colors">
                  Häufige Fragen (FAQ)
                </a>
              </li>
              <li>
                <a href="#branchen" className="hover:text-[#F5F3EE] transition-colors">
                  Branchenlösungen
                </a>
              </li>
              <li>
                <a href="mailto:hallo@surhay.design" className="hover:text-[#F5F3EE] transition-colors">
                  hallo@surhay.design
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Region */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#22D3EE] font-bold mb-4">
              VERNETZEN
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A3A29A]">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F5F3EE] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>LinkedIn</span>
                  <span className="text-[10px] text-[#A3A29A]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F5F3EE] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                  <span className="text-[10px] text-[#A3A29A]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/surhay276"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F5F3EE] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>GitHub</span>
                  <span className="text-[10px] text-[#A3A29A]">↗</span>
                </a>
              </li>
              <li className="pt-2">
                <span className="text-xs text-[#A3A29A] block">
                  Berlin, Deutschland
                </span>
                <span className="text-xs text-[#A3A29A] block">
                  DACH-weit remote aktiv
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Hairline & Copyright - Verbatim from Document Page 3 & 8 */}
        <div className="pt-8 border-t border-[#F5F3EE]/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A3A29A]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© 2026 Surhay Design. Alle Rechte vorbehalten.</span>
            <a href="#impressum" onClick={(e) => { e.preventDefault(); alert("Surhay Design · Inhabergeführt · Berlin, Deutschland\nE-Mail: hallo@surhay.design\nUSt-IdNr.: Gemäß § 19 UStG nicht ausgewiesen."); }} className="hover:text-[#F5F3EE] transition-colors">
              Impressum
            </a>
            <a href="#datenschutz" onClick={(e) => { e.preventDefault(); alert("Datenschutz bei Surhay Design:\nWir erheben keine unnötigen Daten, verzichten auf Drittanbieter-Tracker und halten uns strikt an die Vorgaben der DSGVO."); }} className="hover:text-[#F5F3EE] transition-colors">
              Datenschutz
            </a>
            <a href="#cookies" onClick={(e) => { e.preventDefault(); alert("Cookie-Einstellungen:\nDiese Website verwendet ausschließlich technisch notwendige Session-Speicherungen und keine Marketing-Cookies."); }} className="hover:text-[#F5F3EE] transition-colors">
              Cookie-Einstellungen
            </a>
          </div>

          <div className="font-mono text-[11px] text-[#A3A29A] flex items-center gap-1.5">
            <span>Entworfen & entwickelt in Berlin</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0E7490]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

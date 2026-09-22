import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/content';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#0A0A0B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0E7490]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#686759]">
              LEISTUNGSSPEKTRUM
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0B] tracking-[-0.03em] mb-4">
            Was wir für Sie entwickeln.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#686759] leading-relaxed">
            Keine Bauchladen-Agentur: Wir konzentrieren uns auf das, was Ihre Website erfolgreich macht — und liefern es in höchster Qualität.
          </p>
        </div>

        {/* Four Large Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="p-8 sm:p-10 bg-[#FFFFFF] rounded-2xl border border-[#0A0A0B]/10 hover:border-[#0E7490]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => onSelectService(service.title)}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-[#0E7490] tracking-widest">
                    {service.number}
                  </span>
                  <span className="w-9 h-9 rounded-full border border-[#0A0A0B]/20 group-hover:border-[#0E7490] group-hover:bg-[#0E7490] text-[#0A0A0B] group-hover:text-white flex items-center justify-center transition-all duration-200">
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A0A0B] tracking-tight mb-2">
                  {service.title}
                </h3>

                <p className="font-display text-sm font-semibold text-[#0E7490] mb-4">
                  {service.tagline}
                </p>

                <p className="font-body text-sm text-[#686759] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Scope details */}
              <div className="pt-6 border-t border-[#0A0A0B]/10 space-y-2">
                {service.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-2 text-xs text-[#0A0A0B]/80">
                    <CheckCircle2 size={14} className="text-[#0E7490] shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PRICING_PACKAGES } from '../data/content';

interface PricingSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="preise" className="py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#0A0A0B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0E7490]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#686759]">
              TRANSPARENTE INVESTITION
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0B] tracking-[-0.03em] mb-4">
            Klare Pakete. Keine Überraschungen.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#686759] leading-relaxed">
            Jedes Projekt ist individuell — diese Pakete geben Ihnen einen ehrlichen Rahmen. Den Festpreis erhalten Sie nach dem Erstgespräch.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {PRICING_PACKAGES.map((pkg) => {
            const isHighlight = pkg.highlight;
            return (
              <div
                key={pkg.id}
                id={`price-card-${pkg.id}`}
                className={`rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlight
                    ? 'bg-[#FFFFFF] border-2 border-[#0E7490] shadow-xl lg:-translate-y-2'
                    : 'bg-[#FFFFFF] border border-[#0A0A0B]/10 hover:border-[#0E7490]/50 shadow-sm'
                }`}
              >
                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0E7490] text-white px-4 py-1 rounded-full text-xs font-bold font-mono tracking-wider uppercase shadow-sm">
                    Empfehlung für KMU
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-extrabold text-2xl text-[#0A0A0B]">
                      {pkg.name}
                    </h3>
                    <span className="text-xs font-mono text-[#686759]">
                      {pkg.timeline}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="font-display font-black text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-[#686759] ml-1 font-mono">zzgl. MwSt.</span>
                  </div>

                  <div className="p-3 bg-[#F5F3EE] rounded-lg border border-[#0A0A0B]/5 mb-6 text-xs font-semibold text-[#0A0A0B]">
                    {pkg.scope}
                  </div>

                  <p className="font-body text-xs sm:text-sm text-[#686759] leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0A0A0B]/85">
                        <Check size={16} className="text-[#0E7490] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#0A0A0B]/10">
                  <button
                    onClick={() => onSelectPackage(pkg.name)}
                    className={`w-full py-3.5 rounded-lg text-sm font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2 group ${
                      isHighlight
                        ? 'bg-[#0E7490] hover:bg-[#0C627A] text-white shadow-md'
                        : 'bg-[#F5F3EE] hover:bg-[#0E7490] text-[#0A0A0B] hover:text-white border border-[#0A0A0B]/10'
                    }`}
                  >
                    <span>{pkg.name} anfragen</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Zusatzzeile verbatim from Document Page 3 */}
        <div className="text-center pt-4">
          <p className="font-display text-sm font-medium text-[#686759] tracking-wide inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-[#0A0A0B]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0E7490]" />
            Wartung, Betreuung und Zahlung in drei Schritten (Anzahlung, Designfreigabe, Launch)
          </p>
        </div>
      </div>
    </section>
  );
};

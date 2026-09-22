import React from 'react';
import { ArrowRight, Code, Palette, Cpu, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

interface StudioSectionProps {
  onOpenRequest: () => void;
}

export const StudioSection: React.FC<StudioSectionProps> = ({ onOpenRequest }) => {
  return (
    <section
      id="studio"
      className="py-24 lg:py-32 bg-[#0A0A0B] text-[#F5F3EE] relative overflow-hidden border-b border-[#F5F3EE]/10"
    >
      {/* Background Architectural Grid Pattern on Dark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#F5F3EE 1px, transparent 1px), linear-gradient(90deg, #F5F3EE 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Statement & Philosophy */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A3A29A]">
                STUDIO & PHILOSOPHIE
              </span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F3EE] tracking-[-0.03em] mb-8">
              Wer an Ihrer Website arbeitet.
            </h2>

            {/* Core Manifesto Quote verbatim from Document Page 2 */}
            <blockquote className="border-l-2 border-[#0E7490] pl-6 my-8 text-xl sm:text-2xl font-display font-medium text-[#F5F3EE] leading-relaxed">
              „Kein Account-Management, keine Weiterreichung an wechselnde Freelancer: Sie sprechen mit der Person, die entwirft, entwickelt und später wartet. Deshalb dauern Entscheidungen hier Stunden statt Wochen."
            </blockquote>

            <p className="font-body text-base text-[#A3A29A] leading-relaxed mb-8 max-w-xl">
              Surhay Design steht für maßgeschneiderte deutsche Webentwicklung und präzises Editorial Screendesign aus Berlin. Jedes Projekt wird mit technischer Tiefe, kompromissloser Performance und echtem unternehmerischem Verständnis umgesetzt.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenRequest}
                className="px-7 py-3.5 bg-[#0E7490] hover:bg-[#0C627A] text-white font-semibold text-sm rounded-lg transition-all inline-flex items-center gap-2 group"
              >
                <span>Direktkontakt aufnehmen</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>

              <span className="text-xs text-[#A3A29A] font-mono">
                hallo@surhay.design · Berlin, Deutschland
              </span>
            </div>
          </div>

          {/* Right Column: Studio Card & Principles */}
          <div className="lg:col-span-5">
            <div className="bg-[#141416] border border-[#F5F3EE]/15 rounded-2xl p-8 sm:p-10 shadow-2xl relative">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#F5F3EE]/10">
                <Logo variant="dark" size="md" />
                <span className="text-xs font-mono text-[#22D3EE] px-2.5 py-1 rounded bg-[#22D3EE]/10 uppercase font-semibold">
                  Berlin Studio
                </span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#F5F3EE]/5 text-[#0E7490] shrink-0 border border-[#F5F3EE]/10">
                    <Palette size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-[#F5F3EE]">Design ohne Vorlagen</h4>
                    <p className="text-xs sm:text-sm text-[#A3A29A] mt-1">
                      Maßgefertigte Typografie, Layouts und Farbwelten, abgestimmt auf Ihre Marke.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#F5F3EE]/5 text-[#0E7490] shrink-0 border border-[#F5F3EE]/10">
                    <Code size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-[#F5F3EE]">100% sauberer Code</h4>
                    <p className="text-xs sm:text-sm text-[#A3A29A] mt-1">
                      Schlanke Webstandards ohne fehleranfällige Theme-Generatoren oder Plugin-Friedhöfe.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#F5F3EE]/5 text-[#0E7490] shrink-0 border border-[#F5F3EE]/10">
                    <Cpu size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-[#F5F3EE]">Persönlicher Ansprechpartner</h4>
                    <p className="text-xs sm:text-sm text-[#A3A29A] mt-1">
                      Direkte Erreichbarkeit auf Augenhöhe — vor, während und nach dem Livegang.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#F5F3EE]/10 flex items-center justify-between text-xs text-[#A3A29A]">
                <span>100% Remote & Vor Ort in Berlin</span>
                <span className="font-mono text-[#F5F3EE]">Ø Reaktionszeit &lt; 2h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

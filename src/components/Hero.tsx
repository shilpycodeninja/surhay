import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';
import { TRUST_STRIP_ITEMS, PROOF_TICKER_TEXTS } from '../data/content';

interface HeroProps {
  onOpenRequest: () => void;
  motionPaused: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRequest, motionPaused }) => {
  const [proofIndex, setProofIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Rotating proof ticker
  useEffect(() => {
    if (motionPaused) return;
    const interval = setInterval(() => {
      setProofIndex((prev) => (prev + 1) % PROOF_TICKER_TEXTS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [motionPaused]);

  // Subtle tilt tracker on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (motionPaused) return;
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const getCardStyle = (factor: number) => {
    if (motionPaused) return {};
    const tiltX = -mousePos.y * factor * 3.5;
    const tiltY = mousePos.x * factor * 3.5;
    return {
      transform: `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`,
      transition: 'transform 0.3s cubic-bezier(.22,1,.36,1)',
    };
  };

  const trustIcons = [
    <Clock size={20} className="text-[#0E7490]" key="clock" />,
    <ShieldCheck size={20} className="text-[#0E7490]" key="shield" />,
    <CheckCircle2 size={20} className="text-[#0E7490]" key="check" />,
    <MapPin size={20} className="text-[#0E7490]" key="pin" />,
  ];

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative pt-[120px] pb-16 lg:pt-[140px] lg:pb-24 overflow-hidden border-b border-[#0A0A0B]/10"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#0A0A0B 1px, transparent 1px), linear-gradient(90deg, #0A0A0B 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow with pulsing accent dot */}
        <div className="flex items-center gap-2 mb-6">
          <span className="relative flex h-2.5 w-2.5">
            <span
              className={`absolute inline-flex h-full w-full rounded-full bg-[#0E7490] ${
                motionPaused ? '' : 'animate-ping opacity-75'
              }`}
            />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0E7490]" />
          </span>
          <span className="text-[12px] sm:text-[13px] font-semibold tracking-[0.2em] uppercase text-[#686759]">
            WEBDESIGN · ENTWICKLUNG · SEO — BERLIN
          </span>
        </div>

        {/* Main Grid: Headline & Content vs Layered Editorial Mockups */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 pr-0 lg:pr-6">
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[68px] leading-[1.06] tracking-[-0.035em] text-[#0A0A0B] mb-6">
              Websites, die Unternehmen{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10">sichtbar</span>
                {/* Cyan Marker Underline - exactly as specified */}
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-[10px] text-[#22D3EE] z-0 overflow-visible"
                  viewBox="0 0 240 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 2 12 Q 120 4 238 9"
                    stroke="#22D3EE"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className={motionPaused ? '' : 'animate-in fade-in duration-700'}
                  />
                </svg>
              </span>{' '}
              machen.
            </h1>

            <p className="font-display text-lg sm:text-xl lg:text-[22px] font-medium text-[#0A0A0B]/85 leading-snug mb-4">
              Moderne Websites für Unternehmen, die professionell auftreten und digital wachsen wollen.
            </p>

            <p className="font-body text-base sm:text-lg text-[#686759] leading-relaxed max-w-2xl mb-8">
              Maßgeschneidertes Design, saubere Entwicklung, verlässliche Wartung — für KMU, Selbstständige und Startups im DACH-Raum. Von der Konzeption bis zum Launch, ohne Baukästen oder Agentur-Theater.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                id="hero-cta-primary"
                onClick={onOpenRequest}
                className="px-8 py-4 bg-[#0E7490] hover:bg-[#0C627A] text-white font-semibold text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2 group"
              >
                <span>Website anfragen</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>

              <a
                id="hero-cta-secondary"
                href="#projekte"
                className="px-7 py-4 bg-transparent border border-[#0A0A0B]/45 hover:border-[#0A0A0B] text-[#0A0A0B] font-semibold text-base rounded-lg transition-all duration-200 inline-flex items-center gap-2 group hover:bg-[#0A0A0B]/5"
              >
                <span>Projekte ansehen</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Rotating Proof Ticker (Accessibility compliant) */}
            <div className="inline-flex items-center gap-3 py-2.5 px-4 bg-[#FFFFFF] border border-[#0A0A0B]/10 rounded-lg shadow-sm max-w-xl">
              <span className="p-1 rounded bg-[#0E7490]/10 text-[#0E7490]">
                <Sparkles size={16} />
              </span>
              <div className="overflow-hidden h-6 flex items-center">
                <p
                  key={proofIndex}
                  className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#0A0A0B] uppercase transition-all duration-500 animate-in slide-in-from-bottom-2 fade-in"
                >
                  {PROOF_TICKER_TEXTS[proofIndex]}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Composition of Premium Mockups */}
          <div className="lg:col-span-5 relative min-h-[480px] lg:min-h-[560px] flex items-center justify-center">
            {/* Ambient soft glow background */}
            <div className="absolute inset-0 bg-radial from-[#0E7490]/10 to-transparent blur-2xl rounded-full pointer-events-none" />

            {/* Layer 1: Back/Top Mockup - Medical Practice UI */}
            <div
              style={getCardStyle(1.2)}
              className="absolute top-2 right-2 w-[280px] sm:w-[320px] bg-[#FFFFFF] rounded-xl border border-[#0A0A0B]/15 shadow-xl overflow-hidden z-10"
            >
              <div className="h-7 bg-[#F5F3EE] border-b border-[#0A0A0B]/10 px-3 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0A0A0B]/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#0A0A0B]/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#0A0A0B]/20" />
                <span className="ml-2 font-mono text-[9px] text-[#686759]">praxis-weber-berlin.de</span>
              </div>
              <div className="p-4 bg-[#FFFFFF]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E7490]">Medizin & Praxis</span>
                  <span className="text-[10px] bg-[#0E7490]/10 text-[#0E7490] px-2 py-0.5 rounded font-mono font-bold">BFSG 2.1</span>
                </div>
                <h4 className="font-display font-bold text-sm text-[#0A0A0B]">Fachpraxis Kurfürstendamm</h4>
                <p className="text-xs text-[#686759] mt-1">Strukturierte Online-Termine & direkte Patienten-Vorabaufklärung.</p>
                <div className="mt-3 pt-2 border-t border-[#0A0A0B]/10 flex items-center justify-between text-[11px]">
                  <span className="text-[#686759]">Ladezeit</span>
                  <span className="font-mono font-bold text-[#0E7490]">0.42 s</span>
                </div>
              </div>
            </div>

            {/* Layer 2: Main Featured Mockup - Craft & Construction UI */}
            <div
              style={getCardStyle(1.8)}
              className="relative w-[320px] sm:w-[380px] bg-[#FFFFFF] rounded-2xl border border-[#0A0A0B]/15 shadow-2xl overflow-hidden z-20"
            >
              <div className="h-8 bg-[#0A0A0B] text-white px-3.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-[10px] text-white/70">vanguard-bau.de</span>
                </div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#22D3EE]">LIVE 2026</span>
              </div>
              <div className="relative h-44 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=85"
                  alt="Vanguard Bau Website Mockup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#22D3EE]">Handwerk & Bau</span>
                    <h3 className="font-display font-bold text-base">Vanguard Meisterbetrieb</h3>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-2 rounded bg-[#F5F3EE] border border-[#0A0A0B]/5">
                    <span className="block text-[10px] text-[#686759] uppercase">Conversion</span>
                    <span className="font-display font-bold text-base text-[#0E7490]">+140%</span>
                  </div>
                  <div className="p-2 rounded bg-[#F5F3EE] border border-[#0A0A0B]/5">
                    <span className="block text-[10px] text-[#686759] uppercase">Lighthouse</span>
                    <span className="font-display font-bold text-base text-[#0A0A0B]">100 / 100</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 3: Floating Foreground Card - Legal / Corporate UI */}
            <div
              style={getCardStyle(2.4)}
              className="absolute -bottom-4 left-0 sm:left-4 w-[260px] sm:w-[290px] bg-[#FFFFFF] rounded-xl border border-[#0A0A0B]/15 shadow-2xl p-4 z-30"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0E7490] text-white flex items-center justify-center font-display font-bold text-lg">
                  §
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#0E7490] uppercase font-bold">Kanzlei Dr. v. Moers</span>
                  <h5 className="font-display font-bold text-xs text-[#0A0A0B]">Digitale Mandatsaufnahme</h5>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-[#686759] pt-2 border-t border-[#0A0A0B]/10">
                <span>DSGVO Konform</span>
                <span className="font-mono text-[#0A0A0B] font-semibold">100% verschlüsselt</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust-Strip (4 Columns) - Verbatim from Document Page 1-2 */}
        <div className="pt-10 border-t border-[#0A0A0B]/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_STRIP_ITEMS.map((item, idx) => (
              <div
                key={item.title}
                className="p-5 bg-[#FFFFFF] rounded-xl border border-[#0A0A0B]/10 hover:border-[#0E7490]/40 transition-colors duration-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#F5F3EE]">
                    {trustIcons[idx]}
                  </div>
                  <h3 className="font-display font-bold text-base text-[#0A0A0B]">
                    {item.title}
                  </h3>
                </div>
                <p className="font-body text-xs sm:text-sm text-[#686759] leading-relaxed pl-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

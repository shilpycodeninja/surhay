import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { INDUSTRY_SLIDES } from '../data/content';

interface IndustryCarouselProps {
  onSelectIndustry: (industry: string) => void;
  motionPaused: boolean;
}

export const IndustryCarousel: React.FC<IndustryCarouselProps> = ({
  onSelectIndustry,
  motionPaused,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentSlide = INDUSTRY_SLIDES[activeIndex];

  // 7s autoplay that stops on interaction
  useEffect(() => {
    if (motionPaused || isInteracting) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % INDUSTRY_SLIDES.length);
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, isInteracting, motionPaused]);

  const handlePrev = () => {
    setIsInteracting(true);
    setActiveIndex((prev) => (prev === 0 ? INDUSTRY_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsInteracting(true);
    setActiveIndex((prev) => (prev + 1) % INDUSTRY_SLIDES.length);
  };

  const handleSlideSelect = (index: number) => {
    setIsInteracting(true);
    setActiveIndex(index);
  };

  // Touch Swipe handlers
  const minSwipeDistance = 50;

  const onTouchStartHandler = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMoveHandler = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section
      id="branchen"
      className="py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#0A0A0B]/10 relative select-none"
      onTouchStart={onTouchStartHandler}
      onTouchMove={onTouchMoveHandler}
      onTouchEnd={onTouchEndHandler}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0E7490]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#686759]">
              BRANCHEN-SPEZIALISIERUNG
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0B] tracking-[-0.03em] mb-4">
            Websites für Ihre Branche.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#686759] leading-relaxed">
            Wir entwickeln individuelle Websites, die zu Ihrem Unternehmen, Ihrer Zielgruppe und Ihrer Branche passen.
          </p>
        </div>

        {/* Numbered Navigation Strip (01–07) */}
        <div className="flex items-center space-x-2 sm:space-x-6 pb-6 mb-8 border-b border-[#0A0A0B]/10 overflow-x-auto no-scrollbar">
          {INDUSTRY_SLIDES.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={slide.id}
                onClick={() => handleSlideSelect(idx)}
                className={`group flex items-center gap-2 pb-2 text-left whitespace-nowrap transition-all duration-300 relative ${
                  isActive ? 'text-[#0A0A0B] font-bold' : 'text-[#686759]/60 hover:text-[#0A0A0B]'
                }`}
              >
                <span className="font-mono text-xs sm:text-sm tracking-wider">
                  0{idx + 1}
                </span>
                <span className="hidden sm:inline font-display text-sm tracking-tight">
                  {slide.title.split('&')[0]}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0E7490]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Main 42 / 58 Split Carousel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#FFFFFF] rounded-2xl border border-[#0A0A0B]/10 p-6 sm:p-8 lg:p-12 shadow-sm min-h-[540px]">
          {/* Left Column (roughly 42%) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Category Number & Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-sm tracking-widest text-[#686759]">
                  {currentSlide.number}
                </span>
                <span className="text-xs font-semibold text-[#0E7490] bg-[#0E7490]/10 px-3 py-1 rounded-full">
                  {currentSlide.badge}
                </span>
              </div>

              {/* Industry Title */}
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0A0A0B] tracking-[-0.025em] mb-4">
                {currentSlide.title}
              </h3>

              {/* 2-3 line Description */}
              <p className="font-body text-base text-[#686759] leading-relaxed mb-6">
                {currentSlide.description}
              </p>

              {/* Industry Features List */}
              <div className="space-y-2.5 mb-8">
                {currentSlide.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-sm text-[#0A0A0B]/85">
                    <CheckCircle2 size={16} className="text-[#0E7490] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action & Nav Arrows */}
            <div className="pt-6 border-t border-[#0A0A0B]/10 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => onSelectIndustry(currentSlide.title)}
                className="inline-flex items-center gap-3 text-sm font-semibold text-[#0A0A0B] hover:text-[#0E7490] group"
              >
                <span>Projekt für diese Branche anfragen</span>
                <span className="w-8 h-8 rounded-full border border-[#0A0A0B]/40 group-hover:border-[#0E7490] flex items-center justify-center transition-colors">
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>

              {/* Hairline circle prev/next arrows */}
              <div className="flex items-center gap-2">
                <button
                  id="carousel-prev-btn"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-[#0A0A0B]/25 hover:border-[#0A0A0B] hover:bg-[#F5F3EE] flex items-center justify-center transition-all duration-200 text-[#0A0A0B]"
                  aria-label="Vorherige Branche"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  id="carousel-next-btn"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-[#0A0A0B]/25 hover:border-[#0A0A0B] hover:bg-[#F5F3EE] flex items-center justify-center transition-all duration-200 text-[#0A0A0B]"
                  aria-label="Nächste Branche"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column (roughly 58%): Large photograph composited with website-UI element */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-xl overflow-hidden aspect-[16/10] sm:aspect-[16/11] border border-[#0A0A0B]/10 shadow-lg bg-[#0A0A0B]">
              {/* Large Industry Photograph */}
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                key={currentSlide.id}
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                style={{
                  transitionTimingFunction: 'cubic-bezier(.65,0,.35,1)',
                }}
              />

              {/* Dark subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/85 via-transparent to-black/25 pointer-events-none" />

              {/* Composited UI Element 1: Browser Chrome Bar on top */}
              <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-lg border border-[#0A0A0B]/15 px-3 py-2 flex items-center justify-between text-xs shadow-md">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#0A0A0B]/30" />
                    <span className="w-2 h-2 rounded-full bg-[#0A0A0B]/30" />
                    <span className="w-2 h-2 rounded-full bg-[#0A0A0B]/30" />
                  </div>
                  <span className="font-mono text-[11px] text-[#686759] ml-2 truncate max-w-[200px] sm:max-w-none">
                    surhay.design/cases/{currentSlide.id}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#0E7490] font-bold uppercase tracking-wider">
                  Bespoke Code
                </span>
              </div>

              {/* Composited UI Element 2: Floating Bottom Metric & Caption Fragment */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-[#0A0A0B]/90 backdrop-blur-md rounded-lg border border-white/15 text-white">
                <div>
                  <span className="block text-[11px] font-mono text-[#22D3EE] uppercase tracking-wider">
                    {currentSlide.uiCaption}
                  </span>
                  <span className="text-xs text-white/70">
                    Optimiert für maximale Conversion & lokale Sichtbarkeit
                  </span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-right">
                    <span className="block text-[10px] uppercase font-mono text-[#A3A29A]">
                      {currentSlide.metrics.label}
                    </span>
                    <span className="font-display font-extrabold text-lg text-[#22D3EE]">
                      {currentSlide.metrics.value}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thin Accent Progress Bar across section bottom */}
        <div className="mt-8 w-full bg-[#0A0A0B]/10 h-[2px] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#0E7490] transition-all duration-500 ease-out"
            style={{
              width: `${((activeIndex + 1) / INDUSTRY_SLIDES.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

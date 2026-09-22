import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Mail, MapPin, Clock, Send, Sparkles } from 'lucide-react';
import { InquiryFormData } from '../types';

interface FinalCtaProps {
  initialIndustry?: string;
  initialPackage?: string;
}

export const FinalCta: React.FC<FinalCtaProps> = ({
  initialIndustry = '',
  initialPackage = '',
}) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<InquiryFormData>({
    industry: initialIndustry || 'Handwerk & Bau',
    services: initialPackage ? [initialPackage] : ['Webdesign & Entwicklung'],
    budget: '5.000 € – 10.000 €',
    timeline: 'Innerhalb 4–6 Wochen',
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const industriesList = [
    'Handwerker & Bau',
    'Medizin & Praxen',
    'Anwälte & Kanzleien',
    'Immobilienmakler',
    'KFZ & Automotive',
    'Unternehmen & B2B',
    'Individuelle Lösung',
  ];

  const budgetOptions = [
    'Unter 4.000 €',
    '4.000 € – 7.000 €',
    '7.000 € – 12.000 €',
    'Über 12.000 €',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    setFormData({
      industry: 'Handwerk & Bau',
      services: ['Webdesign & Entwicklung'],
      budget: '5.000 € – 10.000 €',
      timeline: 'Innerhalb 4–6 Wochen',
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section id="kontakt" className="py-24 lg:py-32 bg-[#0A0A0B] text-[#F5F3EE] relative overflow-hidden">
      {/* Background Architectural Grid Pattern on Dark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#F5F3EE 1px, transparent 1px), linear-gradient(90deg, #F5F3EE 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Support & Direct Contact Details */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A3A29A]">
                PROJEKTSTART & ERSTGESPRÄCH
              </span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F3EE] tracking-[-0.03em] leading-tight mb-6">
              Bereit für einen professionellen digitalen Auftritt?
            </h2>

            <p className="font-body text-base sm:text-lg text-[#A3A29A] leading-relaxed mb-8">
              Lassen Sie uns gemeinsam eine Website entwickeln, die Ihr Unternehmen sichtbar macht. Schreiben Sie kurz, worum es geht — Antwort innerhalb von 24 Stunden.
            </p>

            <div className="space-y-4 pt-6 border-t border-[#F5F3EE]/10">
              <div className="flex items-center gap-3 text-sm text-[#F5F3EE]">
                <div className="p-2.5 rounded-lg bg-[#F5F3EE]/5 text-[#22D3EE] border border-[#F5F3EE]/10">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#A3A29A] block">Direktkontakt</span>
                  <a href="mailto:hallo@surhay.design" className="hover:text-[#22D3EE] transition-colors font-mono font-medium">
                    hallo@surhay.design
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#F5F3EE]">
                <div className="p-2.5 rounded-lg bg-[#F5F3EE]/5 text-[#22D3EE] border border-[#F5F3EE]/10">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#A3A29A] block">Standort</span>
                  <span>Berlin, Deutschland · DACH-weit Remote</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#F5F3EE]">
                <div className="p-2.5 rounded-lg bg-[#F5F3EE]/5 text-[#22D3EE] border border-[#F5F3EE]/10">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#A3A29A] block">Antwortzeit</span>
                  <span>Garantierte Rückmeldung innerhalb 24 Stunden</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Multi-Step Request Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] text-[#0A0A0B] rounded-2xl p-8 sm:p-10 shadow-2xl border border-[#0A0A0B]/10 relative">
              {submitted ? (
                /* Success State verbatim from document: "Angekommen. Danke." */
                <div className="py-12 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#0E7490]/10 text-[#0E7490] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-display font-black text-3xl text-[#0A0A0B] mb-3">
                    Angekommen. Danke.
                  </h3>
                  <p className="font-body text-base text-[#686759] max-w-md mx-auto mb-8 leading-relaxed">
                    Ihre Projektanfrage liegt vor. Wir prüfen die Rahmendaten und melden uns innerhalb von 24 Stunden mit einem ersten Feedback und Terminvorschlag bei Ihnen.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-[#F5F3EE] hover:bg-[#0A0A0B] hover:text-white text-[#0A0A0B] font-semibold text-sm rounded-lg transition-colors"
                  >
                    Weitere Anfrage senden
                  </button>
                </div>
              ) : (
                <div>
                  {/* Form Header */}
                  <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#0A0A0B]/10">
                    <div>
                      <h3 className="font-display font-extrabold text-2xl text-[#0A0A0B]">
                        Anfrage
                      </h3>
                      <p className="text-xs text-[#686759] mt-0.5">
                        Schreiben Sie kurz, worum es geht — Antwort innerhalb von 24 Stunden.
                      </p>
                    </div>

                    {/* Step indicator */}
                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-[#0E7490] uppercase tracking-wider">
                        Schritt {step} von 3
                      </span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* STEP 1: Branche & Vorhaben */}
                    {step === 1 && (
                      <div className="space-y-6 animate-in fade-in duration-200">
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-[#686759] mb-3 font-semibold">
                            1. Welche Branche vertreten Sie?
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                            {industriesList.map((ind) => {
                              const isSelected = formData.industry === ind;
                              return (
                                <button
                                  type="button"
                                  key={ind}
                                  onClick={() => setFormData({ ...formData, industry: ind })}
                                  className={`p-3 text-xs font-semibold rounded-lg border text-left transition-all ${
                                    isSelected
                                      ? 'border-[#0E7490] bg-[#0E7490]/10 text-[#0E7490]'
                                      : 'border-[#0A0A0B]/10 hover:border-[#0A0A0B]/30 text-[#0A0A0B]'
                                  }`}
                                >
                                  {ind}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-[#686759] mb-2 font-semibold">
                            Ungefähres Budget (Orientierung)
                          </label>
                          <div className="grid grid-cols-2 gap-2.5">
                            {budgetOptions.map((opt) => (
                              <button
                                type="button"
                                key={opt}
                                onClick={() => setFormData({ ...formData, budget: opt })}
                                className={`p-3 text-xs font-semibold rounded-lg border text-left transition-all ${
                                  formData.budget === opt
                                    ? 'border-[#0E7490] bg-[#0E7490]/10 text-[#0E7490]'
                                    : 'border-[#0A0A0B]/10 hover:border-[#0A0A0B]/30 text-[#0A0A0B]'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="px-6 py-3.5 bg-[#0E7490] hover:bg-[#0C627A] text-white font-semibold text-sm rounded-lg inline-flex items-center gap-2 group shadow-sm"
                          >
                            <span>Weiter zu Schritt 2</span>
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Projektumfang & Details */}
                    {step === 2 && (
                      <div className="space-y-6 animate-in fade-in duration-200">
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-[#686759] mb-2 font-semibold">
                            Gewünschter Zeitplan
                          </label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full p-3.5 bg-[#F5F3EE] border border-[#0A0A0B]/10 rounded-lg text-sm text-[#0A0A0B] focus:border-[#0E7490] focus:outline-none"
                          >
                            <option>So schnell wie möglich (3–4 Wochen)</option>
                            <option>Innerhalb 4–6 Wochen</option>
                            <option>Innerhalb 2–3 Monate</option>
                            <option>Kein Zeitdruck / Strategische Vorbereitung</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-[#686759] mb-2 font-semibold">
                            Worum geht es konkret? (Kurze Beschreibung)
                          </label>
                          <textarea
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="z. B. Relaunch unserer bestehenden Kanzlei-Website mit Online-Terminvergabe und zeitgemäßem Screendesign..."
                            className="w-full p-3.5 bg-[#F5F3EE] border border-[#0A0A0B]/10 rounded-lg text-sm text-[#0A0A0B] placeholder:text-[#686759]/60 focus:border-[#0E7490] focus:outline-none"
                          />
                        </div>

                        <div className="pt-4 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="px-5 py-3 text-sm font-semibold text-[#686759] hover:text-[#0A0A0B] inline-flex items-center gap-1.5"
                          >
                            <ArrowLeft size={16} />
                            <span>Zurück</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setStep(3)}
                            className="px-6 py-3.5 bg-[#0E7490] hover:bg-[#0C627A] text-white font-semibold text-sm rounded-lg inline-flex items-center gap-2 group shadow-sm"
                          >
                            <span>Weiter zu Kontaktdaten</span>
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Kontaktdaten & Absenden */}
                    {step === 3 && (
                      <div className="space-y-4 animate-in fade-in duration-200">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-[#686759] mb-1 font-semibold">
                              Ihr Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Max Mustermann"
                              className="w-full p-3 bg-[#F5F3EE] border border-[#0A0A0B]/10 rounded-lg text-sm text-[#0A0A0B] focus:border-[#0E7490] focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-[#686759] mb-1 font-semibold">
                              E-Mail-Adresse *
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="max@unternehmen.de"
                              className="w-full p-3 bg-[#F5F3EE] border border-[#0A0A0B]/10 rounded-lg text-sm text-[#0A0A0B] focus:border-[#0E7490] focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-[#686759] mb-1 font-semibold">
                              Unternehmen / Praxis (optional)
                            </label>
                            <input
                              type="text"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              placeholder="Mustermann GmbH & Co. KG"
                              className="w-full p-3 bg-[#F5F3EE] border border-[#0A0A0B]/10 rounded-lg text-sm text-[#0A0A0B] focus:border-[#0E7490] focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-[#686759] mb-1 font-semibold">
                              Telefonnummer (optional)
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+49 30 12345678"
                              className="w-full p-3 bg-[#F5F3EE] border border-[#0A0A0B]/10 rounded-lg text-sm text-[#0A0A0B] focus:border-[#0E7490] focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="p-3 bg-[#F5F3EE] rounded-lg text-xs text-[#686759] flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-[#0E7490] shrink-0" />
                          <span>100% unverbindlich, kein Werbespam, DSGVO-konforme Übermittlung.</span>
                        </div>

                        <div className="pt-4 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="px-5 py-3 text-sm font-semibold text-[#686759] hover:text-[#0A0A0B] inline-flex items-center gap-1.5"
                          >
                            <ArrowLeft size={16} />
                            <span>Zurück</span>
                          </button>

                          <button
                            type="submit"
                            className="px-8 py-3.5 bg-[#0E7490] hover:bg-[#0C627A] text-white font-semibold text-sm rounded-lg inline-flex items-center gap-2 group shadow-md"
                          >
                            <span>Anfrage absenden</span>
                            <Send size={16} className="transition-transform group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

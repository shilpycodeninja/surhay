import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

interface RequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetTopic?: string;
}

export const RequestModal: React.FC<RequestModalProps> = ({
  isOpen,
  onClose,
  presetTopic = '',
}) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    type: presetTopic || 'Neue Website',
    name: '',
    email: '',
    phone: '',
    timeline: '4–6 Wochen',
    budget: '5.000 € – 8.000 €',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0B]/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FFFFFF] text-[#0A0A0B] rounded-2xl w-full max-w-xl p-6 sm:p-8 shadow-2xl border border-[#0A0A0B]/10 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#686759] hover:text-[#0A0A0B] hover:bg-[#F5F3EE] transition-colors"
          aria-label="Schließen"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#0E7490]/10 text-[#0E7490] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="font-display font-black text-2xl text-[#0A0A0B] mb-2">
              Angekommen. Danke.
            </h3>
            <p className="font-body text-sm text-[#686759] mb-6">
              Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden mit einem konkreten Vorschlag für das Erstgespräch.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#0E7490] text-white font-semibold text-sm rounded-lg hover:bg-[#0C627A] transition-colors"
            >
              Schließen
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Logo size="sm" />
              <span className="text-xs font-mono text-[#0E7490] font-semibold bg-[#0E7490]/10 px-2 py-0.5 rounded">
                Kostenloses Erstgespräch
              </span>
            </div>
            <h3 className="font-display font-extrabold text-2xl text-[#0A0A0B] mb-1">
              Website anfragen
            </h3>
            <p className="text-xs text-[#686759] mb-6">
              30–45 Min. Analyse & Festpreis-Angebot · Antwort innerhalb 24h
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#686759] mb-1 font-semibold">
                      Projekt-Fokus
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full p-3 bg-[#F5F3EE] border border-[#0A0A0B]/10 rounded-lg text-sm text-[#0A0A0B] focus:border-[#0E7490] focus:outline-none"
                    >
                      <option>Komplett neue Website (Full Stack)</option>
                      <option>Relaunch bestehende Website</option>
                      <option>Nur Webdesign / Screendesign</option>
                      <option>Reine Webentwicklung (Code)</option>
                      <option>Individuelle Webanwendung / Portal</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#686759] mb-1 font-semibold">
                      Kurzbeschreibung oder Link zur aktuellen Website
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="z. B. Unser Fachbetrieb braucht eine moderne Website zur Kundengewinnung..."
                      className="w-full p-3 bg-[#F5F3EE] border border-[#0A0A0B]/10 rounded-lg text-sm text-[#0A0A0B] focus:border-[#0E7490] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-2.5 bg-[#0E7490] hover:bg-[#0C627A] text-white font-semibold text-sm rounded-lg inline-flex items-center gap-2"
                    >
                      <span>Weiter zu Kontaktdaten</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#686759] mb-1 font-semibold">
                      Ihr Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Vor- und Nachname"
                      className="w-full p-2.5 bg-[#F5F3EE] border border-[#0A0A0B]/10 rounded-lg text-sm text-[#0A0A0B] focus:border-[#0E7490] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#686759] mb-1 font-semibold">
                      E-Mail-Adresse *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="beispiel@unternehmen.de"
                      className="w-full p-2.5 bg-[#F5F3EE] border border-[#0A0A0B]/10 rounded-lg text-sm text-[#0A0A0B] focus:border-[#0E7490] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#686759] mb-1 font-semibold">
                      Telefonnummer (optional für Rückruf)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+49 ..."
                      className="w-full p-2.5 bg-[#F5F3EE] border border-[#0A0A0B]/10 rounded-lg text-sm text-[#0A0A0B] focus:border-[#0E7490] focus:outline-none"
                    />
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-semibold text-[#686759] hover:text-[#0A0A0B] inline-flex items-center gap-1"
                    >
                      <ArrowLeft size={14} />
                      <span>Zurück</span>
                    </button>

                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#0E7490] hover:bg-[#0C627A] text-white font-semibold text-sm rounded-lg inline-flex items-center gap-2"
                    >
                      <span>Erstgespräch anfragen</span>
                      <Send size={14} />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

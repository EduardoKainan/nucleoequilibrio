import React from 'react';
import { ArrowLeft, CheckCircle2, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_NUMBER, WHATSAPP_URL } from '../constants';
import { Button } from './ui/Button';
import { Footer } from './Footer';

interface SitelinkSection {
  title: string;
  text: string;
}

interface SitelinkPageProps {
  page: {
    title: string;
    eyebrow: string;
    description: string;
    intro: string;
    sections: SitelinkSection[];
    highlights: string[];
  };
}

export const SitelinkPage: React.FC<SitelinkPageProps> = ({ page }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 fade-in">
      <header className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <a href="/" className="font-bold text-xl sm:text-2xl text-slate-800 tracking-tight">
            Núcleo<span className="text-teal-600">Equilíbrio</span>
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-teal-700 transition-colors"
          >
            <ArrowLeft size={18} />
            Voltar
          </a>
        </div>
      </header>

      <main>
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal-700 mb-3">{page.eyebrow}</p>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
                {page.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
                {page.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <MessageCircle size={20} />
                  Falar agora no WhatsApp
                </Button>
                <Button href={`tel:${PHONE_NUMBER}`} variant="outline" className="gap-2">
                  <Phone size={20} />
                  {PHONE_DISPLAY}
                </Button>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-lg p-6 lg:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-teal-500/20 flex items-center justify-center">
                  <ShieldCheck className="text-teal-300" size={24} />
                </div>
                <div>
                  <h2 className="font-bold text-lg">Atendimento reservado</h2>
                  <p className="text-sm text-slate-300">Sigilo, acolhimento e orientação responsável.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {page.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-100">
                    <CheckCircle2 className="text-teal-300 shrink-0" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-slate-200 rounded-lg p-6 lg:p-8 shadow-sm mb-6">
              <p className="text-lg text-slate-700 leading-relaxed">{page.intro}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {page.sections.map((section) => (
                <article key={section.title} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h2>
                  <p className="text-slate-600 leading-relaxed">{section.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 bg-teal-700 text-white rounded-lg p-6 lg:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div>
                <h2 className="text-2xl font-bold mb-2">Precisa de orientação agora?</h2>
                <p className="text-teal-50 max-w-2xl">
                  Fale com a equipe para entender possibilidades de atendimento, estrutura e próximos passos.
                </p>
              </div>
              <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="secondary" className="gap-2 shrink-0">
                <MessageCircle size={20} />
                Atendimento imediato no WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

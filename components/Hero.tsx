import React from 'react';
import { HERO_CONTENT, WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '../constants';
import { Button } from './ui/Button';
import { MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleContact = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <div id="hero" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 min-h-[90vh] flex flex-col justify-center">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-0 lg:px-8 xl:mt-0">
            <div className="sm:text-center lg:text-left fade-in">
              <span className="inline-block py-1 px-3 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold mb-4 tracking-wide uppercase">
                Acolhimento e Respeito
              </span>
              <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">A jornada de equilíbrio</span>{' '}
                <span className="block text-teal-600 xl:inline">e cuidado começa hoje</span>
              </h1>
              <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {HERO_CONTENT.subheadline}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3">
                <Button onClick={handleContact} className="gap-2">
                  <MessageCircle size={20} />
                  {HERO_CONTENT.cta}
                </Button>
                <Button variant="outline" onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}>
                  Descobrir o melhor caminho
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90"
          src="https://picsum.photos/id/11/1200/800"
          alt="Paisagem tranquila com natureza, representando paz e equilíbrio"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent lg:via-white/20"></div>
      </div>
    </div>
  );
};
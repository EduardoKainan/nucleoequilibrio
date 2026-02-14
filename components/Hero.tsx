import React from 'react';
import { HERO_CONTENT, WHATSAPP_MESSAGE, WHATSAPP_NUMBER, PHONE_NUMBER } from '../constants';
import { Button } from './ui/Button';
import { MessageCircle, CheckCircle, Phone } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const phoneUrl = `tel:${PHONE_NUMBER}`;

  return (
    <div id="hero" className="relative bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 min-h-[85vh] flex flex-col justify-center">
          
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-0 lg:px-8 xl:mt-0 pt-20 lg:pt-0">
            <div className="sm:text-center lg:text-left fade-in">
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-teal-900/50 text-teal-300 text-sm font-semibold mb-4 tracking-wide uppercase border border-teal-700 backdrop-blur-sm">
                <CheckCircle size={14} />
                Atendimento Especializado
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl drop-shadow-md">
                {HERO_CONTENT.headline}
              </h1>
              <p className="mt-4 text-base text-slate-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-medium drop-shadow">
                {HERO_CONTENT.subheadline}
              </p>
              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                <Button 
                  href={whatsappUrl} 
                  target="_blank"
                  className="w-full sm:w-auto gap-2 text-lg px-8 py-4 shadow-lg"
                >
                  <MessageCircle size={24} />
                  {HERO_CONTENT.cta}
                </Button>
                <Button 
                  href={phoneUrl}
                  variant="outline" 
                  className="w-full sm:w-auto gap-2 text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20 mt-3 sm:mt-0 backdrop-blur-md"
                >
                  <Phone size={24} />
                  {HERO_CONTENT.ctaPhone}
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Imagem de Fundo Atualizada */}
      <div className="absolute inset-0 z-0">
        <img
          className="h-full w-full object-cover opacity-40 lg:opacity-50"
          src="https://i.postimg.cc/htFkCBy8/Gemini-Generated-Image-f1mcmyf1mcmyf1mc.png"
          alt="Apoio e recuperação"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/20 lg:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>
    </div>
  );
};
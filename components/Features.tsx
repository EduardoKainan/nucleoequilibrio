import React from 'react';
import { FEATURES, INTRO_CONTENT, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Features: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div id="tratamentos" className="py-16 bg-white overflow-hidden lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Seção Introdutória - Cuidar de Quem Você Ama */}
        <div className="relative mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-6">
                  {INTRO_CONTENT.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {INTRO_CONTENT.text}
                </p>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-teal-700 font-semibold cursor-pointer hover:text-teal-800 transition-colors inline-flex"
                >
                  <span>Saiba como podemos ajudar</span>
                  <ArrowRight size={20} />
                </a>
             </div>
             <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=2000&auto=format&fit=crop" 
                  alt="Apoio familiar e acolhimento" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>

        <div className="relative">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-extrabold text-slate-900">Tratamentos e Internações</h2>
             <p className="mt-4 text-xl text-slate-500">Protocolos eficazes e acompanhamento contínuo.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <div key={index} className="flex flex-col p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal-100 text-teal-700">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                </div>
                <div className="flex-1">
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-200">
                   <a 
                     href={whatsappUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-teal-600 font-medium text-sm flex items-center gap-1 hover:text-teal-800 transition-colors inline-flex"
                   >
                     Saiba mais <ArrowRight size={14} />
                   </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
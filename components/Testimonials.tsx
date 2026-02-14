import React from 'react';
import { TESTIMONIALS } from '../constants';
import { MessageSquareQuote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <div id="depoimentos" className="py-16 bg-slate-50 relative overflow-hidden">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
         <div className="absolute top-10 left-10 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
         <div className="absolute top-10 right-10 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-teal-50 rounded-full mb-4">
            <MessageSquareQuote className="w-8 h-8 text-teal-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">
            Palavras de quem reencontrou a paz
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-600">
            Acreditamos que cada história de superação é única. Veja o que famílias e pacientes dizem sobre o impacto do nosso acolhimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((imageUrl, index) => (
            <div 
                key={index} 
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 bg-white"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-slate-100">
                <img 
                    src={imageUrl} 
                    alt={`Depoimento de cliente ${index + 1}`} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Overlay suave ao passar o mouse */}
              <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/10 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
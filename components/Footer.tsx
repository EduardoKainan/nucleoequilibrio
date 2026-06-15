import React from 'react';
import { Phone, Shield } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_NUMBER } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-white text-lg font-bold mb-2">Núcleo de Apoio e Equilíbrio</h3>
          <p className="text-sm max-w-xs">
            Dedicados a reconstruir histórias e promover o bem-estar integral em Goiás e DF.
          </p>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors"
          >
            <Phone size={16} />
            {PHONE_DISPLAY}
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end">
           <div className="flex items-center gap-2 text-teal-400 mb-2">
             <Shield size={16} />
             <span className="text-sm font-medium">Atendimento Sigiloso e Seguro</span>
           </div>
           <p className="text-xs text-slate-500">
             © {new Date().getFullYear()} Todos os direitos reservados.
           </p>
           <a
             href="https://wa.me/5562985328488"
             target="_blank"
             rel="noopener noreferrer"
             className="mt-2 text-xs text-slate-400 hover:text-teal-300 transition-colors"
           >
             Desenvolvido por Agência Jireh · WhatsApp (62) 98532-8488
           </a>
        </div>
      </div>
    </footer>
  );
};

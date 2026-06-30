import React from 'react';
import { INSURANCE_LOGOS } from '../constants';

interface InsuranceLogosProps {
    className?: string;
    title?: string;
    variant?: 'light' | 'dark'; // Light bg or Dark bg
}

export const InsuranceLogos: React.FC<InsuranceLogosProps> = ({ className = "", title, variant = 'light' }) => {
  // Se o variant for dark, os logos precisam estar dentro de uma caixa branca ou ter filtro. 
  // Como são logos coloridos, em fundo escuro (teal), é melhor usar um container branco translúcido ou apenas branco.
  // Vamos simplificar: este componente renderiza os logos. O background é controlado pelo className do pai.
  const logosLoop = [...INSURANCE_LOGOS, ...INSURANCE_LOGOS];
  
  return (
    <div className={`w-full overflow-hidden py-6 ${className}`}>
      {title && (
         <div className="text-center mb-6">
            <p className={`text-sm font-semibold uppercase tracking-wider ${variant === 'dark' ? 'text-teal-200' : 'text-slate-500'}`}>
                {title}
            </p>
         </div>
      )}
      <div className="relative w-full flex overflow-hidden mask-linear-fade">
         <div className="animate-marquee flex items-center gap-16 pr-16">
             {logosLoop.map((logo, index) => (
                <div key={index} className="flex-shrink-0 bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                    <img 
                      src={logo} 
                      alt="Convênio" 
                      className={`h-12 md:h-14 w-auto object-contain transition-all duration-300 ${variant === 'dark' ? 'brightness-0 invert opacity-70 hover:opacity-100 hover:brightness-100 hover:invert-0' : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'}`} 
                      loading="lazy"
                      width="120"
                      height="60"
                    />
                </div>
             ))}
         </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { REGIONAL_UNITS } from '../constants';
import { ImageCarousel } from './ImageCarousel';
import { MapPin } from 'lucide-react';

export const PresellLocations: React.FC = () => {
  const [activeRegionIndex, setActiveRegionIndex] = useState(0);

  return (
    <div className="w-full">
      <div className="text-center mb-6 lg:mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Estrutura Completa
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Onde a transformação acontece
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            Selecione a região abaixo para conhecer nossas unidades especializadas.
        </p>
      </div>

      {/* Abas de Navegação por Região */}
      <div className="flex justify-center mb-8">
        <div className="bg-slate-100 p-1 rounded-xl inline-flex shadow-inner">
          {REGIONAL_UNITS.map((regionData, index) => (
            <button
              key={index}
              onClick={() => setActiveRegionIndex(index)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
                activeRegionIndex === index
                  ? 'bg-white text-teal-700 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
              }`}
            >
              {regionData.region}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Unidades da Região Selecionada */}
      <div className="fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {REGIONAL_UNITS[activeRegionIndex].units.map((unit, idx) => (
            <div key={idx} className="bg-white p-3 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="mb-3 px-1 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                <h3 className="font-bold text-slate-800 text-sm md:text-base leading-tight">
                  {unit.name}
                </h3>
              </div>
              
              <ImageCarousel 
                images={unit.images} 
                className="h-[200px] rounded-xl w-full"
              />
              
              <div className="mt-3 px-1 text-center">
                 <p className="text-xs text-slate-400 italic">Ambiente terapêutico e acolhedor</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
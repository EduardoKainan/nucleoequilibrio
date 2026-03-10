import React from 'react';
import { ImageCarousel } from './ImageCarousel';

export const StructureGallery: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16 sm:py-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Nossa Estrutura
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            Ambientes acolhedores, contato com a natureza e espaços planejados para o bem-estar e evolução dos nossos pacientes.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto shadow-2xl rounded-2xl overflow-hidden">
            <ImageCarousel />
        </div>
      </div>
    </div>
  );
};
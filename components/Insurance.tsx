import React from 'react';
import { Button } from './ui/Button';
import { FileCheck } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

export const Insurance: React.FC = () => {
    const handleCheck = () => {
        const message = "Olá, gostaria de verificar a cobertura do meu plano de saúde.";
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    };

  return (
    <div id="convenios" className="bg-teal-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-800/50 rounded-3xl p-8 md:p-12 lg:flex lg:items-center lg:justify-between border border-teal-700 shadow-xl backdrop-blur-sm">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-extrabold tracking-tight mb-4">
              Convênios e Planos de Saúde
            </h2>
            <p className="text-lg text-teal-100 mb-6 lg:mb-0">
              Trabalhamos com os principais planos de saúde do Brasil, facilitando o acesso ao tratamento adequado para você ou seu familiar.
            </p>
          </div>
          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <Button 
                onClick={handleCheck}
                className="w-full sm:w-auto bg-white text-teal-900 hover:bg-teal-50 border-transparent text-lg py-4 px-8 font-bold gap-2"
            >
                <FileCheck className="w-6 h-6" />
                Verificar Cobertura
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
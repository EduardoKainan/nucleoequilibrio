import React from 'react';
import { LOCATIONS, WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '../constants';
import { MapPin } from 'lucide-react';
import { Button } from './ui/Button';

export const Locations: React.FC = () => {
    const handleContact = () => {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
    };

  return (
    <div id="unidades" className="bg-slate-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Presença e apoio em diferentes regiões
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            Atendemos Goiás e Distrito Federal, com estrutura preparada para acolher cada pessoa de forma individual e respeitosa.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12">
          {LOCATIONS.map((loc, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
              <div className="h-48 w-full bg-slate-200 relative">
                 <img 
                   src={loc.image} 
                   alt={`Unidade em ${loc.region}`}
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-teal-800 flex items-center gap-1">
                    <MapPin size={14} />
                    {loc.region}
                 </div>
              </div>
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{loc.city}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {loc.description}
                  </p>
                </div>
                <Button variant="outline" className="w-full" onClick={handleContact}>
                  Solicitar informações desta unidade
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
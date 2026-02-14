import React from 'react';
import { LOCATIONS, WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '../constants';
import { MapPin } from 'lucide-react';
import { Button } from './ui/Button';

export const Locations: React.FC = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div id="unidades" className="bg-slate-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Nossas Unidades
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            Estamos presentes em Goiás e no Distrito Federal, com estruturas preparadas para acolher cada pessoa de forma individual e respeitosa.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {LOCATIONS.map((loc, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="h-56 w-full bg-slate-200 relative group">
                 <img 
                   src={loc.image} 
                   alt={loc.city}
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-teal-800 flex items-center gap-1 shadow-sm">
                    <MapPin size={14} />
                    {loc.region}
                 </div>
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{loc.city}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                    {loc.description}
                  </p>
                </div>
                <Button 
                    href={whatsappUrl} 
                    target="_blank"
                    variant="outline" 
                    className="w-full text-sm py-2"
                >
                  Solicitar fotos e informações
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
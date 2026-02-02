import React, { useState, useEffect } from 'react';
import { PRESELL_IMAGES } from '../constants';

export const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % PRESELL_IMAGES.length);
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg bg-slate-200">
      {PRESELL_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Estrutura da Unidade ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradiente para melhorar leitura de textos se necessário, ou apenas estética */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      ))}
      
      {/* Indicadores (Dots) */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {PRESELL_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ver imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
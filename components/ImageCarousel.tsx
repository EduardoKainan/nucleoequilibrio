import React, { useState, useEffect } from 'react';
import { PRESELL_IMAGES } from '../constants';

interface ImageCarouselProps {
  className?: string;
  images?: string[]; // Propriedade opcional para passar imagens específicas
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ className = "", images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Usa as imagens passadas via prop ou faz fallback para a lista completa
  const displayImages = images && images.length > 0 ? images : PRESELL_IMAGES;

  useEffect(() => {
    // Se houver apenas 1 imagem, não precisa de intervalo
    if (displayImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % displayImages.length);
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, [displayImages.length]);

  if (displayImages.length === 0) {
    return <div className={`bg-slate-200 flex items-center justify-center text-slate-400 ${className}`}>Sem imagens</div>;
  }

  return (
    <div className={`relative w-full overflow-hidden shadow-lg bg-slate-200 ${className || 'h-64 md:h-80 rounded-2xl'}`}>
      {displayImages.map((image, index) => (
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
      
      {/* Indicadores (Dots) - Só mostra se tiver mais de 1 imagem */}
      {displayImages.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {displayImages.map((_, index) => (
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
      )}
    </div>
  );
};
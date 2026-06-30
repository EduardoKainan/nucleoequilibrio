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

  const currentImage = displayImages[currentIndex];
  const responsiveSrcSet = currentImage.includes('.webp')
    ? `${currentImage.replace('.webp', '-640w.webp')} 640w, ${currentImage.replace('.webp', '-960w.webp')} 960w, ${currentImage.replace('.webp', '-1280w.webp')} 1280w`
    : undefined;

  return (
    <div className={`relative w-full overflow-hidden shadow-lg bg-slate-200 ${className || 'h-64 md:h-80 rounded-2xl'}`}>
      <div className="absolute inset-0">
        <img
          key={currentImage}
          src={currentImage}
          srcSet={responsiveSrcSet}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={`Estrutura da Unidade ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      
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

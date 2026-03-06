import React, { useState } from 'react';

interface LiteYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
}

export const LiteYouTube: React.FC<LiteYouTubeProps> = ({ videoId, title, className = '' }) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  // Using hqdefault.jpg as it's standard and usually available. 
  // maxresdefault might not exist for all videos.
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div 
      className={`relative w-full h-full overflow-hidden bg-black cursor-pointer group ${className}`}
      onClick={() => setIsIframeLoaded(true)}
      aria-label={`Play video: ${title}`}
    >
      {!isIframeLoaded ? (
        <>
          <img 
            src={thumbnailUrl} 
            alt={title} 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
            width="480"
            height="360"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center shadow-2xl group-hover:bg-red-700 transition-transform transform group-hover:scale-110">
              <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium drop-shadow-md truncate opacity-0 group-hover:opacity-100 transition-opacity">
            {title}
          </div>
        </>
      ) : (
        <iframe 
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

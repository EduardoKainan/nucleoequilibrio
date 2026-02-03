import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '../constants';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl transition-all hover:scale-105 animate-bounce-slow font-medium no-underline"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden sm:inline">Falar com Especialista</span>
    </a>
  );
};
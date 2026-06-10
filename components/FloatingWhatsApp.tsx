import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl transition-transform duration-300 hover:scale-105 font-medium no-underline"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden sm:inline">Falar com Especialista</span>
    </a>
  );
};

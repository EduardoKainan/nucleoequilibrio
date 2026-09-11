import React, { useEffect, useState } from 'react';
import { MapPin, X } from 'lucide-react';

interface LocationData {
  city?: string;
  region?: string;
  country_code?: string;
}

type BannerState = 'loading' | 'localized' | 'fallback' | 'hidden';

const STORAGE_KEY = 'nucleo-equilibrio-location-banner-dismissed';

export const LocationBanner: React.FC = () => {
  const [state, setState] = useState<BannerState>(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === '1' ? 'hidden' : 'loading';
    } catch {
      return 'loading';
    }
  });
  const [location, setLocation] = useState<LocationData | null>(null);

  useEffect(() => {
    if (state === 'hidden') return;

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 3500);

    fetch('https://ipapi.co/json/', {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    })
      .then((response) => {
        if (!response.ok) throw new Error('location lookup failed');
        return response.json() as Promise<LocationData>;
      })
      .then((data) => {
        const localizedRegions = ['Goiás', 'Distrito Federal', 'Minas Gerais'];
        setLocation(data);
        setState(data.country_code === 'BR' && localizedRegions.includes(data.region || '') ? 'localized' : 'fallback');
      })
      .catch(() => setState('fallback'))
      .finally(() => window.clearTimeout(timeout));

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [state]);

  const dismiss = () => {
    try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch { /* sessão sem storage */ }
    setState('hidden');
  };

  if (state === 'hidden') return null;

  const localized = state === 'localized';
  const city = location?.city ? ` em ${location.city}` : '';
  const message = state === 'loading'
    ? 'Verificando a região de atendimento...'
    : localized
      ? `Temos atendimento${city} e em outras cidades de Goiás, do Distrito Federal e de Minas Gerais.`
      : 'Atendemos Goiás, Distrito Federal e Minas Gerais. Consulte a equipe sobre a melhor opção para sua região.';

  return (
    <div className="relative z-[60] bg-teal-950 text-white border-b border-teal-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-10 py-2 flex items-center justify-center gap-2 text-center text-xs sm:text-sm">
        <MapPin size={16} className="text-teal-300 shrink-0" aria-hidden="true" />
        <span>{message}</span>
        <button type="button" onClick={dismiss} className="ml-1 p-1 text-teal-200 hover:text-white" aria-label="Fechar aviso de localização">
          <X size={15} />
        </button>
      </div>
    </div>
  );
};

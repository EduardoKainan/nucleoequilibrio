import React, { lazy, Suspense, useEffect } from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { Hero } from './components/Hero';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Blog } from './components/Blog';
import { LocationBanner } from './components/LocationBanner';
import { WHATSAPP_URL } from './constants';

const Stats = lazy(() => import('./components/Stats').then((module) => ({ default: module.Stats })));
const Features = lazy(() => import('./components/Features').then((module) => ({ default: module.Features })));
const Testimonials = lazy(() => import('./components/Testimonials').then((module) => ({ default: module.Testimonials })));
const StructureGallery = lazy(() => import('./components/StructureGallery').then((module) => ({ default: module.StructureGallery })));
const Insurance = lazy(() => import('./components/Insurance').then((module) => ({ default: module.Insurance })));
const Locations = lazy(() => import('./components/Locations').then((module) => ({ default: module.Locations })));
const Footer = lazy(() => import('./components/Footer').then((module) => ({ default: module.Footer })));

const LoadingSection = () => (
  <div className="h-24 flex items-center justify-center" aria-hidden="true">
    <div className="w-7 h-7 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    window.location.pathname.startsWith('/blog') ? <Blog /> : (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-800">
      <LocationBanner />

      <header className="absolute top-10 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-bold text-2xl text-white drop-shadow-md tracking-tight" aria-label="Núcleo Equilíbrio - início">
            <img src="/assets/images/logo-nucleo-equilibrio.webp" alt="" className="w-10 h-10 object-contain" />
            <span>Núcleo<span className="text-teal-300">Equilíbrio</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-7" aria-label="Navegação principal">
            <a href="#como-podemos-ajudar" className="text-slate-200 hover:text-white font-medium transition-colors">Como podemos ajudar</a>
            <a href="#unidades" className="text-slate-200 hover:text-white font-medium transition-colors">Unidades</a>
            <a href="#convenios" className="text-slate-200 hover:text-white font-medium transition-colors">Convênios</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-medium text-sm shadow-lg inline-flex items-center gap-2">
              <MessageCircle size={17} /> Falar no WhatsApp
            </a>
          </nav>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-teal-600 text-white text-sm font-semibold shadow-lg">
            <MessageCircle size={17} /> WhatsApp
          </a>
        </div>
      </header>

      <main className="flex-grow">
        <Hero />

        <section className="bg-white border-b border-slate-100" aria-label="Resumo do atendimento">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3"><ShieldCheck className="text-teal-600" size={22} /><span className="text-sm font-semibold text-slate-700">Atendimento reservado</span></div>
            <div className="flex items-center justify-center sm:justify-start gap-3"><ShieldCheck className="text-teal-600" size={22} /><span className="text-sm font-semibold text-slate-700">Orientação individualizada</span></div>
            <div className="flex items-center justify-center sm:justify-start gap-3"><ShieldCheck className="text-teal-600" size={22} /><span className="text-sm font-semibold text-slate-700">Equipe preparada</span></div>
          </div>
        </section>

        <Suspense fallback={<LoadingSection />}>
          <Testimonials />
          <Locations />
          <Stats />
          <div id="como-podemos-ajudar"><Features /></div>
          <StructureGallery />
          <Insurance />
        </Suspense>
      </main>

      <Suspense fallback={null}><Footer /></Suspense>
      <FloatingWhatsApp />
    </div>
    )
  );
};

export default App;

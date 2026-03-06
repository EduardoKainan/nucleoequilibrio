import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Quiz } from './components/Quiz';
import { Testimonials } from './components/Testimonials';
import { PresellLocations } from './components/PresellLocations';
import { InsuranceLogos } from './components/InsuranceLogos';
import { LiteYouTube } from './components/LiteYouTube';

// Lazy load components not needed for the initial "Presell" view
const Hero = lazy(() => import('./components/Hero').then(module => ({ default: module.Hero })));
const Stats = lazy(() => import('./components/Stats').then(module => ({ default: module.Stats })));
const Features = lazy(() => import('./components/Features').then(module => ({ default: module.Features })));
const Locations = lazy(() => import('./components/Locations').then(module => ({ default: module.Locations })));
const Insurance = lazy(() => import('./components/Insurance').then(module => ({ default: module.Insurance })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));
const FloatingWhatsApp = lazy(() => import('./components/FloatingWhatsApp').then(module => ({ default: module.FloatingWhatsApp })));
const StructureGallery = lazy(() => import('./components/StructureGallery').then(module => ({ default: module.StructureGallery })));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  // Estado para controlar se o quiz (presell) foi concluído
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleQuizCompletion = () => {
    window.scrollTo(0, 0);
    setIsQuizCompleted(true);
  };

  // --- TELA 1: PRESELL (QUIZ) ---
  if (!isQuizCompleted) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        {/* Header Simples Presell - Padding reduzido no mobile */}
        <header className="w-full py-4 lg:py-6 text-center bg-white border-b border-slate-100">
           <div className="font-bold text-2xl text-slate-800 tracking-tight">
              Núcleo<span className="text-teal-600">Equilíbrio</span>
           </div>
        </header>

        <main className="flex-grow flex flex-col py-6 lg:py-8 px-4 bg-gradient-to-b from-white to-slate-100">
          <div className="max-w-6xl mx-auto w-full">
            
            {/* Grid principal - gap reduzido no mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start mb-12 lg:mb-16">
              
              {/* Coluna da Esquerda (Desktop) / Cima (Mobile): Contexto Visual + Headline */}
              <div className="fade-in flex flex-col gap-4 lg:gap-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-2">
                    Cada Dia Sem Tratamento É Um Risco.
                  </h1>
                  <p className="text-lg text-slate-600">
                    Tome uma decisão hoje e ofereça apoio seguro, humano e imediato. Sua ação pode salvar uma vida.
                  </p>
                </div>
                
                {/* Vídeo do YouTube Otimizado */}
                <div className="relative w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl bg-black border border-slate-200">
                  <LiteYouTube 
                    videoId="0k3Whno19Z4"
                    title="Apresentação da Unidade"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Coluna da Direita (Desktop) / Baixo (Mobile): Quiz (Ação) */}
              <div className="flex flex-col items-center lg:items-end fade-in lg:sticky lg:top-8">
                 <div className="w-full max-w-lg">
                    {/* Seção de texto removida conforme solicitado */}
                    
                    <Quiz onComplete={handleQuizCompletion} className="shadow-2xl border border-teal-100/50" />
                    
                    <p className="mt-4 lg:mt-6 text-xs text-slate-400 text-center max-w-md mx-auto">
                      Este é um espaço seguro. Ao continuar, você terá acesso às nossas soluções especializadas.
                    </p>
                 </div>
              </div>
            </div>

            {/* Seção de Depoimentos na Presell (Antes das fotos) */}
            <div className="fade-in border-t border-slate-200 pt-10 lg:pt-12">
               <Testimonials />
            </div>

            {/* Seção Separada para Imagens das Unidades - AGORA USANDO PresellLocations */}
            <div className="fade-in pt-10 lg:pt-12 mb-8 border-t border-slate-200">
                <PresellLocations />
            </div>
            
            {/* Seção de Convênios na Presell */}
            <div className="fade-in pt-8 border-t border-slate-200">
               <InsuranceLogos title="Atendemos os principais planos" />
            </div>

          </div>
        </main>
      </div>
    );
  }

  // --- TELA 2: LANDING PAGE COMPLETA ---
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="min-h-screen flex flex-col font-sans fade-in">
        {/* Navbar Landing Page */}
        <header className="absolute top-0 w-full z-50 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="font-bold text-2xl text-slate-100 drop-shadow-md tracking-tight">
              Núcleo<span className="text-teal-400">Equilíbrio</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#tratamentos" className="text-slate-200 hover:text-white font-medium transition-colors shadow-sm">Tratamentos</a>
              <a href="#convenios" className="text-slate-200 hover:text-white font-medium transition-colors shadow-sm">Convênios</a>
              <a href="#unidades" className="text-slate-200 hover:text-white font-medium transition-colors shadow-sm">Unidades</a>
              <a 
                href={`https://wa.me/5562996019164`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-medium text-sm shadow-lg inline-block"
              >
                Falar com Especialista
              </a>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          <Hero />
          <Stats />
          <Features />
          {/* Depoimentos inseridos antes da galeria de estrutura */}
          <Testimonials />
          <StructureGallery />
          <Insurance />
          <Locations />
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </Suspense>
  );
};

export default App;
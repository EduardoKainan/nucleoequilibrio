import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { Quiz } from './components/Quiz';
import { Locations } from './components/Locations';
import { Insurance } from './components/Insurance';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ImageCarousel } from './components/ImageCarousel';
import { StructureGallery } from './components/StructureGallery';

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
        {/* Header Simples Presell */}
        <header className="w-full py-6 text-center bg-white border-b border-slate-100">
           <div className="font-bold text-2xl text-slate-800 tracking-tight">
              Núcleo<span className="text-teal-600">Equilíbrio</span>
           </div>
        </header>

        <main className="flex-grow flex flex-col justify-center py-8 px-4 bg-gradient-to-b from-white to-slate-100">
          <div className="max-w-6xl mx-auto w-full">
            
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              
              {/* Coluna da Esquerda: Contexto Visual + Headline */}
              {/* Removido 'order-2 lg:order-1' para manter ordem natural (primeiro no mobile/desktop) */}
              <div className="fade-in flex flex-col gap-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-2">
                    Estamos Presentes em Goiás e no Distrito Federal
                  </h1>
                  <p className="text-lg text-slate-600">
                    Unidades preparadas para oferecer atendimento seguro e humanizado.
                  </p>
                </div>
                
                <ImageCarousel />

                <div className="hidden lg:block text-slate-500 text-sm mt-2">
                  <p>Ambientes arborizados, refeitórios completos e espaços de convivência para recuperação plena.</p>
                </div>
              </div>

              {/* Coluna da Direita: Quiz (Ação) */}
              {/* Removido 'order-1 lg:order-2' */}
              <div className="flex flex-col items-center lg:items-end fade-in">
                 <div className="w-full max-w-lg">
                    <div className="text-center lg:text-left mb-6">
                      <h2 className="text-xl font-bold text-slate-800">
                        Entenda o seu momento atual
                      </h2>
                      <p className="text-slate-500 text-sm">
                        Responda a uma pergunta rápida para direcionarmos o melhor atendimento.
                      </p>
                    </div>
                    
                    <Quiz onComplete={handleQuizCompletion} className="shadow-2xl border border-teal-100/50" />
                    
                    <p className="mt-6 text-xs text-slate-400 text-center max-w-md mx-auto">
                      Este é um espaço seguro de autoavaliação. Ao continuar, você terá acesso às nossas soluções especializadas.
                    </p>
                 </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    );
  }

  // --- TELA 2: LANDING PAGE COMPLETA ---
  return (
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
            <button 
              onClick={() => window.open(`https://wa.me/5562996019164`, '_blank')}
              className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-medium text-sm shadow-lg"
            >
              Falar com Especialista
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Hero />
        <Stats />
        <Features />
        <StructureGallery />
        <Insurance />
        <Locations />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
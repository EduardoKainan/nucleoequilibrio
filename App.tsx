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
import { InsuranceLogos } from './components/InsuranceLogos';
import { Testimonials } from './components/Testimonials';

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
              
              {/* Coluna da Esquerda (Desktop) / Baixo (Mobile): Contexto Visual + Headline */}
              {/* No mobile: Order 2 (Aparece DEPOIS do Quiz) */}
              <div className="fade-in flex flex-col gap-4 lg:gap-6 order-2 lg:order-1">
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-2">
                    Cada Dia Sem Tratamento É Um Risco.
                  </h1>
                  <p className="text-lg text-slate-600">
                    Tome uma decisão hoje e ofereça apoio seguro, humano e imediato. Sua ação pode salvar uma vida.
                  </p>
                </div>
                
                {/* Vídeo do YouTube Incorporado */}
                <div className="relative w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl bg-black border border-slate-200">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/0k3Whno19Z4?si=X8_JNJxKd0SZ06QO" 
                    title="Apresentação da Unidade" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    style={{ objectFit: 'cover' }}
                  ></iframe>
                </div>
              </div>

              {/* Coluna da Direita (Desktop) / Cima (Mobile): Quiz (Ação) */}
              {/* No mobile: Order 1 (Aparece PRIMEIRO) */}
              <div className="flex flex-col items-center lg:items-end fade-in lg:sticky lg:top-8 order-1 lg:order-2">
                 <div className="w-full max-w-lg">
                    <div className="text-center lg:text-left mb-4 lg:mb-6">
                      <h2 className="text-xl font-bold text-slate-800">
                        Entenda o seu momento atual
                      </h2>
                      <p className="text-slate-500 text-sm">
                        Selecione uma opção abaixo para iniciarmos o atendimento.
                      </p>
                    </div>
                    
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

            {/* Seção Separada para Imagens das Unidades */}
            <div className="fade-in pt-10 lg:pt-12 mb-8">
                <div className="text-center mb-6 lg:mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-3">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                        </span>
                        Estrutura Completa
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                        Conheça onde a recuperação acontece
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Nossas unidades foram projetadas para oferecer paz, segurança e conforto. Ambientes arborizados, áreas de lazer e espaços terapêuticos.
                    </p>
                </div>
                
                <div className="w-full bg-white p-2 md:p-4 rounded-3xl shadow-lg border border-slate-100">
                    <ImageCarousel className="h-[300px] md:h-[500px] rounded-2xl w-full" />
                </div>
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
  );
};

export default App;
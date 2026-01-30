import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { Quiz } from './components/Quiz';
import { Locations } from './components/Locations';
import { Insurance } from './components/Insurance';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

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

        <main className="flex-grow flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-slate-100">
          <div className="max-w-2xl w-full text-center mb-8 fade-in">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Entenda o seu momento atual
            </h1>
            <p className="text-lg text-slate-600">
              Responda a 3 perguntas rápidas para recebermos você com a orientação mais adequada.
            </p>
          </div>
          
          <Quiz onComplete={handleQuizCompletion} className="shadow-2xl border border-slate-200" />
          
          <p className="mt-8 text-sm text-slate-400 text-center max-w-md">
            Este é um espaço seguro de autoavaliação. Ao continuar, você terá acesso às nossas soluções especializadas.
          </p>
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
        <Insurance />
        <Locations />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { Quiz } from './components/Quiz';
import { Locations } from './components/Locations';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const App: React.FC = () => {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar simplificada */}
      <header className="absolute top-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="font-bold text-2xl text-slate-800 tracking-tight">
            Núcleo<span className="text-teal-600">Equilíbrio</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#sobre" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">Sobre</a>
            <a href="#unidades" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">Unidades</a>
            <a href="#quiz" className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-medium text-sm">
              Avaliação Inicial
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Hero />
        <Stats />
        <Features />
        
        {/* Presell Quiz Section with Headline */}
        <section className="bg-gradient-to-br from-teal-50 to-slate-100 py-12">
           <div className="max-w-4xl mx-auto text-center px-4 mb-8">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Descubra qual apoio faz sentido para você
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Responda a 5 perguntas rápidas e receba uma orientação personalizada.
              </p>
           </div>
           <Quiz />
        </section>
        
        <Locations />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
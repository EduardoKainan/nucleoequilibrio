import React, { useState } from 'react';
import {
  QUIZ_QUESTIONS,
  WHATSAPP_URL,
  PHONE_NUMBER
} from '../constants';
import { Loader2, CheckCircle2, MessageCircle, Globe, Phone, FileQuestion, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

interface QuizProps {
  onComplete?: () => void;
  className?: string;
}

type QuizMode = 'menu' | 'questions' | 'analyzing' | 'result';

export const Quiz: React.FC<QuizProps> = ({ onComplete, className = "" }) => {
  const [mode, setMode] = useState<QuizMode>('menu');
  const [currentStep, setCurrentStep] = useState(0);
  
  // Respostas (mantidas caso o usuário opte pelo fluxo de perguntas)
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const phoneUrl = `tel:${PHONE_NUMBER}`;

  const handleStartQuiz = () => {
    setMode('questions');
  };

  const handleOptionClick = (option: string) => {
    setAnswers(prev => ({ ...prev, [currentStep]: option }));
    
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 300);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setMode('analyzing');
    // Log para verificação
    console.log("Respostas do Funil:", answers);
    
    setTimeout(() => {
      setMode('result');
    }, 2000);
  };

  const handleSiteClick = () => {
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div className={`w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden min-h-[450px] flex flex-col ${className}`}>
        
      {/* Header com Barra de Progresso (Apenas no modo perguntas) */}
      <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-b border-slate-100 h-16">
        <span className="text-slate-500 font-medium text-xs uppercase tracking-wider flex items-center gap-2">
            {mode === 'menu' ? 'Central de Atendimento' : 'Avaliação de Perfil'}
        </span>
        
        {mode === 'questions' && (
          <div className="flex gap-1">
            {QUIZ_QUESTIONS.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 w-6 rounded-full transition-colors ${idx <= currentStep ? 'bg-teal-500' : 'bg-slate-200'}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Área de Conteúdo */}
      <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
        
        {/* MODO 1: MENU INICIAL (BOTÕES RÁPIDOS) */}
        {mode === 'menu' && (
            <div className="fade-in flex flex-col gap-5">
                <div className="text-center mb-2">
                    <h2 className="text-2xl font-bold text-slate-800">Como prefere ser atendido?</h2>
                    <p className="text-slate-500 text-sm mt-1">Escolha a opção mais confortável para o seu momento.</p>
                </div>

                <div className="grid gap-4">
                    <Button 
                        href={phoneUrl}
                        className="w-full py-4 text-lg bg-rose-600 hover:bg-rose-700 shadow-md flex items-center justify-center gap-3"
                    >
                        <Phone className="w-6 h-6 animate-pulse" />
                        <span className="font-bold">LIGAR URGENTE 24H</span>
                    </Button>

                    <Button
                        href={WHATSAPP_URL}
                        target="_blank"
                        className="w-full py-4 text-lg bg-green-700 hover:bg-green-800 shadow-md flex items-center justify-center gap-3"
                    >
                        <MessageCircle className="w-6 h-6" />
                        <span>Falar agora no WhatsApp</span>
                    </Button>

                    <Button 
                        onClick={handleSiteClick}
                        variant="outline"
                        className="w-full py-4 text-lg border-slate-300 text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-3"
                    >
                        <Globe className="w-6 h-6 text-slate-500" />
                        <span>Ver Site Completo</span>
                    </Button>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                    <button 
                        onClick={handleStartQuiz}
                        className="text-sm text-slate-400 hover:text-teal-600 flex items-center justify-center gap-2 mx-auto transition-colors"
                    >
                        <FileQuestion size={14} />
                        Não tenho certeza, quero fazer uma avaliação breve
                        <ArrowRight size={14} />
                    </button>
                </div>
            </div>
        )}

        {/* MODO 2: PERGUNTAS (QUIZ) */}
        {mode === 'questions' && (
          <div className="fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 leading-snug">
              {QUIZ_QUESTIONS[currentStep].question}
            </h2>
            
            <div className="grid gap-3">
              {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(option)}
                  className="w-full text-left p-4 rounded-xl border-2 border-slate-100 hover:border-teal-500 hover:bg-teal-50 transition-all duration-200 group flex items-center justify-between"
                >
                  <span className="text-lg text-slate-700 font-medium group-hover:text-teal-900">
                    {option}
                  </span>
                  <div className="h-6 w-6 rounded-full border-2 border-slate-200 group-hover:border-teal-500 flex items-center justify-center">
                     <div className="h-2.5 w-2.5 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
            
            <button 
                onClick={() => setMode('menu')}
                className="mt-6 text-slate-400 hover:text-slate-600 text-sm underline"
            >
                Voltar para opções
            </button>
          </div>
        )}

        {/* MODO 3: ANALISANDO */}
        {mode === 'analyzing' && (
          <div className="text-center fade-in">
            <Loader2 className="h-12 w-12 text-teal-600 animate-spin mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Analisando suas respostas...</h3>
            <p className="text-slate-500">Buscando a melhor opção de atendimento para você.</p>
          </div>
        )}

        {/* MODO 4: RESULTADO */}
        {mode === 'result' && (
          <div className="text-center fade-in space-y-6">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-2">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Perfil Analisado</h3>
              <p className="text-slate-600 max-w-md mx-auto">
                Identificamos que podemos ajudar. Como você prefere receber orientação agora?
              </p>
            </div>

            <div className="flex flex-col gap-4 max-w-sm mx-auto pt-4">
              <Button 
                href={WHATSAPP_URL}
                target="_blank"
                className="w-full gap-2 py-4 text-lg shadow-lg animate-pulse"
              >
                <MessageCircle size={24} />
                Atendimento imediato no WhatsApp
              </Button>
              
              <Button
                variant="outline" 
                onClick={handleSiteClick} 
                className="w-full gap-2 border-slate-300 text-slate-600 hover:text-teal-700 hover:border-teal-500"
              >
                <Globe size={20} />
                Ver Site e Estrutura
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Footer Seguro */}
      {mode !== 'analyzing' && mode !== 'result' && (
         <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex justify-center items-center text-xs text-slate-400 gap-2">
           <ShieldIcon className="w-3 h-3" />
           <span>Atendimento sigiloso e humanizado.</span>
         </div>
      )}
    </div>
  );
};

// Ícone auxiliar interno
const ShieldIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

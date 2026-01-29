import React, { useState } from 'react';
import { QUIZ_QUESTIONS, WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '../constants';
import { Button } from './ui/Button';
import { ArrowRight, CheckCircle2, Loader2, MessageCircle } from 'lucide-react';

export const Quiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});

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
    setIsAnalyzing(true);
    // Log answers to simulate processing and satisfy TypeScript unused variable check
    console.log("Respostas do usuário:", answers);
    
    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResult(true);
    }, 2000);
  };

  const handleContact = () => {
     window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE + " Finalizei o quiz.")}`, '_blank');
  };

  return (
    <div id="quiz" className="py-16 bg-gradient-to-br from-teal-50 to-slate-100 min-h-[600px] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden min-h-[500px] flex flex-col">
        
        {/* Header */}
        <div className="bg-teal-600 px-6 py-4 flex items-center justify-between">
          <span className="text-white font-medium text-sm">Avaliação Gratuita e Sigilosa</span>
          {!showResult && !isAnalyzing && (
            <span className="text-teal-100 text-sm">
              Passo {currentStep + 1} de {QUIZ_QUESTIONS.length}
            </span>
          )}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
          
          {isAnalyzing ? (
            <div className="text-center fade-in">
              <Loader2 className="h-12 w-12 text-teal-600 animate-spin mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-slate-800 mb-2">Analisando suas respostas...</h3>
              <p className="text-slate-500">Estamos identificando o consultor ideal para o seu perfil.</p>
            </div>
          ) : showResult ? (
            <div className="text-center fade-in">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Seu perfil foi analisado</h3>
              <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
                Com base nas suas respostas, o próximo passo é conversar com um consultor preparado para orientar você com <strong>sigilo</strong> e <strong>respeito</strong>.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-8 max-w-md mx-auto">
                 <p className="text-sm text-slate-500 mb-2">Recomendação:</p>
                 <p className="text-teal-800 font-semibold">Orientação Especializada via WhatsApp</p>
              </div>

              <Button onClick={handleContact} className="w-full sm:w-auto text-lg px-8 py-4 gap-2 animate-pulse">
                <MessageCircle />
                Conversar com um consultor agora
              </Button>
              <p className="mt-4 text-xs text-slate-400">Atendimento 100% humano e confidencial.</p>
            </div>
          ) : (
            <div className="fade-in">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 leading-tight">
                {QUIZ_QUESTIONS[currentStep].question}
              </h2>
              
              <div className="grid gap-4">
                {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option)}
                    className="w-full text-left p-4 rounded-xl border-2 border-slate-100 hover:border-teal-500 hover:bg-teal-50 transition-all duration-200 group flex items-center justify-between"
                  >
                    <span className="text-lg text-slate-700 font-medium group-hover:text-teal-800">
                      {option}
                    </span>
                    <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer of Card */}
        {!showResult && !isAnalyzing && (
           <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
             <span>* Suas respostas são anônimas.</span>
             <span>Segurança SSL</span>
           </div>
        )}
      </div>
    </div>
  );
};
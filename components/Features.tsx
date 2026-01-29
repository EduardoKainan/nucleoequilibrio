import React from 'react';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  return (
    <div id="sobre" className="py-16 bg-white overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Atendimento Humano e Especializado
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-slate-500">
            Nossa equipe multidisciplinar trabalha com ética, respeito e técnicas modernas para proporcionar um ambiente seguro de reequilíbrio.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-3 lg:gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="mt-10 lg:mt-0 p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white mx-auto lg:mx-0">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg leading-6 font-medium text-slate-900 text-center lg:text-left">{feature.title}</h3>
                <p className="mt-2 text-base text-slate-500 text-center lg:text-left">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { STATS } from '../constants';

export const Stats: React.FC = () => {
  return (
    <div className="bg-teal-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Uma trajetória de apoio e confiança
          </h2>
          <p className="mt-3 text-xl text-teal-100 sm:mt-4">
            Nossos números refletem nosso compromisso com a vida e com o bem-estar de cada família.
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-2 md:grid-cols-4 sm:gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="flex flex-col p-6 text-center border-b border-teal-600 sm:border-0 sm:border-r last:border-r-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-teal-100">
                {stat.label}
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
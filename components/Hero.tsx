import React from 'react';
import { HERO_CONTENT, WHATSAPP_URL, PHONE_NUMBER } from '../constants';
import { Button } from './ui/Button';
import { MessageCircle, Phone } from 'lucide-react';

export const Hero: React.FC = () => {
  const phoneUrl = `tel:${PHONE_NUMBER}`;

  return (
    <section id="hero" className="home-hero-pattern">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-[1.08fr_0.92fr] md:px-8 md:py-12 lg:min-h-[35rem]">
        <div className="max-w-3xl">
          <p className="blog-kicker">Acolhimento e orientação familiar</p>
          <h1 className="blog-display mt-5 max-w-3xl text-5xl leading-[1.02] text-emerald-950 sm:text-6xl lg:text-[3.4rem] xl:text-6xl">
            {HERO_CONTENT.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            {HERO_CONTENT.subheadline}
          </p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button
              href={WHATSAPP_URL}
              target="_blank"
              className="home-hero-primary min-h-12 w-full gap-2 px-6 py-2.5 text-base font-bold sm:w-auto"
            >
              <MessageCircle size={20} aria-hidden="true" />
              {HERO_CONTENT.cta}
            </Button>
            <Button
              href={phoneUrl}
              variant="outline"
              className="home-hero-secondary min-h-12 w-full gap-2 px-6 py-2.5 text-base font-semibold sm:w-auto"
            >
              <Phone size={19} aria-hidden="true" />
              {HERO_CONTENT.ctaPhone}
            </Button>
          </div>
        </div>

        <div className="home-hero-art-wrap">
          <div className="blog-hero-art-label">
            <span>NÚCLEO EQUILÍBRIO</span>
            <span>INFORMAÇÃO • ESCUTA • CUIDADO</span>
          </div>
          <figure className="home-hero-photo-frame">
            <img
              className="home-hero-photo"
              src="/assets/images/hero-bg.webp"
              srcSet="/assets/images/hero-bg-640w.webp 640w, /assets/images/hero-bg-960w.webp 960w, /assets/images/hero-bg-1280w.webp 1280w"
              sizes="(max-width: 768px) 100vw, 48vw"
              alt="Apoio e acolhimento"
              loading="eager"
              decoding="async"
            />
            <figcaption>Uma conversa pode ajudar a organizar os próximos passos.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

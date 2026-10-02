import React, { useEffect, useMemo } from 'react';
import posts from '../content/blog/posts.json';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MessageCircle,
} from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

type BlogPost = (typeof posts)[number];
type IllustrationVariant = 'conversation' | 'steps' | 'compass';

const setMeta = (name: string, content: string) => {
  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
};

const setProperty = (property: string, content: string) => {
  let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.content = content;
};

const setCanonical = (href: string) => {
  let tag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!tag) {
    tag = document.createElement('link');
    tag.rel = 'canonical';
    document.head.appendChild(tag);
  }
  tag.href = href;
};

const formatDate = (value: string) => {
  const date = new Date(`${value}T12:00:00`);
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
};

const BlogHeader: React.FC = () => (
  <header className="blog-header sticky top-0 z-30 border-b border-emerald-950/10">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
      <a href="/" className="flex items-center gap-3 font-bold tracking-tight text-slate-950" aria-label="Voltar para o início">
        <img src="/assets/images/logo-nucleo-equilibrio.webp" alt="" className="h-10 w-10 object-contain" />
        <span className="text-[15px] sm:text-base">Núcleo <span className="text-teal-700">Equilíbrio</span></span>
      </a>
      <nav className="flex items-center gap-3 sm:gap-6" aria-label="Navegação do blog">
        <a href="/blog" className="hidden text-sm font-semibold text-slate-600 transition-colors hover:text-teal-800 sm:inline">Conteúdos</a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800">
          <MessageCircle size={16} aria-hidden="true" />
          <span className="hidden sm:inline">Falar com a equipe</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </nav>
    </div>
  </header>
);

const BlogIllustration: React.FC<{ variant: IllustrationVariant; label: string; caption: string }> = ({ variant, label, caption }) => (
  <figure className={`blog-illustration blog-illustration--${variant}`}>
    <svg viewBox="0 0 720 330" role="img" aria-label={label} className="block h-auto w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="330" rx="28" fill="#edf3ec" />
      <circle cx="620" cy="61" r="74" fill="#dcebe1" />
      <circle cx="80" cy="292" r="86" fill="#f5e8d8" />
      {variant === 'conversation' && (
        <>
          <rect x="126" y="70" width="274" height="164" rx="24" fill="#fffdf7" stroke="#d4e1d7" strokeWidth="3" />
          <path d="M188 234l-27 31 8-39" fill="#fffdf7" stroke="#d4e1d7" strokeWidth="3" strokeLinejoin="round" />
          <rect x="320" y="119" width="268" height="142" rx="24" fill="#d6e9dc" />
          <path d="M527 260l30 29-8-39" fill="#d6e9dc" />
          <circle cx="188" cy="119" r="17" fill="#d68d59" />
          <path d="M224 112h128M224 135h94M351 160H193" stroke="#8ba99a" strokeWidth="9" strokeLinecap="round" />
          <circle cx="377" cy="162" r="17" fill="#367b68" />
          <path d="M413 154h128M413 178h96M355 207h186" stroke="#78a18b" strokeWidth="9" strokeLinecap="round" />
          <path d="M561 84c-6-30 7-46 25-54m-12 35c-19-6-28-20-29-39m28 35c15-8 22-21 22-37" fill="none" stroke="#618a70" strokeWidth="5" strokeLinecap="round" />
        </>
      )}
      {variant === 'steps' && (
        <>
          <rect x="164" y="60" width="382" height="214" rx="24" fill="#fffdf7" stroke="#d4e1d7" strokeWidth="3" />
          <path d="M205 99h220M205 111h157" stroke="#285e4f" strokeWidth="7" strokeLinecap="round" />
          <path d="M218 145h263M218 195h263M218 245h213" stroke="#dbe5db" strokeWidth="3" />
          <circle cx="214" cy="145" r="13" fill="#4e8d74" />
          <path d="m208 145 4 4 8-9" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="214" cy="195" r="13" fill="#e4b17e" />
          <circle cx="214" cy="245" r="13" fill="#dce8dc" />
          <path d="M555 229c24-39 51-47 82-43m-52 39c7-31 4-54-14-73m21 54c23-10 38-24 47-43" fill="none" stroke="#618a70" strokeWidth="6" strokeLinecap="round" />
          <ellipse cx="603" cy="188" rx="12" ry="24" transform="rotate(34 603 188)" fill="#93b39a" />
          <ellipse cx="571" cy="181" rx="11" ry="20" transform="rotate(-28 571 181)" fill="#b1c8ad" />
        </>
      )}
      {variant === 'compass' && (
        <>
          <circle cx="354" cy="164" r="108" fill="#fffdf7" stroke="#d4e1d7" strokeWidth="3" />
          <circle cx="354" cy="164" r="77" fill="#edf3ec" stroke="#bfd2c3" strokeWidth="3" />
          <path d="m354 105 23 58-23 60-23-60 23-58Z" fill="#d68d59" />
          <circle cx="354" cy="164" r="11" fill="#285e4f" />
          <path d="M354 55v25M354 248v25M245 164h25M438 164h25" stroke="#71947d" strokeWidth="5" strokeLinecap="round" />
          <path d="M151 266c20-46 47-66 81-65m-40 41c0-35-12-60-38-77m42 58c22-6 39-18 53-36" fill="none" stroke="#618a70" strokeWidth="6" strokeLinecap="round" />
          <ellipse cx="204" cy="206" rx="12" ry="23" transform="rotate(48 204 206)" fill="#93b39a" />
          <ellipse cx="173" cy="190" rx="12" ry="22" transform="rotate(-35 173 190)" fill="#b1c8ad" />
          <path d="M513 94h95M513 119h61M513 219h78M513 244h55" stroke="#8ba99a" strokeWidth="8" strokeLinecap="round" />
          <circle cx="590" cy="145" r="14" fill="#e4b17e" />
        </>
      )}
    </svg>
    <figcaption>{caption}</figcaption>
  </figure>
);

const getIllustrationVariant = (slug: string, position: number): IllustrationVariant => {
  if (slug.includes('conversar')) return position === 0 ? 'conversation' : 'steps';
  if (slug.includes('limites')) return position === 0 ? 'compass' : 'steps';
  if (slug.includes('clinica') || slug.includes('promessas')) return position === 0 ? 'compass' : 'conversation';
  if (slug.includes('continuidade')) return position === 0 ? 'steps' : 'compass';
  return position === 0 ? 'conversation' : 'compass';
};

const getIllustrationCaptions = (slug: string): [string, string] => {
  if (slug.includes('conversar')) return ['Uma conversa pode começar pela escuta.', 'Combine um próximo passo possível.'];
  if (slug.includes('limites')) return ['Clareza ajuda a proteger a convivência.', 'Limites também podem ser cuidados.'];
  if (slug.includes('clinica')) return ['Perguntas claras ajudam a comparar informações.', 'Peça que as condições sejam explicadas por escrito.'];
  if (slug.includes('promessas')) return ['Informação verificável antes de qualquer decisão.', 'Evite decidir sob pressão comercial.'];
  if (slug.includes('continuidade')) return ['A continuidade se constrói com combinados possíveis.', 'Cada trajetória precisa ser respeitada.'];
  if (slug.includes('avaliacao')) return ['Buscar informação não obriga a decidir tudo.', 'Cada situação precisa de avaliação individual.'];
  return ['Organize suas dúvidas com calma.', 'Informação clara apoia decisões conscientes.'];
};

const sectionTitles: Record<string, Record<number, string>> = {
  'como-a-familia-pode-buscar-orientacao-sobre-tratamento': {
    1: 'Organize as informações antes da conversa',
    2: 'Perguntas que ajudam a entender as opções',
    3: 'Orientação para um próximo passo responsável',
  },
  'quando-buscar-avaliacao-profissional-tratamento': {
    1: 'Sinais que merecem atenção',
    2: 'Prepare as informações para a conversa',
    3: 'O que perguntar na primeira conversa',
    5: 'Quando a internação é considerada',
    7: 'Como abordar o assunto com respeito',
    9: 'Um próximo passo possível',
  },
  'como-conversar-sobre-busca-de-ajuda': {
    1: 'Prepare o que você quer comunicar',
    3: 'Escutar também faz parte do cuidado',
    5: 'Combine um próximo passo possível',
    7: 'Perguntas para fazer antes de contratar',
    9: 'Converse sem culpa ou pressão',
  },
  'como-estabelecer-limites-e-ajudar-a-familia': {
    1: 'O que é um limite claro',
    3: 'Escolha limites que possam ser cumpridos',
    5: 'Ofereça ajuda sem assumir tudo',
    7: 'O que perguntar sobre um serviço',
    9: 'Cuide também de quem está apoiando',
  },
  'como-escolher-clinica-particular-com-seguranca': {
    1: 'Organize as informações antes de procurar',
    3: 'Entenda quem avalia e como a equipe atua',
    5: 'Pergunte sobre admissão, permanência e alta',
    7: 'Compare custos e condições por escrito',
    8: 'A participação da família importa',
    9: 'Entenda o papel da orientação',
  },
  'como-apoiar-a-continuidade-do-cuidado-em-familia': {
    1: 'Peça clareza sobre o plano de cuidado',
    3: 'Organize a rotina sem transformar em controle',
    5: 'Confiança se constrói com combinados claros',
    6: 'Prepare respostas para momentos difíceis',
    7: 'A continuidade também envolve a rede de apoio',
    8: 'Planeje as próximas etapas do cuidado',
    10: 'Escolha um próximo passo pequeno',
  },
  'como-identificar-promessas-de-tratamento-com-seguranca': {
    1: 'Reconheça promessas que merecem cautela',
    3: 'Verifique quem responde pelo atendimento',
    5: 'Depoimentos não garantem o mesmo resultado',
    7: 'Use perguntas para comparar opções',
    9: 'Informação clara antes de contratar',
    10: 'Faça uma pausa antes de decidir',
  },
};

const BlogIndex: React.FC = () => {
  const latestPost = posts[posts.length - 1];
  const otherPosts = [...posts].slice(0, -1).reverse();

  useEffect(() => {
    document.title = 'Blog | Núcleo Equilíbrio';
    const description = 'Orientações para famílias sobre cuidado, tratamento e próximos passos, com responsabilidade e acolhimento.';
    setMeta('description', description);
    setCanonical(`${window.location.origin}/blog`);
    setProperty('og:title', document.title);
    setProperty('og:description', description);
    setProperty('og:url', `${window.location.origin}/blog`);
    setProperty('og:type', 'website');
  }, []);

  return (
    <div className="blog-page min-h-screen text-slate-800">
      <BlogHeader />
      <main>
        <section className="blog-hero-pattern">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-24">
            <div className="max-w-3xl">
              <p className="blog-kicker">Leituras para familiares</p>
              <h1 className="blog-display mt-5 max-w-3xl text-5xl leading-[1.02] text-emerald-950 sm:text-6xl lg:text-7xl">Informação clara para os próximos passos.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">Conteúdos cuidadosos sobre como buscar orientação, conversar em família e entender as possibilidades de cuidado.</p>
              <a href="#artigos" className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-emerald-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800">
                Explorar os conteúdos <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="blog-hero-art-wrap">
              <div className="blog-hero-art-label"><span>NÚCLEO EQUILÍBRIO</span><span>INFORMAÇÃO • ESCUTA • CUIDADO</span></div>
              <BlogIllustration variant="conversation" label="Ilustração de duas conversas cuidadosas, representadas por balões de diálogo" caption="Cada família pode começar por uma conversa." />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-16" id="artigos">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="blog-kicker">Em destaque</p>
              <h2 className="blog-display mt-2 text-3xl leading-tight text-emerald-950 sm:text-4xl">Comece por aqui</h2>
            </div>
            <span className="rounded-full border border-emerald-900/15 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-600">{posts.length} orientações</span>
          </div>

          {latestPost && (
            <article className="blog-featured-card overflow-hidden rounded-[2rem] border border-emerald-950/10 bg-white">
              <a href={`/blog/${latestPost.slug}`} className="group grid md:grid-cols-[1.05fr_0.95fr]">
                <div className="blog-featured-copy flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-emerald-800">
                    <span className="rounded-full bg-emerald-50 px-3 py-1.5">Mais recente</span>
                    <span>{latestPost.category}</span>
                  </div>
                  <h3 className="blog-display mt-5 text-3xl leading-tight text-slate-950 sm:text-4xl lg:text-[2.8rem]">{latestPost.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">{latestPost.excerpt}</p>
                  <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2"><CalendarDays size={16} aria-hidden="true" />{formatDate(latestPost.date)}</span>
                    <span className="inline-flex items-center gap-2"><Clock3 size={16} aria-hidden="true" />{latestPost.readTime}</span>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 self-start font-bold text-emerald-800">Ler orientação <ArrowUpRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                </div>
                <div className="blog-featured-image-wrap min-h-64 md:min-h-[26rem]">
                  <img src={latestPost.image} alt="" loading="eager" className="h-full w-full object-cover" />
                </div>
              </a>
            </article>
          )}

          <div className="mb-7 mt-16 border-b border-emerald-950/10 pb-5 sm:mt-20">
            <p className="blog-kicker">Mais leituras</p>
            <h2 className="blog-display mt-2 text-3xl leading-tight text-emerald-950 sm:text-4xl">Outros temas para explorar</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <article key={post.slug} className="blog-post-card overflow-hidden rounded-[1.5rem] border border-emerald-950/10 bg-white">
                <a href={`/blog/${post.slug}`} className="group flex h-full flex-col">
                  <div className="blog-card-image-wrap">
                    <img src={post.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-emerald-800">{post.category}</p>
                    <h3 className="blog-display mt-3 text-2xl leading-tight text-slate-950">{post.title}</h3>
                    <p className="mt-3 flex-1 text-[15px] leading-7 text-slate-600">{post.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">
                      <span>{formatDate(post.date)}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock3 size={14} aria-hidden="true" />{post.readTime}</span>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-2 font-bold text-emerald-800">Ler artigo <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" /></span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-emerald-950/10 bg-[#f0f3ed]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>Conteúdo informativo. Cada situação precisa ser avaliada individualmente.</p>
          <a href="/" className="font-semibold text-emerald-800 hover:text-emerald-950">Conheça o Núcleo Equilíbrio <ArrowUpRight size={15} className="inline" aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  );
};

const parseSources = (paragraph: string) => paragraph
  .replace(/^Fontes consultadas:\s*/i, '')
  .split(/;\s*/)
  .map((entry) => {
    const match = entry.match(/https?:\/\/\S+/);
    if (!match || match.index === undefined) return null;
    const url = match[0].replace(/[.,)]+$/, '');
    const label = entry.slice(0, match.index).replace(/[:\s-]+$/, '').trim();
    return { label: label || url, url };
  })
  .filter((source): source is { label: string; url: string } => source !== null);

const BlogArticle: React.FC<{ post: BlogPost }> = ({ post }) => {
  const sourceIndex = post.content.findIndex((paragraph) => paragraph.startsWith('Fontes consultadas:'));
  const bodyParagraphs = sourceIndex >= 0 ? post.content.slice(0, sourceIndex) : post.content;
  const sourceParagraph = sourceIndex >= 0 ? post.content[sourceIndex] : '';
  const sourceLinks = sourceParagraph ? parseSources(sourceParagraph) : [];
  const headings = sectionTitles[post.slug] || {};
  const illustrationCaptions = getIllustrationCaptions(post.slug);
  const illustrationIndexes = bodyParagraphs.length < 5
    ? [Math.min(1, bodyParagraphs.length - 1)]
    : [...new Set([2, Math.min(bodyParagraphs.length - 2, Math.floor((bodyParagraphs.length - 1) * 0.58))])];

  useEffect(() => {
    document.title = `${post.title} | Núcleo Equilíbrio`;
    setMeta('description', post.excerpt);
    const canonical = `${window.location.origin}/blog/${post.slug}`;
    setCanonical(canonical);
    setProperty('og:title', document.title);
    setProperty('og:description', post.excerpt);
    setProperty('og:url', canonical);
    setProperty('og:type', 'article');
    setProperty('og:image', `${window.location.origin}${post.image}`);
  }, [post]);

  return (
    <div className="blog-page min-h-screen text-slate-800">
      <BlogHeader />
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-8 md:px-8 md:pb-24 md:pt-12">
        <a href="/blog" className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-emerald-800 transition-colors hover:text-emerald-950"><ArrowLeft size={16} aria-hidden="true" />Todos os conteúdos</a>
        <article className="mt-7">
          <header className="mx-auto max-w-4xl text-center">
            <p className="blog-kicker justify-center">{post.category}</p>
            <h1 className="blog-display mt-5 text-4xl leading-[1.08] text-emerald-950 sm:text-5xl lg:text-6xl">{post.title}</h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2"><CalendarDays size={16} aria-hidden="true" />{formatDate(post.date)}</span>
              <span className="inline-flex items-center gap-2"><Clock3 size={16} aria-hidden="true" />{post.readTime}</span>
            </div>
          </header>

          <figure className="blog-article-cover mx-auto mt-9 max-w-6xl overflow-hidden rounded-[1.75rem]">
            <img src={post.image} alt="" loading="eager" className="h-full w-full object-cover" />
          </figure>

          <div className="mx-auto mt-12 grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start lg:gap-16">
            <div className="blog-reading min-w-0">
              {bodyParagraphs.map((paragraph, index) => (
                <React.Fragment key={`${post.slug}-${index}`}>
                  {headings[index] && <h2 id={`sec-${index}`} className="blog-section-title">{headings[index]}</h2>}
                  <p className={index === 0 ? 'blog-lead' : undefined}>{paragraph}</p>
                  {illustrationIndexes.includes(index) && (
                    <BlogIllustration
                      variant={getIllustrationVariant(post.slug, illustrationIndexes.indexOf(index))}
                      label={illustrationCaptions[illustrationIndexes.indexOf(index)]}
                      caption={illustrationCaptions[illustrationIndexes.indexOf(index)]}
                    />
                  )}
                </React.Fragment>
              ))}

              {sourceLinks.length > 0 && (
                <aside className="blog-sources" aria-labelledby="blog-sources-heading">
                  <h2 id="blog-sources-heading">Fontes consultadas</h2>
                  <ul>
                    {sourceLinks.map((source) => (
                      <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}<ArrowUpRight size={14} aria-hidden="true" /></a></li>
                    ))}
                  </ul>
                </aside>
              )}
            </div>

            <aside className="blog-help-card">
              <span className="blog-help-mark" aria-hidden="true">01</span>
              <p className="blog-kicker">Um passo de cada vez</p>
              <h2 className="blog-display mt-3 text-2xl leading-tight text-emerald-950">Você não precisa decidir tudo agora.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">Uma conversa reservada pode ajudar a organizar dúvidas e próximos passos.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-emerald-900 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-800"><MessageCircle size={16} aria-hidden="true" />Conversar com a equipe</a>
              <p className="mt-4 text-xs leading-5 text-slate-500">A orientação não substitui avaliação profissional e não garante admissão.</p>
            </aside>
          </div>
        </article>
      </main>
      <footer className="border-t border-emerald-950/10 bg-[#f0f3ed]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <a href="/blog" className="inline-flex items-center gap-2 font-semibold text-emerald-800"><ArrowLeft size={15} aria-hidden="true" />Voltar para o blog</a>
          <a href="/" className="font-semibold text-emerald-800 hover:text-emerald-950">Núcleo Equilíbrio</a>
        </div>
      </footer>
    </div>
  );
};

export const Blog: React.FC = () => {
  const path = window.location.pathname.replace(/\/$/, '');
  const slug = path.startsWith('/blog/') ? path.slice('/blog/'.length) : '';
  const post = useMemo(() => posts.find((item) => item.slug === slug), [slug]);
  if (slug && post) return <BlogArticle post={post} />;
  return <BlogIndex />;
};

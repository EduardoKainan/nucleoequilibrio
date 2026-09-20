import React, { useEffect, useMemo } from 'react';
import posts from '../content/blog/posts.json';
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

type BlogPost = (typeof posts)[number];

const setMeta = (name: string, content: string) => {
  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
};

const BlogHeader: React.FC = () => (
  <header className="bg-slate-950 text-white">
    <div className="max-w-6xl mx-auto px-5 py-5 flex items-center justify-between gap-4">
      <a href="/" className="flex items-center gap-3 font-bold tracking-tight" aria-label="Voltar para o início">
        <img src="/assets/images/logo-nucleo-equilibrio.webp" alt="Núcleo Equilíbrio" className="w-10 h-10 object-contain" />
        <span>Núcleo <span className="text-teal-300">Equilíbrio</span></span>
      </a>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold hover:bg-teal-500">
        <MessageCircle size={16} /> Falar com a equipe
      </a>
    </div>
  </header>
);

const BlogIndex: React.FC = () => {
  useEffect(() => {
    document.title = 'Blog | Núcleo Equilíbrio';
    setMeta('description', 'Orientações para famílias sobre cuidado, tratamento e próximos passos, com responsabilidade e acolhimento.');
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <BlogHeader />
      <main className="max-w-6xl mx-auto px-5 py-14">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">Informação para decidir melhor</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-950">Blog Núcleo Equilíbrio</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">Conteúdos objetivos para pessoas e famílias que buscam orientação responsável sobre cuidado e tratamento.</p>
        </div>
        <div className="grid gap-7 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <a href={`/blog/${post.slug}`} className="block">
                <img src={post.image} alt="" className="h-60 w-full object-cover bg-slate-100" />
              </a>
              <div className="p-7">
                <p className="text-sm font-semibold text-teal-700">{post.category}</p>
                <h2 className="mt-2 text-2xl font-bold leading-tight text-slate-950">{post.title}</h2>
                <p className="mt-3 leading-relaxed text-slate-600">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                  <span className="inline-flex items-center gap-2"><CalendarDays size={16} /> {post.date}</span>
                  <span className="inline-flex items-center gap-2"><Clock3 size={16} /> {post.readTime}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 font-bold text-teal-700">Ler orientação <ArrowRight size={17} /></span>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

const BlogArticle: React.FC<{ post: BlogPost }> = ({ post }) => {
  useEffect(() => {
    document.title = `${post.title} | Núcleo Equilíbrio`;
    setMeta('description', post.excerpt);
  }, [post]);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <BlogHeader />
      <main className="max-w-4xl mx-auto px-5 py-12">
        <a href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700"><ArrowLeft size={16} /> Voltar ao blog</a>
        <article className="mt-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">{post.category}</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-950">{post.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-500"><span>{post.date}</span><span>•</span><span>{post.readTime}</span></div>
          <img src={post.image} alt="" className="mt-9 max-h-[520px] w-full rounded-3xl object-cover bg-slate-100" />
          <div className="prose prose-slate mt-10 max-w-none text-lg leading-relaxed">
            {post.content.map((paragraph, index) => <p key={`${post.slug}-${index}`}>{paragraph}</p>)}
          </div>
          <aside className="mt-12 rounded-3xl bg-slate-950 p-8 text-white md:p-10">
            <h2 className="text-2xl font-bold">Quer entender os próximos passos?</h2>
            <p className="mt-3 text-slate-300">Converse com a equipe do Núcleo Equilíbrio. A orientação inicial ajuda a organizar as opções disponíveis.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-500 px-5 py-3 font-bold text-white hover:bg-teal-400"><MessageCircle size={18} /> Conversar com a equipe</a>
          </aside>
        </article>
      </main>
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

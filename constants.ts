import { Brain, Heart, Activity, Ban, Baby, FileCheck, Ambulance } from 'lucide-react';

export const WHATSAPP_URL = "https://wa.me/message/ZQWUI7BADBR3P1";
export const SECONDARY_WHATSAPP_URL = "https://wa.me/message/BQ5VB3IPUNMRC1";
export const PHONE_NUMBER = "556293423326";
export const PHONE_DISPLAY = "+55 62 9342-3326";

export const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Convênios', href: '#convenios' },
  { label: 'Unidades', href: '#unidades' },
];

export const HERO_CONTENT = {
  headline: "O Cuidado Certo para Saúde Mental e Equilíbrio Emocional",
  subheadline: "Ajudamos pessoas e famílias a retomarem o equilíbrio, a dignidade e a qualidade de vida por meio de um acompanhamento humano, seguro e especializado.",
  cta: "Fale agora com um especialista",
  ctaPhone: "Ligue Agora"
};

export const INTRO_CONTENT = {
  title: "Cuidar de Quem Você Ama Exige Responsabilidade e Profissionalismo",
  text: "Sabemos que lidar com transtornos emocionais, crises de ansiedade ou depressão é uma das decisões mais difíceis para uma família. Por isso, oferecemos acolhimento, orientação e tratamento individualizado, respeitando cada história e cada momento. Nossa equipe é formada por profissionais experientes e qualificados, preparados para conduzir o tratamento com ética, sigilo e responsabilidade."
};

export const INSURANCE_LOGOS = [
  "/assets/images/logos/unimed.webp",
  "/assets/images/logos/allianz.webp",
  "/assets/images/logos/amil.webp",
  "/assets/images/logos/porto-seguros.webp",
  "/assets/images/logos/bradesco-saude.webp"
];

// Estrutura organizada por Região e Unidade para a Presell
export const REGIONAL_UNITS = [
  {
    region: "Goiás",
    units: [
      {
        name: "Unidade I - Saúde Integral",
        images: [
          '/assets/images/units/goias-1-main.webp',
          '/assets/images/units/goias-1-pool.webp',
          '/assets/images/units/goias-1-room.webp',
        ]
      },
      {
        name: "Unidade II - Acolhimento Humanizado",
        images: [
          '/assets/images/units/goias-2-main.webp',
          '/assets/images/units/goias-2-garden.webp',
          '/assets/images/units/goias-2-room.webp',
        ]
      },
      {
        name: "Unidade III - Espaço Campestre",
        images: [
          '/assets/images/units/goias-3-main.webp',
          '/assets/images/units/goias-3-pool.webp',
          '/assets/images/units/goias-3-room.webp',
        ]
      }
    ]
  },
  {
    region: "Distrito Federal (Brasília e Entorno)",
    units: [
      {
        name: "Unidade IV - Centro de Apoio",
        images: [
          '/assets/images/units/df-4-main.webp',
          '/assets/images/units/df-4-pool.webp',
          '/assets/images/units/df-4-room.webp',
        ]
      },
      {
        name: "Unidade V - Espaço Vida",
        images: [
          '/assets/images/units/df-5-main.webp',
          '/assets/images/units/df-5-pool.webp',
          '/assets/images/units/df-5-room.webp',
        ]
      },
      {
        name: "Unidade VI - Nova Jornada",
        images: [
          '/assets/images/units/df-6-main.webp',
          '/assets/images/units/df-6-pool.webp',
          '/assets/images/units/df-6-room.webp'
        ]
      }
    ]
  }
];

// Mantendo PRESELL_IMAGES apenas como fallback ou para uso geral flatten se necessário (opcional)
export const PRESELL_IMAGES = REGIONAL_UNITS.flatMap(r => r.units.flatMap(u => u.images));

// URLs dos prints de depoimentos
export const TESTIMONIALS = [
  "/assets/images/testimonials/testimonial-1.webp",
  "/assets/images/testimonials/testimonial-2.webp",
  "/assets/images/testimonials/testimonial-3.webp",
  "/assets/images/testimonials/testimonial-4.webp"
];

export const STATS = [
  { label: "Pacientes acolhidos", value: "+500" },
  { label: "Anos de experiência", value: "+10" },
  { label: "Profissionais especializados", value: "+15" },
  { label: "Atendimento", value: "24h" },
];

export const FEATURES = [
  {
    icon: Activity,
    title: "Transtornos Comportamentais",
    description: "Cada pessoa manifesta sintomas e desafios diferentes. Nosso tratamento é individualizado e conduzido por equipe multidisciplinar."
  },
  {
    icon: Ban,
    title: "Esgotamento e Burnout",
    description: "O tratamento inclui acompanhamento terapêutico intensivo, repouso assistido e suporte contínuo à família."
  },
  {
    icon: Heart,
    title: "Acolhimento Feminino",
    description: "Ambiente acolhedor e seguro, respeitando as particularidades emocionais, sociais e físicas da mulher."
  },
  {
    icon: Baby,
    title: "Apoio para Menores",
    description: "Atendimento especializado para adolescentes, com foco no desenvolvimento saudável e apoio familiar."
  },
  {
    icon: Brain,
    title: "Saúde Mental",
    description: "Tratamentos voltados para ansiedade, depressão, estresse emocional e outros transtornos, com abordagem humanizada."
  },
  {
    icon: FileCheck,
    title: "Acolhimento Terapêutico",
    description: "Indicado quando a pessoa reconhece a necessidade de um afastamento temporário para focar em sua saúde emocional."
  },
  {
    icon: Ambulance,
    title: "Apoio Familiar Intensivo",
    description: "Quando a família precisa de intervenção profissional para proteger o bem-estar do ente querido, com total respaldo médico e psicológico."
  }
];

// Perguntas de Consciência (Funil Simplificado)
export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Você busca orientação para quem?",
    options: [
      "Para mim",
      "Para um familiar próximo",
      "Para alguém sob minha responsabilidade",
      "Prefiro não informar agora"
    ]
  }
];

// Lista de Unidades Separadas
export const LOCATIONS = [
  {
    region: "Goiás",
    city: "Unidade I - Saúde Integral",
    description: "Estrutura ampla e conectada com a natureza, ideal para revitalização e momentos de reflexão, próxima aos principais centros urbanos.",
    image: "/assets/images/units/goias-1-main.webp"
  },
  {
    region: "Goiás",
    city: "Unidade II - Acolhimento Humanizado",
    description: "Ambiente planejado para oferecer conforto e segurança, com equipe multidisciplinar 24h e espaços de convivência familiar.",
    image: "/assets/images/units/goias-2-main.webp"
  },
  {
    region: "Goiás",
    city: "Unidade III - Espaço Campestre",
    description: "Focada no bem-estar físico e mental, esta unidade dispõe de ampla área verde, piscina e atividades terapêuticas ao ar livre.",
    image: "/assets/images/units/goias-3-main.webp"
  },
  {
    region: "Distrito Federal",
    city: "Unidade IV - Centro de Apoio",
    description: "Localizada estrategicamente para atender Brasília e entorno, oferecendo suporte especializado com infraestrutura moderna.",
    image: "/assets/images/units/df-4-main.webp"
  },
  {
    region: "Distrito Federal",
    city: "Unidade V - Espaço Vida",
    description: "Unidade acolhedora com foco em terapias em grupo e individuais, promovendo a reinserção social de forma gradativa e segura.",
    image: "/assets/images/units/df-5-main.webp"
  },
  {
    region: "Distrito Federal",
    city: "Unidade VI - Nova Jornada",
    description: "Estrutura completa para acolhimento e acompanhamento, combinando excelência médica com cuidado humano para pacientes e familiares.",
    image: "/assets/images/units/df-6-main.webp"
  }
];

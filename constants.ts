import { Brain, Heart, Activity, Ban, Baby, FileCheck, Ambulance } from 'lucide-react';

export const WHATSAPP_URL = "https://wa.me/message/I356RT7T5OLQG1";
export const PHONE_NUMBER = "553897397138";
export const PHONE_DISPLAY = "+55 38 9739-7138";

export const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Como podemos ajudar', href: '#como-podemos-ajudar' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Convênios', href: '#convenios' },
  { label: 'Unidades', href: '#unidades' },
];

export const HERO_CONTENT = {
  headline: "Apoio especializado para momentos que exigem cuidado",
  subheadline: "Converse com uma equipe preparada para acolher pessoas e famílias com respeito, sigilo e orientação responsável.",
  cta: "Conversar com um especialista",
  ctaPhone: "Ligar agora"
};

export const INTRO_CONTENT = {
  title: "Cuidado responsável começa com uma conversa segura",
  text: "Cada história merece ser ouvida com respeito. O Núcleo Equilíbrio oferece acolhimento, orientação e acompanhamento individualizado para pessoas e famílias que precisam organizar o próximo passo com mais clareza e segurança."
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
  { label: "Famílias orientadas", value: "+500" },
  { label: "Anos de experiência", value: "+10" },
  { label: "Profissionais preparados", value: "+15" },
  { label: "Atendimento reservado", value: "24h" },
];

export const FEATURES = [
  {
    icon: Activity,
    title: "Acompanhamento individual",
    description: "Cada pessoa vive um contexto diferente. A equipe organiza a orientação de acordo com a história, a rotina e as necessidades apresentadas."
  },
  {
    icon: Ban,
    title: "Equilíbrio emocional",
    description: "Suporte para momentos de sobrecarga, mudanças importantes e desafios emocionais, com escuta qualificada e acompanhamento responsável."
  },
  {
    icon: Heart,
    title: "Cuidado para mulheres",
    description: "Ambiente acolhedor e reservado, respeitando as particularidades emocionais, sociais e físicas de cada mulher."
  },
  {
    icon: Baby,
    title: "Apoio para adolescentes",
    description: "Orientação adequada à fase de desenvolvimento, com participação responsável da família e atenção ao bem-estar."
  },
  {
    icon: Brain,
    title: "Saúde emocional",
    description: "Acolhimento para ansiedade, tristeza persistente, estresse e outros desafios emocionais, sem julgamentos e sem promessas de resultado."
  },
  {
    icon: FileCheck,
    title: "Rotina acompanhada",
    description: "Quando necessário, uma rotina estruturada e acompanhada pode ajudar a pessoa a reorganizar hábitos e retomar o cuidado consigo."
  },
  {
    icon: Ambulance,
    title: "Orientação para familiares",
    description: "A família recebe direcionamento para compreender o momento, melhorar a comunicação e tomar decisões de cuidado com mais segurança."
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

export const SITELINK_PAGES = [
  {
    slug: "apoio-emocional-especializado",
    title: "Apoio Emocional Especializado",
    eyebrow: "Cuidado humano",
    description: "Orientação profissional para pessoas e famílias que buscam acolhimento, segurança e direcionamento em momentos delicados.",
    intro: "O primeiro passo é conversar com uma equipe preparada para entender o momento atual, ouvir a família e indicar caminhos de cuidado com sigilo e responsabilidade.",
    sections: [
      {
        title: "Como a orientação é conduzida",
        text: "A escuta inicial considera rotina, contexto familiar, sinais emocionais e nível de suporte necessário. A partir disso, a equipe explica alternativas adequadas para cada situação."
      },
      {
        title: "Cuidado sem julgamento",
        text: "A abordagem é acolhedora e centrada na segurança da pessoa atendida. Familiares recebem orientação para agir com mais clareza em momentos de incerteza."
      }
    ],
    highlights: ["Escuta individual", "Equipe multidisciplinar", "Sigilo no atendimento", "Orientação familiar"]
  },
  {
    slug: "orientacao-inicial",
    title: "Orientação Inicial",
    eyebrow: "Primeira orientação",
    description: "Conversa inicial para compreender o cenário, tirar dúvidas e identificar qual tipo de suporte pode ser mais adequado.",
    intro: "A orientação inicial não substitui consulta médica, mas ajuda a família a organizar informações importantes e entender possíveis caminhos de cuidado.",
    sections: [
      {
        title: "O que é considerado",
        text: "São observados sinais comportamentais, condições emocionais, rotina, histórico de acompanhamento e rede de apoio disponível."
      },
      {
        title: "Quando buscar orientação",
        text: "Quando a família percebe isolamento, conflitos recorrentes, mudanças bruscas de comportamento ou dificuldade para decidir o próximo passo."
      }
    ],
    highlights: ["Escuta qualificada", "Triagem responsável", "Encaminhamento adequado", "Atendimento reservado"]
  },
  {
    slug: "apoio-para-familiares",
    title: "Apoio para Familiares",
    eyebrow: "Acolhimento familiar",
    description: "Orientação para familiares que precisam lidar com situações delicadas, crises emocionais e decisões de cuidado.",
    intro: "A família também precisa de suporte. Muitas vezes, entender como agir, o que evitar e quando buscar ajuda especializada reduz conflitos e melhora a segurança do processo.",
    sections: [
      {
        title: "Orientação prática",
        text: "A equipe ajuda a família a organizar informações, reconhecer sinais de alerta e conversar sobre alternativas de cuidado com mais segurança."
      },
      {
        title: "Rede de apoio",
        text: "O suporte familiar é parte importante do acompanhamento. Por isso, a comunicação é conduzida com discrição, respeito e foco no bem-estar."
      }
    ],
    highlights: ["Acolhimento à família", "Conduta orientada", "Comunicação segura", "Suporte em momentos críticos"]
  },
  {
    slug: "acolhimento-humanizado",
    title: "Acolhimento Humanizado",
    eyebrow: "Ambiente acompanhado",
    description: "Estrutura planejada para oferecer rotina, acompanhamento e suporte profissional durante um período de reorganização pessoal.",
    intro: "O acolhimento pode ser indicado quando a pessoa precisa de um ambiente protegido, com rotina acompanhada e equipe preparada para lidar com demandas emocionais e comportamentais.",
    sections: [
      {
        title: "Rotina com acompanhamento",
        text: "A rotina pode envolver atividades acompanhadas, convivência assistida, suporte psicológico e presença de profissionais conforme cada caso."
      },
      {
        title: "Respeito ao processo individual",
        text: "Cada pessoa tem uma trajetória. O acompanhamento é conduzido sem promessas de resultado, com foco em cuidado contínuo e responsabilidade."
      }
    ],
    highlights: ["Ambiente estruturado", "Atividades terapêuticas", "Equipe presente", "Plano individualizado"]
  },
  {
    slug: "unidades-de-atendimento",
    title: "Unidades de Atendimento",
    eyebrow: "Goiás, Distrito Federal e Minas Gerais",
    description: "Espaços preparados para acolhimento, acompanhamento e suporte profissional em regiões estratégicas.",
    intro: "As unidades contam com ambientes de convivência, áreas abertas e estrutura para atendimento humanizado, respeitando privacidade e segurança. Também orientamos famílias de Minas Gerais sobre as opções de atendimento disponíveis.",
    sections: [
      {
        title: "Estrutura pensada para cuidado",
        text: "Os espaços foram organizados para favorecer rotina, acolhimento, descanso e atividades acompanhadas por equipe preparada."
      },
      {
        title: "Atendimento regional",
        text: "Há opções de unidades em Goiás e no Distrito Federal, além de atendimento para famílias de Minas Gerais. A equipe orienta sobre a melhor alternativa para cada região."
      }
    ],
    highlights: ["Goiás", "Distrito Federal", "Minas Gerais", "Privacidade"]
  },
  {
    slug: "convenios-e-atendimento",
    title: "Convênios e Formas de Atendimento",
    eyebrow: "Orientação administrativa",
    description: "Informações sobre possibilidades de atendimento, convênios e formas de contato para avaliação inicial.",
    intro: "A disponibilidade de cobertura pode variar conforme plano, contrato e tipo de atendimento. A equipe orienta a família sobre os próximos passos de forma clara.",
    sections: [
      {
        title: "Consulta de possibilidade",
        text: "Antes de qualquer encaminhamento, é importante verificar informações básicas do plano e entender quais alternativas podem ser analisadas."
      },
      {
        title: "Atendimento direto",
        text: "Também é possível solicitar orientação particular para compreender valores, estrutura, disponibilidade e funcionamento do acolhimento."
      }
    ],
    highlights: ["Planos de saúde", "Atendimento particular", "Orientação inicial", "Contato sigiloso"]
  }
];

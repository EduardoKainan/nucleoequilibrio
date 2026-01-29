import { CheckCircle, Heart, MapPin, Phone, Shield, Users } from 'lucide-react';

export const WHATSAPP_NUMBER = "5562996019164";
export const WHATSAPP_MESSAGE = "Olá, gostaria de receber orientação personalizada sobre as opções de apoio.";

export const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialistas', href: '#especialistas' },
  { label: 'Unidades', href: '#unidades' },
];

export const HERO_CONTENT = {
  headline: "A jornada de equilíbrio e cuidado começa hoje",
  subheadline: "Acompanhamento humano e profissional para quem busca orientação, acolhimento e novos caminhos de vida.",
  cta: "Falar com um especialista agora",
};

export const STATS = [
  { label: "Pessoas acolhidas", value: "+2.500" },
  { label: "Anos de experiência", value: "15" },
  { label: "Profissionais dedicados", value: "+40" },
  { label: "Unidades de apoio", value: "4" },
];

export const FEATURES = [
  {
    icon: Users,
    title: "Acolhimento Individual",
    description: "Cada história é única. Oferecemos uma escuta ativa para entender suas necessidades específicas."
  },
  {
    icon: Shield,
    title: "Sigilo Absoluto",
    description: "Seu bem-estar e privacidade são nossa prioridade. Todo o processo é conduzido com total discrição."
  },
  {
    icon: Heart,
    title: "Cuidado Integral",
    description: "Uma visão completa que une saúde emocional, física e reequilíbrio social."
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Você está buscando orientação para você ou para alguém próximo?",
    options: [
      "Para mim mesmo(a)",
      "Para um familiar (filho/a, cônjuge, pais)",
      "Para um amigo ou conhecido",
      "Apenas pesquisando informações"
    ]
  },
  {
    id: 2,
    question: "O momento atual exige mais escuta, informação ou direcionamento?",
    options: [
      "Precisamos de direcionamento imediato",
      "Gostaria de entender melhor as opções",
      "Sinto que a situação está delicada",
      "Quero planejar um apoio futuro"
    ]
  },
  {
    id: 3,
    question: "Você sente dificuldade em lidar com situações emocionais complexas?",
    options: [
      "Sim, tem sido muito desafiador",
      "Às vezes, oscila bastante",
      "Não, mas preciso de suporte profissional",
      "Tenho dúvidas sobre como agir"
    ]
  },
  {
    id: 4,
    question: "Já tentou buscar ajuda, mas não sabia por onde começar?",
    options: [
      "Sim, já buscamos mas não deu certo",
      "É a primeira vez que procuro apoio",
      "Tenho receio de não ser compreendido",
      "Estou em busca de algo diferente"
    ]
  },
  {
    id: 5,
    question: "Prefere conversar agora ou receber informações com calma?",
    options: [
      "Prefiro conversar agora com um especialista",
      "Quero receber informações por WhatsApp",
      "Gostaria de agendar um horário",
      "Apenas conhecer o trabalho"
    ]
  }
];

export const LOCATIONS = [
  {
    region: "Goiás",
    description: "Estrutura ampla e conectada com a natureza, ideal para momentos de reflexão e reequilíbrio, próxima aos principais centros.",
    city: "Próximo a Goiânia e Aparecida"
  },
  {
    region: "Distrito Federal",
    description: "Espaço de acolhimento focado em bem-estar integral, com fácil acesso para famílias de Brasília e entorno.",
    city: "Região do DF e Entorno"
  }
];

import { Brain, Heart, Activity, Ban, Baby, FileCheck, Ambulance } from 'lucide-react';

export const WHATSAPP_NUMBER = "5562996019164";
export const PHONE_NUMBER = "5562996019164"; // Ajuste se houver um número fixo diferente
export const WHATSAPP_MESSAGE = "Olá, gostaria de falar com um especialista e receber orientação sobre tratamentos.";

export const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Convênios', href: '#convenios' },
  { label: 'Unidades', href: '#unidades' },
];

export const HERO_CONTENT = {
  headline: "O Cuidado Certo para Dependência Química, Alcoolismo e Saúde Mental",
  subheadline: "Ajudamos pessoas e famílias a retomarem o equilíbrio, a dignidade e a qualidade de vida por meio de um acompanhamento humano, seguro e especializado.",
  cta: "Fale agora com um especialista",
  ctaPhone: "Ligue Agora"
};

export const INTRO_CONTENT = {
  title: "Cuidar de Quem Você Ama Exige Responsabilidade e Profissionalismo",
  text: "Sabemos que lidar com dependência química, alcoolismo ou transtornos emocionais é uma das decisões mais difíceis para uma família. Por isso, oferecemos acolhimento, orientação e tratamento individualizado, respeitando cada história e cada momento. Nossa equipe é formada por profissionais experientes e qualificados, preparados para conduzir o tratamento com ética, sigilo e responsabilidade."
};

export const STATS = [
  { label: "Pacientes acolhidos", value: "+500" },
  { label: "Anos de experiência", value: "+10" },
  { label: "Profissionais especializados", value: "+15" },
  { label: "Atendimento", value: "24h" },
];

export const FEATURES = [
  {
    icon: Activity,
    title: "Dependência Química",
    description: "Cada pessoa manifesta sintomas e desafios diferentes. Nosso tratamento é individualizado e conduzido por equipe multidisciplinar."
  },
  {
    icon: Ban,
    title: "Dependência Alcoólica",
    description: "O tratamento inclui desintoxicação assistida, acompanhamento terapêutico e suporte contínuo à família."
  },
  {
    icon: Heart,
    title: "Tratamento Feminino",
    description: "Ambiente acolhedor e seguro, respeitando as particularidades emocionais, sociais e físicas da mulher."
  },
  {
    icon: Baby,
    title: "Tratamento para Menores",
    description: "Atendimento especializado para adolescentes, com foco no desenvolvimento saudável e apoio familiar."
  },
  {
    icon: Brain,
    title: "Saúde Mental",
    description: "Tratamentos voltados para ansiedade, depressão, estresse emocional e outros transtornos, com abordagem humanizada."
  },
  {
    icon: FileCheck,
    title: "Internação Voluntária",
    description: "Indicada quando o paciente reconhece a necessidade de ajuda e aceita o tratamento como caminho de recuperação."
  },
  {
    icon: Ambulance,
    title: "Internação Involuntária",
    description: "Quando a família precisa agir para proteger a vida e a saúde do paciente, sempre dentro da lei e com respaldo médico."
  }
];

// Perguntas de Consciência (Funil Mantido)
export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Qual dessas situações mais se aproxima do que você está vivendo hoje?",
    options: [
      "Preciso de orientação para uma situação difícil",
      "Um familiar precisa de apoio especializado",
      "Estou buscando informações antes de tomar uma decisão",
      "Quero entender melhor quais opções existem"
    ]
  },
  {
    id: 2,
    question: "Com que urgência você sente que precisa de orientação agora?",
    options: [
      "É algo urgente, preciso falar com alguém hoje",
      "Preciso de ajuda nos próximos dias",
      "Ainda estou avaliando a situação",
      "Só quero entender melhor por enquanto"
    ]
  },
  {
    id: 3,
    question: "Você busca orientação para quem?",
    options: [
      "Para mim",
      "Para um familiar próximo",
      "Para alguém sob minha responsabilidade",
      "Prefiro não informar agora"
    ]
  }
];

export const LOCATIONS = [
  {
    region: "Goiás",
    description: "Estrutura ampla e conectada com a natureza, ideal para momentos de reflexão e reequilíbrio, próxima aos principais centros.",
    city: "Próximo a Goiânia e Aparecida",
    image: "https://www.goiania.go.gov.br/wp-content/uploads/2019/10/10.28GOIANIAGERAL_PJ-1-1024x569.jpeg"
  },
  {
    region: "Distrito Federal",
    description: "Espaço de acolhimento focado em bem-estar integral, com fácil acesso para famílias de Brasília e entorno.",
    city: "Região do DF e Entorno",
    image: "https://vidadeturista.com/wp-content/uploads/2016/03/cidades-outono-2016-brasilia-df.jpg"
  }
];
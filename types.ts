import { LucideIcon } from 'lucide-react';

export interface StatItem {
  label: string;
  value: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

export interface LocationItem {
  region: string;
  description: string;
  city: string;
}

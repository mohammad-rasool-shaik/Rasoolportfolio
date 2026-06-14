import React from 'react';
import {
  SiAmazonaws,
  SiDocker,
  SiExpress,
  SiGraphql,
  SiJavascript,
  SiMicrosoftazure,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import { IconType } from 'react-icons';

const techIconMap: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  React: SiReact,
  'Next.js': SiNextdotjs,
  'Vue.js': SiVuedotjs,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  NestJS: SiNestjs,
  GraphQL: SiGraphql,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  AWS: SiAmazonaws,
  Azure: SiMicrosoftazure,
  Docker: SiDocker,
  'OpenAI API': SiOpenai,
};

const techColors: Record<string, string> = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  Python: '#3776AB',
  React: '#61DAFB',
  'Vue.js': '#4FC08D',
  'Tailwind CSS': '#06B6D4',
  'Node.js': '#339933',
  GraphQL: '#E10098',
  PostgreSQL: '#4169E1',
  MySQL: '#4479A1',
  MongoDB: '#47A248',
  AWS: '#FF9900',
  Azure: '#0078D4',
  Docker: '#2496ED',
  'OpenAI API': '#412991',
  NestJS: '#E0234E',
};

const themeAwareIcons = new Set(['Next.js', 'Express']);

export function TechIcon({ name }: { name: string }) {
  const Icon = techIconMap[name];

  if (!Icon) {
    return (
      <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/20 text-[10px] font-bold text-primary">
        {name.charAt(0)}
      </span>
    );
  }

  if (themeAwareIcons.has(name)) {
    return (
      <Icon
        className={`h-5 w-5 shrink-0 ${
          name === 'Next.js' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-300'
        }`}
      />
    );
  }

  return <Icon className="h-5 w-5 shrink-0" style={{ color: techColors[name] }} />;
}

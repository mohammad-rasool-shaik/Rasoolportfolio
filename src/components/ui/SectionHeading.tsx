import React from 'react';
import { FadeIn } from './FadeIn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <FadeIn className="mb-12 text-center">
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-base text-theme-muted">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
    </FadeIn>
  );
}

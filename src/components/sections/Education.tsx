import React from 'react';
import { education } from '../../data/portfolio';
import { FadeIn } from '../ui/FadeIn';

export function Education() {
  return (
    <div id="education">
      <h2 className="mb-6 text-xl font-bold text-primary">Education</h2>
      <div className="relative space-y-6 pl-8">
        <div className="timeline-line" />
        {education.map((item, i) => (
          <FadeIn key={item.school} delay={i * 0.1}>
            <div className="relative">
              <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-theme-card text-xs">
                {item.icon}
              </span>
              <div className="surface-card p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-theme-text">{item.degree}</h3>
                    <p className="text-sm text-primary">{item.field}</p>
                    <p className="mt-1 text-xs text-theme-muted">{item.school}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-theme-border bg-theme-elevated px-2.5 py-0.5 text-xs text-theme-muted">
                    {item.period}
                  </span>
                </div>
                <p className="mt-2 text-xs text-theme-muted">{item.detail}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

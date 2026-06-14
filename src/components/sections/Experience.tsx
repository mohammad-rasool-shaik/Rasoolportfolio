import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { experiences } from '../../data/portfolio';
import { FadeIn } from '../ui/FadeIn';

export function Experience() {
  return (
    <div id="experience">
      <h2 className="mb-6 text-xl font-bold text-primary">Professional Experience</h2>
      <div className="relative space-y-6 pl-8">
        <div className="timeline-line" />
        {experiences.map((exp, i) => (
          <FadeIn key={exp.company} delay={i * 0.1}>
            <div className="relative">
              <span
                className="absolute -left-8 top-1 h-6 w-6 rounded-full border-2 bg-theme-card"
                style={{ borderColor: exp.accent, boxShadow: `0 0 8px ${exp.accent}55` }}
              />
              <div
                className="surface-card overflow-hidden"
                style={{ borderLeft: `3px solid ${exp.accent}` }}
              >
                <div className="p-4 lg:p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-theme-text">{exp.role}</h3>
                      <p className="text-sm font-medium" style={{ color: exp.accent }}>
                        {exp.company}
                      </p>
                      <p className="mt-1 flex items-center gap-1 text-xs text-theme-muted">
                        <FiMapPin size={11} />
                        {exp.location}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-theme-border bg-theme-elevated px-2.5 py-0.5 text-xs text-theme-muted">
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="mt-3 space-y-1.5">
                    {exp.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-xs leading-relaxed text-theme-muted lg:text-sm"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                          style={{ backgroundColor: exp.accent }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

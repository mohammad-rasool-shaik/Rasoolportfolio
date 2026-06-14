import React from 'react';
import { Education } from './Education';
import { Experience } from './Experience';
import { FadeIn } from '../ui/FadeIn';

export function EducationExperience() {
  return (
    <section className="py-14 lg:py-18">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <FadeIn>
            <Education />
          </FadeIn>
          <FadeIn delay={0.1}>
            <Experience />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

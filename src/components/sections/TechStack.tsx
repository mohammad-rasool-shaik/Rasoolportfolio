import { motion } from 'framer-motion';
import React from 'react';
import { FiCode } from 'react-icons/fi';
import { techStack } from '../../data/portfolio';
import { FadeIn } from '../ui/FadeIn';
import { TechIcon } from '../ui/TechIcon';

export function TechStack() {
  return (
    <section className="py-14 lg:py-18">
      <div className="section-container">
        <FadeIn className="mb-10 text-center">
          <h2 className="section-title">
            <FiCode size={28} />
            Tech Stack
          </h2>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="surface-card h-full p-5"
              >
                <h3 className="mb-4 border-b border-theme-border pb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  {group.category}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {group.items.map((item) => (
                    <div key={item} className="tag-pill !py-1.5 !text-xs">
                      <TechIcon name={item} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

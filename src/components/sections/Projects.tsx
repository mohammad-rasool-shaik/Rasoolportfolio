import { motion } from 'framer-motion';
import React from 'react';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/portfolio';
import { FadeIn } from '../ui/FadeIn';

export function Projects() {
  return (
    <section id="projects" className="py-14 lg:py-18">
      <div className="section-container">
        <FadeIn className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">My Projects</h2>
          <a
            href="#projects"
            className="flex items-center gap-1 text-sm font-medium text-theme-muted transition-colors hover:text-primary"
          >
            View All Projects
            <FiArrowRight size={14} />
          </a>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="surface-card group flex h-full flex-col overflow-hidden"
              >
                <div
                  className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${project.gradient}`}
                >
                  <span className="text-4xl">{project.icon}</span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open project"
                      className="absolute right-3 top-3 rounded-lg border border-theme-border bg-theme-elevated/90 p-1.5 text-theme-muted transition-colors hover:text-primary"
                    >
                      <FiExternalLink size={15} />
                    </a>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-theme-card to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-bold text-theme-text">{project.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-theme-muted lg:text-sm">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="tag-pill-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

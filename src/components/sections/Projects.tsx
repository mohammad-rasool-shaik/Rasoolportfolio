import { motion } from 'framer-motion';
import React from 'react';
import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../../data/portfolio';
import { FadeIn } from '../ui/FadeIn';

export function Projects() {
  return (
    <section id="projects" className="bg-theme-card/40 py-14 lg:py-18">
      <div className="section-container">
        <FadeIn className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">My Projects</h2>
          <a
            href={projects.find((p) => p.githubUrl)?.githubUrl || '#projects'}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-theme-muted transition-colors hover:text-primary"
          >
            View on GitHub
            <FiArrowRight size={14} />
          </a>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
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

                  {project.isPersonal && (
                    <span className="absolute left-3 top-3 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      Personal Project
                    </span>
                  )}

                  <div className="absolute right-3 top-3 flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="View on GitHub"
                        className="rounded-lg border border-theme-border bg-theme-elevated/90 p-1.5 text-theme-muted transition-colors hover:text-primary"
                      >
                        <FiGithub size={15} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open live demo"
                        className="rounded-lg border border-theme-border bg-theme-elevated/90 p-1.5 text-theme-muted transition-colors hover:text-primary"
                      >
                        <FiExternalLink size={15} />
                      </a>
                    )}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-theme-card to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-bold text-theme-text">{project.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-theme-muted lg:text-sm">
                    {project.description}
                  </p>

                  {project.features && (
                    <ul className="mt-3 space-y-1">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-2 text-xs text-theme-muted"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="tag-pill-sm">
                        {t}
                      </span>
                    ))}
                  </div>

                  {(project.githubUrl || project.liveUrl) && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                        >
                          <FiGithub size={13} />
                          GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-outline !rounded-lg !px-3 !py-1.5 !text-xs"
                        >
                          <FiExternalLink size={13} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

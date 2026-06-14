import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolio';

export function Footer() {
  return (
    <footer id="contact" className="border-t border-theme-border bg-theme-card py-8">
      <div className="section-container flex flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm text-theme-muted">
          Made with <span className="text-red-400">❤️</span> by {personalInfo.name}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-theme-muted">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            <FiMail size={14} />
            {personalInfo.email}
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            <FiPhone size={14} />
            {personalInfo.phone}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-theme-muted transition-colors hover:text-primary"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-theme-muted transition-colors hover:text-primary"
          >
            <FiGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

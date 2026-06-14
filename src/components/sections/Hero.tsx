import { motion } from 'framer-motion';
import React from 'react';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import illustration from '../../assets/illustration.svg';
import profilePhoto from '../../assets/Rasool.png';
import { personalInfo } from '../../data/portfolio';
import { FadeIn } from '../ui/FadeIn';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-8 lg:pt-28 lg:pb-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-glow-primary absolute -top-32 right-1/4 h-80 w-80 rounded-full blur-3xl" />
        <div className="hero-glow-accent absolute bottom-0 left-1/4 h-72 w-72 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr_0.9fr] lg:gap-6 xl:gap-10">
          {/* Left — Intro */}
          <FadeIn direction="right">
            <div className="space-y-5">
              <p className="text-sm text-theme-muted">Hello 👋, I&apos;m</p>
              <h1 className="text-3xl font-bold leading-tight text-theme-text sm:text-4xl xl:text-5xl">
                {personalInfo.name}
              </h1>
              <p className="text-lg font-semibold text-primary sm:text-xl">
                {personalInfo.title}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-sm text-theme-muted">
                <span className="flex items-center gap-1">
                  <FiMapPin size={14} className="text-primary" />
                  {personalInfo.location}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-theme-muted lg:text-base">
                {personalInfo.summary}
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <a href="#contact" className="btn-primary !rounded-lg">
                  Let&apos;s Connect
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline !rounded-lg"
                >
                  <FiDownload size={15} />
                  Download CV
                </a>
              </div>

              <div className="flex items-center gap-3">
                {[
                  { href: personalInfo.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
                  { href: personalInfo.github, icon: FiGithub, label: 'GitHub' },
                  { href: `mailto:${personalInfo.email}`, icon: FiMail, label: 'Email' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={label}
                    className="rounded-lg border border-theme-border p-2 text-theme-muted transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Center — Illustration */}
          <FadeIn delay={0.1} className="hidden lg:block">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex justify-center"
            >
              <img
                src={illustration}
                alt="Developer illustration"
                className="max-h-[340px] w-full max-w-sm object-contain opacity-90"
              />
            </motion.div>
          </FadeIn>

          {/* Right — About Me */}
          <FadeIn direction="left" delay={0.15}>
            <div id="about" className="surface-card p-5 lg:p-6">
              <h2 className="mb-3 text-lg font-bold text-primary">About Me</h2>
              <p className="mb-5 text-sm leading-relaxed text-theme-muted">
                {personalInfo.about}
              </p>

              <div className="relative mx-auto w-fit">
                <div className="rounded-full p-1 ring-2 ring-primary/40">
                  <img
                    src={profilePhoto}
                    alt={personalInfo.name}
                    className="h-28 w-28 rounded-full object-cover object-top sm:h-32 sm:w-32"
                  />
                </div>
                <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-theme-card bg-primary" />
              </div>

              <p className="mt-3 text-center text-sm font-semibold text-theme-text">
                {personalInfo.name}
              </p>
              <p className="text-center text-xs text-theme-muted">{personalInfo.title}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

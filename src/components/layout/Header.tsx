import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { navLinks, personalInfo, sectionIds } from '../../data/portfolio';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const offset = 120;
      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-theme-border bg-theme-header backdrop-blur-xl'
          : 'bg-theme-header/60 backdrop-blur-md'
      }`}
    >
      <div className="section-container grid h-16 grid-cols-[1fr_auto_1fr] items-center lg:h-[4.5rem]">
        <a href="#home" className="font-mono text-base font-bold text-theme-text lg:text-lg">
          <span className="text-primary">&lt;</span>
          <span className="text-primary">Shaik Rusum Mohammad Rasool</span>
          <span className="text-primary">/&gt;</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${active === id ? 'nav-link-active' : ''}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center justify-end gap-3 md:flex">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !gap-1.5 !rounded-lg !px-4 !py-2 !text-xs"
          >
            <FiDownload size={14} />
            CV
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg border border-theme-border p-2 text-theme-muted transition-colors hover:border-primary hover:text-primary"
          >
            {theme === 'dark' ? <FiMoon size={17} /> : <FiSun size={17} />}
          </button>
        </div>

        <div className="col-start-3 flex items-center justify-end gap-2 md:hidden">
          <button type="button" onClick={toggleTheme} aria-label="Toggle theme" className="p-2 text-theme-muted">
            {theme === 'dark' ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="p-2 text-theme-muted">
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-theme-border bg-theme-card px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu} className="text-sm font-medium text-theme-muted">
                {link.label}
              </a>
            ))}
            <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="btn-primary text-center">
              Download CV
            </a>
          </div>
        </motion.nav>
      )}
    </header>
  );
}

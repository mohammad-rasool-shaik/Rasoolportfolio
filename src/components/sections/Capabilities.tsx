import { motion } from 'framer-motion';
import React from 'react';
import {
  FiActivity,
  FiCreditCard,
  FiFileText,
  FiFolder,
  FiLock,
  FiMail,
  FiPhone,
  FiPieChart,
  FiRadio,
  FiRefreshCw,
  FiUploadCloud,
} from 'react-icons/fi';
import { capabilities } from '../../data/portfolio';
import { FadeIn } from '../ui/FadeIn';

const iconMap = {
  invoice: FiFileText,
  stripe: FiCreditCard,
  files: FiFolder,
  pdf: FiFileText,
  upload: FiUploadCloud,
  email: FiMail,
  reports: FiPieChart,
  workflow: FiRefreshCw,
  security: FiLock,
  ringcentral: FiPhone,
  ehr: FiActivity,
  realtime: FiRadio,
};

export function Capabilities() {
  return (
    <section id="capabilities" className="py-14 lg:py-18">
      <div className="section-container">
        <FadeIn className="mb-10 text-center">
          <h2 className="section-title">What I Build</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-theme-muted lg:text-base">
            Production features and systems I have designed, implemented, and shipped for
            enterprise SaaS platforms
          </p>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => {
            const Icon = iconMap[item.iconKey];
            return (
              <FadeIn key={item.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="surface-card-hover h-full p-5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-theme-text">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-theme-muted lg:text-sm">
                    {item.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <span key={t} className="tag-pill-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

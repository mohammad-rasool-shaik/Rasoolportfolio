import { motion } from 'framer-motion';
import React from 'react';
import { stats } from '../../data/portfolio';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { FadeIn } from '../ui/FadeIn';

export function Stats() {
  return (
    <section className="pb-12 lg:pb-16">
      <div className="section-container">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="stat-card"
              >
                <span className="relative mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-base">
                  {stat.icon}
                </span>
                <p className="relative text-2xl font-bold text-primary lg:text-3xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="relative mt-1.5 text-xs font-medium text-theme-muted lg:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

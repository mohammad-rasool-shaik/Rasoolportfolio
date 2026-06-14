import { animate, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({ value, suffix = '', duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView || !ref.current) return undefined;

    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [isInView, value, suffix, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

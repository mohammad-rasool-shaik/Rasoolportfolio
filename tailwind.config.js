/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#22C55E',
        accent: {
          DEFAULT: '#3B82F6',
          light: '#2563EB',
        },
        theme: {
          bg: 'var(--color-bg)',
          card: 'var(--color-card)',
          elevated: 'var(--color-elevated)',
          border: 'var(--color-border)',
          text: 'var(--color-text)',
          muted: 'var(--color-muted)',
          header: 'var(--color-header)',
          tag: 'var(--color-tag)',
          'tag-text': 'var(--color-tag-text)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        glow: '0 0 40px rgba(34, 197, 94, 0.18)',
      },
    },
  },
  plugins: [],
};

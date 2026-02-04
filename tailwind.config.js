/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: 'var(--color-charcoal)',
        coal: 'var(--color-coal)',
        orange: 'var(--color-orange)',
        sand: 'var(--color-sand)',
        glow: 'var(--color-glow)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space)', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 14px 38px rgba(0,0,0,0.12)',
        soft: '0 10px 24px rgba(0,0,0,0.08)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseLine: {
          '0%, 100%': { transform: 'scaleX(0.9)', opacity: 0.6 },
          '50%': { transform: 'scaleX(1)', opacity: 1 },
        },
      },
      animation: {
        fadeUp: 'fadeUp 700ms ease-out forwards',
        pulseLine: 'pulseLine 1600ms ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

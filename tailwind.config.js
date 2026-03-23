/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#2C1A0E',
        gold: '#C8A96E',
        'gold-light': '#E8D4A8',
        cream: '#FAF6EE',
        parchment: '#F0E6D3',
        bark: '#6B3F1E',
        latte: '#B8865A',
        muted: '#8C6A4E',
        surface: '#FDF9F3',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      spacing: {
        22: '5.5rem',
      },
      borderRadius: {
        sketch: '2px',
      },
      boxShadow: {
        warm: '0 8px 32px rgba(44, 26, 14, 0.12)',
        'warm-lg': '0 20px 60px rgba(44, 26, 14, 0.18)',
        sketch: '3px 3px 0px #2c1a0e',
        'sketch-gold': '3px 3px 0px #c8a96e',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

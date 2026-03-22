/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { telugu: ['"Noto Sans Telugu"', 'sans-serif'], display: ['"Baloo 2"', 'sans-serif'] },
      colors: {
        forest: { 50:'#f0f9f0',100:'#dcf0dc',200:'#a8d8a8',300:'#6db86d',400:'#3d9a3d',500:'#1a6e1a',600:'#155815',700:'#0f4210',800:'#0a2e0a',900:'#061e06' },
        saffron: { 50:'#fff8ed',100:'#ffefd4',400:'#ff9c28',500:'#f07f0e',600:'#e06208',700:'#b84508' },
      },
      screens: { xs: '375px' },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-ring': 'pulseRing 1.5s ease-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        pulseRing: { '0%': { boxShadow: '0 0 0 0 rgba(220,38,38,0.5)' }, '100%': { boxShadow: '0 0 0 30px rgba(220,38,38,0)' } },
        fadeUp: { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}

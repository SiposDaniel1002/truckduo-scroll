/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        orange: {
          brand: '#f97316',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', '"Segoe UI"', 'Arial', 'sans-serif'],
        logo: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        // Brand-ticker faces approximating each manufacturer's wordmark.
        'brand-block': ['"Archivo Black"', 'Inter', 'sans-serif'],
        'brand-wide': ['Syncopate', 'Montserrat', 'sans-serif'],
        'brand-extended': ['Michroma', 'Montserrat', 'sans-serif'],
        'brand-condensed': ['Oswald', 'Inter', 'sans-serif'],
        'brand-slab': ['"Roboto Slab"', 'Georgia', 'serif'],
        'brand-garamond': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'brand-roman': ['Cinzel', 'Georgia', 'serif'],
      },
      keyframes: {
        // The track holds two identical copies, so -50% lands exactly on the start of copy two.
        marquee: {
          from: { transform: 'translate3d(0, 0, 0)' },
          to: { transform: 'translate3d(-50%, 0, 0)' },
        },
        'dialog-in': {
          from: { opacity: '0', transform: 'translateY(12px) scale(0.97)' },
          to: { opacity: '1', transform: 'none' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
        'dialog-in': 'dialog-in 220ms cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fade-in 220ms ease-out',
      },
    },
  },
  plugins: [],
}

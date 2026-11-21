/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        military: {
          dark: '#17251B',
          black: '#101410',
          darker: '#0B0F0B',
          card: 'rgba(23, 37, 27, 0.75)',
          cardHover: 'rgba(32, 51, 37, 0.85)',
          gold: '#C9A45C',
          goldLight: '#E2C27E',
          goldDark: '#9E7E36',
          olive: '#66734A',
          oliveDark: '#4A5435',
          oliveLight: '#8C9C68',
          khaki: '#8D7B68',
          ivory: '#F5F3E9',
          saffron: '#FF9933',
          triGreen: '#138808',
          border: 'rgba(201, 164, 92, 0.3)',
          borderHover: 'rgba(201, 164, 92, 0.7)',
        }
      },
      fontFamily: {
        military: ['"Cinzel"', 'serif'],
        heading: ['"Rajdhani"', '"Montserrat"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        stencil: ['"Black Ops One"', 'cursive']
      },
      backgroundImage: {
        'military-gradient': 'linear-gradient(135deg, #101410 0%, #17251B 50%, #101410 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C9A45C 0%, #F5E5C9 50%, #C9A45C 100%)',
        'tiranga-gradient': 'linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)',
        'tactical-grid': 'radial-gradient(rgba(201, 164, 92, 0.08) 1px, transparent 1px)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    },
  },
  plugins: [],
}

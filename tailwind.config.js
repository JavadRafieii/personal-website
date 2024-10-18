/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      // '2xl': '1536px',
      //  => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '0',
        lg: '0',
        xl: '0',
      },
    },
    extend: {
      colors: {
        'dark-gray': '#1f1f24',
        'dark-slate': '#272730',
        'earthy-green': '#3b413d',
        'semi-transparent-white': '#ffffff80',
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(270deg, rgba(255, 255, 255, 0.32) 0%, #fff 100%)',
      }
    },
  },
  plugins: [],
}
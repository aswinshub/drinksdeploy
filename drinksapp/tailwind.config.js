/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      
      oswald: ['Oswald', 'sans-serif'],
      'kelly-slab': ['"Kelly Slab"', 'serif']
    },

    extend: {},
  },
  plugins: [],
}


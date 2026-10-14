/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#e5282a',
          redHover: '#cc1f21',
          redDark: '#b51a1c',
          redLight: '#fee2e2',
        },
        navy: {
          950: '#0a0b0d',
          900: '#121417',
          850: '#1a1c21',
          800: '#23262d',
          700: '#323741',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Montserrat', 'system-ui', 'sans-serif'],
        display: ['Montserrat', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 25px rgba(0, 0, 0, 0.1)',
        'float': '0 12px 35px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#F5F5F5',
        secondary: '#364033',
        lightgreen: '#D6D984',
        stronggreen: '#D5D962',
        textcolor: '#0D0D0D',
        grayish: '#D9D9D9',
        reallygray: '#60665E',
        darkgreen: '#A3A65B',
      }
    },
    fontFamily: {
      rregular: ["Rubik-Regular", "sans-serif"],
      rsemi: ["Rubik-SemiBold", "sans-serif"],
      rbold: ["Rubik-Bold", "sans-serif"],
    }
  },
  plugins: [],
} 


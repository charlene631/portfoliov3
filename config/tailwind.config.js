/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  extend: {
    colors: {
      primary: "#020f12",      
        secondary: "#06135b",    
        highlight: "#93c5fd",   
        accent: "#0b3d2e",       
        accentLight: "#35aeef",  
    },
  },
},

  plugins: [],
};

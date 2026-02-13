/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Suas cores personalizadas
        brand: {
          green: '#137345',  // Verde Sólido
          purple: '#3b0058', // Roxo Sólido
          dark: '#000000',   // Dark Absoluto (OLED)
          light: '#f3f4f6',
        }
      },
      fontFamily: {
        // Vamos usar Inter, que é padrão de mercado e muito legível
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
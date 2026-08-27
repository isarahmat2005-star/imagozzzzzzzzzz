/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Fira Mono"', 'monospace'], // Memaksa font utama menjadi Fira Mono
      }
    },
  },
  plugins: [],
  // Mengaktifkan dark mode berbasis class (karena aplikasi Anda pakai fitur ini)
  darkMode: 'class', 
}

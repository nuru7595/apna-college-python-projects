/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        WorkSans: ["Work Sans", "serif"]
      },
      colors: {
        bg: '#4B8BBE',
        fg: '#FFD43B'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px"
      }
    }
  },
  plugins: [],
}


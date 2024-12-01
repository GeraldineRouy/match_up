/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        error : '#f72585',
        mumauve : '#b5179e',
        secondary : '#7209b7',
        muviolet : '#560bad',
        muviolet2 : '#480ca8',
        muindigo : '#3a0ca3',
        warning : '#3f37c9',
        muelectric : '#4361ee',
        primary : '#4895ef',
        success : '#4cc9f0'
      }
    },
  },
  plugins: [
      require('@tailwindcss/forms')],
}


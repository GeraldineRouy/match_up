/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        mupink : '#f72585',
        mumauve : '#b5179e',
        mubergine : '#7209b7',
        muviolet : '#560bad',
        muviolet2 : '#480ca8',
        muindigo : '#3a0ca3',
        mumarine : '#3f37c9',
        muelectric : '#4361ee',
        mucyan : '#4895ef',
        musky : '#4cc9f0'
      }
    },
  },
  plugins: [],
}


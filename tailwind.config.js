/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          2: '#E4ACA8',
          3: '#FDE2E1',
          4: '#FFF2F3',
          5: '#DFB6B4',
          6: '#e2cfceff',
        },
        rose: {
          50: '#fef2f3',
          100: '#fde6e8',
          200: '#fbd0d5',
          300: '#f7aab2',
          400: '#f27a8a',
          500: '#e94b64',
          600: '#d53355',
          700: '#b31d46',
          800: '#961a42',
          900: '#801a3f',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          650: '#d1a862',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['PT Serif', 'serif'],
      },
    },
  },
  plugins: [],
}

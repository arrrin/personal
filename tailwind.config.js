/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        yellow: '#f1b82d',
        blue: {
          DEFAULT: '#2d66f1',
          dark: '#002d7f'
        },
        gray: '#72757d'
      }
    }
  },
  plugins: [],
}


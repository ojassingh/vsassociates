/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back': "#F2F2F2",
        'primary': "#117CD9",
        'secondary': '#0460D9',
        'beige': '#A2A685',
        'dark': '#274001'
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%'
      },
      spacing: {
        '900': '90%',
      }
    },
  },
  plugins: [],
}

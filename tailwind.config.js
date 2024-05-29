/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'eb-garamond': ['EB Garamond', 'serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'history-text': '1100px',
      },
      fontSize: {
        'responsive-7xl': 'clamp(2rem, 5vw + 1rem, 4.5rem)',
      },
      colors: {
        montageBlue: 'rgb(var(--light-blue) / <alpha-value>)',
        motnageBeige: 'rgb(var(--beige) / <alpha-value>)',
        montageYellow: 'rgb(var(--golden-yellow) / <alpha-value>)',
        montageOrange: 'rgb(var(--orange) / <alpha-value>)',
        montageGreen: 'rgb(var(--dark-green) / <alpha-value>)',

      }
    },
  },
  plugins: [],
};

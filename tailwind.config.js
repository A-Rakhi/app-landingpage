module.exports = {
  mode:'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '560px',
      // => @media (min-width: 640px) { ... }

      'md': '768px' ,

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

    fontFamily: {
      'display': ['Archivo Black',' sans-serif'],
      'body': ['Open Sans', 'DM Sans'],
     },

     backgroundColor: theme => ({
      'danger': '#F17B39',
     }),

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  purge: ['./views/**/*.hbs'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}

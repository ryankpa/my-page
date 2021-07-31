module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'yoru': "url('./assets/bg_pattern4_yoru.png')",
       })
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
    },
    height: {
      'yoru': '150px',
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

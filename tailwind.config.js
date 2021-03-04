module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        '2-max': 'repeat(2, max-content)',
        '3-max': 'repeat(3, max-content)',
        '4-max': 'repeat(4, max-content)',
        '5-max': 'repeat(5, max-content)',
      },
      outline: {
        hidden: 'none',
      },
    },
    screens: {
      tb: '481px',
      pc: '897px',
      wpc: '1321px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

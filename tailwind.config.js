/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        inherit: 'inherit',
      },
      gridTemplateColumns: {
        '2-max': 'repeat(2, max-content)',
        '3-max': 'repeat(3, max-content)',
        '4-max': 'repeat(4, max-content)',
        '5-max': 'repeat(5, max-content)',
      },
      outline: {
        'white-line': '1px solid white',
      },
      transitionProperty: {
        'bg-image': 'background-image',
        directions: 'right left top bottom',
        'max-w': 'max-width',
        filter: 'filter',
      },
      maxHeight: {
        'work-details-pc': 'calc(100vh - 8rem)',
      },
      maxWidth: {
        24: '6rem',
        'work-details-pc': '56rem',
      },
      minHeight: {
        section: 'calc(100vh - 4rem)',
      },
      width: {
        'work-details-pc': 'calc(100% - 8rem)',
      },
    },
    screens: {
      tb: '768px',
      pc: '992px',
      wpc: '1200px',
    },
    backgroundImage: () => ({
      bluesky: 'linear-gradient(0deg, #7682ff 0%, #2634ff 100%)',
      sunset: 'linear-gradient(0deg, #ff9d27 0%, #2649ff 100%)',
      night: 'linear-gradient(0deg, #000693 0%, #00023c 100%)',
    }),
  },
  variants: {
    extend: {
      boxShadow: ['dark', 'focus'],
      opacity: ['dark', 'group-focus'],
      scale: ['hover', 'focus'],
    },
  },
  plugins: [],
};

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
      colors: {
        emailIcon: '#8A001B',
        facebookIcon: '#3B5998',
        githubIcon: '#24292e',
        instagramIcon: '#C13584',
        twitterIcon: '#1DA1F2',
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
        'border-color': 'border-color',
        'background-color': 'background-color',
        fill: 'fill',
        width: 'width',
      },
      maxHeight: {
        'work-details-pc': 'calc(100vh - 8rem)',
        'work-details-sp': 'calc(100vh - 4rem)',
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
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      'md-white':
        '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
      lg:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    fill: (theme) => ({
      current: 'currentColor',
      white: '#fff',
      emailIcon: theme('colors.emailIcon'),
      facebookIcon: theme('colors.facebookIcon'),
      githubIcon: theme('colors.githubIcon'),
      instagramIcon: theme('colors.instagramIcon'),
      twitterIcon: theme('colors.twitterIcon'),
    }),
  },
  variants: {
    extend: {
      backgroundColor: ['group-focus'],
      boxShadow: ['dark', 'focus'],
      opacity: ['dark', 'group-focus'],
      scale: ['hover', 'focus'],
      fill: ['group-hover', 'group-focus'],
      ringWidth: ['hover'],
      width: ['group-hover', 'group-focus'],
    },
  },
  plugins: [],
};

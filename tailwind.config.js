module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: '#7B5BFB',
        secondary: '#FFBC00',

        'accent-1': '#0CB2C0',
        'accent-1-darker': '#068792',
        'accent-2': '#F725A0',
        'faespe-gray': '#E5E5E5',
        'faespe-green': '#00B894',

        purple: '#383193',
        'purple-light-1': '#635DB6',
        'purple-light': '#A7A3DB',
        'purple-lighter': '#dcd9fc',
        'purple-lightest': '#dcd9fc',
        'purple-dark': '#201C57',
        'purple-darker': '#100C3C'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
};

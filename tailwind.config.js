module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#4b57db',
      },
      maxWidth: {
        avatar: '150px',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};

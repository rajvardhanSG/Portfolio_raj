/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bgimg1': "url('images/Picsart_25-01-01_22-25-29-215.png')",
        'bgimg2': "url('images/Picsart_25-01-01_22-22-57-746.png')",
      },
      colors: {
          'custom-green': '#61b752',
          'custom-pink': '#b54769',
        },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.tab-link': {
          marginRight: '50px',
          fontSize: '18px',
          fontWeight: '500',
          cursor: 'pointer',
          position: 'relative',
          '&::after': {
            content: '""',
            width: '0',
            height: '3px',
            backgroundColor: '#61b752',
            position: 'absolute',
            left: '0',
            bottom: '-8px',
            transition: 'width 0.5s',
          },
          '&.active-link::after': {
            width: '50%',
          },
        },
        '.tab-contents': {
          display: 'none',
          '&.active-tab': {
            display: 'block',
          },
          'ul li': {
            listStyle: 'none',
            margin: '10px 0',
            'span': {
              color: '#b54769',
              fontSize: '14px',
            },
          },
        },
      });
    },
  ],
}

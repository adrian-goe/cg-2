module.exports = {
  purge: {
    content: ['./src/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        fontFamily: {
            display: ['Poppins', 'system-ui', 'sans-serif'],
            body: ['Poppins', 'system-ui', 'sans-serif'],
        },
        colors: {
            primary: {
                50: '#faf5ff',
                100: '#f3e8ff',
                200: '#e9d5ff',
                300: '#d8b4fe',
                400: '#c084fc',
                500: '#a855f7',
                600: '#9333ea',
                700: '#7e22ce',
                800: '#6b21a8',
                900: '#581c87',
            },
            secondary: {
                50: '#fdf2f8',
                100: '#fce7f3',
                200: '#fbcfe8',
                300: '#f9a8d4',
                400: '#f472b6',
                500: '#ec4899',
                600: '#db2777',
                700: '#be185d',
                800: '#9d174d',
                900: '#831843',
            },
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

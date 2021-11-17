
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa']
      },
      colors: {
        'transparent' : 'transparent',
        'white' : '#fefefe',

        'primary' : {
          '100' : '#3cfae1',
          '200' : '#32f0d7',
          '300' : '#28e6cd',
          '400' : '#1edcc3',
          '500' : '#14d2b9',
          '600' : '#22c5aa',
          '700' : '#00bea5',
          '800' : '#1ebaa5',
          '900' : '#00aa91',
        },

        'secondary' : {
          '100' : '#284b78',
          '200' : '#1e416e',
          '300' : '#143764',
          '400' : '#0a2d5a',
          '500' : '#002350',
          '600' : '#001946',
          '700' : '#000f3c',
          '800' : '#000532',
          '900' : '#0000258',
        },

        'tertiry' : {
          '100' : '#9399ff',
          '200' : '#898fff',
          '300' : '#7f85ff',
          '400' : '#757bff',
          '500' : '#6b71ff',
          '600' : '#6167f5',
          '700' : '#575ded',
          '800' : '#4d53e1',
          '900' : '#4349d7',
        }


      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

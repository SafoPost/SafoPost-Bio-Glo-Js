const path = require('path');

module.exports = {
  entry: {
    main: './src/index'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/dist'
  }
};
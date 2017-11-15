const path = require('path');

const config = {
  entry: './src/index.bs.js',
  output: {
    path: path.join(__dirname, "build"),
    filename: 'index.js',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }]
    }]
  },
  devServer: {
    compress: true,
    hot: true,
    port: 9000,
    open: true
  }
};


module.exports = config;
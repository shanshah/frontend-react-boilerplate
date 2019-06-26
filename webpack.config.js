// var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    publicPath : '/dist/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  devServer: {
    historyApiFallback: true
  }
};
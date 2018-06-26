var path = require('path');
// var webpack = require('webpack');

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
        // query: {
        //   presets: ['es2015', 'react'],
        //   query: {
        //     plugins: ['transform-decorators-legacy' ],
        //     presets: ['es2015', 'stage-0', 'react']
        //   }
        // }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  }
};
const path = require('path');
const FlowtypePlugin = require('flowtype-loader/plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundling.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader', 'flowtype-loader'],
    }],
  },
  plugins: [
    new FlowtypePlugin(),
  ],
  target: 'node',
  devtool: 'cheap-source-map',
  mode: 'development',
};

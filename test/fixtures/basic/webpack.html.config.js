'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylishReporter = require('../../../index');

module.exports = {
  // mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  entry: './entry.js',
  output: {
    filename: './output.js',
    path: path.join(__dirname, '/dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Fixture'
    }),
    new webpack.NamedModulesPlugin(),
    new StylishReporter()
  ],
  stats: 'none'
};

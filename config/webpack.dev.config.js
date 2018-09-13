
const merge = require('webpack-merge')
const base = require('./webpack.base.config.js')
const webpack = require('webpack');


module.exports = merge(base, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js', 
  },
  devtool: 'inline-source-map', 
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), 
  ]
})
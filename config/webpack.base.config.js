const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack');

const path = require('path')
const packagePath = path.resolve(__dirname, '..')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(packagePath, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({title: 'Your Name Here!'}),
    new CleanWebpackPlugin(['dist'], { root: packagePath }),
  ]
}
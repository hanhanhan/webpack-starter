const HtmlWebpackPlugin = require('html-webpack-plugin') //installed via npm
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

const path = require('path')
const packagePath = path.resolve(__dirname, '..')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(packagePath, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Your Name Here!' }),
    new CleanWebpackPlugin(['dist'], { root: packagePath }),
  ],
}

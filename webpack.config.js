const path           = require('path');
const webpack        = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const pkg            = require('./package.json');

const banner = `
/*!
 * ${pkg.name} - ${pkg.version}
 * ${pkg.homepage}
 */
`.trim();

const config = {
  entry: {
    'magic-address': './src/magic-address.js',
    'magic-address.min': './src/magic-address.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'MagicAddress',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true
          }
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      include: /\.min\.js$/
    }),
    new webpack.BannerPlugin({
      raw: true,
      banner: banner
    })
  ]
};

module.exports = config;

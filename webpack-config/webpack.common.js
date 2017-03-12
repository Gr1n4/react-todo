const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const _root = path.resolve(__dirname, '..');
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}
const helpers = {
  root: root
};

module.exports = {
  entry: {
    'vendor': './src/vendor.js',
    'app': './src/main.js'
  },

  resolve: {
    extensions: ['.jsx', '.js']
  },

  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      }, // TODO: Need finished extract css
      // {
      //   test: /\.sass$/,
      //   exclude: helpers.root('src', 'app'),
      //   loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'style-loader!css-loader?sourceMap!resolve-url-loader!sass-loader?sourceMap'})
      // },
      {
        test: /\.sass$/,
        // include: helpers.root('src', 'app'),
        loader: 'style-loader!css-loader?sourceMap!resolve-url-loader!sass-loader?sourceMap'
      },
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    })
  ]
};
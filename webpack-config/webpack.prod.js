const webpack = require('webpack')
    , webpackMerge = require('webpack-merge')
    , ExtractTextPlugin = require('extract-text-webpack-plugin')
    , commonConfig = require('./webpack.common.js')
    , helpers = require('./helpers')
    , ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'none',

  output: {
    path: helpers.root('static'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        keep_fnames: true
      }
    }),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
});
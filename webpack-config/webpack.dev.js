const webpackMerge = require('webpack-merge')
    , ExtractTextPlugin = require('extract-text-webpack-plugin')
    , commonConfig = require('./webpack.common.js')
    , helpers = require('./helpers')
    , _devServerPort = 1337;

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('static'),
    publicPath: `http://localhost:${_devServerPort}/`,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    port: _devServerPort,
    inline: false
  }
});
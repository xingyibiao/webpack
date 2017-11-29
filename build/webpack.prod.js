/*
 * @Author: xingyibiao 
 * @Date: 2017-09-20 11:24:02 
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-11-29 16:07:22
 */
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.base')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const utils = require('./utils')
const config = require('../config')
const env = config.build.env
const path = require('path')


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

// const extractSass = new ExtractTextPlugin({
//   filename: utils.assetsPath('css/[name].[contenthash].css'),
// })

const cssLoader = {
  loader: 'css-loader',
  options: {
    minimize: true,
    sourceMap: config.build.productionSourceMap
  }
}

module.exports = merge(common, {
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // new UglifyJSPlugin(),
    // extractSass,
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
  ]
})
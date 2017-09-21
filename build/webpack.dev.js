/*
 * @Author: xingyibiao 
 * @Date: 2017-09-20 11:21:49 
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-09-21 10:35:32
 */
const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.base')
var baseWebpackConfig = require('./webpack.base')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const utils = require('./utils')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})
module.exports= merge(common,{
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ]
})
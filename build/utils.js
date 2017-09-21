/*
 * @Author: xingyibiao 
 * @Date: 2017-09-20 14:35:59 
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-09-20 14:38:04
 */
const path = require('path')
const config = require('../config')
exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}
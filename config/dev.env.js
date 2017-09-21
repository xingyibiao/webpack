/*
 * @Author: xingyibiao 
 * @Date: 2017-09-20 14:38:29 
 * @Last Modified by:   xingyibiao 
 * @Last Modified time: 2017-09-20 14:38:29 
 */
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})

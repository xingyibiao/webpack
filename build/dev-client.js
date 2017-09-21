/* eslint-disable */
/*
 * @Author: xingyibiao 
 * @Date: 2017-09-21 10:32:08 
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-09-21 11:14:15
 */
require('eventsource-polyfill')
const hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
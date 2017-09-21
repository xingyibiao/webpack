/*
 * @Author: xingyibiao 
 * @Date: 2017-09-21 10:32:08 
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-09-21 10:33:23
 */
/* eslint-disable */
require('eventsource-polyfill')
const hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
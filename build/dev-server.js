/* eslint-disable */
/*
 * @Author: xingyibiao 
 * @Date: 2017-09-21 09:04:48 
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-09-21 11:15:15
 */
const path = require('path')
const express = require('express')
const app = express()
const opn = require('opn')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const config = require('../config')
const webpackConfig = require('./webpack.dev')
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)

if(!process.env.NODE_ENV) {
  // process.env.NODE_ENV = JSON.parse(config.dev.env)
  process.env.NODE_ENV = 'development'
}

const port = process.env.port || config.dev.port
const uri = `http://localhost:${port}`
const autoOpenBrowser = !!config.dev.autoOpenBrowser
const proxyTable = config.dev.proxyTable

const compiler = webpack(webpackConfig)

// 开发服务器
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
    hotMiddleware.publish({action: 'reload'})
    cb()
  })
})

Object.keys(proxyTable).forEach(context => {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = {target: options}
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

app.use(require('morgan')('short'))
app.use(devMiddleware)
app.use(hotMiddleware)

// 静态资源
app.use(staticPath, express.static('./static'))

console.log('> 猛禽系统正在启动......')
var _resolve
const readyPromise = new Promise(resolve => {
  _resolve = resolve
})

devMiddleware.waitUntilValid(() => {
  console.log(`> Listening at ${uri}`)
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})


var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
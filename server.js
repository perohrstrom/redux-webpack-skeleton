var express = require('express')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = express()

// Slight variation here from Urbanvikingr Gist
// Instead of default port 3000, process.env to determine local machine
// Default Port
var port = process.env.PORT || 3000;
var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

// To serve static files
app.use(express.static('public'))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.log('listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})

var express = require('express')
var compression = require('compression')
var logger = require('morgan')
var path = require('path')
var cors = require('cors')

var app = express()

var port = process.env.PORT || 3000
var root = path.join(__dirname, './../public')
var logLevel = process.env.NODE_ENV === 'production' ? 'combined' : 'dev'

app.enable('trust proxy')

app.use(compression())
app.use(logger(logLevel))

app.options('/api/currentTime', cors())
app.get('/api/currentTime', cors(), function (req, res) {
  res.send({
    time: new Date()
  })
})

app.use('/', express.static(root, {
  maxage: 31557600
}))

app.use(function (req, res, next) {
  if (req.method === 'GET' && req.accepts('html')) {
    res.header('Cache-Control', 'max-age=60, must-revalidate, private')
    res.sendFile('index.html', {root: root})
  } else {
    next()
  }
})

app.listen(port, function () {
  console.log('Server running on port %s', port)
})

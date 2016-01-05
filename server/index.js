'use strict'

const http = require('http')
const express = require('express')
const compression = require('compression')
const logger = require('morgan')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const webpack = require('webpack')

const port = process.env.PORT || 3000
const root = path.join(__dirname, './../public')
const logLevel = process.env.NODE_ENV === 'production' ? 'combined' : 'dev'

const app = express()
const router = express.Router()
const server = http.createServer(app)

if (process.env.NODE_ENV === 'development') {
  const config = require('../webpack.config')
  const compiler = webpack(config)

  app.use(require('webpack-dev-middleware')(compiler, {
    // noInfo: true,
    publicPath: config.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler))
}

app.enable('trust proxy')

app.use(compression())
app.use(logger(logLevel))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

router.get('/currentTime', cors(), (req, res) => {
  res.status(200).json({
    time: new Date()
  })
})

app.use('/api', router)

app.use('/', express.static(root, {
  maxage: 31557600
}))

app.use((req, res, next) => {
  if (req.method === 'GET' && req.accepts('html')) {
    res.header('Cache-Control', 'max-age=60, must-revalidate, private')
    res.sendFile('index.html', {root: root})
  } else {
    next()
  }
})

server.listen(port, (err) => {
  if (err) {
    console.log(err)
    // return
  }

  console.log('Server running on port %s', port)
})

'use strict'

const express = require('express')
const compression = require('compression')
const logger = require('morgan')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()

const port = process.env.PORT || 3000
const root = path.join(__dirname, './../public')
const logLevel = process.env.NODE_ENV === 'production' ? 'combined' : 'dev'

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

app.listen(port, () => {
  console.log('Server running on port %s', port)
})

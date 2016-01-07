'use strict'

module.exports = (karma) =>
  karma.set({
    basePath: '.',
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      'app/scripts/**/__tests__/*'
    ],
    preprocessors: {
      'app/scripts/**/__tests__/*': ['webpack']
    },
    webpack: require('./webpack.config.js'),
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: process.env.TRAVIS_CI === 'true',
    browsers: ['PhantomJS'],
    reporters: ['nyan']
  })

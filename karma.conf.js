module.exports = function (config) {
  config.set({
    basePath: '.',
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      'app/scripts/**/__tests__/*'
    ],
    preprocessors: {
      'app/scripts/**/__tests__/*': ['webpack']
    },
    webpack: require('./webpack.config.js'),
    singleRun: process.env.TRAVIS_CI === 'true',
    browsers: [(process.env.TRAVIS_CI === 'true' ? 'Firefox' : 'Chrome')],
    reporters: ['nyan'],
    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-sinon-chai'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-nyan-reporter')
    ]
  })
}

import webpackConfig from './webpack';

import karmaWebpack from 'karma-webpack';
import karmaMocha from 'karma-mocha';
import karmaSinonChai from 'karma-sinon-chai';
import karmaChromeLauncher from 'karma-chrome-launcher';
import karmaFirefoxLauncher from 'karma-firefox-launcher';
import karmaNyanReporter from 'karma-nyan-reporter';

export default {
  basePath: '.',
  frameworks: ['mocha', 'sinon-chai'],
  files: [
    'app/assets/scripts/**/__tests__/*'
  ],
  preprocessors: {
    'app/assets/scripts/**/__tests__/*': ['webpack']
  },
  webpack: webpackConfig('test'),
  singleRun: process.env.TRAVIS_CI === 'true',
  browsers: [(process.env.TRAVIS_CI === 'true' ? 'Firefox' : 'Chrome')],
  reporters: ['nyan'],
  plugins: [
    karmaWebpack,
    karmaMocha,
    karmaSinonChai,
    karmaChromeLauncher,
    karmaFirefoxLauncher,
    karmaNyanReporter
  ]
};

'use strict';

var config = require('./');

module.exports = {
  src: config.sourceAssets + '/styles/**/*.{sass,scss}',
  dest: config.publicAssets + '/styles',
  settings: {
    errLogToConsole: true,
    includePaths: ['bower_components', 'app/assets/styles']
  },
  autoprefixer: {
    browsers: ['last 2 version']
  }
};

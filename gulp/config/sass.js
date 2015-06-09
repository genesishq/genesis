'use strict';

var config = require('./');

module.exports = {
  autoprefixer: { browsers: ['last 2 version'] },
  src: config.sourceAssets + '/styles/**/*.{sass,scss}',
  dest: config.publicAssets + '/styles'
};

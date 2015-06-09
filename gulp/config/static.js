'use strict';

var config = require('./');

module.exports = {
  watch: config.sourceDirectory + '/static/**',
  src: [config.sourceDirectory + '/static/**'],
  dest: config.publicDirectory
};

'use strict';

var gulp = require('gulp');
var logger = require('../lib/compileLogger');
var webpack = require('webpack');
var config = require('../config/webpack')('production');

gulp.task('webpack:production', webpackProduction);

function webpackProduction(callback) {
  webpack(config, function(err, stats) {
    logger(err, stats);
    callback();
  });
}

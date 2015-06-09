'use strict';

var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('clean', clean);

function clean(callback) {
  del([config.publicDirectory], callback);
}

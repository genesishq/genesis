'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');
var handleErrors = require('../lib/handleErrors');
var config = require('../config/sass');

gulp.task('sass:production', sassProduction);

function sassProduction() {
  var processors = [
    autoprefixer(config.autoprefixer),
    mqpacker,
    csswring
  ];

  return gulp.src(config.src)
    .pipe(sass())
    .pipe(postcss(processors))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
}
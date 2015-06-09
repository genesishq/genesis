'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var changed = require('gulp-changed');
var handleErrors = require('../lib/handleErrors');
var config = require('../config/static');

gulp.task('static', staticTask);

function staticTask() {
  return gulp.src(config.src, {dot: true})
    .pipe(changed(config.dest))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
}

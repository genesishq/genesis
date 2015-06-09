'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var config = require('../config/images');

gulp.task('images', images);

function images() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
}

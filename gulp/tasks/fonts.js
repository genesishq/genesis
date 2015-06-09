'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var changed = require('gulp-changed');
var config = require('../config/fonts');

gulp.task('fonts', fonts);

function fonts() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
}

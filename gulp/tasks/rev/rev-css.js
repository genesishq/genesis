'use strict';

var gulp = require('gulp');
var rev = require('gulp-rev');
var config = require('../../config');

gulp.task('rev-css', revCss);

function revCss() {
  return gulp.src(config.publicDirectory + '/**/*.css')
    .pipe(rev())
    .pipe(gulp.dest(config.publicDirectory))
    .pipe(rev.manifest('public/rev-manifest.json', {merge: true}))
    .pipe(gulp.dest(''));
}

'use strict';

var gulp = require('gulp');
var revReplace = require('gulp-rev-replace');
var config = require('../../config');

gulp.task('update-html', updateHtml);

function updateHtml() {
  var manifest = gulp.src(config.publicDirectory + "/rev-manifest.json");

  return gulp.src(config.publicDirectory + '/**/*.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(config.publicDirectory));
}

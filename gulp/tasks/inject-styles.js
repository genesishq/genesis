var gulp = require('gulp');
var styleInject = require('gulp-style-inject');
var handleErrors = require('../lib/handleErrors');
var config = require('../config');

gulp.task('inject-styles', injectStyles);

function injectStyles() {
  return gulp.src(config.sourceDirectory + '/static/index.html')
    .on('error', handleErrors)
    .pipe(styleInject())
    .pipe(gulp.dest(config.publicDirectory));
}

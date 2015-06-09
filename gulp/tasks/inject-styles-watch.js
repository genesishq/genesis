var gulp = require('gulp');
var styleInject = require('gulp-style-inject');
var browserSync = require('browser-sync');
var handleErrors = require('../lib/handleErrors');
var config = require('../config');

gulp.task('inject-styles:watch', ['sass:development', 'static'], injectStylesWatch);

function injectStylesWatch() {
  return gulp.src(config.sourceDirectory + '/static/index.html')
    .on('error', handleErrors)
    .pipe(styleInject())
    .pipe(gulp.dest(config.publicDirectory))
    .pipe(browserSync.reload({stream: true}));
}

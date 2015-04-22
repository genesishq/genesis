var browserSync = require('browser-sync');
var config = require('../config/static');
var gulp = require('gulp');
var handleErrors = require('../lib/handleErrors');

gulp.task('static', static);

function static() {
  return gulp.src(config.src, {dot: true})
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
}

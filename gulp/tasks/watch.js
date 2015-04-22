var gulp = require('gulp');
var static = require('../config/static');
var images = require('../config/images');
var sass = require('../config/sass');
var fonts = require('../config/fonts');
var watch = require('gulp-watch');

gulp.task('watch', ['browserSync'], watchTask);

function watchTask() {
  watch(images.src, function() {
    gulp.start('images');
  });

  watch(sass.src, function() {
    gulp.start('sass:development');
  });

  watch(fonts.src, function() {
    gulp.start('fonts');
  });

  watch(static.watch, function() {
    gulp.start('static');
  });
}

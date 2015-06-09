'use strict';

var gulp = require('gulp');
var static = require('../config/static');
var images = require('../config/images');
var sass = require('../config/sass');
var fonts = require('../config/fonts');

gulp.task('watch', ['browserSync'], watchTask);

function watchTask() {
  gulp.watch(images.src, ['images']);
  gulp.watch(sass.src, ['inject-styles:watch']);
  gulp.watch(fonts.src, ['fonts']);
  gulp.watch(static.watch, ['static', 'inject-styles']);
}

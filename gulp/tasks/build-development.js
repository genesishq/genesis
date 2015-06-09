var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build:development', build);

function build(callback) {
  gulpSequence(
    'clean',
    ['fonts', 'images', 'sass:development'],
    'webpack:development',
    'static',
    'inject-styles',
    ['watch', 'browserSync'],
    callback
  );
}

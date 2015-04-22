var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build:production', build);

function build(callback) {
  process.env.NODE_ENV = 'production';

  gulpSequence(
    'karma',
    'clean',
    ['fonts', 'images'],
    ['sass:production', 'webpack:production'],
    'static',
    'rev',
    callback
  );
}

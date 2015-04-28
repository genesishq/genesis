var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build:development', build);

function build(callback) {
  gulpSequence(
    'clean',
    ['fonts', 'images'],
    ['webpack:development', 'static'],
    ['watch', 'browserSync'],
    callback
  );
}

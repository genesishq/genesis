import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build:production', callback => {
  process.env.NODE_ENV = 'production';

  gulpSequence(
    'karma',
    'clean',
    ['fonts', 'images', 'sass:production'],
    'webpack:production',
    'static',
    'inject-styles',
    'rev',
    callback
  );
});

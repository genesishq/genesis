import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build:development', callback => {
  gulpSequence(
    'clean',
    // ['fonts', 'images', 'sass:development'],
    // 'static',
    'webpack:development',
    // 'inject-styles',
    ['watch'],
    callback
  );
});

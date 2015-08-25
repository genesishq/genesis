import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build:development', callback => {
  gulpSequence(
    'clean',
    ['fonts', 'images', 'sass:development'],
    'webpack:development',
    'static',
    'inject-styles',
    ['watch', 'browserSync'],
    callback
  );
});

import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';
import open from 'open';
import config from '../config/deploy';

gulp.task('deploy', ['build:production'], () => {
  return gulp.src(config.src)
    .pipe(ghPages())
    .on('end', function() {
      open(config.url);
    });
});

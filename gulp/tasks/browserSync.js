import gulp from 'gulp';
import browserSync from 'browser-sync';
import spa from 'browser-sync-spa';
import config from '../config/browserSync';

gulp.task('browserSync', () => {
  browserSync.use(spa());

  return browserSync(config);
});

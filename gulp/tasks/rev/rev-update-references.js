import gulp from 'gulp';
import revReplace from 'gulp-rev-replace';
import config from '../../config';

gulp.task('rev-update-references', () => {
  const manifest = gulp.src(config.publicDirectory + "/rev-manifest.json");

  return gulp.src(config.publicDirectory + '/**/**.{css,js}')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(config.publicDirectory));
});

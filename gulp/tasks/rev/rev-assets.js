import gulp from 'gulp';
import rev from 'gulp-rev';
import config from '../../config';

gulp.task('rev-assets', () => {
  // Ignore what we dont want to hash in this step
  const ignoreFiles = '!' + config.publicDirectory + '/**/*+(css|js|json|html|ico|txt|map)';

  return gulp.src([config.publicDirectory + '/**/*', ignoreFiles])
    .pipe(rev())
    .pipe(gulp.dest(config.publicDirectory))
    .pipe(rev.manifest('public/rev-manifest.json', {merge: true}))
    .pipe(gulp.dest(''));
});

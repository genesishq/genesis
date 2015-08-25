import gulp from 'gulp';
import rev from 'gulp-rev';
import config from '../../config';

gulp.task('rev-css', () => {
  return gulp.src(config.publicDirectory + '/**/*.css')
    .pipe(rev())
    .pipe(gulp.dest(config.publicDirectory))
    .pipe(rev.manifest('public/rev-manifest.json', {merge: true}))
    .pipe(gulp.dest(''));
});

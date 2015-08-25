import gulp from 'gulp';
import styleInject from 'gulp-style-inject';
import handleErrors from '../lib/handleErrors';
import config from '../config';

gulp.task('inject-styles', () => {
  return gulp.src(config.sourceDirectory + '/index.html')
    .on('error', handleErrors)
    .pipe(styleInject())
    .pipe(gulp.dest(config.publicDirectory));
});

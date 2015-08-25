import gulp from 'gulp';
import browserSync from 'browser-sync';
import changed from 'gulp-changed';
import config from '../config/fonts';

gulp.task('fonts', () => {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});

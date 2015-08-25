import gulp from 'gulp';
import browserSync from 'browser-sync';
import imagemin from 'gulp-imagemin';
import changed from 'gulp-changed';
import config from '../config/images';

gulp.task('images', () => {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});

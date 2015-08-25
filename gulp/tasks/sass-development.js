import gulp from 'gulp';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import handleErrors from '../lib/handleErrors';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer-core';
import config from '../config/sass';

gulp.task('sass:development', () => {
  const processors = [autoprefixer(config.autoprefixer)];

  return gulp.src(config.src)
    .pipe(sass())
    .on('error', handleErrors)
    .pipe(postcss(processors))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});

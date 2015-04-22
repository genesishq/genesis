var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var handleErrors = require('../lib/handleErrors');
var config = require('../config/sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');

gulp.task('sass:development', sassDevelopment);

function sassDevelopment() {
  var processors = [autoprefixer(config.autoprefixer)];

  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass(config.settings))
    .pipe(postcss(processors))
    .on('error', handleErrors)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
}

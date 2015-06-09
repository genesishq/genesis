var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var handleErrors = require('../lib/handleErrors');
var config = require('../config/sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');

gulp.task('sass:development', sassDevelopment);

function sassDevelopment() {
  var processors = [autoprefixer(config.autoprefixer)];

  return gulp.src(config.src)
    .pipe(sass())
    .pipe(postcss(processors))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
}

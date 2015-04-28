var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var handleErrors = require('../lib/handleErrors');
var config = require('../config/sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var postcssImport = require('postcss-import');
var postcssMediaMinmax = require('postcss-media-minmax');
var postcssMixins = require('postcss-mixins');
var postcssNested = require('postcss-nested');
var postcssSimpleExtend = require('postcss-simple-extend');
var postcssSimpleVars = require('postcss-simple-vars');

gulp.task('sass:development', sassDevelopment);

function sassDevelopment() {
  var processors = [
    postcssImport,
    postcssMixins,
    postcssSimpleVars,
    postcssSimpleExtend,
    postcssMediaMinmax,
    postcssNested,
    autoprefixer(config.autoprefixer)
  ];

  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    // .pipe(sass(config.settings))
    .pipe(postcss(processors))
    .on('error', handleErrors)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
}

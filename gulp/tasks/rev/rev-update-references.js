'use strict';

var gulp = require('gulp');
var revReplace = require('gulp-rev-replace');
var config = require('../../config');

gulp.task('rev-update-references', revUpdateReferences);

function revUpdateReferences() {
  var manifest = gulp.src(config.publicDirectory + "/rev-manifest.json");

  return gulp.src(config.publicDirectory + '/**/**.{css,js}')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(config.publicDirectory));
}

'use strict';

var gulp = require('gulp');
var rev = require('gulp-rev');
var config = require('../../config');

gulp.task('rev-assets', revAssets);

function revAssets() {
  // Ignore what we dont want to hash in this step
  var ignoreFiles = '!' + config.publicDirectory + '/**/*+(css|js|json|html|ico|txt|map)';

  return gulp.src([config.publicDirectory + '/**/*', ignoreFiles])
    .pipe(rev())
    .pipe(gulp.dest(config.publicDirectory))
    .pipe(rev.manifest('public/rev-manifest.json', {merge: true}))
    .pipe(gulp.dest(''));
}

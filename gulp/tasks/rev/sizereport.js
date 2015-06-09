'use strict';

var gulp = require('gulp');
var repeatString = require('../../lib/repeatString');
var sizereport = require('gulp-sizereport');
var config = require('../../config');

gulp.task('size-report', revSizereport);

function revSizereport() {
  var hashedFiles = '/**/*-' + repeatString('[a-z,0-9]', 8)  + '*.*';

  return gulp.src([config.publicAssets + hashedFiles, '*!rev-manifest.json'])
    .pipe(sizereport({
        gzip: true
    }));
}

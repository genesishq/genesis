var gulp = require('gulp');
var config = require('../../config');
var revReplace = require('gulp-rev-replace');

gulp.task('update-html', ['rev-css'], function() {
  var manifest = gulp.src(config.publicDirectory + "/rev-manifest.json");

  return gulp.src(config.publicDirectory + '/**/*.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(config.publicDirectory));
});

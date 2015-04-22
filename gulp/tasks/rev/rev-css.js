var config = require('../../config');
var gulp = require('gulp');
var rev = require('gulp-rev');

gulp.task('rev-css', ['rev-update-references'], function() {
  return gulp.src(config.publicDirectory + '/**/*.css')
    .pipe(rev())
    .pipe(gulp.dest(config.publicDirectory))
    .pipe(rev.manifest('public/rev-manifest.json', {merge: true}))
    .pipe(gulp.dest(''));
});

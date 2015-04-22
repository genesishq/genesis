var config = require('../../config');
var gulp = require('gulp');
var rev = require('gulp-rev');

gulp.task('rev-assets', function() {
  // Ignore what we dont want to hash in this step
  var ignoreFiles = '!' + config.publicDirectory + '/**/*+(css|js|json|html|ico|txt|map)';

  return gulp.src([config.publicDirectory + '/**/*', ignoreFiles])
    .pipe(rev())
    .pipe(gulp.dest(config.publicDirectory))
    .pipe(rev.manifest('public/rev-manifest.json', {merge: true}))
    .pipe(gulp.dest(''));
});

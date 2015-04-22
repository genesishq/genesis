var browserSync = require('browser-sync');
var gulp = require('gulp');
var config = require('../config/browserSync');

gulp.task('browserSync', browserSyncTask);

function browserSyncTask() {
  return browserSync(config);
}

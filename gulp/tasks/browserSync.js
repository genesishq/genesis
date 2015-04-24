var browserSync = require('browser-sync');
var spa = require('browser-sync-spa');
var gulp = require('gulp');
var config = require('../config/browserSync');

gulp.task('browserSync', browserSyncTask);

function browserSyncTask() {
  browserSync.use(spa());

  return browserSync(config);
}

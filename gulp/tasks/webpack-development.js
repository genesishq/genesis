import gulp from 'gulp';
import logger from '../lib/compileLogger';
import webpack from 'webpack';
import browserSync from 'browser-sync';
import config from '../config/webpack';

gulp.task('webpack:development', callback => {
  let built = false;

  webpack(config('development'))
    .watch(200, (err, stats) => {
      // logger(err, stats);
      browserSync.reload();
      // On the initial compile, let gulp know the task is done
      if (!built) {
        built = true;
        callback();
      }
    });
});

import gulp from 'gulp';
import logger from '../lib/compileLogger';
import webpack from 'webpack';
import config from '../config/webpack';

gulp.task('webpack:production', callback => {
  webpack(config('production'), (err, stats) => {
    logger(err, stats);
    callback();
  });
});

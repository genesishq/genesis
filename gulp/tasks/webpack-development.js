import gulp from 'gulp';
import logger from '../lib/compileLogger';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import browserSync from 'browser-sync';
import config from '../config/webpack';

gulp.task('webpack:development', callback => {
  let built = false;

  const options = config('development');

  const compiler = webpack(options)
    .watch(200, (err, stats) => {
      // logger(err, stats);

      if (!built) {
        built = true;
        callback();
      }
    });

  // const server = new WebpackDevServer(webpack(options), options.devServer);

  // server.listen(8080, 'localhost', () => {});
});

import gulp from 'gulp';
import express from 'express';
import gutil from 'gulp-util';
import compress from 'compression';
import logger from 'morgan';
import open from 'open';
import spa from 'express-spa';
import url from 'url';
import proxy from 'proxy-middleware';
import config from '../config/server';

gulp.task('server', () => {
  const url = 'http://localhost:' + config.port;

  const app = express();

  app.use(compress());
  app.use(logger(config.logLevel));
  app.use(express.static(config.root));
  app.use(spa(config.root + '/index.html'));
  app.use('/assets', proxy(url.parse('http://localhost:8080/assets')));

  app.listen(config.port);

  gutil.log('production server started on ' + gutil.colors.green(url));

  open(url);
});

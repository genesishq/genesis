'use strict';

var gulp = require('gulp');
var express = require('express');
var gutil = require('gulp-util');
var compress = require('compression');
var logger = require('morgan');
var open = require('open');
var spa = require('express-spa');
var config = require('../config/server');

gulp.task('server', server);

function server() {
  var url = 'http://localhost:' + config.port;

  var app = express();

  app.use(compress());
  app.use(logger(config.logLevel));
  app.use(express.static(config.root));
  app.use(spa(config.root + '/index.html'));

  app.listen(config.port);

  gutil.log('production server started on ' + gutil.colors.green(url));

  open(url);
}

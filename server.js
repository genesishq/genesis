var express = require('express');
var compress = require('compression');
var logger = require('morgan');
var spa = require('express-spa');

var port = process.env.PORT || 3000;
var logLevel = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';
var publicPath = process.cwd() + '/public';

var app = express();

app.use(compress());
app.use(logger(logLevel));
app.use(spa(publicPath + '/index.html'));
app.use(express.static(publicPath));

app.listen(port, function () {
  console.log('Server running on port ' + port);
});

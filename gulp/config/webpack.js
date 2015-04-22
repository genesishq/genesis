var config = require('./');
var webpack = require('webpack');
var webpackManifest = require('../lib/webpackManifest');

module.exports = function(env) {
  var jsSrc = config.sourceAssets + '/scripts/';
  var jsDest = config.publicAssets + '/scripts/';
  var publicPath = 'assets/scripts/';

  var webpackConfig = {
    resolve: {
      extensions: ['', '.js', '.jsx']
    },

    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /(node_modules|bower_components)/
        }
      ]
    },

    plugins: []
  };

  if (env !== 'test') {
    webpackConfig.entry = {
      app: [jsSrc + 'index.js']
    };

    webpackConfig.output = {
      path: jsDest,
      filename: env === 'production' ? '[name]-[hash].js' : '[name].js',
      publicPath: publicPath
    };

    // // Factor out common dependencies into a shared.js
    // webpackConfig.plugins.push(
    //   new webpack.optimize.CommonsChunkPlugin({
    //     name: 'shared',
    //     filename: env === 'production' ? '[name]-[hash].js' : '[name].js',
    //   })
    // );
  }

  if (env === 'development') {
    webpackConfig.devtool = 'source-map';
    webpack.debug = true;
  }

  if (env === 'production') {
    webpackConfig.plugins.push(
      new webpackManifest(publicPath, 'public'),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.NoErrorsPlugin()
    );
  }

  return webpackConfig;
};

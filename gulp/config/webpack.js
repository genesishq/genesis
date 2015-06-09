var config = require('./');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackManifest = require('../lib/webpackManifest');

module.exports = function(env) {
  var jsSrc = config.sourceAssets + '/scripts/';
  var jsDest = config.publicAssets + '/scripts/';
  var publicPath = 'assets/scripts/';

  var webpackConfig = {
    resolve: {
      extensions: ['', '.js', '.jsx', 'scss'],
      modulesDirectories: ['app', 'node_modules', 'bower_components']
    },

    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /(node_modules|bower_components)/
        },
        {
          test: /\.scss$/,
          loader:
            'style!' +
            'css!' +
            'postcss-loader!' +
            'sass?' +
            'outputStyle=expanded' +
            '&includePaths[]=' +
              (path.resolve(__dirname, '../../bower_components')) +
            '&includePaths[]=' +
              (path.resolve(__dirname, '../../node_modules'))

          // Write webpack specific styles to a css file.
          // loader: ExtractTextPlugin.extract(
          //   // 'style/url!' +
          //   // 'file!' +
          //   //   './assets/styles/[name]' +
          //   //     (env !== 'production' ? '-[hash].' : '.') +
          //   'css!' + // (env !== 'production' ? '?sourceMap!' : '!') +
          //   'postcss-loader!' +
          //   'sass?' + // (env !== 'production' ? '?sourceMap&' : '?') +
          //   'outputStyle=expanded' +
          //   '&includePaths[]=' +
          //     (path.resolve(__dirname, '../../bower_components')) +
          //   '&includePaths[]=' +
          //     (path.resolve(__dirname, '../../node_modules'))
          //  )
        }
      ]
    },
    postcss: [],
    plugins: []
  };

  if (env !== 'test') {
    webpackConfig.entry = {
      app: [jsSrc + '/index']
    };

    webpackConfig.output = {
      path: jsDest,
      filename: env === 'production' ? '[name]-[hash].js' : '[name].js',
      publicPath: publicPath
    };

    // Factor out common dependencies into a commons.js
    // webpackConfig.plugins.push(
    //   new webpack.optimize.CommonsChunkPlugin({
    //     name: 'common',
    //     filename: env === 'production' ? '[name]-[hash].js' : '[name].js',
    //     minChunks: Infinity
    //   })
    // );
  }

  if (env === 'development') {
    webpackConfig.devtool = 'source-map';
    webpack.debug = true;
    webpackConfig.postcss.push(
      require('autoprefixer-core')(config.autoprefixer) // Add vendor prefixes.
    );
    // Write webpack specific styles to a css file.
    // webpackConfig.plugins.push(new ExtractTextPlugin('../styles/[name].css'));
  }

  if (env === 'production') {
    webpackConfig.postcss.push(
      require('css-mqpacker'), // Group media queries that are the same.
      require('autoprefixer-core')(config.autoprefixer), // Add vendor prefixes.
      require('csswring') // Minify css
    );

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
      // Write webpack specific styles to a css file.
      // new ExtractTextPlugin('../styles/[name]-[hash].css')
    );
  }

  return webpackConfig;
};

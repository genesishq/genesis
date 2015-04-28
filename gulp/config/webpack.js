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
      extensions: ['', '.js', '.jsx', 'scss']
    },

    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /(node_modules|bower_components)/
        },
        // {
        //   test: /\.css$/,
        //   // loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'postcss-loader'),
        //   loader: 'style-loader!css-loader!postcss-loader',
        //   exclude: /(node_modules|bower_components)/
        // },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract(
              // activate source maps via loader query
              'css-loader?sourceMap!' +
              'sass-loader?sourceMap&outputStyle=expanded&' +
              'includePaths[]=' +
                (path.resolve(__dirname, './bower_components')) + '&' +
              'includePaths[]=' +
                (path.resolve(__dirname, './node_modules'))
          )
        }
      ]
    },

    // postcss: [
    //   require('postcss-import'), // Resolve imports.
    //   require('postcss-mixins')({ // Transform mixins (must be done before vars and nested).
    //     // mixins: require('postcss-neat')() // Add grid mixins.
    //   }),
    //   require('postcss-simple-vars'), // Transform vars (must be done before nested).
    //   require('postcss-color-function'), // Transform color functions.
    //   require('postcss-simple-extend'), // Transform placeholders.
    //   require('postcss-media-minmax'), // Transform media queries.
    //   require('postcss-nested'), // Transform nested selectors.
    //   require('css-mqpacker'), // Group media queries that are the same.
    //   require('autoprefixer-core')(config.autoprefixer) // Add vendor prefixes.
    // ],

    plugins: []
  };

  if (env !== 'test') {
    webpackConfig.entry = {
      // app: [config.sourceAssets + '/']
      app: [config.sourceAssets + '/scripts/index']
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
    webpackConfig.plugins.push(new ExtractTextPlugin('../styles/[name].css'));
  }

  if (env === 'production') {
    // webpackConfig.postcss.push(require('csswring'));

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
      // new ExtractTextPlugin('../styles/[name]-[hash].css')
    );
  }

  return webpackConfig;
};

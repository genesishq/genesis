import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpackManifest from '../lib/webpackManifest';
import config from './';

import autoprefixerCore from 'autoprefixer-core';
import cssMqpacker from 'css-mqpacker';
import csswring from 'csswring';

export default function(env) {
  const jsSrc = config.sourceAssets + '/scripts/';
  const jsDest = config.publicAssets + '/scripts/';
  const publicPath = 'assets/scripts/';

  const webpackConfig = {
    resolve: {
      extensions: ['', '.js', '.jsx', '.json', 'scss'],
      modulesDirectories: ['app/assets/styles', 'node_modules', 'bower_components']
    },

    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
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
              path.resolve(
                __dirname,
                '../../bower_components',
                '../../node_modules',
                '../../app/assets/styles'
              )
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
      autoprefixerCore(config.autoprefixer) // Add vendor prefixes.
    );
  }

  if (env === 'production') {
    webpackConfig.postcss.push(
      cssMqpacker, // Group media queries that are the same.
      autoprefixerCore(config.autoprefixer), // Add vendor prefixes.
      csswring // Minify css
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
    );
  }

  return webpackConfig;
};

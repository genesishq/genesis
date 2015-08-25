import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackManifest from '../lib/webpackManifest';
import config from './';

import autoprefixerCore from 'autoprefixer-core';
import cssMqpacker from 'css-mqpacker';
import csswring from 'csswring';

export default function(env) {
  const jsSrc = config.sourceAssets + '/scripts/';
  const jsDest = config.publicAssets + '/scripts/';
  const publicPath = 'assets/scripts/';

  const context = path.resolve(__dirname, '../../');

  const webpackConfig = {
    context: context,
    debug: (env == 'development'),
		devtool: (env == 'development') ? 'source-map' : undefined,

    resolve: {
      extensions: ['', '.js', '.jsx', '.json', 'scss'],
      modulesDirectories: ['app/assets/styles', 'node_modules', 'bower_components']
    },

    module: {
      loaders: [
        {
          test: /\.(htaccess|ico|txt)$/,
					loaders: [
						'file?name=[name].[ext]'
					],
					include: path.resolve(context, 'app')
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.jsx?$/,
          loaders: env === 'development' ? ['react-hot-loader', 'babel-loader'] : ['babel-loader'],
          exclude: /(node_modules)/
        },
        {
          test: 'png|jpg|jpeg|gif|svg',
          loader: 'url-loader?limit=10000'
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
                context,
                'node_modules',
                'app/assets/styles'
              )
        }
      ]
    },

    postcss: [],
    plugins: []
  };

  if (env !== 'test') {
    webpackConfig.entry = {
      app: jsSrc + '/index'
    };

    webpackConfig.output = {
      path: jsDest,
      filename: env === 'production' ? '[name]-[hash].js' : '[name].js',
      publicPath: publicPath
    };

    webpackConfig.htmlWebpackPlugin = {
      files: {
        favicon: [config.sourceDirectory + '/favicon.ico'],
        css: [config.publicAssets + '/styles/app.css'],
        js: [config.publicAssets + '/scripts/app.js'],
        chunks: {
          head: {
            css: ['app.css']
          },
          main: {
            entry: 'assets/scripts/app.js',
            css: []
          }
        }
      }
    };

    webpackConfig.plugins.push(new HtmlWebpackPlugin());
  }

  if (env === 'development') {
    webpackConfig.postcss.push(
      autoprefixerCore(config.autoprefixer)
    );
    webpackConfig.devServer = {
			host: 'localhost',
			port: 8080,
			publicPath: '/assets',
			contentBase: path.resolve(context, publicPath),
      historyApiFallback: true,
			hot: true
		};
  }

  if (env === 'production') {
    webpackConfig.postcss.push(
      cssMqpacker,
      autoprefixerCore(config.autoprefixer),
      csswring
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

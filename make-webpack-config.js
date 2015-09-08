var path = require('path');
var webpack = require('webpack');
var objectAssign = require('object-assign');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var IndexHtmlPlugin = require('indexhtml-webpack-plugin');

module.exports = function(options) {
  var cssOutputName = null;
  var cssExtractPlugin = null;

  if (options.env === 'production') {
    cssOutputName = 'assets/styles/app-[contenthash].css';
    cssExtractPlugin = new ExtractTextPlugin(cssOutputName);
  }

  var config = {
    resolve: {
      extensions: ['', '.js', '.jsx', '.json', 'scss'],
      modulesDirectories: ['node_modules']
    },

    module: {
      loaders: [
        {
          test: options.env === 'production' ? /index\.prod\.html$/ : /index\.html$/,
          loader: options.env === 'production' ? 'html?root=.&attrs=link:href img:src' : 'file?name=[name].[ext]'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /(node_modules)/
        },
        {
          test: /\.jsx$/,
          loaders: options.env === 'production' ? ['babel'] : ['react-hot', 'babel'],
          exclude: /(node_modules)/
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          loader: 'file?name=[path][name]' + (options.env === 'production' ? '-[hash]' : '') + '.[ext]&limit=10000'
        },
        {
          test: /\.scss$/,
          loader: options.env === 'production' ?
            cssExtractPlugin.extract(
              'style',
              'css!' +
              'postcss!' +
              'sass' +
              '?outputStyle=expanded' +
              '&includePaths[]=' +
                encodeURIComponent(path.resolve(__dirname, 'node_modules')) +
              '&includePaths[]=' +
                encodeURIComponent(path.resolve(__dirname, 'app', 'assets', 'styles'))
            ) :
            'style!' +
            'css!' +
            'postcss!' +
            'sass' +
            '?outputStyle=expanded' +
            '&includePaths[]=' +
              encodeURIComponent(path.resolve(__dirname, 'node_modules')) +
            '&includePaths[]=' +
              encodeURIComponent(path.resolve(__dirname, 'app', 'assets', 'styles'))
        }
      ]
    }
  }

  if (options.env !== 'test') {
    objectAssign(config, {
      context: path.resolve(__dirname, 'app'),

      debug: options.env === 'production',
      devtool: options.devtool,

      entry: options.env === 'production' ? {
        'tmp/index.html': path.resolve(__dirname, 'app', 'index.prod.html'),
        'assets/scripts/app': path.resolve(__dirname, 'app', 'assets', 'scripts', 'index.js')
      } : {
        'html': path.resolve(__dirname, 'app', 'index.html'),
        'assets/scripts/app': path.resolve(__dirname, 'app', 'entry.dev.js')
      },

      output: {
        path: path.resolve(__dirname, 'public'),
        filename: options.env === 'production' ? '[name]-[chunkhash].js' : '[name].js',
        publicPath: '/'
      },

      postcss: [
        require('autoprefixer')({
          browsers: ['last 2 version']
        })
      ].concat(options.env === 'production' ? [
        require('css-mqpacker')(),
        require('csswring')({removeAllComments: true})
      ] : []),

      plugins: options.env === 'production' ? [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          output: {
            comments: false
          },
          compress: {
            warnings: false
          }
        }),
        cssExtractPlugin,
        new IndexHtmlPlugin('tmp/index.html', 'index.html')
      ] : [
        new webpack.NoErrorsPlugin()
      ],
    });
  }

  if (options.env === 'dev') {
    objectAssign(config, {
      devServer: {
        contentBase: path.resolve(__dirname, 'app'),
        publicPath: '/',
        port: 3000,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        colors: true
      }
    });
  }

  return config;
};

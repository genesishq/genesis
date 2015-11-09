var path = require('path')
var webpack = require('webpack')
var objectAssign = require('object-assign')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function (options) {
  var cssOutputName = null
  var cssExtractPlugin = null

  if (options.env === 'production') {
    cssOutputName = '[contenthash].css'
    cssExtractPlugin = new ExtractTextPlugin(cssOutputName)
  }

  var config = {
    resolve: {
      extensions: ['', '.js', '.jsx', '.json', 'scss'],
      modulesDirectories: ['node_modules'],
      alias: {
        'TweenLite': path.resolve(__dirname, 'node_modules', 'gsap', 'src', 'uncompressed', 'TweenLite.js'),
        'TimelineLite': path.resolve(__dirname, 'node_modules', 'gsap', 'src', 'uncompressed', 'TimelineLite.js'),
        'CSSPlugin': path.resolve(__dirname, 'node_modules', 'gsap', 'src', 'uncompressed', 'plugins', 'CSSPlugin.js'),
        'EasePack': path.resolve(__dirname, 'node_modules', 'gsap', 'src', 'uncompressed', 'easing', 'EasePack.js')
      }
    },

    module: {
      loaders: [
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
          test: /\.svg$/,
          loader: 'raw'
        },
        {
          test: /\.(png|jpg|jpeg|gif|mp4)$/,
          loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]&limit=10000'
        },
        {
          test: /\.scss$/,
          loader: options.env === 'production'
          ? cssExtractPlugin.extract(
              'style',
              'css!' +
              'postcss!' +
              'sass' +
              '?outputStyle=expanded' +
              '&includePaths[]=' +
                encodeURIComponent(path.resolve(__dirname, 'node_modules')) +
              '&includePaths[]=' +
                encodeURIComponent(path.resolve(__dirname, 'app', 'assets', 'styles'))
            )
          : 'style!' +
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
      debug: options.env === 'production',
      devtool: options.devtool,

      entry: [
        path.resolve(__dirname, 'app', 'entry.js')
      ],

      output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[hash].js'
      },

      postcss: [
        require('autoprefixer')({
          browsers: ['last 2 version']
        })
      ].concat(options.env === 'production' ? [
        require('csswring')({removeAllComments: true})
      ] : []),

      plugins: [
        new HtmlWebpackPlugin({
          inject: true,
          filename: 'index.html',
          template: path.resolve(__dirname, 'app', 'index.template.html'),
          favicon: path.resolve(__dirname, 'app', 'favicon.ico'),
          minify: {
            removeComments: true,
            collapseWhitespace: true
          }
        })
      ].concat(options.env === 'production' ? [
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
        cssExtractPlugin
      ] : [
        new webpack.NoErrorsPlugin()
      ])
    })
  }

  if (options.env === 'dev') {
    objectAssign(config, {
      devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/',
        port: 3000,
        proxy: {
          '/api/*': 'http://localhost:5000/'
        },
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        colors: true
      }
    })
  }

  return config
}

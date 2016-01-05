'use strict'

const path = require('path')
const webpack = require('webpack')
const objectAssign = require('object-assign')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const production = process.env.NODE_ENV === 'production'
const test = process.env.NODE_ENV === 'test'
const dev = !(production || test)

let cssOutputName = null
let cssExtractPlugin = null

if (production) {
  cssOutputName = '[contenthash].css'
  cssExtractPlugin = new ExtractTextPlugin(cssOutputName)
}

const config = {
  resolve: {
    root: [
      path.resolve(__dirname, 'app', 'scripts'),
      path.resolve(__dirname, 'app', 'styles')
    ],
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
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules)/
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]&limit=10000'
      },
      {
        test: /\.(png|jpg|jpeg|gif|mp4|webm)$/,
        loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]&limit=10000'
      },
      {
        test: /\.scss$/,
        loader: production
        ? cssExtractPlugin.extract('style', 'css!postcss!sass')
        : 'style!css!postcss!sass'
      }
    ]
  },

  sassLoader: {
    outputStyle: 'expanded',
    includePaths: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'app', 'styles')
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      'Promise': 'exports?global.Promise!es6-promise', // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
}

if (!test) {
  objectAssign(config, {
    debug: dev,
    devtool: dev ? 'cheap-module-eval-source-map' : undefined,

    entry: [].concat(dev
      ? [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client'
      ]
      : []
    ).concat([path.resolve(__dirname, 'app', 'entry.js')]),

    output: {
      path: path.resolve(__dirname, 'public'),
      publicPath: '/',
      filename: '[hash].js'
    },

    postcss: [
      require('autoprefixer')({browsers: ['last 2 version']})
    ].concat(production
      ? [require('csswring')({removeAllComments: true})]
      : []
    )
  })

  config.plugins.push(...[
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: path.resolve(__dirname, 'app', 'index.template.html'),
      favicon: path.resolve(__dirname, 'app', 'favicon.ico'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true
      }
    })
  ])

  config.plugins.push(...(production ? [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {comments: false},
      compress: {warnings: false}
    }),
    cssExtractPlugin
  ] : [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]))
}

module.exports = config

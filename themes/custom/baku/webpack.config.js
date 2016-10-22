(function() {

  'use strict';

  var Path = require('path');
  var Webpack = require('webpack');

  var plugins = [
    new Webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    }),
    new Webpack.optimize.DedupePlugin(),
    new Webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      mangle: true,
      sourceMap: false,
      compress: { warnings: false }
    }),
  ];

  module.exports = {
    devtool: 'source-map',
    entry: {
      'scripts': Path.resolve(__dirname, './js/index.js'),
      'scripts.min': Path.resolve(__dirname, './js/index.js')
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          query: { presets: ['es2015'] },
          exclude: /(node_modules|bower_components)/
        },
      ]
    },
    output: {
      path: Path.resolve(__dirname, './dist'),
      filename: "js/[name].js"
    },
    plugins: plugins
  };

})()

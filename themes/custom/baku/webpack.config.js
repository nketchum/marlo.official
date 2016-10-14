(function() {

  'use strict';

  var Path = require('path');
  var Webpack = require('webpack');

  module.exports = {
    entry: {
      'scripts': Path.resolve(__dirname, './js/index.js'),
      'scripts.min': Path.resolve(__dirname, './js/index.js')
    },
    output: {
      path: Path.resolve(__dirname, './dist'),
      filename: "js/[name].js"
    },
    devtool: 'source-map',
    plugins: [
      new Webpack.optimize.DedupePlugin(),
      new Webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery'
      }),
      new Webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        mangle: true,
        sourceMap: false,
        compress: { warnings: false }
      }),
    ]
  };

})()

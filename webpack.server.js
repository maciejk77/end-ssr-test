const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // inform webpack that is a bundle for NodeJS, not for the browser
  target: 'node',

  // the root file of the server app
  entry: './src/root.js',

  // where to put output file when generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  // not sure if it is doing what it is supposed to
  // a reduction in bundle size not noticed
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);

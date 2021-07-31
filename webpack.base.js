const path = require('path');

module.exports = {
  // use babel on every running file
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }],
          ],
        },
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name].[hash:6].[ext]',
      //     outputPath: 'assets',
      //     publicPath: 'assets',
      //     emitFile: true,
      //     esModule: false,
      //   },
      // },
    ],
  },
};

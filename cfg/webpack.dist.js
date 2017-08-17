const merge = require('webpack-merge');
const config = require('./webpack.disttpl');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(config, {
  output: {
    filename: 'scripts/index.js',
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/'
  },
  plugins:[
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '../src/images'),
        to: 'images'
      }
    ]),
  ]
});

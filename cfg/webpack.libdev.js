const merge = require('webpack-merge');
const webpack = require('webpack');
const config = require('./webpack.base');
const path = require('path');


const GLOBALS = {
  'process.env': {
    'NODE_ENV': JSON.stringify('development')
  },
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true'))
};

module.exports = merge(config, {
  output: {
    library: "mylib",
    libraryTarget: "umd",
    filename: 'scripts/index.js',
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/'
  },
  cache: true,
  devtool: 'cheap-module-eval-source-map',
  entry: {
    index: [
      'index'
    ],
    vendor: []
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(GLOBALS)
  ],
  module: {
    loaders:{
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
      }
    }
  }
});

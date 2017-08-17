const merge = require('webpack-merge');
const config = require('./webpack.devtpl');

module.exports = merge(config, {
  output: {
    library: "mylib",
    libraryTarget: "umd",
    filename: 'scripts/index.js',
    publicPath: '/'
  }
});

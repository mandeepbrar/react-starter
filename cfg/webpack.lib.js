const merge = require('webpack-merge');
const config = require('./webpack.disttpl');

module.exports = merge(config, {
  output: {
    library: "mylib",
    libraryTarget: "umd",
    filename: 'scripts/index.js',
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/'
  }
});

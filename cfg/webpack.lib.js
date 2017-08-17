const merge = require('webpack-merge');
const config = require('./webpack.disttpl');
const path = require('path');

module.exports = merge(config, {
  output: {
    library: "mylib",
    libraryTarget: "umd",
    filename: 'scripts/index.js',
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/'
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.tpl.html')
    })
  ]
});

var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/app/index.js'
  ],
  output: {
    path: __dirname + 'public',
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname + '/src/app'
      }
    ]
  }
}

const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    bundle: './src/index.js',
  },
  output: {
    path: path.join(__dirname, '../../../public/assets'),
    filename: '[name].js',
    publicPath: 'http://localhost:8080/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  devServer: {
    contentBase: '../../../public/assets',
  },
  // FIXME: to use jsdom in browser. What else can I do??
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  },
}

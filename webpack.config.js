var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    combat: './src/combat.ts',
    bk: './src/index.ts',
  },
  mode: 'development',
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'KoLmafia', 'scripts', 'bk'),
    filename: '[name].js',
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        // exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [],
  externals: {
    kolmafia: 'commonjs kolmafia',
    'canadv.ash': 'commonjs canadv.ash',
  },
};

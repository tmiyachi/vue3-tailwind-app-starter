/* eslint-env node */
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    open: true,
    // historyApiFallback: true,
    // static: [
    //   {
    //     directory: path.resolve(__dirname, 'src/static/'),
    //   },
    // ],
    // proxy: [
    //   {
    //   context: [],
    //   target: "",
    //   }
    // ],
  },
});

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { DefinePlugin } = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(sc|c|sa|)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              importLoaders: 2,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      // 削除したくないファイルは!で除外
      // cleanOnceBeforeBuildPatterns: [
      //   '**/*',
      //   '!static-files*',
      //   '!directoryToExclude/**',
      // ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Application Name',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new DefinePlugin({
      __VUE_OPTIONS_API__: true, // composition API のみで記述する場合はfalse
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
};

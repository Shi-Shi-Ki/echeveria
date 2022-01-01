const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const enviroment = process.env.NODE_ENV || 'dev';

module.exports = {
  entry: path.join(__dirname, 'src/main.ts'),
  // falseにしないとwebpack内ではNODE_ENVに"development"という値が設定される
  optimization: {
    nodeEnv: false
  },
  // importで拡張子を書く手間を省くための設定
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@logger': path.resolve(__dirname, 'libs/logger/src'),
    },
  },
  plugins: [
    // CopyWebpackPluginでprotoをdistにコピーしている
    // fromは対象ディレクトリの内容をtoに記載したディレクトリに配置する
    new CopyWebpackPlugin({
      patterns: [
        {from: './proto', to: 'proto'},
      ],
    }),
    new Dotenv({
      path: path.resolve(__dirname, `.env.${enviroment}`)
    }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },
};

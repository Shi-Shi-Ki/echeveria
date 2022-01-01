const path = require('path');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.js');

module.exports = function(options, webpack) {
  return {
    ...common,
    mode: 'development',
    // トランスパイル前後のマッピングをしてデバッグしやすくするためのオプション
    devtool: 'source-map',
    entry: ['webpack/hot/poll?100', './src/main.ts'],
    watch: true,
    target: 'node',
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
      }),
    ],
    plugins: [
      // HotLoadのための設定
      new webpack.HotModuleReplacementPlugin(),
      // jsとd.tsは変更時の検知対象外としている
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/]
      }),
    ],
    module: {
      rules: [
        {
          // tsxの場合はTypeScriptとしてコンパイルする
          test: /.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
  };
};

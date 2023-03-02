const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, 'src/assets/'),
    //       to: path.resolve(__dirname, 'dist/assets'),
    //     },
    //   ],
    // }),
  ],
});

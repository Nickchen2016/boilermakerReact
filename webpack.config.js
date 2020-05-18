const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './client/app.js'], // assumes your entry point is the index.js in the root of your project folder
    // entry: './client/app.js',   
    mode: 'development',
    output: {
      path: path.resolve(__dirname, 'public'), // assumes your bundle.js will also be in the root of your project folder
      filename: 'bundle.js',
      publicPath:  '/',
    },
    devtool: 'source-maps',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [
       new webpack.HotModuleReplacementPlugin(), // 启动HMR
       new webpack.NoEmitOnErrorsPlugin(), // 在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段。这样可以确保输出资源不会包含错误。 
    ]
  }
var webpack = require('webpack');//引入Webpack模块供我们调用，这里只能使用ES5语法，使用ES6语法会报错
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: ['webpack/hot/dev-server', __dirname + '/app/main.js'],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  module: {
    loaders:  [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=[path]/[name].[ext]'
      }
    ]
  },

  resolve: {
    alias: {
      "ag-grid-root" : "../node_modules/ag-grid"
    },
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),//热模块替换插件
    new HtmlWebpackPlugin({
      template: 'build/index.html'
    })
  ],

  devServer: {
    contentBase: './build',
    colors: true,
    historyApiFallback: true,
    inline: true,
    port: 8088,
    process: true
  }
};

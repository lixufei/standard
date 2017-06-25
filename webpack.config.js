var webpack = require('webpack');

module.exports = {
  entry: ['webpack/hot/dev-server', __dirname + '/app/main.js'],
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()//热模块替换插件
  ],
  devServer: {
    proxy: {
      "/api": "http://localhost:8088"
    },
    contentBase: './build',
    filename: "bundle.js",
    historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    inline: true,
    port: 8088,//设置默认监听端口，如果省略，默认为"8080"
    hot: true,
    noInfo: true,
  }
};

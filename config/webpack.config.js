
module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env'],
          plugins: ['istanbul'] // 解决babel编译导致代码覆盖率不全的问题
        }
      }
    ]
  },
  devtool: 'inline-source-map'
}
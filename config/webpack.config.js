
module.exports = {
  // rules: [
  //   {
  //     test: /\.js$/,
  //     exclude: [
  //       path.resolve(__dirname, 'node_modules')
  //     ],
  //     loader: 'babel-loader',
  //     options: {
  //       presets: ['env']
  //     }
  //   }
  // ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env'],
          plugins: ['istanbul']
        }
      }
    ],
    // instrument only testing sources with Istanbul
    // postLoaders: [{
    //   test: /\.js$/,
    //   exclude: /test\/|node_modules/,
    //   loaders: ['istanbul-instrumenter']
    // }]
  },
  devtool: 'inline-source-map'
  // target: 'node'
}
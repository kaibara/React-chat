const path = require('path')
module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path.join(__dirname, 'public')
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  modules: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader'
        options: {
          presets: ['es2015','react']
        }
      }
    ]
  }
}
var path = require('path')
/*
 *  http://www.pro-react.com/materials/appendixA/
 */
module.exports ={
  devtool: 'eval-source-map',

  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  resolve: {
    root: [path.join(__dirname, 'src'), __dirname],
    extensions: ["", ".webpack.js", ".web.js", ".js", '.jsx']
  },

  devServer: {
    contentBase: './build',
    color: true,
    historyApiFallback: true,
    inline: true
  }
}
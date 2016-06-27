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
          presets: ['es2015', 'react', 'stage-0']
        },
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  },

  resolve: {
    root: [path.join(__dirname, 'src'), __dirname],
    extensions: ["", ".webpack.js", ".web.js", ".js", '.jsx', '.es6']
  },

  devServer: {
    contentBase: './build',
    color: true,
    historyApiFallback: true,
    inline: true
  }
}

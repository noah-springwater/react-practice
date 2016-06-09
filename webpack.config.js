//when webpack runs, it's going to take the index.js file and run it through the loader below:
//{test: /\.js$/, exclude: /node_modules/, loaders: "babel-loader"}
//which converts all jsx into js and it's going to output it into the folder dist
//under the file name index_bundle.js
//then plugins is going to run and take index.html file and inject it into /dist folder
//so that it can reference index_bundle.js

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"} //run transformation in all js files, but dont run for node modules folder, and then the transformation is going to be made using babel-loader. Babel takes jsx and compiles it into regular js
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}

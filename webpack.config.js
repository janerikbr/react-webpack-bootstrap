module.exports = {
  entry: "./browser/main",
  output: {
    path: __dirname + "/static",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
};

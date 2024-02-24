const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./Index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "server.js",
  },
  target: "node",
  module: {
    rules: [
      {
        test: /.js/,
        use: "babel-loader",
      },
    ],
  },
  externals: [nodeExternals()],
};

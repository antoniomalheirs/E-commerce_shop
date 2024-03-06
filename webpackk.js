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
        test: /\.(js|jsx)$/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
            },
          },
        ],
      },
    ],
  },
  mode: 'production',
  externals: [nodeExternals()],
};
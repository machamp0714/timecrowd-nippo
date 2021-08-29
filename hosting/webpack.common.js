const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },

  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./main.css",
    }),
  ],
};
